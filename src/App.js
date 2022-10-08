import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import './App.scss';
import { Fade as Hamburger } from 'hamburger-react';

function App() {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="App"> 
      <Navbar sticky="top" className="AppNavbar" expand="lg" expanded={expanded}>
        <Container>
          <Navbar.Brand><span className="brand">marosjelc.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-expandable">
            <Hamburger 
              duration={0.8}
              size={26} 
              color="#000" 
              toggled={expanded} 
              toggle={() => setExpanded(expanded ? false : true)} 
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-expandable">
            <Nav className="me-auto AppNavbarNav">
              <Nav.Item className="AppNavbarNavItem">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem">
                <Nav.Link href="#about">About me</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem">
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="home" className="sectionHome">
        <Container className="sectionContainer sectionContainerLeft">
          <span>Hello, I'm Maroš</span>
          <span>Programmer, Creator, VN Architect and more...</span>
        </Container>
        <Container className="sectionContainer sectionContainerRight">
          <Container className="myPhoto" />
        </Container>
      </section>
      <section id="about" className="sectionAbout">
        <Container>
          <h1>About me</h1>
        </Container>
      </section>
      <section id="blog" className="sectionBlog">
        <Container>
          <h1>Blog</h1>
        </Container>
      </section>
      <section id="contact" className="sectionContact">
        <Container>
          <h1>Contact</h1>
        </Container>
      </section>
    </div>
  );
}

export default App;
