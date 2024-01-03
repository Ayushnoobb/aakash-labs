import React from 'react'
import { Link } from 'react-router-dom';

import img1 from "/src/assets/img/1.svg"
import img2 from "/src/assets/img/2.svg"
import img3 from "/src/assets/img/3.svg"
import img4 from "/src/assets/img/4.svg"
import img5 from "/src/assets/img/5.svg"
import Slider from '../assets/components/Slider';
import Feature from '../assets/components/Feature';

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__wrapper">
          <div className="container">
            <h1 className="heading__primary">Grow Your Business With Us</h1>
            <h3 className="heading__tertiary">Where technology meets marketing</h3>
            <Link to={"/contact"} className='button__primary'>Get Free Consultation</Link>
          </div>
        </div>
      </section>
      <Feature />

      <section className="testimony">
        <div className="testimony__wrapper">
          <div className="container">
            <h2 className="heading__secondary text-center" data-sub_head="Testimonials">We have impressed our beloved customers</h2>
          </div>
            <Slider />
        </div>
      </section>
    </>
  )
}

export default Home