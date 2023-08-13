import { Col, Container, Row } from "react-bootstrap";
import Cards from "../component/card";
import { useLoaderData } from "react-router-dom";
import data from "../data";
import Header from "../component/header";
import styled from 'styled-components';
import ReportSrc from '../img/report.png'

export async function loader() {
    const shoes = data;
    return { shoes };
}

const MainBgContainer = styled.div`
  display: flex;
  justify-content: center; /* Center align horizontally */
  align-items: center; /* Center align vertically */
  margin-bottom: 10px;
`

const AnimatedImage = styled.img`
  max-width: 100%;
  height: auto;
  transition: transform 0.3s ease-in-out; /* Transition for the animation effect */
  &:hover {
    transform: scale(1.1);
    cursor: pointer/* Scale up the image on hover */
  }
`;


export default function Main(props) {
    const { shoes } = useLoaderData();

    return (
        <>
            <Header />
            <MainBgContainer className="main-bg">
                <Container>
                    <Row className="justify-content-around">
                        <Col sm={4}>
                            <Row sm={10}>
                                <AnimatedImage src={ReportSrc} />
                            </Row>
                            <Row sm={2} className="justify-content-center" style={{marginTop: `10%`}}>
                                button
                            </Row>
                        </Col>
                        <Col sm={5} style={{marginTop: `10%`}}>
                            <Row sm={3} Row className="justify-content-end">service title</Row>
                            <Row sm={3} style={{marginTop: `10%`}} Row className="justify-content-end">explain</Row>
                        </Col>
                    </Row>
                </Container>
            </MainBgContainer>
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
