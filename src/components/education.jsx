import React from "react";
import upnvj_bg from "../assets/img/upnvj_bg.jpg";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Education = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div data-aos="fade-right">
            <h1 className="mt-5 mb-10 text-5xl font-extrabold text-defaultColor text-center">EDUCATION</h1>
            <div className="flex flex-col lg:flex-row gap-12 items-center px-10">
                <img src={upnvj_bg} className="rounded-xl w-11/12 lg:w-1/2"/>
                <div className="items-center text-container justify-center flex w-11/12 lg:w-1/2">
                    <div>
                        <h1 className="text-3xl font-extrabold text-center text-defaultColor">University of Pembangunan Nasional “Veteran” Jakarta</h1>
                        <br />
                        <p className="text-sm font-semibold text-justify">
                        I'm currently a student at UPN "Veteran" Jakarta, majoring 
                        in Information Systems with an interest in App Development, 
                        with a strong GPA of 3.92. My primary area of expertise lies 
                        in Web Development, with a keen focus on Front-End. Additionally, 
                        I'm delving into database management, UI/UX design, project management, 
                        and mastering various programming languages. I'm constantly refining my 
                        skills by actively participating in a Web Development organization. 
                        Through university projects and collaborative group studies, I'm 
                        honing not only technical skills but also crucial soft skills, 
                        preparing myself thoroughly for the professional world.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education;