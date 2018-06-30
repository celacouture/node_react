import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

const UserJumbo = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Resources</h1>
        <p className="lead">Here you will find alerts from local fire departments and emergency responders. Posts will contain pills or heroin that has tested positive for Fentanyl.</p>
        <hr className="my-2" />
        <p>Be sure to check out the resources tab at the top of the screen to find services in your area like needle exchanges and detox centers.</p>
        <p className="lead">
          <Button color="primary">Learn More</Button>
        </p>
      </Jumbotron>
    </div>
  );
};

export default UserJumbo;