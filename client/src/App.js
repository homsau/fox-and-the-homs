import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
// import logo from './logo.svg';
import hdr_home from './images/hdr_home.jpg';
import hdr_james_becks from './images/hdr_james_becks.png';
import about_us_banner from './images/about_us_banner.jpg';
// OUR PICS
// import james_headshot from './images/james_headshot.jpg';
// import becky_headshot from './images/becky_headshot.jpg';
// FUR BABIES
import evey from './images/evey.jpg';
import beach_feet from './images/beach_feet.jpg';
import gt_image from './images/gt_image.jpg';
import gt_graduation from './images/gt_graduation.jpg'; // bg pic
import gt_graduation_night from './images/gt_graduation_night.jpg'; // front pic
import first_app from './images/first_app.jpg'; //f ront pic
import amicalola from './images/amicalola.jpg'; // front pic
import lunar_eclipse from './images/lunar_eclipse.jpg'; // bg pic
import amazon from './images/amazon.png';
import bed_bath_beyond from './images/bed_bath_beyond.png';
import lowes from './images/lowes.png';
import williams_sonoma from './images/williams_sonoma.png';

import Hero from './components/Hero.js';
//import HorizontalSplit from './components/HorizontalSplit.js';
import Countdown from './components/Countdown.js';
import CardFlip from './components/CardFlip.js';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import VerticallyCenteredModal from './components/VerticallyCenteredModal.js';
import RSVP from './components/RSVP.js';
import TestForm from './components/TestForm.js';
// import './App.css';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      live: false,
      modalShow: false
    }

  }

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = './Timeline.js';
    script.async = true;
    document.body.appendChild(script);
  }    

  render() {
   //const [modalShow, setModalShow] = React.useState(false);
  return (
    <div className="App">
      <Hero id='home' className='home' backgroundImage={hdr_home} >
        <div>
          <img src={hdr_james_becks} width="200px" alt="" />
          <h2>01 + 01 = 10</h2>
          <br />
          <h2>We're getting married!!!</h2>
        </div>
        <div>
          <AnchorLink className='arrow-container' href='#countdown'>
            <span className="arrow"></span>
            <span className="arrow"></span>
            <span className="arrow"></span>  
          </AnchorLink>
        </div>
      </Hero>

      <div id='countdown' className='hero-menu section'>
        <div className='container-fluid countdown-container'>
          <h2 className='title'>Countdown</h2>
          <Countdown />
        </div>
      </div>

      <div>
        <div className='container-fluid d-flex py-4 justify-content-around'>

    <>
      <Button variant="primary" onClick={() => this.setState({modalShow: true})} className='align-self-center'>
        RSVP
      </Button>

      <VerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() => this.setState({modalShow: false})}
      />
    </>

    <>
      <Button variant="primary" onClick={() => this.setState({modalShow: true})} className='align-self-center'>
        Registry
      </Button>

      <VerticallyCenteredModal
        show={this.state.modalShow}
        onHide={() => this.setState({modalShow: false})}
      />
    </>
        </div>
        {/* <div>
          <AnchorLink href='#registry'><Button className='align-self-center'>Registry</Button></AnchorLink>
        </div> */}
      </div>

      <img id='about_us' src={about_us_banner} alt="..."/>
      <div className='container-fluid about-us section'>
        {/* <h2>About Us</h2> */}
        <div className='container-fluid d-flex justify-content-around align-items-center'>
          <CardFlip />
        </div>
      </div>

      <div id='fur_babies' className='fur-babies container-fluid section'>
        <h2>Our Fur Babies</h2>
        <div className="card mb-3">
          {/* <img src={"..."} className="card-img-top" alt="..." /> */}
          <div className="card-body">
            <div className="container-fluid d-flex justify-content-around">
              <div>
                <img src={evey} className="card-img-top" alt="..." />
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

      <div id='timeline' className='container-fluid timeline section'>
      <div className="timeline-container" id="timeline-1">
            <div className="timeline-header">
                <h2 className="timeline-header__title">Our Story</h2>
                <h3 className="timeline-header__subtitle">James and Becks</h3>
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
                        <h3 className="timeline__content-title">Birthday Adventure</h3>
                        <p className="timeline__content-desc">Amicalola Falls, Super Blood Moon w/ Lunar Eclipse</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id='registry' className='registry container-fluid registry section'>
      <h2>Registry</h2>
      <div className='container-fluid d-flex py-4 justify-content-around align-items-center'>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs={6} md={3}>
            <a target='_blank' target="_blank" href='#'>
              <Card>
                <Card.Img variant="top" src={amazon} />
              </Card>
            </a>
          </Col>
          <Col xs={6} md={3}>
            <a target='_blank' target="_blank" href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549077696?eventType=Wedding'>
              <Card>
                <Card.Img variant="top" src={bed_bath_beyond} />
              </Card>
            </a>
          </Col>
          <Col xs={6} md={3}>
            <a target='_blank' target="_blank" href='#'>
              <Card>
                <Card.Img variant="top" src={lowes} />
              </Card>
            </a>
          </Col>
          <Col xs={6} md={3}>
            <a target='_blank' target="_blank" href='#'>
              <Card>
                <Card.Img variant="top" src={williams_sonoma} />
              </Card>
            </a>
          </Col>
        </Row>
      </Container>
      </div>
    </div>

    <div id='rsvp' className='container-fluid rsvp section'>
      <h2>RSVP</h2>
      <a href="mailto:rebeccalynn.awesome@gmail.com">Send us an email because we don't have the form set up yet.</a>
      <TestForm />
      {/* <RSVP /> */}

    </div>

    <div className='container-fluid favorites section'>
      <h2>Our Faves</h2>

    </div>

  </div>

  );
  }
}

export default App;
