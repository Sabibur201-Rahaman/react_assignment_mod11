import React from 'react'
import About from './components/About'
import Hero from './components/Hero';
import Service from './components/Service';
import Project from './components/Project';
import Footer from './components/Footer';
import Header from './components/Header';
export default function App() {
  return (
    <div><h1 className='main'>hello this is our ostad platform</h1>
    <Header/>
    <About/>
    <Hero/>
    <Service/>
    <Project/>
    <Footer/>
    
    </div>
  )
}
