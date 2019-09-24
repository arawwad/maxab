import React from 'react';
import styled from 'styled-components';

const Paragraph = styled.p`
    font-size: 14px;
    font-weight: ${props => props.normal ? 'normal' : '600'};
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: normal;
    text-align: ${props => props.center ? 'center' : 'left'};
    color: ${props => props.color ? props.color : '#97a4b0'};
    font-family: 'Montserrat', sans-serif;
`


export default Paragraph