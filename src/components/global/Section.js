import React from 'react'
import styled from 'styled-components';

const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${props => props.color ? props.color : '#fff'};
    padding-top: 80px;
`

export default Section;