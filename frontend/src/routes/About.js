import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Home.css';

import Navbar from "../Navbar/Navbar";

import dewey from './img/dewey.jpg';
import may from './img/may.jpg';
import muhammad from './img/muhammad.jpg';
import maggie from './img/maralmaa.jpg';
import sara from './img/sara.jpg';
import emaline from './img/emaline.jpg';




class About extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <h1>About Us</h1>

          <p>
            Pixafari is ...
          </p>

          <div className="team">
            <h2>Our Team</h2>
            <div className="row">
              <div className="card col-xm">
                <img className='card-img-top' src={dewey} alt="dewey" />
                <div className="card-body">
                  <h3 className='card-title'>Chief Executive Officer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Dewey Bazirake</h5>
                  </a>
                </div>
              </div>


              <div className="card col-xm">
                <img className='card-img-top' src={may} alt="May" />
                <div className="card-body">
                  <h3 className='card-title'>Chief Technical Officer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>May Shin Lyan</h5>
                  </a>
                </div>
              </div>

               <div className="card col-xm">
                <img className='card-img-top' src={muhammad} alt="muhammad" />
                <div className="card-body">
                  <h3 className='card-title'>Chief Operation Manager</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Muhammad Ahmad</h5>
                  </a>
                </div>
              </div>

            </div>{/*row*/}

            <div className="row">
               <div className="card col-xm">
                <img className='card-img-top' src={maggie} alt="Maggie" />
                <div className="card-body">
                  <h3 className='card-title'>Chief Financial Officer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Maralmaa Erdenebat</h5>
                  </a>
                </div>
              </div>

               <div className="card col-xm">
                <img className='card-img-top' src={sara} alt="Sara" />
                <div className="card-body">
                  <h3 className='card-title'>Chief Enterpreneur</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Sara Anis</h5>
                  </a>
                </div>
              </div>

                <div className="card col-xm">
                <img className='card-img-top' alt="Jing" />
                <div className="card-body">
                  <h3 className='card-title'>Database Head</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Jing Zhang</h5>
                  </a>
                </div>
              </div>



          </div>{/*row*/}

           <div className="row">
            <div className="card col-xm">
                <img className='card-img-top' src={emaline} alt="Emaline" />
                <div className="card-body">
                  <h3 className='card-title'>Creative Designer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Emaline Ho</h5>
                  </a>
                </div>
              </div>


               <div className="card col-xm">
                <img className='card-img-top' alt="Michael" />
                <div className="card-body">
                  <h3 className='card-title'>Volunteer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Michael Chung</h5>
                  </a>
                </div>
              </div>

              <div className="card col-xm">
                <img className='card-img-top' alt="Karissa" />
                <div className="card-body">
                  <h3 className='card-title'>Volunteer</h3>
                  <p className='card-text'></p>
                  <a href="/about">
                    <h5>Karissa Baker</h5>
                  </a>
                </div>
              </div>

           </div>{/*row*/}

          </div>{/*Team*/}
        </div>{/*Container*/}
      </div>
    );
  }
}

export default About;
