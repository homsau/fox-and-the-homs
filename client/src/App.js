import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import logo from './logo.svg';
import hdr_home from './images/hdr_home.jpg';
import about_us_banner from './images/about_us_banner.jpg';
import james_headshot from './images/james_headshot.jpg';
import becky_headshot from './images/becky_headshot.jpg';
// import evey from './images/evey.jpg';
import beach_feet from './images/beach_feet.jpg';
import gt_image from './images/gt_image.jpg';
import gt_graduation from './images/gt_graduation.jpg'; // bg pic
import gt_graduation_night from './images/gt_graduation_night.jpg'; // front pic
import first_app from './images/first_app.jpg'; //f ront pic
import amicalola from './images/amicalola.jpg'; // front pic
import lunar_eclipse from './images/lunar_eclipse.jpg'; // bg pic

import Hero from './components/Hero.js';
//import HorizontalSplit from './components/HorizontalSplit.js';
import Countdown from './components/Countdown.js';
import { Button, Card } from 'react-bootstrap';
import RSVP from './components/RSVP.js';
import './App.css';
import './App.scss';

class App extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     live: false
  //   }
  //   this.componentDidMount = this.renderSeparator.bind(this);
  //   this.render = this.renderSeparator.bind(this);
  // }

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = './Timeline.js';
    script.async = true;
    document.body.appendChild(script);
  }

  render() {
  return (
    <div className="App">
      <Hero id='home' className='home' backgroundImage={hdr_home} >
        <div>
          <h2>01 + 01 = 10</h2>
          <br />
          <h2>We're getting married!!!</h2>
        </div>
        <div>
          <AnchorLink className='arrow-container' href='#countdown'>
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>  
          </AnchorLink>
        </div>
      </Hero>

      <div id='countdown' className='hero-menu'>
        <div className='container-fluid countdown-container'>
          <Countdown />
        </div>

        <div>
          <div className='hero-row container-fluid d-flex py-4 justify-content-around'>
            <div>
              <AnchorLink href='#rsvp'><Button className='align-self-center'>RSVP</Button></AnchorLink>
            </div>
            <div>
              <AnchorLink href='#registry'><Button className='align-self-center'>Registry</Button></AnchorLink>
            </div>
          </div>

          {/* <div className='menu-row container-fluid d-flex py-4 justify-content-around'>
            <AnchorLink href='#about_us'><Button className='align-self-end'>Explore<br />v</Button></AnchorLink>
          </div> */}
        </div>
      </div>
      
      <img id='about_us' src={about_us_banner} alt="..."/>
      <div className='container-fluid about-us'>
        {/* <h2>About Us</h2> */}
        <div className='container-fluid d-flex py-4 justify-content-around align-items-center'>
          <div>
            <h2>About the Bride</h2>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={becky_headshot} />
              <Card.Body>
                <Card.Title>Rebecca Lynn Cunningham</Card.Title>
                <Card.Text>
                  <p>fiancee: &#123;</p>
                  <p>occupation: Web Developer;</p>
                  <p>age: 27;</p>
                  <p>birthday: June 10;</p>
                  <p>jokes: puns;</p>
                  <p>strength: love;</p>
                  <p>&#125;</p> 
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
          
          <div>
            <h2>About the Groom</h2>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={james_headshot} />
              <Card.Body>
                <Card.Title>James Powell Cowart</Card.Title>
                <Card.Text>
                  <p>fiance: &#123;</p>
                  <p>occupation: Web Developer;</p>
                  <p>age: 30;</p>
                  <p>birthday: January 21;</p>
                  <p>jokes: movie references;</p>
                  <p>strength: honesty;</p>
                  <p>&#125;</p>
                </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      <div className='container-fluid'>
        <h2>Our Fur Babies</h2>
        <div class="card mb-3">
          <img src={"..."} class="card-img-top" alt="..." />
          <div class="card-body">
            <div className="container-fluid d-flex justify-content-around">
              <div>
                <span>Evey</span>
                <p>nickname</p>
              </div>
              <div>
                <span>Simon</span>
                <p>nickname</p>
              </div>
              <div>
                <span>Oliver</span>
                <p>nickname</p>
              </div>
              <div>
                <span>Boots</span>
                <p>nickname</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid timeline'>
      <h2>Our Story</h2>
      <div className="timeline-container" id="timeline-1">
            <div className="timeline-header">
                <h2 className="timeline-header__title">James and Becks</h2>
                <h3 className="timeline-header__subtitle">NERDS</h3>
            </div>
            <div className="timeline">
                <div className="timeline-item" data-text="April 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." /> 
                      <img className="timeline__img" src={gt_image} alt="..." /> 
                        <h3 className="timeline__content-title">The Day We Met</h3>
                        <p className="timeline__content-desc"><strong>At Georgia Tech</strong></p>
                        <p className="timeline__content-desc">We were the last two people to leave the orientation for our coding class and left the building together.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="July 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={beach_feet} alt="..." />
                      <img className="timeline__img" src={first_app} alt="..." />
                        <h3 className="timeline__content-title">Made Our First App Together</h3>
                        <p className="timeline__content-desc">State of the World!</p>

                        <p className="timeline__content-desc"><a href='https://github.com/homsau/State-of-the-World' target="_blank" rel="noopener noreferrer">GitHub</a></p>

                        <p className="timeline__content-desc"><a href='https://homsau.github.io/State-of-the-World/' target="_blank" rel="noopener noreferrer">App</a></p>
                    </div>
                </div>
                <div className="timeline-item" data-text="October 27, 2018">
                    <div className="timeline__content">
                      <img className="timeline__img" src={gt_graduation} alt="..." />
                      <img className="timeline__img" src={gt_graduation_night} alt="..." />
                        <h3 className="timeline__content-title">Graduated as Web Developers</h3>
                        <p className="timeline__content-desc"><strong>At Georgia Tech</strong></p>
                        <p className="timeline__content-desc">We crushed it.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="January 21,2019">
                    <div className="timeline__content">
                      <img className="timeline__img" src={lunar_eclipse} alt="..." />
                      <img className="timeline__img" src={amicalola} alt="..." />
                        <h3 className="timeline__content-title">Birthday / First Hike and Vacation</h3>
                        <p className="timeline__content-desc">Amicalola Falls, Super Blood Moon w/ Lunar Eclipse</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="demo-footer"><a href="http://www.turkishnews.com/Ataturk/life.htm" target="_blank" rel="noopener noreferrer">Source/Kaynak</a></div>
    </div>

    <div id='registry' className='container-fluid registry'>
      <h2>Registry</h2>
      <div className='container-fluid d-flex py-4 justify-content-around align-items-center'>
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </div>
          
          <div>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
            </Card>
          </div>
        </div>
    </div>

    <div id='rsvp' className='container-fluid rsvp'>
      <h2>RSVP</h2>
      <RSVP />

    </div>

    <div className='container-fluid favorites'>
      <h2>Our Faves</h2>

    </div>

  </div>

  );
  }
}

export default App;
