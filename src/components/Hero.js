import React, { useState, useEffect, useRef } from "react";
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import '../styles/pages/Landing.scss';

import Button from './Button';
import DropDown from './Dropdown';

import imga from "../assets/img1.jpg";
import imgb from "../assets/img2.webp";
import imgc from "../assets/img3.webp";

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    let id = setInterval(() => {
      savedCallback.current();
    }, delay);
    return () => clearInterval(id);
  }, [delay]);
}


const Hero = () => {

  const [count, setCount] = useState(0);
  const [tcount, setTcount] = useState(0);
  const [dropdown, setDropdown] = useState({ a: false, b: false, c: false })

  const [img, setImg] = useState([
    { name: imga },
    { name: imgb },
    { name: imgc }
  ]);

  const [text, setText] = useState([
    { text: "NeGst promoting e-governance all the way..." },
    { text: "The National Mandate...", subText: 'To develop and implement eGovernment programmes and projects with the aim to promote transparency, efficient delivery of services with increasing Citizens-Government interaction.' },
    { text: "Partnership that works!", subText: 'PPP business model that ensures a proper blend of private sector expertise and resources and public sector data for effective and efficient Service Delivery with focus on sustainability.' },
    { text: 'Live in the UK, USA, UAE, Europe or Asia?', subText: <p style={{ fontSize: '18px', fontWeight: '100', margin: '0px' }}>Our <i>TRANSPARENCY</i> platform is here for your diaspora needs</p> },
    { text: "Are you a Nigerian who needs to digitze your document?", subText: "check out our Transparency platform on TAS." },
    { text: "Need to verify or authenticate the validity of document? then TAS is for you!" },
    { text: <p>Like to register or verify your NIN? <i>TAS</i> is here</p> },
    { text: "Want to know what your government is doing?", subText: <p style={{ fontSize: '18px', fontWeight: '100', margin: '0px' }}>our <i>Citizen engagement framework</i> is here for you on TAS</p> },
    { text: "Lets help your agency...", subText: 'We assist MDAs to isolate and override inherent vulnerabilities that create wastage in Nigeria’s digital economy which ensures that the citizens of Nigeria receive value for their money.' },
  ]);

  const [tasDrop, setTasDrop] = useState([
    {
      title: 'Transparency', params: [
        { title: 'Authentication' },
        { title: 'Attestation' },
        { title: 'E-Learning' },
        { title: 'E-VISA' },
        { title: 'Incentives' },
        { title: 'National Mandate' },
        { title: 'NIN Registration' },
        { title: 'Process Ecosystem Digitization' },
        { title: 'Satellite photoscopy' },
        { title: "TAS Raison de'tar" },
        { title: 'Telemedicine' }
      ]
    },

    {
      title: 'Accountability', params: [
        { title: 'Admin Personnel' },
        { title: 'Citizen Engagement' },
        { title: 'Election Monitoring' },
        { title: 'E-Product' },
        { title: 'Fair Assessment' },
        { title: 'Finance or Accounts' },
        { title: 'Forensic Audit' },
        { title: 'Market Price Intelligence' },
        { title: 'Training And Incentives' },
      ]
    },
    {
      title: 'Sustainability', params: [
        { title: 'Animal Husbandry' },
        { title: 'Biofuel Presentation' },
        { title: 'Fuel Ethanol' },
        { title: 'IP doc (fuel ether)' },
        { title: 'IP doc (power)' },
        { title: 'Solar Power' }
      ]
    }
  ]);


  useInterval(() => {
    if (count === 2) {
      setCount(0);
    } else {

      setCount(count + 1);
    }

    if (tcount == text.length - 1) {
      setTcount(0);
    } else {
      setTcount(tcount + 1)
    }
  }, 5000);


  const onMouseEnter = (num) => {
    switch (num) {
      case 'a':
        if (window.innerWidth < 960) {
          setDropdown({ ...dropdown, a: false });
        } else {
          setDropdown({ ...dropdown, a: true, b: false, c: false });
        }
        break;
      case 'b':
        if (window.innerWidth < 960) {
          setDropdown({ ...dropdown, b: false });
        } else {
          setDropdown({ ...dropdown, a: false, b: true, c: false });
        }
        break;
      case 'c':
        if (window.innerWidth < 960) {
          setDropdown({ ...dropdown, c: false });
        } else {
          setDropdown({ ...dropdown, a: false, b: false, c: true });
        }
        break;
      default:

    }

  };

  const onMouseLeave = (num) => {

    if (window.innerWidth < 960) {
      setDropdown({ a: false, b: false, c: false });
    } else {
      setDropdown({ a: false, b: false, c: false });
    }

  };

  return (
    <div className="Landing">

      <div className="slideshow-container" >

        <div className="slide-holder" >

          {(() => {
            if (count === 0) {
              return <div className="mySlides fade" style={{ background: `url(${imga})`, opacity: "0.3" }} />

            } else if (count === 1) {
              return <div className="mySlides fade" style={{ background: `url(${imgb})`, opacity: "0.3" }} />

            } else if (count === 2) {
              return <div className="mySlides fade" style={{ background: `url(${imgc})`, opacity: "0.3" }} />

            }
          })()}


        </div>


        <div className="center-box ">
          <div className="content-holder">
            <div className="left">
              <p>{text[tcount].text}</p>
              <p style={{ marginTop: '-30px', fontSize: '18px', fontWeight: '100', fontFamily: 'sans-serif' }}>{text[tcount].subText}</p>

            </div>
            <div className="right">
              <div className="floating-box">
                <div className="floating-header">

                  <p>NeGSt DIGITAL SERVICES</p>
                  <Button name="TAS" styles={{ height: 'auto', border: 'solid', borderWidth: '2px', borderColor: 'white', background: 'transparent', margin: '0px' }} />
                </div>
                <div className="floating-text-holder">
                  <div
                    onMouseEnter={() => onMouseEnter('a')}
                    onMouseLeave={() => onMouseLeave('a')}
                  >
                    <p>Transparency</p>
                    {
                      dropdown.a && <DropDown styles={{ top: '48%', right: '10%' }}>
                        {
                          tasDrop[0].params.map((item, index) => {
                            return (
                              <li key={index}>
                                <h2
                                  // className={item.cName}
                                  // to={item.path}
                                  // onClick={() => setClick(false)}
                                  style={{ border: 'none', margin: '0px', padding: '10px', fontSize: '15px', fontWeight: '100' }}
                                >
                                  {item.title}
                                </h2>
                              </li>
                            );
                          })
                        }
                      </DropDown>
                    }                  </div>

                  <div
                    onMouseEnter={() => onMouseEnter('b')}
                    onMouseLeave={() => onMouseLeave('b')}
                  >
                    <p>Accountability</p>
                    {
                      dropdown.b && <DropDown styles={{ top: '54%', right: '10%' }}>
                        {
                          tasDrop[1].params.map((item, index) => {
                            return (
                              <li key={index}>
                                <h2
                                  // className={item.cName}
                                  // to={item.path}
                                  // onClick={() => setClick(false)}
                                  style={{ border: 'none', margin: '0px', padding: '10px', fontSize: '15px', fontWeight: '100' }}
                                >
                                  {item.title}
                                </h2>
                              </li>
                            );
                          })
                        }
                      </DropDown>
                    }                  </div>

                  <div
                    onMouseEnter={() => onMouseEnter('c')}
                    onMouseLeave={() => onMouseLeave('c')}                  >
                    <p>Sustainability</p>
                    {
                      dropdown.c && <DropDown styles={{ top: '60%', right: '10%' }}>
                        {
                          tasDrop[2].params.map((item, index) => {
                            return (
                              <li key={index}>
                                <h2
                                  // className={item.cName}
                                  // to={item.path}
                                  // onClick={() => setClick(false)}
                                  style={{ border: 'none', margin: '0px', padding: '10px', fontSize: '15px', fontWeight: '100' }}
                                >
                                  {item.title}
                                </h2>
                              </li>
                            );
                          })
                        }
                      </DropDown>
                    }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div style={{ textAlign: "center", zIndex: '10' }}>
          <span className="dot" onclick="currentSlide(1)"></span>
          <span className="dot" onclick="currentSlide(2)"></span>
          <span className="dot" onclick="currentSlide(3)"></span>
        </div>

      </div>


    </div >
  );
}

export default Hero;