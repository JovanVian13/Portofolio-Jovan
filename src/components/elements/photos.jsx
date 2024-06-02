import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Photos = ({icon, title}) => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="flex-col text-defaultColor text-center p-10 bg-white rounded-lg shadow-lg w-fit h-fit cursor-pointer transition-all" data-aos="fade-right">
            <img src={icon} className="p-6"></img>
            <p className="font-bold mb-2 text-lg text-center">{title}</p>
        </div>
    );
}

export default Photos;