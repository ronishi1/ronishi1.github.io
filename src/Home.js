import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './App.css';
const Home = () => {
  return (
    <div>
      <br />
      <Container>
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={7} >
            <h2>Hi!</h2>
            <div style={{fontSize:"1.5rem"}} className="description">
              I'm Ray Onishi, a junior studying computer science at Stony Brook University.
              I'm an aspiring software engineer with an interest in the finance and fintech industry.
            </div>
          </Col>
          <Col xs={3} style={{marginLeft:"30px"}}>
            <img width="250px" height="250px" src="https://www.svgrepo.com/show/26995/avatar.svg" />
          </Col>
        </Row>
        <br />
        <br />
        <Row>
          <Col xs={1}>
          </Col>
          <Col xs={10}>
            <h2>Technologies I Use</h2>
            <div className="tech-list" >
              <div className="item">
                <img src="react.svg" />
              </div>
              <div className="item">
                <img src="node.svg" />
              </div>
              <div className="item">
                <img src="mongo.svg" />
              </div>
              <div className="item">
                <img src="js.svg" />
              </div>
              <div className="item">
                <img src="java.svg" />
              </div>
              <div className="item">
                <img src="python.svg" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home;
