import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import Form from "../../components/Form/Form";
import Example from "../../components/NavBar/NavBar";

const AdminForm = () => (
  <Container fluid>
    <Row>
      <Col size="md-12">
        <Example />
        <Form />
      </Col>
    </Row>
  </Container>
);

export default AdminForm;
