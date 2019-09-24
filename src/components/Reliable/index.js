import React from 'react';
import styled from 'styled-components';
import Section from '../global/Section';
import Title from '../global/Title';
import first from './1.jpg';
import second from './2.jpg';
import third from './3.jpg';

const TitleContainer = styled.div`
    position: absolute;
    left: 45%;
    top: 10%;
    width: 45%;
`

const Paragraph = styled.p`
    font-size: 23.4px;
    line-height: 1.37;
    letter-spacing: -0.67px;
    color: #798293;
`

const ReliableSection = styled(Section)`
    position: relative;
    min-height: 100vh;
    background-image: linear-gradient(to right, #e9475b 40%, #fff 30%); 
`

const Photo = styled.img`
    object-fit: cover;
    position: absolute;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    ::before {
        content: '0';
        width: ${props => props.width}%;
        height: ${props => props.height}%;
        border: 10px solid #fff;
    }
`


const photos = [{src: first, height: '30', width: '30', top: '10', left: '5'}, {src: second, height: '40', width: '15', top: '50', left: '5'}, {src: third, height: '60', width: '60', top: '35', left: '30'}]

const Reliable = () => (
    <ReliableSection>
        <TitleContainer>
            <Title>
                #1 Reliable Partner for Retailers
            </Title>
            <Paragraph>
                "Re-engineering the food and grocery market, using empowring technologies and innovative supply chains"
            </Paragraph>
        </TitleContainer>
        {photos.map(photo => <Photo key={photo.src} {...photo}/>)}
    </ReliableSection>
)

export default Reliable;