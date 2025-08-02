import React, { Component } from 'react';
import './titles.css'

class Titles extends Component {
    state = {  } 
    render() { 
        const { subTitle, title } = this.props;
        return (
            <div className='the-title'>
                <p>{title}</p>
                <h2>{subTitle}</h2>
                
            </div>
            
        );
    }
}
 
export default Titles;