import React, { Component } from 'react';
import './navbar.css';
import logo from './asssets/logo.png' ;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { sticky: false };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    this.setState({ sticky: window.scrollY > 50 });
  };

  render() {
    return (
      <nav className={`container ${this.state.sticky ? 'dark-nav' : ''}`}>
        <img src={logo} alt="logo here" className="logo" />
        <ul>
          <li>Home</li>
          <li>Program</li>
          <li>About us</li>
          <li>Campus</li>
          <li>Testimonials</li>
          <li><button className="btn">Contact us</button></li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
