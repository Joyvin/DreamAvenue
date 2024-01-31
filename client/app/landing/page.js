"use client";
// import React from 'react'
import Landing from '../components/Landing'
import Services from '../components/Services'
import Slider from '../components/Slider';
import StartYourJourney from '../components/StartYourJourney'
import HeroSection from '../components/Hero';
import Footer from '../components/Footer';

export default function () {
  return (
    <div>
        {/* <Landing /> */}
        <HeroSection />
        <Slider />
        <Services />
        <StartYourJourney />
    </div>
  )
}
