import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./DropDown.css"
export default class DropDown extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Select City
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Baltimore</DropdownItem>
          <DropdownItem header>Philadelphia</DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}