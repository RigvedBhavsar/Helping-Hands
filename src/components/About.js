import React from 'react';
import aboutUs from '../images/donate1.jpg';
const About = () => {
    return (
        <section id="about">
            <div className="about-us">

                <div className="aboutleft">
                    <img src={aboutUs} className="arms" alt="pic"></img>
                </div>
                <div className="aboutright">
                    {/* <b>Hello Beauties !</b> Pooja here.💭Welcome to this beautiful world
                    also thank you for visiting my website!
                    <br></br><br></br> */}
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    A year ago pandemic protocol made people difficult to donate things to orphanage
                    as they were not allowed to visit us. Thus we wanted to build a user friendly way of
                    donation, but we realized there is no better way than this to give a donar there own
                    way of donation just by there home.
                    <br></br><br></br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Henceforth, this is donation web application where donar can easily 
                    donate in this pandemic situation.This is paper less, time efficient
                    and reduce manual work process.
                    <br></br><br></br>
                    <b>Thank you!</b>&nbsp;&nbsp;🧠
                </div>
            </div>
        </section>
    )
}

export default About
