import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import UserJumbo from "../../components/UserJumbo/UserJumbo";
import AlertCard from "../../components/AlertCard/AlertCard";
import Example from "../../components/NavBar/NavBar";

const UserHome = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Example />
        <UserJumbo />
        <AlertCard />
      </Col>
    </Row>
  </Container>
);

export default UserHome;
