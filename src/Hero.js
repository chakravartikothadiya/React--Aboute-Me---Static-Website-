import React from "react";
import thumbnail from './IMG-Main.jpg';

export default function Hero()
{
    return(
        <section className="hero">
            <img alt="" className="hero-image" src={thumbnail}/>
            <h1 className="hero-title">About Me</h1>
            <p className="hero-content">I am a graduate student in Computer Science at Stevens Institute of Technology with a strong interest in creating software programs that solves real-world problems. I am eager to learn and work with new technologies, and I am dedicated and detail-oriented person. I am a quick learner and a strong problem solver, with experience in front-end and back-end development, programming languages such as Java, C, and JavaScript and databases. I have a year of professional experience in software development and a year of experience in business operations including analytics, and problem-solving. I am a team player and enjoy collaborating with people in bringing out some of critical solution. Apart from this, I like to travel and meet new people. </p>
        </section>
    );
}