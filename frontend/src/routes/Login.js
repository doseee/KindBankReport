import {Container, Row, Col, Form, Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useState, useRef} from "react";
import Header from "../component/Header";


export default function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const LoginData = {
        userId : email,
        userPass: pass,
    }


    const onSubmit = () => {
        console.log(LoginData);
    };

    return (
        <>
            <Header />
            <Container className="panel">
                <Row style={{height: window.innerHeight / 4}}/>
                <Row sm="1" className="justify-content-md-center" style={{margin: `0 20%`}}>
                    <Form style={{textAlign: "start", fontWeight: 700}}>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="kbreport@gmail.com"
                                onChange={event => setEmail( event.target.value )}
                            />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={event => setPass( event.target.value )}/>
                        </Form.Group>
                    </Form>
                    <div/>
                    <div className="d-grid gap-1">
                        <Button
                            onClick={() => {
                                if (LoginData.userId === "kbreport@gmail.com") {
                                    onSubmit();
                                    localStorage.setItem("userId", LoginData.userId);
                                    navigate("/",
                                        //     {state: {
                                        //     loginData: LoginData
                                        // }}
                                    );
                                } else {
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
        </>
    )
}