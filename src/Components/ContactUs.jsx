import React, { Component } from 'react'
import styled from 'styled-components'
import Nav from '../Reusable/Nav'
import Textfield from '@atlaskit/textfield'
import contact from '../Assets/contact.svg'
import { ContentFont } from '../Styles/basic'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { LoginNav } from '../Reusable/LoginNav'

const MainDiv = styled.div`
    background-color: #f9fafd;
    padding: 2rem 12rem;
    padding-bottom: 5rem;
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
    padding-top: 8rem;
`;

const GridLeft = styled.div`
    display: grid;
    grid-column: span 12;
`;

const GridRight = styled.div`
    display: grid;
    grid-column: span 12;
    margin-top: 4rem;
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
    width: 80%;
    font-family: 'Source Serif Pro', serif;
`;

const SubTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    color: #828282;
    width: 100%;
    margin-top: 1rem;
    font-family: 'Work Sans', sans-serif;
`;

const FormComponent = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(84, 116, 210, 0.1);
    border-radius: 5px;
    padding: 30px;
    width: 70%;
    margin-top: 2rem;
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
    margin-top: 1rem;
`;

class ContactUs extends Component {
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
                            <Title>Contact Us</Title>
                            <SubTitle>If you run into any problems, have any suggestions for new features, want to give us feedback, or just want to say hello, please contact us!</SubTitle>
                            <FormComponent>
                                <div style={{ paddingTop: '1rem' }}>
                                    <Label>Name</Label>
                                    <Textfield placeholder={`Enter Name`} />
                                </div>
                                <div style={{ paddingTop: '1rem' }}>
                                    <Label>Email</Label>
                                    <Textfield placeholder={`Enter Email`} />
                                </div>
                                <div style={{ paddingTop: '1rem' }}>
                                    <Label>Message</Label>
                                    <Textfield
                                        placeholder={`Enter Message`} 
                                        css={{
                                            paddingTop: 10,
                                            paddingBottom: 10
                                        }}
                                    />
                                </div>
                                <div style={{ paddingTop: '1rem' }}>
                                    <FormButton>Send</FormButton>
                                </div>
                            </FormComponent>
                        </GridLeft>
                        <GridRight>
                            <img src={contact} />
                        </GridRight>
                    </Grid>
                </MainDiv>
            </>
        )
    }
}

ContactUs.propTypes = {
    auth: PropTypes.object.isRequired
}

function mapStateToProps(state) {
    return {
      auth: state.credentials
    };
}

export default connect(mapStateToProps, null)(ContactUs)
