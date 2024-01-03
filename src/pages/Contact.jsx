import React,{useState} from 'react'

function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: undefined,
    b_type: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className='contact-us'>
      <div className="container">
        <div className="contact-us__wrapper">
        <h1 className="heading__secondary">Send Us a Message</h1>
        <form action="/"className='contact-us__form' >
          <div className="form__upper">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' className='input' />
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' className='input' />
          </div>
          <div className="form__upper">
              <input type="number" name="phone" value={formData.phone} onChange={handleChange} placeholder='Phone' className='input' />
              <input type="text" name="b_type" value={formData.b_type} onChange={handleChange} placeholder='Enter Subject' className='input' />
          </div>
          <div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder='Message' className='input message' />
          </div>
          <button type="submit" className='button__primary -'>Submit</button>
        </form>
        </div>
      </div>
    </section>
  )
}

export default Contacts