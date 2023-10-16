import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do</span>
        <span className="skillDesc">I am a passionate and skilled web designer with experience.
        We create the user interfaces that people interact with daily. This involves designing layouts, ensuring responsive design, and making the site visually appealing and user-friendly.
        We work on the server-side, creating databases, server infrastructure, and handling data management. This ensures that websites run smoothly and securely.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI/UX design</h2>
                    <p>This is a demo text you can write your own context here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website design</h2>
                    <p>This is a demo text you can write your own context here</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App design</h2>
                    <p>This is a demo text you can write your own context here</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills;
