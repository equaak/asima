import "./Help.css";
import send from "./send.svg";
import home from "./home.svg";
import notes from "./notes.svg";
import chatBot from "./chat-bot.svg";
import userIcon from "./user-icon.svg";
import sheild from "./sheild.svg";
import profile from "./profile.svg";
import sendActive from "./send-active.svg";
import { useState } from "react";
import axios from "axios";

const Help = () => {
  const [active, setActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const handleClick = () => {
    setActive(true);
  };

  const handleUnActive = () => {
    setActive(false);
  };

  const handleSend = async () => {
    if (message !== "") {
      setMessages((prevMessages) => [...prevMessages, [message, false]]);

      handleResponse();
      setMessage("");
    }
  };

  const handleResponse = async () => {
    const response = await axios.post("http://192.168.0.106:5000/openai", {
      text: message,
    });
    setMessages((prevMessages) => [...prevMessages, [response.data, true]]);
  };

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <main>
      <div className="wrapper">
        <header onClick={handleUnActive}>
          <img src={userIcon} alt="" />
          <p className="user-title">Асима</p>
        </header>
        <main className="chat-container" onClick={handleUnActive}>
          <div className="chat">
            {messages.map((item, i) => {
              if (item[1] === true) {
                return (
                  <div className="major-content asima">
                    <div className="message-container asima">
                      <p className="message-sender">Асима</p>
                      <div className="message asima">
                        <p className="message-label">{item}</p>
                      </div>
                    </div>
                  </div>
                );
              } else {
                return (
                  <div className="major-content own">
                    <div className="message-container own">
                      <p className="message-sender">Вы</p>
                      <div className="message own">
                        <p className="message-label">{item}</p>
                      </div>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div
            className={active ? "send-message active" : "send-message unactive"}
            onClick={handleClick}
          >
            <input type="text" value={message} onChange={handleChange} />
            <img src={active ? sendActive : send} alt="" onClick={handleSend} />
          </div>
        </main>
        <footer>
          <div className="footer-part">
            <img src={home} alt="" />
            <p className="footer-title">Главная</p>
          </div>
          <div className="footer-part">
            <img src={notes} alt="" />
            <p className="footer-title">Мои полисы</p>
          </div>
          <div className="footer-part">
            <img src={chatBot} alt="" />
            <p className="footer-title">Чат-бот</p>
          </div>
          <div className="footer-part">
            <img src={sheild} alt="" />
            <p className="footer-title">Страховой случай</p>
          </div>
          <div className="footer-part">
            <img src={profile} alt="" />
            <p className="footer-title">Профиль</p>
          </div>
        </footer>
      </div>
    </main>
  );
};

export default Help;
