import React from 'react'
import styled from 'styled-components';
import facebook from './facebook.svg';
import google from './google-plus.svg';
import linkedIn from './linked-in.svg';
import twitter from './twitter.svg';


const Wrapper = styled.footer`
    background-color: #3477ae;
    height: 74px;
    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Link = styled.a`
    font-size: 14px;
    text-decoration: none;
    color: #ffffff;
    margin-right: 20px;
`

const Icon = styled.img`
    margin-right: 10px;
`

const links = [{title: 'Status', link: '#'}, {title: 'Privacy & Terms', link: '#'}, {title: 'Contact Us', link: '#'}]
const socials = [{icon: facebook, link: '#'}, {icon: google, link: '#'}, {icon: linkedIn, link: '#'}, {icon: twitter, link: '#'}]

const Footer = () => (
    <Wrapper>
        <div>
            {links.map(link => <Link href={link.link}>{link.title}</Link>)}
        </div>
        <div>
            {socials.map(social => (<a key={social.icon} href={social.link}>
                <Icon src={social.icon}></Icon>
            </a>))}
        </div>
    </Wrapper>
)

export default Footer;