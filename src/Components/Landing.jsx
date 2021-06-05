import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer'
import hero from '../Assets/hero.svg'
import upload from '../Assets/upload.svg'
import table from '../Assets/table.svg'
import { MainFont, ContentFont } from '../Styles/basic'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Textfield from '@atlaskit/textfield'
import { Checkbox } from '@atlaskit/checkbox'
import cross from '../Assets/cross.svg'
import axios from 'axios'
import { connect } from 'react-redux'
import { login } from '../actions/setCredentialsAction'
import PropTypes from 'prop-types'
import {
    Link
  } from "react-router-dom"

const MainDiv = styled.div`
    background-color: #f9fafd;
    padding: 2rem 12rem;
    padding-bottom: 5rem;
    min-height: calc(100vh - 100px);
    @media (min-width: 1500px) {
        padding: 2rem 12rem;
    }
    @media (min-width: 1700px) {
        padding: 2rem 12rem;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding-top: 10rem;
`;

const GridLeft = styled.div`
    display: grid;
    grid-column: span 12;
`;

const GridRight = styled.div`
    display: grid;
    grid-column: span 12;
    margin-top: -6rem;
    @media (min-width: 1500px) {
        margin-left: 6rem;
    }
    @media (min-width: 1700px) {
        margin-left: 10rem;
    }
`;

const Title = styled.div`  
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 58px;
    color: #202020;
    width: 80%;
    font-family: 'Source Serif Pro', serif;
`;

const SubTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #828282;
    width: 80%;
    margin-top: -4rem;
    font-family: 'Work Sans', sans-serif;
`;

const ButtonLogin = styled.span`
    background: #5474D2;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: #ffffff;
    border-radius: 5px;
    padding: 10px 20px;
    font-family: 'Work Sans', sans-serif;
`;

const ButtonSignup = styled.span`
    background: #ffffff;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    color: #5474d2;
    border-radius: 5px;
    padding: 10px 20px;
    border: 1.5px solid #5474D2;
    box-sizing: border-box;
    margin-left: 2rem;
    font-family: 'Work Sans', sans-serif;
`;

const ContentTitle = styled(MainFont)`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 38px;
    text-align: center;
    color: #202020;
    margin: 1rem auto;
    margin-bottom: 0rem;
    width: 50%;
`;

const ContentSubTitle = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height, or 150% */
    text-align: center;
    margin: 0rem auto;
    margin-bottom: 3rem;
    width: 50%;
    color: #828282;
`;

const Section = styled.div`
    display: grid;
`;

const SectionTitle = styled(ContentFont)`
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 36px;
    /* or 150% */
    color: #202020;
    width: 70%;
    margin-top: 4rem;
`;

const SectionContent = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* or 150% */
    width: 90%;
    /* Color - Grey 3 */
    color: #828282;
    margin-bottom: 2rem;
`;

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-gap: 1rem;
    align-content: center;
    margin: 0rem 2rem;
`;

const StatItem = styled.div`
    display: grid;
    grid-column: span 6;
    background: #FFFFFF;
    box-shadow: 0px 2.77291px 16.6374px rgba(84, 116, 210, 0.1);
    border-radius: 6.93227px;
`;

const StatHeading = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 18px;
    /* identical to box height, or 133% */
    padding: 1rem;
    padding-top: 2rem;
    color: #5474D2;
`;

const StatContent = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 28px;
    line-height: 18px;
    /* or 67% */
    padding: 1rem;
    padding-top: 0rem;
    padding-bottom: 2rem;
    color: #202020;
`;

const Banner = styled.div`
    background: #5474D2;
    border-radius: 5px;
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding: 2rem 12rem;
    @media (min-width: 1500px) {
        padding: 2rem 20rem;
    }
    @media (min-width: 1700px) {
        padding: 2rem 25rem;
    }
`;

const BannerText = styled(MainFont)`
    font-style: normal;
    font-weight: 600;
    font-size: 32px;
    line-height: 40px;
    color: #FFFFFF;
    display: grid;
    grid-column: span 16;
    width: 80%;
`;

const SignUp = styled(ButtonSignup)`
    display: grid;
    grid-column: span 4;
    border: 1.5px solid #FFFFFF;
    box-sizing: border-box;
    border-radius: 5px;
    font-weight: normal;
    font-size: 20px;
    background: #5474D2;
    line-height: 27px;
    /* identical to box height, or 135% */
    height: 50px;
    color: #FFFFFF;
    margin: 0 auto;
    margin-top: 1rem;
    margin-left: 3rem;
    @media (max-width: 1400px) {
        padding: 10px 10px;
    }
`;

export const Heading = styled(ContentFont)`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    /* or 111% */
    padding-bottom: 10px;
    color: #202020;
`;

const Label = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    /* identical to box height, or 169% */
    display: flex;
    align-items: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #6A6A6A;
`;

const FormButton = styled.div`
    background: #5474D2;
    border-radius: 5px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 27px;
    /* or 169% */
    text-align: center;
    padding: 5px;
    /* White */
    color: #FFFFFF;
    margin-top: 2rem;
    cursor: pointer;
`;

const LoginText = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 22px;
    /* identical to box height, or 169% */
    text-align: center;
    font-feature-settings: 'tnum' on, 'lnum' on;
    margin: 0 auto;
    color: #6A6A6A;
    padding-top: 10px;
`;

const Question = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
`;

const RememberMe = styled.div`
    display: grid;
    grid-column: span 7;
`;

const Forgot = styled.div`
    display: grid;
    grid-column: span 5;
    margin-left: 16px;
`;

export class Landing extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            signup: false,
            login: false,
            earlyAccess: false,
            name: '',
            email: '',
            password: ''
        }
    }

    openSignup = () => {
        this.setState({
            signup: true
        })
    }

    openLogin = () => {
        this.setState({
            login: true
        })
    }

    openEarlyAccess = () => {
        this.setState({
            earlyAccess: true
        })
    }

    signUp = () => {
        axios.post('https://prolos.herokuapp.com/signup', {
            displayName: this.state.name,
            email: this.state.email,
            password: this.state.password
          },
          {
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
          })
          .then((response) => {
            console.log(response)
            this.setState({
                signup: false
            })
          })
          .catch((error) => {
              console.log(error)
          })
    }

    isValid = () => {
        if (this.state.email === '' || this.state.password === '') {
            return false
        }
        return true
    }

    loginAccount = () => {
        if (this.isValid()) {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            this.props.login(data)
                .then((res) => {
                    console.log(this.props, 'result-login')
                    this.props.history.push('/dashboard')
                })
                .catch((err) => console.log(err, 'err'))
        } else {
            console.log('error')
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    componentDidMount() {
        console.log(this.props.auth, 'creds')
    }

    render() {
        return (
            <>
                {
                    this.state.signup ? (
                        <div>
                            <ModalTransition>
                                <Modal width="small" stackIndex={13}>
                                    <div style={{ padding: '20px' }}>
                                        <Heading>Sign Up<img style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.setState({ signup: false })} src={cross} /></Heading>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Name</Label>
                                            <Textfield onChange={this.handleChange} name="name" placeholder={`Enter Name`} />
                                        </div>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Email</Label>
                                            <Textfield onChange={this.handleChange} name="email" placeholder={`Email`} />
                                        </div>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Password</Label>
                                            <Textfield onChange={this.handleChange} name="password" placeholder={`Password`} />
                                        </div>
                                        <div style={{ width: '100%' }}>
                                            <FormButton onClick={this.signUp}>Sign Up</FormButton>
                                        </div>
                                        <LoginText>Already have an account? <span style={{ color: '#5474d2', cursor: 'pointer' }}>Login</span></LoginText>
                                    </div>
                                </Modal>
                            </ModalTransition>
                        </div>
                    ) : null
                }
                {
                    this.state.login ? (
                        <div>
                            <ModalTransition>
                                <Modal width="small" stackIndex={13}>
                                    <div style={{ padding: '20px' }}>
                                        <Heading>Login<img style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.setState({ login: false })} src={cross} /></Heading>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Email</Label>
                                            <Textfield onChange={this.handleChange} name="email" placeholder={`Email`} />
                                        </div>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Password</Label>
                                            <Textfield onChange={this.handleChange} name="password" placeholder={`Password`} />
                                        </div>
                                        <Question style={{ paddingTop: '10px' }}>
                                            <RememberMe><Checkbox label={<Label>Remember Me</Label>} /></RememberMe>
                                            <Forgot><Label>Forgot Password?</Label></Forgot>
                                        </Question>
                                        <div style={{ width: '100%' }}>
                                            <FormButton style={{ marginTop: '1rem', color: '#ffffff' }} onClick={this.loginAccount}>Login</FormButton>
                                        </div>
                                        <LoginText>Don't have an account? <span style={{ color: '#5474d2', cursor: 'pointer' }}>Signup</span></LoginText>
                                    </div>
                                </Modal>
                            </ModalTransition>
                        </div>
                    ) : null
                }
                {
                    this.state.earlyAccess ? (
                        <div>
                            <ModalTransition>
                                <Modal width="small" stackIndex={13}>
                                    <div style={{ padding: '20px' }}>
                                        <Heading>Early Access Program<img style={{ float: 'right', cursor: 'pointer' }} onClick={() => this.setState({ earlyAccess: false })} src={cross} /></Heading>
                                        <Label>We are currently accepting a limited number of early access customers who are eager to use our product. Early access customers will recieve lifelong discounts from us.</Label>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Name <span style={{ color: '#d25474' }}> *</span></Label>
                                            <Textfield placeholder={`Enter Name`} />
                                        </div>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Email <span style={{ color: '#d25474' }}> *</span></Label>
                                            <Textfield placeholder={`Enter Email`} />
                                        </div>
                                        <div style={{ paddingTop: '20px' }}>
                                            <Label>Twitter Handle</Label>
                                            <Textfield placeholder={`Twitter Handle`} />
                                        </div>                                        
                                        <div style={{ width: '100%', paddingBottom: '10px' }}>
                                            <FormButton onClick={() => this.setState({ earlyAccess: false })} style={{ marginTop: '1rem', color: '#ffffff', cursor: 'pointer' }}>Request Early Access</FormButton>
                                        </div>
                                    </div>
                                </Modal>
                            </ModalTransition>
                        </div>
                    ) : null
                }
                <MainDiv>
                    <Nav />
                    <Grid>
                        <GridLeft>
                            <Title>Now know your <br /><span style={{ color: '#5474d2' }}>Crypto profits & losses in seconds.</span></Title>
                            <SubTitle>Upload your Trade Reports and see a summary of your profits and losses for each coin.</SubTitle>
                            <span style={{ marginTop: '-3rem' }}>
                                <ButtonLogin style={{ cursor: 'pointer' }} onClick={this.openLogin}>Login</ButtonLogin>
                                <ButtonSignup style={{ cursor: 'pointer' }} onClick={this.openSignup}>Sign Up</ButtonSignup>
                                {/*<ButtonLogin style={{ cursor: 'pointer' }} onClick={this.openEarlyAccess}>Request Early Access</ButtonLogin>*/}
                            </span>
                        </GridLeft>
                        <GridRight>
                            <img src={hero} />
                        </GridRight>
                    </Grid>
                    <Section>
                        <ContentTitle>Track your Cryptocurrency investments better.</ContentTitle>
                        <ContentSubTitle>Changing the way people monitor their investments.</ContentSubTitle>
                        <Grid style={{ paddingTop: '2rem' }}>
                            <GridLeft>
                                <SectionTitle>
                                    Evaluate your portfolio at a glance.
                                </SectionTitle>
                                <SectionContent>Everything you need to know about your assets is now available at one single place.</SectionContent>
                            </GridLeft>
                            <GridRight style={{ marginTop: '0rem', marginLeft: '5rem' }}>
                                <Stats>
                                    <StatItem>
                                        <StatHeading>
                                            Realised P&L
                                        </StatHeading>
                                        <StatContent>
                                            4.5K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Unrealised P&L
                                        </StatHeading>
                                        <StatContent>
                                            1.5K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Invested Amount
                                        </StatHeading>
                                        <StatContent>
                                            30.2K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Portfolio Value
                                        </StatHeading>
                                        <StatContent>
                                            40.1K
                                        </StatContent>
                                    </StatItem>
                                </Stats>
                            </GridRight>
                        </Grid>
                        <Grid style={{ paddingTop: '7rem' }}>
                            <GridLeft>
                                <img src={upload} />
                            </GridLeft>
                            <GridRight>
                                <SectionTitle style={{ marginTop: '9rem' }}>
                                    Upload your trade reports and we do the rest for you.
                                </SectionTitle>
                                <SectionContent>Export your trading reports from the beginning to get accurate data. You may obtain them from your service provider.</SectionContent>
                            </GridRight>
                        </Grid>
                        <Grid style={{ paddingTop: '5rem' }}>
                            <GridLeft style={{ marginTop: '0rem' }}>
                                <SectionTitle>
                                    Get in-depth insights and information about each coin.
                                </SectionTitle>
                                <SectionContent style={{ marginTop: '1rem' }}>Find live rates, profits, losses, and a plethora of other metrics tailored specifically for cryptocurrency traders.</SectionContent>
                            </GridLeft>
                            <GridRight style={{ marginTop: '1rem', marginLeft: '5rem' }}>
                                <img src={table} />
                            </GridRight>
                        </Grid>
                    </Section>
                </MainDiv>
                <Banner>
                    <BannerText>Sign up for Prolos today to monitor your investments.</BannerText>
                    <SignUp>Sign Up</SignUp>
                </Banner>
                <Footer />
            </>
        )
    }
}

Landing.propTypes = {
    login: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
      auth: state.credentials
    };
  }

export default connect(mapStateToProps, { login })(Landing)
