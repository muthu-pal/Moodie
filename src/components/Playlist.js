import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Playlist.css";
import "bootstrap/dist/css/bootstrap.min.css";

class Playlist extends Component {
  render() {
    return (
      <div style={{ color: "white" }}>
        <Container className="container">
          <Row>
            <Col>
              <img src={this.props.photo} alt={this.props.photoAlt} className="photo"/>
            </Col>
            <Col>
              <Row> 
                <h3 className="track">{this.props.name}</h3>
              </Row>
              <Row>
                <ul className="artist">{this.props.artist}</ul>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Playlist;


