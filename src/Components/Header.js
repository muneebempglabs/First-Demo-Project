import { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

class Header extends Component{
    render(){
        return(
            <Navbar bg="dark" variant="dark" fixed = 'top'>
                <Container>
                    <Navbar.Brand href="#home">{this.props.title}</Navbar.Brand>
                    <Nav className = "me-auto">
                    <Nav.Link href="#home">{this.props.link1}</Nav.Link>
                    <Nav.Link href="#features">{this.props.link2}</Nav.Link>
                    <Nav.Link href="#pricing">{this.props.link3}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        );
    }
}

export default Header;