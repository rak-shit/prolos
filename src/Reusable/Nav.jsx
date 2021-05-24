import React, { Component } from 'react'
import styled from 'styled-components'
import prolos from '../Assets/prolos.svg'

const MainNav = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
`;

const Logo = styled.div`
    display: grid;
    grid-column: span 4;
`;

const Space = styled.div`
    display: grid;
    grid-column: span 14;
    text-align: right;
`;

const Fields = styled.div`
    display: grid;
    grid-column: span 3;
    text-align: right;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
`;

export class Nav extends Component {
    render() {
        return (
            <MainNav>
                <Logo><span><img src={prolos}/></span></Logo>
                <Space />
                <Fields>Support</Fields>
                <Fields>Contact</Fields>
            </MainNav>
        )
    }
}

export default Nav
