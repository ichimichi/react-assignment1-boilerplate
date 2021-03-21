import React from "react";
import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";
import { Dashboard } from "./Components/dashboard/Dashboard";
import { Header } from "./Components/header/Header";
import { Footer } from "./Components/footer/Footer";

class App extends React.Component {
  render() {
    return (
      <div className="main-content">
        <Container fluid>
          <Row className="row-header">
            <Header />
          </Row>
          <Row className="row-main">
            <Col xs={2} />
            <Col xs={8}>
              <Dashboard />
            </Col>
            <Col xs={2} />
          </Row>
          <Row className="row-footer">
            <Footer />
          </Row>
        </Container>
      </div>
    );
  }
}
export default App;
