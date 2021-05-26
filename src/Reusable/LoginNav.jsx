import React, { Component } from 'react'
import styled from 'styled-components'
import prolos from '../Assets/prolos.svg'
import arrowdown from '../Assets/arrowdown.svg'
import {
    Link
  } from "react-router-dom";

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
    grid-column: span 10;
    text-align: right;
`;

const Fields = styled.div`
    display: grid;
    grid-column: span 7;
    text-align: right;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    padding: 0px 20px;
    @media (min-width: 1400px) {
        margin-left: 1.1rem;
    }
    @media (min-width: 1500px) {
        margin-left: 3rem;
    }
    @media (min-width: 1700px) {
        margin-left: 4.5rem;
    }
`;

const FieldsU = styled.div`
    display: grid;
    grid-column: span 7;
    text-align: right;
    font-family: 'Work Sans', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;
    cursor: pointer;
    padding: 0px 20px;
    @media (min-width: 1400px) {
        position: relative;
        left: 20px;
    }
    @media (min-width: 1500px) {
        position: relative;
        left: 50px;
    }
    @media (min-width: 1700px) {
        position: relative;
        left: 65px;
    }
`;

export class LoginNav extends Component {
    render() {
        return (
            <MainNav>
                <Logo><span><Link to="/"><img src={prolos}/></Link></span></Logo>
                <Space />
                <FieldsU
                    style={{ 
                            textDecoration: 'none', 
                            color: '#5474d2', 
                            borderRight: '1px solid #cecece'
                        }}
                    >
                        Upload Trade Reports
                    </FieldsU>
                <Fields style={{ textDecoration: 'none', color: '#202020', textAlign: 'left', gridColumn: 'span 3', display: 'inline' }}>Rakshit <img src={arrowdown} style={{ position: 'relative', top: '0px' }} /></Fields>
            </MainNav>
        )
    }
}

export default LoginNav
