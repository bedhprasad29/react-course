import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="" alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='navbar-toggler-iconn'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                    <span className='navbar-textt'>
                        <div className="social-iconn">
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                            <a href="#"><img src={''} alt="" /></a>
                        </div>
                        <button className='xx' onClick={() => console.log('contact us')}>
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}