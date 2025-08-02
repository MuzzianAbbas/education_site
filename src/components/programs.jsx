import React, { Component } from 'react';
import program1 from './asssets/program-1.png'
import program2 from './asssets/program-2.png'
import program3 from './asssets/program-3.png'
import './programs.css'
import icon1 from './asssets/program-icon-1.png'
import icon2 from './asssets/program-icon-2.png'
import icon3 from './asssets/program-icon-3.png'

class Programms extends Component {
    state = {  } 
    render() { 
        return (
            <div className="programs">
                <div className="program">
                    <img src={program1} alt="" />
                    <div className="caption">
                        <img src={icon1} alt="" />
                        <p>Graduation Degree</p>
                    </div>
                </div>

                <div className="program">
                    <img src={program2} alt="" />
                    <div className="caption">
                        <img src={icon2} alt="" />
                        <p>Masters Degree</p>
                    </div>
                </div>

                <div className="program">
                    <img src={program3} alt="" />
                    <div className="caption">
                        <img src={icon3} alt="" />
                        <p>Doctrate Degree</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Programms;