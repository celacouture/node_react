import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class ExForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="Description">Description</Label>
          <Input type="text" name="destext" id="exDescription" placeholder="Package/Pill Description" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Fentanyl Test Results</Label>
          <Input type="select" name="select" id="fentSelect">
            <option>Positive</option>
            <option>Negative</option>
            <option>Not Tested</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Comments</Label>
          <Input type="textarea" name="text" id="exampleText" placeholder="Additional Comments" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="userFile" />
          <FormText color="muted">
            Upload picture of package/pill
          </FormText>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}