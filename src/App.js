import React from "react";
import "./App.css";
import { Dashboard } from "./components/dashboard/Dashboard.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import { Header } from "./components/header/Header.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { Col } from "react-bootstrap";

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
