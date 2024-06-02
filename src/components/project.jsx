import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';
import Port2 from "../assets/img/Port2.jpg";
import port1 from "../assets/img/port1.jpg";
import Photos from "./elements/photos";

const Project = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return(
        <div className="w-full items-center text-center mt-5 justify-center bg-gradient-to-r from-bgColor to-backColor" data-aos="fade-right">
            <div className="items-center justify-center">
                <h1 className="text-6xl py-5 font-bold text-white">Projects</h1>
            </div>
            <div className="flex py-5 justify-center items-center gap-8 w-11/12 mx-auto">
                <Photos
                icon={Port1}
                title={"First Project JoHome"}
                ></Photos>
                <Photos
                icon={Port2}
                title={"Second Project Portofolio"}
                ></Photos>
            </div>
        </div>
    );
}

export default Project;
