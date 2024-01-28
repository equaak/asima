from openai import OpenAI
import json

import pyttsx3
import speech_recognition as sr

import openai
api_key = "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"
openai.api_key = api_key



tts = pyttsx3.init()
rate = tts.getProperty('rate')
tts.setProperty('rate', rate-20)
volume = tts.getProperty('volume')
tts.setProperty('volume', volume+0.9)
voices = tts.getProperty('voices')
tts.setProperty('voice', 'ru')
for voice in voices:
    if voice.name == 'Anna':
        tts.setProperty('voice', voice.id)

def record_volume():
    r = sr.Recognizer()
    with sr.Microphone(device_index = 1) as source:
        print('Настраиваюсь.')
        r.adjust_for_ambient_noise(source, duration=1) 
        print('Слушаю...')
        audio = r.listen(source)
    print('Услышала.')
    try:
        query = r.recognize_google(audio, language = 'ru-RU')
        text = query.lower()
        print(f'Вы сказали: {query.lower()}')
        textMessage( text )
    except:
        print('Ошибка распознавания.')

def textMessage( text ):
    prompt = text
    completion = openai.chat.completions.create(
        model="gpt-3.5-turbo",
        messages=[
            {
            "role": "user",
            "content": prompt,
            },
        ],
    )
    response = completion.choices[0].message.content
    print(response)
    if response is not None:
        print("Выполняю...")
        tts.say( response )
        tts.runAndWait()
    else:
        tts.say( 'Простите. Я Вас не совсем поняла.')
        tts.runAndWait()

while True:
    record_volume()