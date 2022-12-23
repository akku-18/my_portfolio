import "./Contact.scss";
import { useState } from "react";


export default function Contact() {

  const [message, setMessage] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true)
  }

  return (
    <div className='contact' id="contact">
      <div className="left">
        <img src="assets/final.jpeg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea name="" placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks I'll reply ASAP :) </span>}
        </form>
        <div className="links">
          <a href="https://www.linkedin.com/in/akshansh-garg-580080200/" target="_blank">
            <img src="assets/linkedin_b.png" alt="" />
          </a>
          <a href="https://www.instagram.com/garg__akshansh/" target="_blank">
            <img src="assets/insta_b.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}
