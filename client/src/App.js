import React, { Component } from 'react';
import logo from './logo.svg';
import Hero from './components/Hero.js';
//import HorizontalSplit from './components/HorizontalSplit.js';
import Countdown from './components/Countdown.js';
import { Button, Card } from 'react-bootstrap';
import RSVP from './components/RSVP.js';
import './App.css';

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
      <Hero backgroundImage='https://via.placeholder.com/1600x900' >
        <span>01 + 01 = 10</span>
        <br />
        <span>We're getting married!!!</span>
      </Hero>

      <div className='container-fluid countdown-container'>
        <Countdown />
      </div>

      <div>
        <div className='container-fluid d-flex py-4 justify-content-around'>
          <Button className='align-self-center'>RSVP</Button>
          <Button className='align-self-center'>Registry</Button>
        </div>

        <div className='container-fluid d-flex py-4 justify-content-around'>
          <Button className='align-self-end'>Explore<br />v</Button>
        </div>
      </div>

      <div className='container-fluid about-us'>
        {/* <h2>About Us</h2> */}
        <div className='container-fluid d-flex py-4 justify-content-around align-items-center'>
          <div>
            <h2>About the Bride</h2>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
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
              <Card.Img variant="top" src="holder.js/100px180" />
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
          <img src="..." class="card-img-top" alt="..." />
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
                <h2 className="timeline-header__title">Mustafa Kemal Atatürk</h2>
                <h3 className="timeline-header__subtitle">FATHER OF THE TURKS</h3>
            </div>
            <div className="timeline">
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://i.cdn.ensonhaber.com/resimler/diger/ataturk_3473.jpg" />
                        <h2 className="timeline__content-title">1881</h2>
                        <p className="timeline__content-desc">He was born in 1881 probably in the spring in Salonica, then an Ottoman city, now in Greece. His father Ali Riza, a customs official turned lumber merchant, died when Mustafawas still a boy. His mother Zubeyde, adevout and strong-willed woman, raised him and his sister.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://gazetemanifesto.com/wp-content/uploads/2015/11/mustafa-kemal.jpg" />
                        <h2 className="timeline__content-title">1893</h2>
                        <p className="timeline__content-desc">First enrolled in a traditionalreligious school, he soon switched to a modern school. In 1893, he entered a military highschool where his mathematics teacher gave him the second name Kemal (meaning perfection)in recognition of young Mustafa's
                            superior achievement.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://www.volpeypir.com/upload/3732.jpg" />
                        <h2 className="timeline__content-title">1905</h2>
                        <p className="timeline__content-desc">In 1905, Mustafa Kemal graduated from the War Academy in Istanbul with the rank of Staff Captain. Posted in Damascus, he started with several colleagues, a clandestinesociety called "Homeland and Freedom" to fight against the Sultan'sdespotism.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://cdn.yemek.com/uploads/2014/11/ataturk-10-kasim.jpg" />
                        <h2 className="timeline__content-title">1908</h2>
                        <p className="timeline__content-desc">In 1908 he helped the group of officers who toppled the Sultan. Mustafa Kemal'scareer flourished as he won his heroism in the far corners of the Ottoman Empire,including Albania and Tripoli. He also briefly served as a staff officer in
                            Salonica andIstanbul and as a military attache in Sofia.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://ataturk.istanbul.gov.tr/GalleryLibrary/12.jpg" />
                        <h2 className="timeline__content-title">1915</h2>
                        <p className="timeline__content-desc">In 1915, when Dardanelles campaign was launched, Colonel Mustafa Kemal became anational hero by winning successive victories and finally repelling the invaders.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://blog.istanbul1881.com/wp-content/uploads/2016/08/atat%C3%BCrk-%C3%BCn-inan%C4%B1lmaz-karizmatik-fotograf%C4%B1_861050.jpg" />
                        <h2 className="timeline__content-title">1916</h2>
                        <p className="timeline__content-desc">Promotedto general in 1916, at age 35, he liberated two major provinces in eastern Turkey thatyear. In the next two years, he served as commander of several Ottoman armies inPalestine, Aleppo, and elsewhere, achieving another major victory
                            by stopping the enemyadvance at Aleppo.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://manisanokta.com/wp-content/uploads/2014/07/ataturk-20.jpg" />
                        <h2 className="timeline__content-title">1919</h2>
                        <p className="timeline__content-desc">On May 19, 1919, Mustafa Kemal Pasha landed in the Black Sea port of Samsun to startthe War of Independence. In defiance of the Sultan's government, he rallied a liberationarmy in Anatolia and convened the Congress of Erzurum and Sivas
                            which established thebasis for the new national effort under his leadership.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://www.volpeypir.com/upload/3732.jpg" />
                        <h2 className="timeline__content-title">1920</h2>
                        <p className="timeline__content-desc">On April 23, 1920, the GrandNational Assembly was inaugurated. Mustafa Kemal Pasha was elected to its Presidency. Fighting on many fronts, he led his forces to victory against rebels and invadingarmies. Following the Turkish triumph at
                            the two major battles at Inonu in Western Turkey,the Grand National Assembly conferred on Mustafa Kemal Pasha the title ofCommander-in-Chief with the rank of Marshal.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://sanatkaravani.com/wp-content/uploads/2015/11/ataturk-4.jpg" />
                        <h2 className="timeline__content-title">1922</h2>
                        <p className="timeline__content-desc">At the end of August 1922, the Turkish armieswon their ultimate victory. Within a few weeks, the Turkish mainland was completelyliberated, the armistice signed, and the rule of the Ottoman dynasty abolished</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="https://turkcetarih.com/wp-content/uploads/2015/05/Atat%C3%BCrkveCumhuriyet.jpg" />
                        <h2 className="timeline__content-title">1923</h2>
                        <p className="timeline__content-desc">In July 1923, the national government signed the Lausanne Treaty with Great Britain,France, Greece, Italy, and others. In mid-October, Ankara became the capital of the new Turkish State. On October 29, the Republic was proclaimed and Mustafa
                            Kemal Pasha wasunanimously elected President of the Republic.</p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="https://pbs.twimg.com/media/Cw69H8pXUAEaSqa.jpg" />
                        <h2 className="timeline__content-title">1934</h2>
                        <p className="timeline__content-desc">The account of Atatürk's fifteen year Presidency is a saga of dramatic modernization.With indefatigable determination, he created a new political and legal system, abolished the Caliphate and made both government and education secular,
                            gave equal rights to women,changed the alphabet and the attire, and advanced the arts and the sciences, agricultureand industry. In 1934, when the surname law was adopted, the national parliament gave him the name<i><strong>"Atatürk" (Father of the Turks)</strong></i></p>
                    </div>
                </div>
                <div className="timeline-item" data-text="FATHER OF THE TURKS">
                    <div className="timeline__content"><img className="timeline__img" src="http://www.bik.gov.tr/wp-content/uploads/2016/11/20161110_2_20037273_15856882.jpg?fit=1024%2C863" />
                        <h2 className="timeline__content-title">1938</h2>
                        <p className="timeline__content-desc">On November 10, 1938, following an illness of a few months, the national liberator and the Father of modern Turkey died. But his legacy to his people and to the world endures.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="demo-footer"><a href="http://www.turkishnews.com/Ataturk/life.htm" target="_blank">Source/Kaynak</a></div>
    </div>

    <div className='container-fluid registry'>
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

    <div className='container-fluid rsvp'>
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
