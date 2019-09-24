import React from 'react';
import styled from 'styled-components';
import Section from '../global/Section';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import Stat from './Stat';


const Button = styled.button`
    width: 200px;
    height: 60px;
    border-radius: 4px;
    box-shadow: 0 10px 50px 0 rgba(7, 42, 68, 0.12);
    background-color: #3477ae;
    font-family: OpenSans;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;
    color: #ffffff;
    text-transform: uppercase;
`

const NumbersContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: flex-end;
`

const stats = [{number: 50, name: 'Lorem Ipsum', id: '1'},{number: 33, name: 'Lorem Ipsum', id: '2'}, {number: 59, name: 'Lorem Ipsum', id: '3'}, {number: 60, name: 'Lorem Ipsum', id: '4'}, {number: 50, name: 'Lorem Ipsum', id: '5'}, {number: 50, name: 'Lorem Ipsum', id: '6'}];


const ContactUs = () => (
    <Section className="container" ons>
        <div className="row" style={{ paddingTop: '80px' }}>
            <div className="five columns">
                <Title>Numbers Talk</Title>
                <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure </Paragraph>
                <Button>Request A Call</Button>
            </div>
            <div className="seven columns">
                <NumbersContainer>
                    {stats.map(stat => <Stat Key={stat.id} {...stat} />)}
                </NumbersContainer>
            </div>
        </div>
    </Section>
)

export default ContactUs;