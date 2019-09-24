import React from 'react';
import Section from '../global/Section';
import Title from '../global/Title';
import Paragraph from '../global/Paragraph';
import Card from './Card.js';
import panel1 from './panel-1.jpg';
import panel2 from './panel-2.jpg';
import panel3 from './panel-3.jpg';

const cardsContent = [{ img: panel1, title: "Connect", text: "We eliminate unnecessary transactions, processes and costs to ensure the efficient distribution of goods." }, { img: panel2, title: "Optimize", text: "We eliminate unnecessary transactions, processes and costs to ensure the efficient distribution of goods." }, { img: panel3, title: "Serve", text: "We eliminate unnecessary transactions, processes and costs to ensure the efficient distribution of goods." }]

const WhatWeDo = () => (
    <Section>
        <div className="container" style={{paddingBottom: '50px'}}>
            <div className="row">
                <div className="twelve columns">
                    <Title center>What We Actually Do</Title>
                    <Paragraph>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form</Paragraph>
                </div>
            </div>
            <div className="row">
                {cardsContent.map(cardContent => <Card key={cardContent.title} cardContent={cardContent} />)}
            </div>
        </div>
    </Section>
)

export default WhatWeDo;