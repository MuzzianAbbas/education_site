import React, { Component } from 'react';
import './hero.css';
import Back_arrow from './asssets/dark-arrow.png'

class Hero extends Component {
    state = {  } 
    render() { 
        return (
            <div className='hero-div container'>
                <div className="hero-text">
                    <h1>We Ensure Better Education,<br /> For Better World</h1>
                    <p>Our cutting-edge curriculam is designed to empower students with the knowldge, skills and experience needed to excel in the dynamic field of Education</p>
                    <button className='btn'>Explore more <img src={Back_arrow} alt="" /></button>
                </div>

            </div>
        );
    }
}
 
export default Hero;