import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import JumboHome from "../../components/JumboHome/JumboHome";
import DropDown from "../../components/DropDown/DropDown";
import "./Home.css";
const Home = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <JumboHome />
        <DropDown />
      </Col>
    </Row>
  </Container>
);

export default Home;
