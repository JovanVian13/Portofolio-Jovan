import React from 'react';
import Button from './elements/button';
import jovanphoto from '../assets/img/jovanphoto.jpg'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1000,
    });
  });
  return (
    <div className="flex bg-gradient-to-r from-bgColor to-backColor min-h-screen items-center justify-center gap-3" data-aos="fade-right">
      <div className='p-10 w-1/2'>
        <h1 className='text-4xl font-extrabold text-white'>Hi I'm</h1>
        <h1 className='text-4xl font-extrabold text-defaultColor'>Jovan Vian Thendra</h1>
        <h1 className='text-4xl font-extrabold text-black'>Front-End Developer</h1>
        <br />
        <Button 
        children={"Download CV"}
        />
      </div>
      <div>
        <img src={jovanphoto} className='w-full object-cover h-96 rounded-lg'/>
      </div>
    </div>
  );
};

export default Home;