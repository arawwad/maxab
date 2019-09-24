import React from 'react';
import styled from 'styled-components';
import Section from '../global/Section';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import email from './email.svg';
import message from './message.svg';
import person from './person.svg';

const Button = styled.button`
    width: 225px;
    height: 54px;
    border-radius: 4px;
    background-color: #e9475b;
    font-size: 14px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
    margin: 0 auto;
    margin-bottom: 60px;
`

const Input = styled.input`
    margin-bottom: 40px;
    height: 54px !important;
    background-image: url(${props => props.icon});
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) 50%;
    &:focus {
        border-color: #e9475b !important;
    }
`
const Textarea = styled.textarea`
    height: 170px;
    margin-bottom: 40px;
    resize: none;
    background-image: url(${message});
    background-repeat: no-repeat;
    background-position: calc(100% - 20px) 15%;
    &:focus {
        border-color: #e9475b !important;
    }
`



const ContactUs = () => (
    <Section>
        <div className="container">
            <div className="row">
                <Title center>Contact Us</Title>
                <Paragraph center>There are many variations of passages of Lorem Ipsum available,</Paragraph>
            </div>
            <div className="row">
                <form style={{ textAlign: 'center' }}>
                    <div className="row">
                        <div className="six columns">
                            <Input icon={person} className="u-full-width" type="text" placeholder="first name" />
                        </div>
                        <div className="six columns">
                            <Input icon={person} className="u-full-width" type="text" placeholder="last name" />
                        </div>
                    </div>
                    <Input icon={email} className="u-full-width" type="email" placeholder="email address" />
                    <Textarea className="u-full-width" placeholder="Hi Dave …" id="exampleMessage"></Textarea>
                    <Button>Send message</Button>
                </form>
            </div>
        </div>
    </Section>
)

export default ContactUs;