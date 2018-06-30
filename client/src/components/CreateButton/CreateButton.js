import React from 'react';
import { Button } from 'reactstrap';

export default class CreateButton extends React.Component {
  render() {
    return (
      <div>
        <Button color="secondary" size="lg">Create Alert</Button>
      </div>
    );
  }
}