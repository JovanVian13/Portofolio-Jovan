import React from "react";
import jovanphoto from "../assets/img/jovanphoto.png";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Statistics = () => {
    useEffect(() => {
        Aos.init({
          once: true,
          duration: 1000,
        });
    });
    return (
        <div className="items-center justify-center flex gap-14" data-aos="fade-right">
            <div className="items-center text-container justify-center flex mt-20">
                <div className="w-2/3">
                    <h1 className="text-5xl font-extrabold text-defaultColor text-center">ABOUT ME</h1>
                    <br />
                    <p className="text-sm text-textColor font-semibold text-justify mb-10">
                        I am a student from Universitas Pembangunan Nasional Veteran Jakarta, 
                        specializing in Web Development, particularly Front-End Development, 
                        with a robust academic background and extensive practical experience. 
                        Currently pursuing a degree in Information Systems with a keen interest 
                        in App Development, I am also actively engaged in an organization and 
                        have been recognized for funding from the Student Creativity Program (PKM). 
                        I am proficient in various web development tools such as HTML, JavaScript, 
                        PHP, and React JS, and have successfully managed numerous projects, both 
                        independently and within a team. I possess excellent communication skills                             and exceptional adaptability, while also consistently striving to deliver 
                        outstanding performances.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Statistics;