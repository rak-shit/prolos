import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Reusable/Nav'
import Textfield from '@atlaskit/textfield'
import support from '../Assets/support.svg'
import binance from '../Assets/binance.svg'
import card from '../Assets/card.svg'
import upi from '../Assets/upi.svg'
import arrow from '../Assets/arrow.svg'
import { ContentFont } from '../Styles/basic'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LoginNav } from '../Reusable/LoginNav'

const MainDiv = styled.div`
    background-color: #f9fafd;
    padding: 2rem 12rem;
    padding-bottom: 4rem;
    min-height: calc(100vh - 100px);
    @media (min-width: 1500px) {
        padding: 2rem 15rem;
    }
    @media (min-width: 1700px) {
        padding: 2rem 15rem;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(24, 1fr);
    padding-top: 14rem;
`;

const GridLeft = styled.div`
    display: grid;
    grid-column: span 12;
`;

const GridRight = styled.div`
    display: grid;
    grid-column: span 12;
    margin-top: -8rem;
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
    color: #5474d2;
    width: 100%;
    font-family: 'Source Serif Pro', serif;
`;

const DonateCard = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(84, 116, 210, 0.1);
    border-radius: 5px;
    padding: 30px 10px;
    width: 80%;
    max-height: 30px;
`;

const DonateText = styled.p`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 20px;
    /* identical to box height, or 111% */
    color: #202020;
    font-family: Work Sans;
    margin-top: -0.6rem;
`;

class Support extends Component {
    componentDidMount() {
        console.log(this.props.auth.isAuthenticated, 'nav')
    }
    componentDidUpdate() {
        console.log(this.props.auth, 'nav')
    }
    render() {
        return (
            <>
                <MainDiv>
                    {
                        this.props.auth.isAuthenticated === true ? (
                            <LoginNav isAuthenticated={this.props.auth.isAuthenticated} />
                        ) : <Nav />
                    }
                    <Grid>
                        <GridLeft>
                            <Title>Help us<span style={{ color: '#202020' }}> in providing a better service to you.</span></Title>
                            <DonateCard>
                                <DonateText>Donate through Binance <img style={{ position: 'relative', top: '-1px' }} src={binance} /><img src={arrow} style={{ float: 'right', marginTop: '0px' }} /></DonateText>
                            </DonateCard>
                            <DonateCard>
                                <DonateText>Donate through Card/UPI <img style={{ position: 'relative', top: '-1px' }} src={upi} /><img src={card} style={{ position: 'relative', top: '0px', paddingLeft: '4px' }} /> <img src={arrow} style={{ float: 'right', marginTop: '0px' }} /></DonateText>
                            </DonateCard>
                        </GridLeft>
                        <GridRight>
                            <img src={support} />
                        </GridRight>
                    </Grid>
                </MainDiv>
            </>
        )
    }
}

Support.propTypes = {
    auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
      auth: state.credentials
    };
  }

export default connect(mapStateToProps, null)(Support)
