import { Container, Row, Col, Button } from 'react-bootstrap';
const Home = () => {
    return(
        <>
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
                        <Col className="">
                            <h1>
                                Hey, I'm <div className="iam-words iam-words-1">
                                <span>Maroš</span>
                                <span>Developer</span>
                                <span>Videogames lover</span>
                                </div>
                            </h1>
                        </Col>
                    </Row>
                </Col>
                <Col className="w-50">
                    <Container className="ph"></Container>
                </Col>
            </Row>
        </>
    );
};

export default Home;