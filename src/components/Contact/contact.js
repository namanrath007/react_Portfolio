import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';




const Contact = () => {
  return (   
      <section id="contactPage">
        <div id="clients">
            <h1 className="clientPageTitle">My Viewers</h1>
            <p className="clientDesc">We pour our creativity, expertise, and countless hours into crafting the websites and applications that you use every day. Our goal is to make your online experience as seamless and enjoyable as possible.</p>
            <div className="clientImgs">
                <img src={Walmart} alt="" className="clientImg" />
                <img src={Adobe} alt="" className="clientImg" />
                <img src={Microsoft} alt="" className="clientImg" />
                <img src={Facebook} alt="" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">Please fill the details below to contact me and to work with me.</span>
            <form className="contactForm">
                <input type="text" className="name" placeholder="Your Name" />
                <input type="phonenumber" className="number" placeholder="Your Number" />
                <input type="email" className="email" placeholder="Your Email" />
                <textarea className="msg" name="message" cols="30" rows="5" placeholder='Your Message'></textarea>
                <button type="submit" value="Send" className="submitBtn">Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="" className='link' />
                    <img src={TwitterIcon} alt="" className='link' />
                    <img src={YoutubeIcon} alt="" className='link' />
                    <img src={InstagramIcon} alt="" className='link' />
                </div>
            </form>
        </div>
      </section>
  )
}

export default Contact;
