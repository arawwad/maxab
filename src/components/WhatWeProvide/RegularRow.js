import React from 'react';
import styled from 'styled-components';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import Fade from 'react-reveal/Fade';

const CenteredText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100%;
`


const RegularRow = ({ row }) => (
    <Fade duration={1500} bottom>
        <div className="row" style={{display: 'flex'}}>
            <div className="six columns">
                <img style={{ maxWidth: '544px', width: '100%' }} src={row.img} alt="" />
            </div>
            <CenteredText className="six columns">
                <Title size="20px">{row.title}</Title>
                <Paragraph color="#656e77">{row.text}</Paragraph>
            </CenteredText>
        </div>
    </Fade>
)

export default RegularRow;