import React from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Playlist from './Playlist.js'



function SongRows(songs=10) {
    let lastRow = songs % 3;
    let otherRows = songs - lastRow;
    let numRows = otherRows / 3;




    return (
        <div className="Song-Rows">
    
        <Container>
          <Row>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
          </Row>
          <Row>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
          </Row>
          <Row>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
            <Col>
              <Playlist />
            </Col>
          </Row>
          <Row>
            <Col>
              <Playlist />
            </Col>
          </Row>
        </Container>
      </div>
    );
}

export default SongRows