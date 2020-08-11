import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Playlist.css'

function Playlist() {
    
      return (
        <div style={{ color: "white" }}>
          <Container>
            <Row>
              <Col>
                <img src="/images/Harry-Styles.jpg" 
                alt="harry" />
              </Col>
              <Col>
                <Row>
                  <h3 style={{ textAlign: "left" }}>Adore You</h3>
                </Row>
                <Row>
                  <ul style={{ textAlign: "left" }}>Harry Styles</ul>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      );
  }

  export default Playlist