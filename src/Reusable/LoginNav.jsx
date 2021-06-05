import React, { Component } from 'react'
import styled from 'styled-components'
import prolos from '../Assets/prolos.svg'
import arrowdown from '../Assets/arrowdown.svg'
import {
    Link
  } from "react-router-dom";
import { ContentFont } from '../Styles/basic'
import { logout } from '../actions/setCredentialsAction'
import { connect } from 'react-redux'

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

const Dropdown = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(84, 116, 210, 0.1);
    border-radius: 5px;

    /* Inside Auto Layout */
    margin: 0px 0px;
    padding: 10px 0px;
    width: 110px;
    position: absolute;
    right: 210px;
    top: 70px;
`;

const DropdownContent = styled(ContentFont)`
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */
    align-items: center;
    font-feature-settings: 'tnum' on, 'lnum' on;
    padding: 4px 10px;
    color: #202020;
    cursor: pointer;
    text-decoration: none;
`;

export class LoginNav extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            menu: false,
            component: 'dashboard'
        }
        this.wrapperRef = React.createRef()
        this.handleClickOutside = this.handleClickOutside.bind(this)
    }

    toggleDropdown = () => {
        this.setState({
            menu: !this.state.menu
        })
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside(event) {
        if (this.wrapperRef && !this.wrapperRef.current.contains(event.target)) {
            /*this.setState({
                menu: false
            })*/
        }
    }

    handleComponent = (component) => {
        this.setState({
            component: component
        })
    }

    logout = () => {
        this.props.logout()
    }

    render() {
        return (
            <>
                <MainNav>
                    <Logo>
                        <span>
                            {
                                this.props.isAuthenticated === false ? (
                                    <Link to="/">
                                        <img src={prolos}/>
                                    </Link>
                                ) : (
                                    <Link to="/dashboard">
                                        <img src={prolos}/>
                                    </Link>
                                )
                            }
                        </span>
                    </Logo>
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
                    <Fields onClick={this.toggleDropdown} style={{ textDecoration: 'none', color: '#202020', textAlign: 'left', gridColumn: 'span 3', display: 'inline' }}>Rakshit <img src={arrowdown} style={{ position: 'relative', top: '0px' }} /></Fields>
                </MainNav>
                <Dropdown
                    style={
                        !this.state.menu ? {
                            display: 'none'
                        } : {}
                    }
                    ref={this.wrapperRef}
                >
                    <Link to="/dashboard" style={{ textDecoration: 'none' }}><DropdownContent onClick={() => this.handleComponent('dashboard')} style={this.state.component === 'dashboard' ? { background: 'rgba(84, 116, 210, 0.05)', fontWeight: 600 } : {}}>Dashboard</DropdownContent></Link>
                    <Link to="/support" style={{ textDecoration: 'none' }}><DropdownContent onClick={() => this.handleComponent('support')} style={this.state.component === 'support' ? { background: 'rgba(84, 116, 210, 0.05)', fontWeight: 600 } : {}}>Support Us</DropdownContent></Link>
                    <Link to="/contact" style={{ textDecoration: 'none' }}><DropdownContent onClick={() => this.handleComponent('contact')} style={this.state.component === 'contact' ? { background: 'rgba(84, 116, 210, 0.05)', fontWeight: 600 } : {}}>Contact Us</DropdownContent></Link>
                    <DropdownContent onClick={() => this.handleComponent('logout')} style={this.state.component === 'logout' ? { background: 'rgba(84, 116, 210, 0.05)', fontWeight: 600 } : {}} onClick={this.logout}>Logout</DropdownContent>
                </Dropdown>
            </>
        )
    }
}

export default connect(null, { logout })(LoginNav)
