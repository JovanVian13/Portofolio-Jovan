import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Footer = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="w-full items-center justify-center bg-white" data-aos="fade-up">
            <div className="flex w-full flex-col md:flex-row p-8 md:px-28">
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-3xl pb-2 text-defaultColor">Contact Me</h1>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-2 text-defaultColor">Phone</h1>
                    <a className="text-sm font-semibold hover:text-backColor text-defaultColor" href="https://wa.me/6289602348946">+6289602348946</a>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-2 text-defaultColor">Email</h1>
                    <a className="text-sm font-semibold hover:text-backColor text-defaultColor" href="mailto:jovan.then1@gmail.com">Jovan.then1@gmail.com</a>
                </div>
                <div className="w-full md:w-1/4">
                    <h1 className="font-semibold text-xl pb-2 text-defaultColor">LinkedIn</h1>
                    <a className="text-sm font-semibold hover:text-backColor text-defaultColor" href="https://www.linkedin.com/in/jovan-then-18a13430a/">Jovan Vian Thendra</a>
                </div>
            </div>
            <div className="w-full">
                <p className="text-center mt-2 py-2 text-textColor font-semibold">&copy; 2024 Jovan Vian Thendra | All rights reserved</p>
            </div>
        </div>
    );
}

export default Footer;