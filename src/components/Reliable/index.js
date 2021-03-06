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
    @media (max-width: 768px) {
        font-size: 18px;
    }
`

const ReliableSection = styled(Section)`
    position: relative;
    min-height: 100vh;
    background-image: linear-gradient(to right, #e9475b 40%, #fff 30%); 
`

const ReliableTitle = styled(Title)`
    @media (max-width: 768px) {
        font-size: 20px;
    }
`

const Photo = styled.img`
    object-fit: cover;
    position: absolute;
    width: ${props => props.width}%;
    height: ${props => props.height}%;
    top: ${props => props.top}%;
    left: ${props => props.left}%;
    border: 20px solid white;
    :before {
        content: '22';
        position: absolute;
        width: 100%;
        height: 100%;
        border: 10px solid white;
        left: 30px;
        top: -30px;
        z-index: -1;
    }
    @media (max-width: 768px) {
        display: none;
    }
`


const photos = [{ src: first, height: '30', width: '30', top: '10', left: '5' }, { src: second, height: '40', width: '15', top: '50', left: '5' }, { src: third, height: '60', width: '60', top: '40', left: '30' }]

const Reliable = () => (
    <ReliableSection>
        <TitleContainer>
            <ReliableTitle>
                #1 Reliable Partner for Retailers
            </ReliableTitle>
            <Paragraph>
                "Re-engineering the food and grocery market, using empowring technologies and innovative supply chains"
            </Paragraph>
        </TitleContainer>
        {photos.map(photo => <Photo key={photo.src} {...photo} />)}
    </ReliableSection>
)

export default Reliable;