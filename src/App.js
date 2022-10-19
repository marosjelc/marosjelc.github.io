import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Button } from 'react-bootstrap';
import './App.scss';
//import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
//import { FaGithub, FaInstagram, FaFacebook, FaSpotify, FaDiscord } from "react-icons/fa";
//import { LoremIpsum } from 'react-lorem-ipsum';
import { MdOutlineWavingHand } from 'react-icons/md';

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
                  className="" 
                  activeClass="" 
                  spy={true} 
                  smooth={true}
                  offset={0}
                  to="home">
                    Home
                </Link>
              </Nav.Item>
              <Nav.Item className="">
                <Link 
                  className="" 
                  activeClass="" 
                  spy={true} 
                  smooth={true}
                  offset={0}
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
                  className="" 
                  activeClass="" 
                  spy={true} 
                  smooth={true}
                  offset={0}
                  to="projects">
                    Projects
                </Link>
              </Nav.Item>
              <Nav.Item className="">
                <Link 
                  className="" 
                  activeClass="" 
                  spy={true} 
                  smooth={true}
                  offset={0}
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
        <Container className="p-5">
          <Row className="w-100">
            <Col className="w-50 justify-content-center align-items-center d-flex">
              <Row
                xs={1} 
                sm={1} 
                md={1} 
                lg={1} 
                xl={1} 
                xxl={1}
                className="hello"
              >
                <Col className="h-25">
                  <h1>
                    Hey, I'm <div className="iam-words iam-words-1">
                      <span>Maroš</span>
                      <span>Developer</span>
                      <span>Videogames lover</span>
                    </div>
                  </h1>
                </Col>
                {/* <Col className="h-25">
                  <p>Developer, Visual Nover Architect and creator, coding lover and more...</p>
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className="fst-italic">It is never so bad, that it couldn't be even worse.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Maroš Jelč
                    </figcaption>
                  </figure>
                </Col> */}
                <Col className="h-50">
                  {/* <Button href="https://github.com/marosjelc/" target="_blank" className="socialButton"><FaGithub className="fs-2 github" /></Button>
                  <Button href="https://instagram.com/marosjelc/" target="_blank" className="socialButton"><FaInstagram className="fs-2 instagram rounded-3" /></Button>
                  <Button href="https://facebook.com/MarosJelc93" target="_blank" className="socialButton"><FaFacebook className="fs-2 facebook" /></Button>
                  <Button href="https://open.spotify.com/user/marosjelc" target="_blank" className="socialButton"><FaSpotify className="fs-2 spotify" /></Button>
                  <Button href="https://discord.com/users/401811354702315521" target="_blank" className="socialButton"><FaDiscord className="fs-2 discord" /></Button> */}
                </Col>
              </Row>
            </Col>
            <Col className="w-50">
              <Container className="ph"></Container>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="about" className="s p-5">
        <Container className="p-5">
          <h1>About Section</h1>  
        </Container>
      </section>
      <section id="projects" className="s p-5">
        <Container className="p-5">
          <h1>Projects Section</h1>  
        </Container>
      </section>
      <section id="contact" className="s p-5">
        <Container className="p-5">
          <h1>Contact</h1>  
        </Container>
      </section>
    </div>
  );
}

export default App;
