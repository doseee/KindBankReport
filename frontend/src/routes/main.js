import {Col, Container, Row} from "react-bootstrap";
// import Cards from "../component/card";
import {useLoaderData, Link} from "react-router-dom";
import data from "../data";
import Header from "../component/header";
import ReportSrc from '../img/report.png'
import * as styles from "../style/Styles"
import SlideShow from "../component/SlideShow";


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

    var dateString = year + '-' + month  + '-' + day;

    // console.log(dateString);

    return (
        <>
            <Header/>
            <styles.MainBgContainer className="main-bg">
                <Container>
                    <Row className="justify-content-around">
                        <Col sm={4}>
                            <Row sm={10}>
                                <styles.AnimatedImage src={ReportSrc}/>
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
                            <SlideShow />
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
