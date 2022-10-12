import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Row, Col, Image, Button, Accordion } from 'react-bootstrap';
import './App.scss';
import { Fade as Hamburger } from 'hamburger-react';
import { Link } from 'react-scroll';
import { FaGithub, FaInstagram, FaFacebook, FaSpotify, FaDiscord } from "react-icons/fa";
import { LoremIpsum } from 'react-lorem-ipsum';
import { MdOutlineWavingHand } from 'react-icons/md';

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

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
    
  };

  return (
    <div className="App"> 
      <Navbar fixed="top" variant="dark" className={`AppNavbar`} expand="lg" expanded={expanded}>
        <Container className="">
          <Navbar.Brand><span onClick={scrollToTop} className="AppNavbarBrand fs-2">marosjelc.</span></Navbar.Brand>
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
            <Nav className={`${expanded ? "" : "w-50 justify-content-evenly"}`} defaultActiveKey="home" id="navbar-nav">
              <Nav.Item className="AppNavbarNavItem fs-5">
                <Link 
                  className="nav-link" 
                  activeClass="active" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="home">
                    Home
                </Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-5">
                <Link 
                  className="nav-link" 
                  activeClass="active" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="about">
                    About me
                </Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-5">
                <Link 
                  className="nav-link" 
                  activeClass="active" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="work">
                    Projects & Work
                </Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-5">
                <Link 
                  className="nav-link" 
                  activeClass="active" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="blog">
                    Blog
                </Link>
              </Nav.Item>
              <Nav.Item className="AppNavbarNavItem fs-5">
                <Link 
                  className="nav-link" 
                  activeClass="active" 
                  spy={true} 
                  smooth={true}
                  offset={-10}
                  to="contact">
                    Contact
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section id="home" className="sectionHome d-flex justify-content-center align-items-center">
        <Container className={`min-vh-100 d-flex justify-content-center align-items-center`}>
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
              className={`d-flex justify-content-center align-items-center ${isMobile ? "pb-5" : ""}`}
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
                  <h1>Hey, I'm Maroš <MdOutlineWavingHand className="tgold fs-2" /></h1>
                </Col>
                <Col>
                  <figure className="text-center">
                    <blockquote className="blockquote">
                      <p className="fst-italic">It is never so bad, that it couldn't be even worse.</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                      Maroš Jelč
                    </figcaption>
                  </figure>
                </Col>
                <Col>
                  <Button href="https://github.com/marosjelc/" target="_blank" className="socialButton"><FaGithub className="fs-2 github" /></Button>
                  <Button href="https://instagram.com/marosjelc/" target="_blank" className="socialButton"><FaInstagram className="fs-2 instagram rounded-3" /></Button>
                  <Button href="https://facebook.com/MarosJelc93" target="_blank" className="socialButton"><FaFacebook className="fs-2 facebook" /></Button>
                  <Button href="https://open.spotify.com/user/marosjelc" target="_blank" className="socialButton"><FaSpotify className="fs-2 spotify" /></Button>
                  <Button href="https://discord.com/users/401811354702315521" target="_blank" className="socialButton"><FaDiscord className="fs-2 discord" /></Button>
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
        <Container className={`min-vh-100 d-flex justify-content-center align-items-center `}>
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
              xs={{order: "first"}} 
              sm={{span: 6, order: "last"}} 
              md={{order: "last"}} 
              lg={{order: "last"}} 
              xl={{order: "last"}} 
              xxl={{order: "last"}}
              className={`d-flex justify-content-center align-items-center ${isMobile ? "pb-5" : ""}`}
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
                  <h1 className="fw-bold pb-3">Few words about me</h1>
                </Col>
                <Col className="fs-5">
                  <LoremIpsum p={1} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                </Col>
                <Col>
                  <Row>
                    <Col><Button href="#" className={`cvDownload ${(isMobile) ? "w-50" : "w-25"}`}><span>Get my CV</span></Button></Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col 
              xs={{order: "last"}} 
              sm={{order: "first"}} 
              md={{order: "first"}} 
              lg={{order: "first"}} 
              xl={{order: "first"}} 
              xxl={{order: "first"}} 
              className={`${isMobile ? "pb-5" : ""}`}
            >
              <Image src="me2.jpg" roundedCircle fluid className={`${isMobile ? "w-50 d-none" : "w-50"}`} />
            </Col>
          </Row>
        </Container>
      </section>
      <section id="work" className="sectionWork pt-6">
      <Container className={`min-vh-100 d-flex justify-content-center align-items-center`}>
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
              className={`d-flex justify-content-center align-items-center ${isMobile ? "pb-5" : ""}`}
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
                  <h1 className="pb-3 fw-bold">Projects & Work</h1>
                </Col>
                <Col className="fs-5">
                  <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                </Col>
              </Row>
            </Col>
            <Col 
              xs={{order: "last"}} 
              sm={{order: "first"}} 
              md={{order: "first"}} 
              lg={{order: "first"}} 
              xl={{order: "first"}} 
              xxl={{order: "first"}} 
              className={`${isMobile ? "pb-5" : ""}`}
            >
              <Accordion>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Project "Name_of_project" #1</Accordion.Header>
                  <Accordion.Body>
                    <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Project "Name_of_project" #2</Accordion.Header>
                  <Accordion.Body>
                    <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Project "Name_of_project" #3</Accordion.Header>
                  <Accordion.Body>
                    <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Project "Name_of_project" #4</Accordion.Header>
                  <Accordion.Body>
                    <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                  <Accordion.Header>Project "Name_of_project" #5</Accordion.Header>
                  <Accordion.Body>
                    <LoremIpsum p={2} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>
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
