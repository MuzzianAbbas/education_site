import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Programms from './components/programs';
import Titles from './components/titles';
import About from './components/about';
import Gallery from './components/gallery';
import Testimons from './components/testimonials';
import Contact from './components/contact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Hero/>
    <div className='container'>
      <Titles subTitle='What we offer' title='Our Programs' />
      <Programms/>
      <About/>
      <Titles subTitle='Our campus photos' title='GALLERY'/>
      <Gallery/>
      <Titles subTitle="What Students Say" title="TESTIMONIALS"/>
      <Testimons/>
      <Titles subTitle='Get in touch' title='contact us'/>
      <Contact/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
