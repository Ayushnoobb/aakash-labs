import React from 'react'
import contactBg from "/src/assets/img/img.png"
import contactIcon1 from "/src/assets/img/contact.svg"
import contactIcon2 from "/src/assets/img/contact-mail.svg"
import contactIcon3 from "/src/assets/img/contact-location.svg"

function Contact() {
  return (
    <section className='contact'>
      <div className="container">
        <div className="contact__wrapper">
          <div className="column__detail">
            <h2 className="heading__secondary" data-sub_head="Contact Us">Start Working Faster Today</h2>
            <h3 className='heading__tertiary'>We at Aakash Labs can provide you with unparalleled insight and digital marketing analysis. For assistance with any inquiries, or if you require our services, reach out to us at:</h3>
            <div className="contact__method-wrapper">
              <a href='tel:+977-1-4430196' className='contact__method-type'>
                <img src={contactIcon1} alt="" />
                <div>
                  <h4 className="contact__method-heading">Call us</h4>
                  <p className='contact__method-detail'>+977-1-4430196</p>
                </div>
              </a>
              <a href='mailto:info@aakashlabs.com' className='contact__method-type'>
                <img src={contactIcon2} alt="" />
                <div>
                  <h4 className="contact__method-heading">Email</h4>
                  <p className='contact__method-detail'>info@aakashlabs.com</p>
                </div>
              </a>

              <div className='contact__method-type'>
              <img src={contactIcon3} alt="" />
                <div>
                  <h4 className="contact__method-heading">Address</h4>
                  <p className='contact__method-detail'>Laxmi Plaza, Putali Sadak, Kathmandu, Nepal</p>
                </div>
              </div>

            </div>
          </div>
          <div className='column__visual'>
            <img src={contactBg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact