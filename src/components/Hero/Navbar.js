import React from 'react';
import styled from 'styled-components';
import logo from './group.svg';

const Wrapper = styled.nav`
    display: flex;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    margin-left: 50px;
    margin-top: 50px;
`

const NavItemsContainer = styled.div`
    margin-right: 50px;
    margin-top: 50px;
`

const NavItem = styled.a`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 0.58px;
    color: #ffffff;
    text-transform: uppercase;
    text-decoration: none;
    display: inline-block;
    margin-right: 40px;
    /* :after {
        content: '&nbsp';
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        position: relative;
        left: 10px;
    } */
`

const navItems = [{ text: 'About us', link: '#' }, { text: 'Mission', link: '#' }, { text: 'How it works', link: '#' }, { text: 'Contact us', link: '#' }]


const Navbar = () => {
    return (
        <Wrapper>
            <LogoContainer>
                <img src={logo} alt="" />
            </LogoContainer>
            <NavItemsContainer>
                {navItems.map(item => <NavItem href={item.link}>{item.text}</NavItem>)}
            </NavItemsContainer>
        </Wrapper>
    )
}

export default Navbar;