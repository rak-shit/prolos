import React, { Component } from 'react'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'
import Textfield from '@atlaskit/textfield'
import styled from 'styled-components'
import { MainFont, ContentFont } from '../Styles/basic'

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

class Signup extends Component {
    render() {
        return (
            <div>
                <ModalTransition>
                    <Modal width="small" stackIndex={13}>
                        <div style={{ padding: '20px' }}>
                            <Heading>Sign Up</Heading>
                            <div style={{ paddingTop: '20px' }}>
                                <Label>Name</Label>
                                <Textfield placeholder={`Enter Name`} />
                            </div>
                            <div style={{ paddingTop: '20px' }}>
                                <Label>Email</Label>
                                <Textfield placeholder={`Email`} />
                            </div>
                            <div style={{ paddingTop: '20px' }}>
                                <Label>Password</Label>
                                <Textfield placeholder={`Password`} />
                            </div>
                            <div style={{ width: '100%' }}>
                                <FormButton>Sign Up</FormButton>
                            </div>
                            <LoginText>Already have an account? <span style={{ color: '#5474d2', cursor: 'pointer' }}>Login</span></LoginText>
                        </div>
                    </Modal>
                </ModalTransition>
            </div>
        )
    }
}

export default Signup
