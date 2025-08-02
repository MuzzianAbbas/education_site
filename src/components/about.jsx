import React, { Component } from 'react';
import './about.css';
import about_img from './asssets/about.jpg'
import play from './asssets/play-icon.png'
class About extends Component {
    state = {  } 
    render() { 
        return (
            <div className='about'>
                <div className="about-left">
                    <img src={about_img} alt="" className='ab-img'/>
                    <img src={play} alt=""  className='play'/>
                </div>
                <div className="about-right">
                    <h3>ABOUT UNIVERSITY</h3>
                    <h2>Nuturing Tomorrows's Leaders Today</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere aspernatur necessitatibus omnis sit asperiores ullam incidunt! Aliquid, tempora. Non, saepe! Explicabo iusto adipisci ducimus nesciunt inventore nulla necessitatibus. Non, doloribus!</p>
                    
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quia accusantium expedita voluptatem animi inventore rerum numquam, asperiores sint iure optio culpa assumenda aut esse beatae consectetur? Est, quia saepe!</p>
                </div>
            </div>
        );
    }
}
 
export default About;