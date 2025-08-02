import React, { useRef } from 'react';
import './testimonials.css';
import next from './asssets/next-icon.png';
import back from './asssets/back-icon.png'; 
import user1 from './asssets/user-1.png';
import user2 from './asssets/user-2.png';
import user3 from './asssets/user-3.png';
import user4 from './asssets/user-4.png';



const Testimons =()=>{
    
    
        const slider = useRef();
        let tx=0;

        const slideForward=()=>{
            if(tx>-50){
                tx -= 25;
            }
            slider.current.style.transform=`translateX(${tx}%)`;
        }

        const slideBackward=()=>{
            if(tx<0){
                tx+=25;
            }
            slider.current.style.transform=`translateX(${tx}%)`;
        }


        return (
            <div className='testimonials'>
                <img src={next} alt="" className='next-btn' onClick={slideForward}/>
                <img src={back} alt="" className='back-btn' onClick={slideBackward}/>
                <div className="slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="userinfo">
                                    <img src={user1} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel autem repellendus consectetur quod tempora blanditiis sequi placeat recusandae, rerum nam repudiandae illum voluptatem nihil minus ullam ut maiores commodi!</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="userinfo">
                                    <img src={user2} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel autem repellendus consectetur quod tempora blanditiis sequi placeat recusandae, rerum nam repudiandae illum voluptatem nihil minus ullam ut maiores commodi!</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="userinfo">
                                    <img src={user3} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel autem repellendus consectetur quod tempora blanditiis sequi placeat recusandae, rerum nam repudiandae illum voluptatem nihil minus ullam ut maiores commodi!</p>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="userinfo">
                                    <img src={user4} alt="" />
                                    <div>
                                        <h3>William Jackson</h3>
                                        <span>Edusity, USA</span>
                                    </div>
                                </div>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis vel autem repellendus consectetur quod tempora blanditiis sequi placeat recusandae, rerum nam repudiandae illum voluptatem nihil minus ullam ut maiores commodi!</p>
                            </div>
                        </li>
                    </ul>
                </div> 

            </div>
        );
    }
 
export default Testimons;