import React from 'react';
import styled from 'styled-components';
import video from './video.mp4';
import Navbar from './Navbar';
import Fade from 'react-reveal/Fade';
import truck from '../WhatWeProvide/group-2.svg'

const Video = styled.video`
    position: absolute;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    z-index: -2;    
`

const Mask = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: -1; 
    background-color: rgba(0,0,0,0.5);
`



const Section = styled.section`
    min-width: 100%;
    min-height: 100vh;
    position: relative;
`

const HeroText = styled.h1`
    font-family: Montserrat;
    font-size: 80px;
    font-weight: 800;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.22;
    letter-spacing: normal;
    color: #ffffff;
    margin-top: 250px;
    margin-left: 100px;
    @media (max-width: 768px) {
        margin-left: 5px;
        font-size: 40px;
    }
`

const Hero = () => (
    <Section>
        <Navbar/>
        <Video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
        </Video>
        <Mask />
        <Fade left>
            <HeroText>
                Delivering <img src={truck} alt=""/> <br /> The Market to you
            </HeroText>
        </Fade>
    </Section>
)

export default Hero;