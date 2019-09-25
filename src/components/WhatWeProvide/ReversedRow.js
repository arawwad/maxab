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
    margin-top: 100px;
`

const RightContainer = styled.div`
    margin-top: -100px;
    overflow: hidden;
    position: relative;
    margin-left: 29px !important;
    padding-left: 29px;
        @media (max-width: 768px) {
        display: none;
    }
`

// const Box = styled.div`
//     height: 800px;
//     width: 500px;
//     border: solid 2px #e9475b;
//     position: absolute;
//     z-index: -1;
//     left: -300px;
//     top: 0;
//  `


const ReversedRow = ({ row }) => (
    <Fade duration={1500} bottom>
        <div className="row">
            <CenteredText className="six columns">
                <Title size="20px">{row.title}</Title>
                <Paragraph open color="#656e77">{row.text}</Paragraph>
            </CenteredText>
            <RightContainer className="six columns">
                {/* <Box /> */}
                <img style={{ maxWidth: '544px', marginTop: '70px', width: '100%' }} src={row.img} alt="" />
            </RightContainer>
        </div>
    </Fade>
)

export default ReversedRow;