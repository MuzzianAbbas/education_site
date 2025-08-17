import React from 'react';
import './contact.css'
import mail_icon from './asssets/mail-icon.png'
import phone_icon from './asssets/phone-icon.png'
import location_icon from './asssets/location-icon.png'
import whitearrow from './asssets/white-arrow.png'

const Contact = () => {
    return(
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente hic exercitationem non vel consequatur, ut totam rem fuga aut fugiat dolorum iste temporibus voluptatibus, neque facilis maxime odit, minus eveniet.</p>
                <ul>
                    <li><img src={mail_icon} alt="" />Contact@muzzian.com</li>
                    <li><img src={phone_icon} alt="" />+92-302-0664122</li>
                    <li><img src={location_icon} alt="" />shahpur sadar, university of Sargodha <br />Sargodha, Pakistan</li>
                </ul>
            </div>

            <div className="contact-col">
                <form action="">
                    <label>Your Name</label>
                    <input type="text" name='name' placeholder='Enter Name' />
                    <label>Your Email</label>
                    <input type="text" name='email' placeholder='Enter Email address' />
                    <label >Your Message</label>
                    <textarea name="text_area" id="" rows='10'></textarea>
                    <button className='btn dark-btn'>Submit <img src={whitearrow} alt="" /></button>
                </form>
            </div>
        </div>
    )
}

 export  default Contact 