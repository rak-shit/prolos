import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Reusable/Nav'
import Footer from '../Reusable/Footer'
import hero from '../Assets/hero.svg'
import upload from '../Assets/upload.svg'
import table from '../Assets/table.svg'
import { MainFont, ContentFont } from '../Styles/basic'

const MainDiv = styled.div`
    background-color: #f9fafd;
    padding: 2rem 12rem;
    padding-bottom: 5rem;
    min-height: calc(100vh - 100px);
    @media (min-width: 1500px) {
        padding: 2rem 20rem;
    }
    @media (min-width: 1700px) {
        padding: 2rem 25rem;
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

export class Landing extends Component {
    render() {
        return (
            <>
                <MainDiv>
                    <Nav />
                    <Grid>
                        <GridLeft>
                            <Title>Now know your <br /><span style={{ color: '#5474d2' }}>Crypto profits & losses in seconds.</span></Title>
                            <SubTitle>Upload your Trade Reports and see a summary of your profits and losses for each coin.</SubTitle>
                            <span style={{ marginTop: '-3rem' }}>
                                <ButtonLogin>Login</ButtonLogin>
                                <ButtonSignup>Sign Up</ButtonSignup>
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

export default Landing
