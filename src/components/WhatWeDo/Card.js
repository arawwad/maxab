import React from 'react';
import styled from 'styled-components';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import Fade from 'react-reveal/Fade'

const Container = styled.div`
    margin-right: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 299.5px;
    height: 347px;
    border-radius: 5px;
    transition: box-shadow 500ms ease;
    :hover{
        box-shadow: 0 3px 18px 0 rgba(4, 17, 26, 0.08);
    }
`

const Image = styled.img`margin-bottom: 20px`

const Card = ({cardContent: {img, title, text}}) => (
    <Fade duration={1500} bottom>
        <Container className="four columns">
            <Image src={img}></Image>
            <Title center size="20px">{title}</Title>
            <Paragraph center normal>{text}</Paragraph>
        </Container>
    </Fade>
)

export default Card;