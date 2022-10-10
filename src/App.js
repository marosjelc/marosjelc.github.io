import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Container, Nav, Row, Col, Image, Button } from 'react-bootstrap';
import './App.scss';
import { Fade as Hamburger } from 'hamburger-react';
import { FaGithub, FaInstagram, FaFacebook, FaSpotify, FaDiscord } from "react-icons/fa";

function App() {
  const [expanded, setExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [isLandscape, setIsLandscape] = useState(window.innerWidth < 768);
  const [, setDimensions] = useState({height: window.innerHeight, width: window.innerWidth})
  
  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({height: window.innerHeight, width: window.innerWidth})
      const ismobile = window.innerWidth < 576;
      if (ismobile !== isMobile) setIsMobile(isMobile);
    }, false);
  }, [isMobile]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions({height: window.innerHeight, width: window.innerWidth})
      const islandscape = window.innerWidth < 768;
      if (islandscape !== isLandscape) setIsLandscape(isLandscape);
    }, false);
  }, [isLandscape]);

  return (
    <div className="App"> 
      <Navbar fixed="top" variant="dark" className="AppNavbar" expand="lg" expanded={expanded}>
        <Container className={`${isLandscape ? "min-vw-100" : ""}`}>
          <Navbar.Brand className=""><span className="AppNavbarBrand fs-2">marosjelc.</span></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-expandable" className="burger">
            <Hamburger 
              duration={0.8}
              size={26} 
              color="#eee" 
              toggled={expanded} 
              toggle={() => setExpanded(expanded ? false : true)} 
            />
          </Navbar.Toggle>
          <Navbar.Collapse id="navbar-expandable" className="justify-content-center">
            <Nav className={`${expanded ? "" : "w-50 justify-content-evenly"}`} defaultActiveKey="#home">
              <Nav.Item className="AppNavbarNavItem fs-4">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-4">
                <Nav.Link href="#about">About me</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-4">
                <Nav.Link href="#work">Projects & Work</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-4">
                <Nav.Link href="#blog">Blog</Nav.Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-4">
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="home" className="sectionHome d-flex justify-content-center align-items-center">
        <Container className={`${isLandscape ? "min-vw-100 min-vh-100 d-flex justify-content-center align-items-center" : "min-vh-100 d-flex justify-content-center align-items-center"}`}>
          <Row 
            xs={1} 
            sm={2} 
            md={2} 
            lg={2} 
            xl={2} 
            xxl={2}
            className={`${isMobile ? "" : ""}`}
          >
            <Col 
              xs={{order: "last"}} 
              sm={{span: 6, order: "first"}} 
              md={{order: "first"}} 
              lg={{order: "first"}} 
              xl={{order: "first"}} 
              xxl={{order: "first"}}
              className={`${isMobile ? "pb-5 d-flex justify-content-center align-items-center" : "d-flex justify-content-center align-items-center"}`}
            >
              <Row
                xs={1} 
                sm={1} 
                md={1} 
                lg={1} 
                xl={1} 
                xxl={1}
                className=""
              >
                <Col>
                  <h1>Hello, I'm Maroš</h1>
                </Col>
                <Col>
                  Programmer, Content creator, Visual Novel Architect and more...
                </Col>
                <Col>
                  <Button href="#" className="socialButton"><FaGithub className="fs-2 github" /></Button>
                  <Button href="#" className="socialButton"><FaInstagram className="fs-2 instagram rounded-3" /></Button>
                  <Button href="#" className="socialButton"><FaFacebook className="fs-2 facebook" /></Button>
                  <Button href="#" className="socialButton"><FaSpotify className="fs-2 spotify" /></Button>
                  <Button href="#" className="socialButton"><FaDiscord className="fs-2 discord" /></Button>
                </Col>
              </Row>
            </Col>
            <Col 
              xs={{order: "first"}} 
              sm={{order: "last"}} 
              md={{order: "last"}} 
              lg={{order: "last"}} 
              xl={{order: "last"}} 
              xxl={{order: "last"}} 
              className={`${isMobile ? "pb-5" : ""}`}
            >
              <Image src="me.jpg" roundedCircle fluid className="w-50" />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="about" className="sectionAbout pt-6">
        <Container>
          <h1>About me</h1>
        </Container>
      </section>
      <section id="work" className="sectionWork pt-6">
        <Container>
          <h1>Projects & Work</h1>
        </Container>
      </section>
      <section id="blog" className="sectionBlog pt-6">
        <Container>
          <h1>Blog</h1>
        </Container>
      </section>
      <section id="contact" className="sectionContact pt-6">
        <Container>
          <h1>Contact</h1>
        </Container>
      </section>
    </div>
  );
}

export default App;
