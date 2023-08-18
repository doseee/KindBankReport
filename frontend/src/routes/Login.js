import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Header from "../component/Header";
import loginApi from "../services/loginApi";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');


    return (
        <div style={{height: window.innerHeight}}>
            <Header/>
            <Container className="panel">
                <Row style={{height: window.innerHeight / 4}}/>
                <Row sm="1" className="justify-content-md-center" style={{margin: `0 20%`}}>
                    <Form style={{textAlign: "start", fontWeight: 700}}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="kbreport@gmail.com"
                                onChange={event => setEmail(event.target.value)}
                            />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={event => setPw(event.target.value)}/>
                        </Form.Group>
                    </Form>
                    <div/>
                    <div className="d-grid gap-1">
                        <Button
                            onClick={() => {
                                try {
                                    let userEmail = ''
                                    loginApi(email, pw)
                                        .then((data) => {
                                            userEmail = data;

                                            localStorage.setItem("userId", userEmail);
                                            navigate("/");

                                        }).catch((error) => {
                                            console.log(error);
                                        });

                                } catch (error) {
                                    console.log(error)
                                    window.alert("회원정보가 올바르지 않습니다.")
                                }
                            }}
                            variant="outline-warning"
                            type="submit"
                            className="kb-font-color"
                        >
                            로그인
                        </Button>
                    </div>
                </Row>
            </Container>
        </div>
    )
}