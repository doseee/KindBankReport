import {Col, Container, Row} from "react-bootstrap";
import Cards from "../component/card";
import {useLoaderData} from "react-router-dom";
import data from "../data";
import Header from "../component/header";

export async function loader() {
    const shoes = data;
    return { shoes };
}

export default function Main(props) {

    const { shoes } = useLoaderData();

    return (
        <>
            {/*{console.log(localStorage.getItem("userId"))}*/}
            <Header />
            {/*<div className="main-bg" style={{marginBottom: 10}}>*/}
            {/*</div>*/}
            <Container>
                <Row style={{margin: `5%`}}>
                    <Col>dd</Col>
                    <Col>dd</Col>
                    <Col>dd</Col>
                    <Col>dd</Col>
                    <Col>dd</Col>
                </Row>
            </Container>
            <Container style={{paddingTop: '5%'}}>
                <Row>
                    {
                        shoes.map((a, i) => {
                            return (
                                <Cards shoes={shoes[i]}></Cards>
                            )
                        })
                    }
                </Row>
            </Container>

        </>)
}