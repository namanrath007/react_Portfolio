import React from 'react'
import './intro.css';
import bg from '../../assets/profile1.png';
import btnImg from '../../assets/hireme.png';
import { Link } from 'react-scroll';


const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">I am  <span className="introName">Naman</span><br />Web Developer</span>
            <p className="introPara">I am Btech student in Information Technology and a skilled web developer. <br /> Currently I am focusing on analytics , space-science and cloud computing.</p>
            <Link><button className="btn"><img src={btnImg} alt="btn" className="btnImg" />Hire me</button></Link>
        </div>
        <img src={bg} alt="profile" className="bg" />
    </section>
  );
}

export default Intro;
