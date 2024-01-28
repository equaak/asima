import './Help.css'
import send from './send.svg'
import home from './home.svg'
import notes from './notes.svg'
import chatBot from './chat-bot.svg'
import userIcon from './user-icon.svg'
import sheild from './sheild.svg'
import profile from './profile.svg'
import sendActive from './send-active.svg'
import { useState } from 'react'

const Help = () => {
    const [active, setActive] = useState(false)

    const handleClick = () => {
        setActive(true)
    }

    return(
        <main>
            <div className='wrapper'>
                <header>
                    <img src={userIcon} alt=''/>
                    <p className='user-title'>Асима</p>
                </header>
                <main className='chat-container'>

                    <div className={active ? 'send-message active' : 'send-message unactive'} onClick={handleClick}>
                        <input type='text' />
                        <img src={send} alt='' />
                    </div>
                </main>
                <footer>
                    <div className='footer-part'>
                        <img src={home} alt=''/>
                        <p className='footer-title'>Главная</p>
                    </div>
                    <div className='footer-part'>
                        <img src={notes} alt=''/>
                        <p className='footer-title'>Мои полисы</p>
                    </div>
                    <div className='footer-part'>
                        <img src={chatBot} alt=''/>
                        <p className='footer-title'>Чат-бот</p>
                    </div>
                    <div className='footer-part'>
                        <img src={sheild} alt=''/>
                        <p className='footer-title'>Страховой случай</p>
                    </div>
                    <div className='footer-part'>
                        <img src={profile} alt=''/>
                        <p className='footer-title'>Профиль</p>
                    </div>
                </footer>
            </div>
        </main>
    )
}

export default Help;