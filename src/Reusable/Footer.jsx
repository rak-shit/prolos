import React, { Component } from 'react'
import styled from 'styled-components'
import footer from '../Assets/footer.svg'

const MainNav = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    background-color: #f9fafd;
    padding: 2rem 12rem;
    @media (min-width: 1500px) {
        padding: 2rem 20rem;
    }
    @media (min-width: 1700px) {
        padding: 2rem 25rem;
    }
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

export class Footer extends Component {
    render() {
        return (
            <MainNav>
                <Logo><span><img src={footer}/></span></Logo>
                <Space />
                <Fields>Support</Fields>
                <Fields>Contact</Fields>
            </MainNav>
        )
    }
}

export default Footer
