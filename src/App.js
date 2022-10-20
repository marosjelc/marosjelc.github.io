import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './App.scss';
//import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
//import { FaGithub, FaInstagram, FaFacebook, FaSpotify, FaDiscord } from "react-icons/fa";
//import { LoremIpsum } from 'react-lorem-ipsum';
import { MdOutlineWavingHand } from 'react-icons/md';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  const [theme, setTheme] = useState("dark");
  const [navScroll, setNavScroll] = useState(false);

  const changeTheme = () => {
    if(theme === "dark"){
      document.documentElement.className = "light";
      setTheme("light");
    } else {
      document.documentElement.className = "dark";
      setTheme("dark");
    }
  }

  useEffect(() => {
    document.addEventListener("scroll",() => {
      if(window.scrollY > (window.innerHeight - 50)){
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    });
  },[navScroll]);

  return (
    <div className="App"> 
      <Navbar fixed="top" variant="dark" expand="lg" className={navScroll ? "AppNavbar AppNavbarBg justify-content-center" : "AppNavbar justify-content-center"}>
        <Row
          xs={1} 
          sm={1} 
          md={1} 
          lg={1} 
          xl={1} 
          xxl={1}
        >
          <Col>
            <Nav className="AppNavbarNav justify-content-evenly">
              <Nav.Item className="">
                <Link 
                  className={navScroll ? "AppNavbarNavLink AppNavbarNavLinkAlt" : "AppNavbarNavLink"} 
                  activeClass="AppNavbarNavLinkActive" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="home">
                    Home
                </Link>
              </Nav.Item>
              <Nav.Item className="">
                <Link 
                  className={navScroll ? "AppNavbarNavLink AppNavbarNavLinkAlt" : "AppNavbarNavLink"} 
                  activeClass="AppNavbarNavLinkActive" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="about">
                    About me
                </Link>
              </Nav.Item>
              <Nav.Item className="">
                <Navbar.Brand onClick={()=>changeTheme()}
                  className={navScroll ? "AppNavbarNavBrand AppNavbarNavBrandAlt" : "AppNavbarNavBrand"}>
                    Mj.
                </Navbar.Brand>
              </Nav.Item>
              <Nav.Item className="">
                <Link 
                  className={navScroll ? "AppNavbarNavLink AppNavbarNavLinkAlt" : "AppNavbarNavLink"} 
                  activeClass="AppNavbarNavLinkActive" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="projects">
                    Projects
                </Link>
              </Nav.Item>
              <Nav.Item className="">
                <Link 
                  className={navScroll ? "AppNavbarNavLink AppNavbarNavLinkAlt" : "AppNavbarNavLink"} 
                  activeClass="AppNavbarNavLinkActive" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="contact">
                    Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col>
            <Container className="hr" />
          </Col>
        </Row>
      </Navbar>
      <section id="home" className="bg s p-5">
        <Container className="min-vh-100 d-flex justify-content-center align-items-center p-5">
          <Home />
        </Container>
      </section>
      <section id="about" className="s p-5">
        <Container className="min-vh-100 d-flex justify-content-center align-items-center p-5">
          <About />
        </Container>
      </section>
      <section id="projects" className="s p-5">
        <Container className="min-vh-100 d-flex justify-content-center align-items-center p-5">
          <Projects />
        </Container>
      </section>
      <section id="contact" className="s p-5">
        <Container className="min-vh-100 d-flex justify-content-center align-items-center p-5">
          <Contact />
        </Container>
      </section>
    </div>
  );
}

export default App;
