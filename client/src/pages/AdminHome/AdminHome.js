import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import AdminJumbo from "../../components/AdminJumbo/AdminJumbo";
import CreateButton from "../../components/CreateButton/CreateButton";
import Example from "../../components/NavBar/NavBar";
const AdminHome = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Example />
        <AdminJumbo />
        <CreateButton />

      </Col>
    </Row>
  </Container>
);

export default AdminHome;
