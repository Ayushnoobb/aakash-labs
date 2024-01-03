import React from 'react'

import img1 from "/src/assets/img/1.svg"
import img2 from "/src/assets/img/2.svg"
import img3 from "/src/assets/img/3.svg"
import img4 from "/src/assets/img/4.svg"
import img5 from "/src/assets/img/5.svg"
import { Link } from 'react-router-dom'

function Feature() {
  return (
    <section className="feature">
    <div className="container">
      <div className="feature__wrapper">
        <h2 className="heading__secondary" data-sub_head="Feature">We are here to help <br/>you with</h2>
        <div className="feature__row">

          <article className='feature__card'>
            <img src={img1} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Social Media Marketing</Link></h4>
              <p className="feature__content">The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework</p>
            </div>
          </article>
          <article className='feature__card'>
            <img src={img2} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Website Development</Link></h4>
              <p className="feature__content">The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework</p>
            </div>
          </article>
          <article className='feature__card'>
            <img src={img3} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Search Engine Marketing</Link></h4>
              <p className="feature__content">The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework</p>
            </div>
          </article>
          <article className='feature__card'>
            <img src={img4} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Chat Bots Development</Link></h4>
              <p className="feature__content">The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework</p>
            </div>
          </article>
          <article className='feature__card'>
            <img src={img5} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Graphic & UI-UX Design</Link></h4>
              <p className="feature__content">The best form of marketing doesn’t feel like marketing that is why we provide a custom-made framework</p>
            </div>
          </article>
          <article className='feature__card'>
            <img src={img5} alt="" />
            <div className="feature__detail">
              <h4 className="heading__quat"><Link to={"#"}>Grow your business</Link></h4>
              <p className="feature__content">The magic wand for success is in figuring out how to bring in the profits and ensure the capacity needed to sustain that growth for posterity.</p>
            </div>
          </article>


        </div>
      </div>
    </div>
  </section>
  )
}

export default Feature