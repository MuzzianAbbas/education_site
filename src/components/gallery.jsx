import React, { Component } from 'react';
import './gallery.css';
import photo1 from './asssets/gallery-1.jpg'
import photo2 from './asssets/gallery-2.jpg'
import photo3 from './asssets/gallery-3.jpg'
import photo4 from './asssets/gallery-4.jpg'
import whitearrow from './asssets/white-arrow.png'


class Gallery extends Component {
    state = {  } 
    render() { 
        return (
            <div className="campus">
                <div className="gallery">
                    <img src={photo1} alt="" />
                    <img src={photo2} alt="" />
                    <img src={photo3} alt="" />
                    <img src={photo4} alt="" />
                </div>
                <button className='btn dark-btn'> See more images <img src={whitearrow} alt="" /></button>
            </div>
        );
    }
}
 
export default Gallery;