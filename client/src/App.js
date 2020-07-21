import React from 'react';
// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import hdr_home from './images/hdr_home.jpg';
// import hdr_james_becks from './images/hdr_james_becks.png';
import about_us_banner from './images/about_us_banner.jpg';
// OUR PICS
// import james_headshot from './images/james_headshot.jpg';
// import becky_headshot from './images/becky_headshot.jpg';
// FUR BABIES
import evey from './images/evey.jpg';
import oliver from './images/oliver.jpg';
import simon from './images/simon.jpg';
import boots from './images/boots.jpg';
import beach_feet from './images/beach_feet.jpg';
import gt_image from './images/gt_image.jpg';
import gt_graduation_night from './images/gt_graduation_night.jpg'; // front pic
// import first_app from './images/first_app.jpg'; // front pic
import amicalola from './images/amicalola.jpg'; // front pic
import daffodils from './images/daffodils.jpg'; // front pic
import moulin_rouge from './images/moulin_rouge.jpg'; // front pic
import surprise_party from './images/surprise_party.jpg'; // front pic
import birthday_flowers from './images/birthday_flowers.jpg'; // front pic
import vday from './images/vday.jpg'; // front pic
import engaged from './images/engaged.jpg'; // front pic
// import lunar_eclipse from './images/lunar_eclipse.jpg'; // bg pic
import amazon from './images/amazon.png';
import bed_bath_beyond from './images/bed_bath_beyond.png';
import dillards from './images/dillards.png';
import lowes from './images/lowes.png';
// import williams_sonoma from './images/williams_sonoma.png';

import Hero from './components/Hero.js';
//import HorizontalSplit from './components/HorizontalSplit.js';
import Countdown from './components/Countdown.js';
import CardFlip from './components/CardFlip.js';
import { Button, Card, Col, Row, Container } from 'react-bootstrap';
import VerticallyCenteredModal from './components/VerticallyCenteredModal.js';
import RSVPVerticallyCenteredModal from './components/RSVPVerticallyCenteredModal.js';
// import RSVP from './components/RSVP.js';
import TestForm from './components/TestForm.js';
// import './App.css';
import './App.scss';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      live: false,
      modalShow: false,
      RSVPmodalShow: false
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
        <Hero id='home' className='home' backgroundimage={hdr_home} >
          <div className="hero-image-text">
            <h1>James &amp; Becks</h1>
            {/* <h2 style={{textAlign: 'left'}}>01 + 01 = 10</h2> */}
            <h2 style={{textAlign: 'left'}}>We're getting married!!!</h2>
          </div>
          <div>
            <AnchorLink className='arrow-container' href='#countdown'>
              <span className="arrow"></span>
              <span className="arrow"></span>
              <span className="arrow"></span>  
            </AnchorLink>
          </div>
        </Hero>

        <div id='countdown' className="section">
          <div className='hero-menu'>
            <div className='container-fluid countdown-container'>
              <h2 className='title'>Countdown</h2>
              <Countdown />
            </div>
          </div>
          
          <div>
            <div className='container-fluid d-flex py-4 justify-content-around'>
    ​
              <div>
                <Button variant="primary" onClick={() => this.setState({RSVPmodalShow: true})} className='align-self-center'>
                  RSVP
                </Button>
          ​
                <RSVPVerticallyCenteredModal
                  show={this.state.RSVPmodalShow}
                  onHide={() => this.setState({RSVPmodalShow: false})}
                />
              </div>
                

    ​
              <div>
                <Button variant="primary" onClick={() => this.setState({modalShow: true})} className='align-self-center'>
                  Registry
                </Button>
          ​
                <VerticallyCenteredModal
                  show={this.state.modalShow}
                  onHide={() => this.setState({modalShow: false})}
                />
              </div>
            </div>
            {/* <div>
              <AnchorLink href='#registry'><Button className='align-self-center'>Registry</Button></AnchorLink>
            </div> */}
          </div>
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
          <Container>
            <Row className="justify-content-md-center">
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={evey} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Evey</Card.Title>
                      <Card.Text>
                        <em>The Knight</em>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={oliver} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Oliver</Card.Title>
                      <Card.Text>
                        <em>The Prince</em>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={simon} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Simon</Card.Title>
                      <Card.Text>
                        <em>The Duke</em>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={6} md={3}>
                <Card>
                  <Card.Img variant="top" src={boots} className="" alt="..." />
                  <Card.Body>
                    <Card.Title>Boots</Card.Title>
                      <Card.Text>
                        <em>The Squire</em>
                      </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
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
                  {/* <div className="timeline-item" data-text="July 2018">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." />
                        <img className="timeline__img" src={first_app} alt="..." />
                          <h3 className="timeline__content-title">Made Our First App Together</h3>
                          <p className="timeline__content-desc">State of the World!</p>
                          <p className="timeline__content-desc"><a href='https://github.com/homsau/State-of-the-World' target="_blank" rel="noopener noreferrer">GitHub</a></p>
                          <p className="timeline__content-desc"><a href='https://homsau.github.io/State-of-the-World/' target="_blank" rel="noopener noreferrer">App</a></p>
                      </div>
                  </div> */}
                  <div className="timeline-item" data-text="October 27, 2018">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={gt_graduation_night} alt="..." />
                          <h3 className="timeline__content-title">Graduated as Web Developers</h3>
                          <p className="timeline__content-desc"><strong>At Georgia Tech</strong></p>
                          <p className="timeline__content-desc">We crushed it.</p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="December 14,2018">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={amicalola} alt="..." />
                          <h3 className="timeline__content-title">Started Dating!</h3>
                          <p className="timeline__content-desc">...and still are!</p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="January 21,2019">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={amicalola} alt="..." />
                          <h3 className="timeline__content-title">Birthday Adventure</h3>
                          <p className="timeline__content-desc">Amicalola Falls, Super Blood Moon w/ Lunar Eclipse</p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="February 14, 2019">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={daffodils} alt="..." />
                          <h3 className="timeline__content-title">First Valentine’s Day</h3>
                          <p className="timeline__content-desc">D &amp; D <em>(Dinner &amp; Daffodils!)</em></p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="July 3, 2019">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={moulin_rouge} alt="..." />
                          <h3 className="timeline__content-title">BROADWAY IN NYC!</h3>
                          <p className="timeline__content-desc"></p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="January 4, 2020">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={surprise_party} alt="..." />
                          <h3 className="timeline__content-title">James’ 30th Birthday Party</h3>
                          <p className="timeline__content-desc">First Surprise Party ever <em>(Dragon Ball Z themed)</em></p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="February 15, 2020">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={vday} alt="..." />
                          <h3 className="timeline__content-title">Valentine's Day Hike</h3>
                          <p className="timeline__content-desc">Locked in our Love at Savannah Rapids</p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="March 14, 2020">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={engaged} alt="..." />
                          <h3 className="timeline__content-title">GOT ENGAGED!!! (on Pi day)</h3>
                          <p className="timeline__content-desc">Went to dinner, saw a West Side Story performance at Davidson Fine Arts, got on one knee in the amphitheatre!</p>
                      </div>
                  </div>
                  <div className="timeline-item" data-text="June 10, 2020">
                      <div className="timeline__content">
                        <img className="timeline__img" src={beach_feet} alt="..." /> 
                        <img className="timeline__img" src={birthday_flowers} alt="..." />
                          <h3 className="timeline__content-title">Becks' 27th Birthday!!!</h3>
                          <p className="timeline__content-desc">We had a lovely picnic with homemade sushi and an in-house showing of What A Girl Wants</p>
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
                <a target='_blank' rel='noopener noreferrer' href='www.jamesandbecks.us/#'>
                  <Card>
                    <Card.Img variant="top" src={amazon} />
                  </Card>
                </a>
              </Col>
              <Col xs={6} md={3}>
                <a target='_blank' rel='noopener noreferrer' href='https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549077696?eventType=Wedding'>
                  <Card>
                    <Card.Img variant="top" src={bed_bath_beyond} />
                  </Card>
                </a>
              </Col>
              <Col xs={6} md={3}>
                <a target='_blank' rel='noopener noreferrer' href='https://www.dillards.com/webapp/wcs/stores/servlet/RegistryManageProducts?catalogId=301&langId=-1&storeId=301&actionCode=M&registryNumber=132821638'>
                  <Card>
                    <Card.Img variant="top" src={dillards} />
                  </Card>
                </a>
              </Col>
              <Col xs={6} md={3}>
                <a target='_blank' rel='noopener noreferrer' href='www.jamesandbecks.us/#'>
                  <Card>
                    <Card.Img variant="top" src={lowes} />
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
