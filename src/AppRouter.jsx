import React, { useEffect } from 'react'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Navbar from './assets/components/Navbar';
import Home from './pages/Home'
import Footer from './assets/components/Footer';
import Contact from './assets/components/Contact';
import Contacts from './pages/Contact';
import About from './pages/About';
import News from './pages/News';
import NewsDetail from './pages/NewsDetail';
import FourZeroFour from './pages/FourZeroFour';

function AppRouter() {

  useEffect(()=>{
    const headerHeight = document.querySelector(".header").getBoundingClientRect().height;
    document.querySelector("#main").style.paddingTop = headerHeight+"px"

  },[])
  return (
    <>
      <Router>
        <Navbar />
        <main id='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:id" element={<NewsDetail />} />
            <Route path="/404" element={<FourZeroFour />} />
            <Route path="/*" element={<FourZeroFour />} />
          </Routes>
          <Contact />
        </main>
        <Footer />
      </Router>


    </>
  )
}

export default AppRouter