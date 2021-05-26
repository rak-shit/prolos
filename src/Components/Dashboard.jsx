import React, { Component } from 'react'
import styled from 'styled-components'
import LoginNav from '../Reusable/LoginNav'
import { MainFont, ContentFont } from '../Styles/basic'
import dashboard from '../Assets/dashboard.svg'
import plus from '../Assets/plus.svg'
import cross from '../Assets/cross.svg'
import xlxs from '../Assets/xlxs.svg'
import refresh from '../Assets/refresh.svg'
import profit from '../Assets/profit.svg'
import Modal, { ModalTransition } from '@atlaskit/modal-dialog'

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

const WelcomeText = styled(MainFont)`
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 45px;
    padding-top: 8rem;
    color: #202020;
`;

const SubTitle = styled.div`
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 27px;
    color: #828282;
    font-family: 'Work Sans', sans-serif;
    margin-top: 10px;
`;

const Image = styled.div`
    text-align: center;
    margin-top: 5rem;
`;

const UploadText = styled(ContentFont)`
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 27px;
    /* identical to box height, or 180% */
    text-align: center;
    margin-top: 2rem;
    color: #202020;
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
    padding: 10px;
    /* White */
    color: #FFFFFF;
    width: 25%;
    margin: 0 auto;
    margin-top: 2rem;
    cursor: pointer;
`;

const UploadReports = styled(ContentFont)`
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    /* or 111% */
    margin-top: 0.5rem;
    color: #202020;
`;

const UploadBox = styled.div`
    background: rgba(84, 116, 210, 0.04);
    border: 1px dashed #5474D2;
    box-sizing: border-box;
    border-radius: 5px;
    margin: 1rem auto;
    margin-top: 2rem;
    height: 100px;
    cursor: pointer;
`;

const Format = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    /* identical to box height, or 154% */
    margin: 2rem auto;
    text-align: center;
    color: #6A6A6A;
`;

const FileUploadBox = styled.div`
    margin-top: 1rem;
`;

const File = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    margin-top: 10px;
`;

const Xlxs = styled.div`
    display: grid;
    grid-column: span 1;
`;

const Details = styled.div`
    display: grid;
    grid-column: span 10;
    padding-left: 10px;
`;

const Name = styled(ContentFont)`
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 22px;
    /* identical to box height, or 157% */
    display: flex;
    align-items: center;
    font-feature-settings: 'tnum' on, 'lnum' on;

    color: #6A6A6A;
`;

const ProgressBar = styled(ContentFont)`
    font-size: 12px;
`;

const Refresh = styled.span`
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(84, 116, 210, 0.1);
    border-radius: 5px;
    font-family: Work Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 133% */
    color: #5474D2;
    padding: 8px 10px;
    cursor: pointer;
    @media (min-width: 1200px) {
        margin-left: 1rem;
    }
    @media (min-width: 1400px) {
        // margin-left: 5rem;
        float: right;
    }
`;

const Stats = styled.div`
    display: grid;
    grid-template-columns: repeat(15, 1fr);
    grid-gap: 1rem;
    align-content: center;
    margin: 2rem 0rem;
`;

const StatItem = styled.div`
    display: grid;
    grid-column: span 3;
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

const Table = styled.div`
    display: grid;
    grid-template-columns: repeat(25, 1fr);
    background: #FFFFFF;
    box-shadow: 0px 2px 12px rgba(84, 116, 210, 0.1);
    border-radius: 5px;
    margin-top: 2rem;
`;

const TableHeading = styled.div`
    display: grid;
    grid-column: span 3;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    /* identical to box height, or 133% */
    color: #5474D2;
    /* Inside Auto Layout */
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: center;
    margin: 0px 0px;
    padding: 15px;
    border-bottom: 1px solid #efefef;
`

const Empty = styled(ContentFont)`
    display: grid;
    grid-column:  span 1;
    border-bottom: 1px solid #efefef;
`;

const Values = styled(ContentFont)`
    display: grid;
    grid-column: span 3;
    padding: 15px;
    border-bottom: 1px solid #efefef;
`;

const PL = styled.div`
    display: grid;
    grid-column: span 1;
    border-bottom: 1px solid #efefef;
`;

class Dashboard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            empty: false,
            uploadClicked: false,
            uploadedFiles: undefined,
            _progressInfos: []
        }
        this.inputOpenFileRef = React.createRef()
    }

    openUploadDialog = () => {
        this.setState({
            uploadClicked: true
        })
    }

    closeDialog = () => {
        this.setState({
            uploadClicked: false,
            _progressInfos: []
        })
    }

    showOpenFileDlg = () => {
        this.inputOpenFileRef.current.click()
    }

    handleUpload = ({ target: { files } }) => {
        this.setState({
            uploadedFiles: files
        }, () => {
            let _progressInfos = this.state._progressInfos
            for (let i = 0; i < this.state.uploadedFiles.length; i++) {
                _progressInfos.push({ percentage: 50, fileName: this.state.uploadedFiles[i].name })
            }
            this.setState({
                _progressInfos
            })    
        })
    }
    
    render() {
        return (
            <>
                {
                    this.state.uploadClicked ? (
                        <div>
                            <ModalTransition>
                                <Modal width={400} stackIndex={13}>
                                    <div style={{ padding: '10px 0px' }}>
                                        <UploadReports>Upload Trade Reports <img src={cross} style={{ float: 'right', marginTop: '4px', cursor: 'pointer' }} onClick={this.closeDialog} /></UploadReports>
                                        <UploadBox onClick={this.showOpenFileDlg}>
                                            <Image style={{ margin: 'auto' }}>
                                                <img style={{ position: 'relative', top: '30px' }} src={plus} />
                                            </Image>
                                            <Format>(Format accepted: XLXS)</Format>
                                            <input type="file" id="file" ref={this.inputOpenFileRef} onChange={this.handleUpload} style={{display: "none"}} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" multiple />
                                        </UploadBox>
                                        <FileUploadBox>
                                            {
                                                this.state._progressInfos.map((item) => {
                                                    return (
                                                        <File>
                                                            <Xlxs><img src={xlxs} /></Xlxs>
                                                            <Details>
                                                                <Name>
                                                                    {item.fileName}
                                                                </Name>
                                                                <div class="progress" style={{ height: '5px' }}>
                                                                    <ProgressBar
                                                                        className="progress-bar progress-bar-info"
                                                                        role="progressbar"
                                                                        aria-valuenow={item.percentage}
                                                                        aria-valuemin="0"
                                                                        aria-valuemax="100"
                                                                        style={{ width: item.percentage + "%", backgroundColor: '#5474d2' }}
                                                                    />
                                                                </div>
                                                            </Details>
                                                        </File>
                                                    )
                                                })
                                            }
                                        </FileUploadBox>
                                    </div>
                                </Modal>
                            </ModalTransition>
                        </div>
                    ) : null
                }
                <MainDiv>
                    <LoginNav />
                    <WelcomeText>Hey <span style={{ color: '#5474d2' }}>Rakshit,</span></WelcomeText>
                    <SubTitle>Upload all your Trade Reports and get details of the profits and losses on each coin. {!this.state.empty ? <span>Last updated on <span styled={{ fontWeight: 'bold' }}>26 Sep, 2020</span></span> : null}<Refresh>Refresh<span><img src={refresh} style={{ marginBottom: '3px', marginLeft: '3px' }} /></span></Refresh></SubTitle>
                    {
                        this.state.empty ? (
                            <>
                                <Image>
                                    <img src={dashboard} />
                                </Image>
                                <UploadText>You haven’t uploaded any Trade Reports yet. Upload now to get insights.</UploadText>
                                <FormButton onClick={this.openUploadDialog}>Upload Trade Reports</FormButton>
                            </>
                        ) : (
                            <div>
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
                                            -1.5K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Invested Amount
                                        </StatHeading>
                                        <StatContent>
                                            3.2K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Portfolio Value
                                        </StatHeading>
                                        <StatContent>
                                            4.1K
                                        </StatContent>
                                    </StatItem>
                                    <StatItem>
                                        <StatHeading>
                                            Net Profit
                                        </StatHeading>
                                        <StatContent style={{ color: '#55b475' }}>
                                            +900
                                        </StatContent>
                                    </StatItem>
                                </Stats>
                                <Table>
                                    <TableHeading style={{ gridColumn: 'span 2' }}>Coin</TableHeading>
                                    <TableHeading>Quantity</TableHeading>
                                    <TableHeading>Buy Avg.</TableHeading>
                                    <TableHeading>Curr. Price</TableHeading>
                                    <TableHeading>Unreal. PF</TableHeading>
                                    <TableHeading style={{ gridColumn: 'span 4' }}>Invested Amount</TableHeading>
                                    <TableHeading>Coin PVal.</TableHeading>
                                    <TableHeading>Percent</TableHeading>
                                    <Empty />
                                    <Values style={{ gridColumn: 'span 2' }}>
                                        BTC(INR)
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        1
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        +10,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef', gridColumn: 'span 4' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        134%
                                    </Values>
                                    <PL style={{ textAlign: 'center' }}>
                                        <img src={profit} style={{ marginTop: '20px' }} />
                                    </PL>
                                    <Values style={{ gridColumn: 'span 2' }}>
                                        BTC(INR)
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        1
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        +10,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef', gridColumn: 'span 4' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        134%
                                    </Values>
                                    <PL style={{ textAlign: 'center' }}>
                                        <img src={profit} style={{ marginTop: '20px' }} />
                                    </PL>
                                    <Values style={{ gridColumn: 'span 2' }}>
                                        BTC(INR)
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        1
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        +10,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef', gridColumn: 'span 4' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        134%
                                    </Values>
                                    <PL style={{ textAlign: 'center' }}>
                                        <img src={profit} style={{ marginTop: '20px' }} />
                                    </PL>
                                    <Values style={{ gridColumn: 'span 2' }}>
                                        BTC(INR)
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        1
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        +10,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef', gridColumn: 'span 4' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        134%
                                    </Values>
                                    <PL style={{ textAlign: 'center' }}>
                                        <img src={profit} style={{ marginTop: '20px' }} />
                                    </PL>
                                    <Values style={{ gridColumn: 'span 2' }}>
                                        BTC(INR)
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        1
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef' }}>
                                        45,00,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        +10,000
                                    </Values>
                                    <Values style={{ textAlign: 'center', borderRight: '1px solid #efefef', gridColumn: 'span 4' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        5,000
                                    </Values>
                                    <Values style={{ textAlign: 'center' }}>
                                        134%
                                    </Values>
                                    <PL style={{ textAlign: 'center' }}>
                                        <img src={profit} style={{ marginTop: '20px' }} />
                                    </PL>
                                </Table>
                            </div>
                        )
                    }
                </MainDiv>
            </>
        )
    }
}

export default Dashboard
