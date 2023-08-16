import {useState} from "react";
import {Col, Container, Row} from "react-bootstrap";
// import Cards from "../component/card";
import {useLoaderData, Link} from "react-router-dom";
import data from "../data";
import Header from "../component/Header";
import ReportSrc from '../img/report.png'
import * as styles from "../style/Styles"
import SlideShow from "../component/SlideShow";
import ModalContent from "../component/ModalContent"
import Modal from "react-modal";

export async function loader() {
    const shoes = data;
    return {shoes};
}

export default function Main(props) {
    // const {shoes} = useLoaderData();

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    // const showModal = () => {
    //     setModalOpen(true);
    // }

    return (
        <>
            <Header/>
            <styles.MainBgContainer className="main-bg">
                <Container>
                    {/*{modalOpen && <ReportModal setModalOpen={setModalOpen}/>}*/}
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        style={{overlay: {
                                position: 'fixed',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.75)'
                            },
                            content: {
                                position: 'absolute',
                                top: '10%',
                                left: '30%',
                                right: '30%',
                                bottom: '10%',
                                border: 'none',
                                background: 'rgb(252, 175, 23)',
                                overflow: 'auto',
                                WebkitOverflowScrolling: 'touch',
                                borderRadius: '15px',
                                outline: 'none',
                                padding: '4% 4% 1% 4%',
                                boxShadow: '8px 16px 16px hsl(0deg 0% 0% / 0.25)',
                            }}}>
                        <ModalContent setModalIsOpen={setModalIsOpen}/>
                    </Modal>
                    <Row className="justify-content-around">
                        <Col sm={4}>
                            <Row sm={10}>
                                <styles.AnimatedImage src={ReportSrc} onClick={() => {
                                    // showModal();
                                    console.log("button click");
                                    setModalIsOpen(true)
                                }}/>
                            </Row>
                            <Link to={'report/' + dateString}>
                                <Row sm={2} className="justify-content-center" style={{marginTop: `10%`}}>

                                    <styles.Button className="btn-grad kb-font-color">
                                        오늘의
                                        <span className="btn-mini"> 금융 리포트 </span>
                                        확인
                                    </styles.Button>

                                </Row>
                            </Link>
                        </Col>
                        <Col sm={5}>
                            <SlideShow/>
                        </Col>
                    </Row>
                </Container>
            </styles.MainBgContainer>
            {/*<Container style={{ paddingTop: '5%' }}>*/}
            {/*    <Row>*/}
            {/*        {shoes.map((a, i) => (*/}
            {/*            <Cards shoes={shoes[i]} key={i}></Cards>*/}
            {/*        ))}*/}
            {/*    </Row>*/}
            {/*</Container>*/}
        </>
    );
}
