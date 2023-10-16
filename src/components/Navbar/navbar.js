import React from 'react'
import './navbar.css'
import logo1 from '../../assets/logo1.png';
import contactImg from '../../assets/contact.png';
import { Link } from 'react-scroll';


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={logo1} alt ="logo"  className='logo' />
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} onDurationChange={500} className="dektopMenuListItem">Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-60} onDurationChange={500} className="dektopMenuListItem">About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-60} onDurationChange={500} className="dektopMenuListItem">Portfolio</Link>
            <Link activeClass='active' to='clients' spy={true} smooth={true} offset={-60} onDurationChange={500} className="dektopMenuListItem">Clients</Link>
        </div>
        <button className="desktopMenuBtn" onClick={()=>{
            document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me</button> 
    </nav>
  )
}

export default Navbar
