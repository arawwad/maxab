import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import CountUp from 'react-countup';


const Number = styled.span`
    font-family: Montserrat;
    font-size: 59px;
    font-weight: bold;
    letter-spacing: 0.28px;
    text-align: center;
    color: #3477ae;
`

const Name = styled.span`
    font-family: Montserrat;
    font-size: 13px;
    letter-spacing: 1.63px;
    text-align: center;
    color: #e9475b;
`

const Wrapper = styled.div`
    margin-right: 40px;
`


const Stat = ({number, name}) => (
    <Wrapper>
        <Fade center>
            <Number><CountUp end={number} /></Number>
            <Name>{name}</Name>
        </Fade>
    </Wrapper>
)

export default Stat;