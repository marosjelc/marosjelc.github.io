import { Container, Row, Col, Button, ProgressBar } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import LoremIpsum from 'react-lorem-ipsum';
const About = () => {
    const [scrolled, setScrolled] = useState(0);
    useEffect(() => {
        document.addEventListener("scroll",() => {
          if(window.scrollY > (window.innerHeight / 2)){
            setScrolled(true);
          } else {
            setScrolled(false);
          }
        });
      },[scrolled]);
    return(
        <>
            <Row 
                className=""
            >
                <Col>
                    {/* left column with text about me */}
                    <h2 className="fw-bold pb-3">Few words about me</h2>
                    <LoremIpsum p={1} avgWordsPerSentence={10} avgSentencesPerParagraph={5} />
                </Col>
                <Col>
                    {/* right column with my skills */}
                    <h3 className="fw-bold pb-3">Some of my skills</h3>
                    <Container className="justify-content-center">
                        <Row className="">
                            <Col className="justify-content-end d-flex">Pokus</Col>
                            <Col className="" md={8} sm={8} lg={8} xl={8} xxl={8}><ProgressBar className={scrolled ? "progress-animation" : ""} now={60} /></Col>
                        </Row>
                        <Row className="">
                            <Col className="justify-content-end d-flex">Pokus</Col>
                            <Col className="" md={8} sm={8} lg={8} xl={8} xxl={8}><ProgressBar className={scrolled ? "progress-animation" : ""} now={40} /></Col>
                        </Row>
                        <Row className="">
                            <Col className="justify-content-end d-flex">Pokus</Col>
                            <Col className="" md={8} sm={8} lg={8} xl={8} xxl={8}><ProgressBar className={scrolled ? "progress-animation" : ""} now={50} /></Col>
                        </Row>
                        <Row className="">
                            <Col className="justify-content-end d-flex">Pokus</Col>
                            <Col className="" md={8} sm={8} lg={8} xl={8} xxl={8}><ProgressBar className={scrolled ? "progress-animation" : ""} now={30} /></Col>
                        </Row>
                        <Row className="">
                            <Col className="justify-content-end d-flex">Pokus</Col>
                            <Col className="" md={8} sm={8} lg={8} xl={8} xxl={8}><ProgressBar className={scrolled ? "progress-animation" : ""} now={10} /></Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </>
    );
};

export default About;