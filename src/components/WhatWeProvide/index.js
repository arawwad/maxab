import React from 'react';
import styled from 'styled-components';
import Section from '../global/Section';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import RegularRow from './RegularRow';
import ReversedRow from './ReversedRow';
import truck from './group-2.svg';
import panel1 from './panel-1.jpg';
import panel2 from './panel-2.jpg';
import panel3 from './panel-3.jpg';

const Data = [{ img: panel1, title: 'Consolidation of Orders', text: 'By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.', reversed: false }, { img: panel2, title: 'Delivery any where in 24 hours', text: 'By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.', reversed: true }, { img: panel3, title: 'Price Reference', text: 'By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.By building an extentive logistics network we aim to avall access of groceries to all Egyptian communities.', reversed: false }]

const Container = styled.div`
    width: 65vw;
    margin: 0 auto;
    padding-bottom: 50px;
`

const WhatWeProvide = () => (
    <Section color='radial-gradient(circle at 49% 51%, #ffffff, #f6f6f6);'>
        <Container>
            <div className="row" style={{ textAlign: 'center' }}>
                <img src={truck} style={{marginTop: '60px'}} alt="" />
                <Title center>What Solutions We Provide </Title>
                <Paragraph center>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Paragraph>
            </div>
            {Data.map(row => row.reversed ? <ReversedRow key={row.title} row={row}/> : <RegularRow key={row.title} row={row}/>)}
        </Container>
    </Section>
)

export default WhatWeProvide;