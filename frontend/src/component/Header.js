import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useState} from "react";

const logout = () => {
    localStorage.clear()
    window.location.replace('http://localhost:3000/')
}


function Header() {

    var today = new Date();

    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);

    var dateString = year + '-' + month + '-' + day;

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (

        <Navbar expand="lg" className="kb-bg-color" style={{backgroundColor: '#f4eedd'}}>
            <Container>
                <Navbar.Brand href="/" className="kb-font-color">KB REPORTS</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {
                        localStorage.getItem('userId')
                        ? <Nav className="me-auto">
                                <Nav.Link to={'report/' + dateString}>daily-report</Nav.Link>
                                <Nav.Link href="#link">quiz</Nav.Link>
                                <NavDropdown title="my page" id="basic-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">
                                        Another action
                                    </NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider/>
                                    <NavDropdown.Item onClick={logout}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            : <Nav className="me-auto">
                                <Nav.Link href="/login">
                                    <span className="kb-font-color" style={{color: `#60584c`, fontSize: 14}}>
                                        로그인
                                    </span>
                                </Nav.Link>
                            </Nav>
                    }
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;