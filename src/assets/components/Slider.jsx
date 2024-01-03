import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode,Autoplay } from 'swiper/modules';

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={4.5}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode,Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>

                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
                <SwiperSlide>
          <div className="slider__card">
            <div className="slider__upper">

              <img src="https://dummyimage.com/200x100/efefef/000&text=user" alt="" className='slider__testimony-img'/>
              <h3 className="slider__testimony-intro" data-designation="QA-Intern">Anisha Basnet</h3>

            </div>
            <p className="slider__lower">When the world was amidst Covid, I got an opportunity to do an internship at Aakashlabs. I joined Aakashlabs as a QA Tester intern. I had a wonderful 3-months of experience.I was taught about the process of how any QA tester should look for the details, record the defect details. I was able to widen my professional network</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
