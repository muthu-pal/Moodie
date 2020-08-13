import React, { useState } from "react";
import { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";
import "./ViewDropdowns.css";

class ViewDropdowns extends Component {
  constructor(props) {
    super(props);
    // const [dropdownOpen, setOpen] = useState(false);
    // //const viewOne =
    // const toggle = () => setOpen(!dropdownOpen);
    this.toggle = this.toggle.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.state = {
      actions: [],
      dropDownValue: "View",
      dropdownOpen: false,
      limitTo: 1
    };
  }

  toggle(event) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  changeValue(e) {
    this.setState({ dropDownValue: e.currentTarget.textContent });
    let id = e.currentTarget.getAttribute("id");
    console.log(id);
    if (this.state.dropDownValue === "View 2") {
      this.setState({ limitTo: 2 });
    } else if (this.state.dropDownValue === "View 3") {
      this.setState({ limitTo: 3 });
    } else if (this.state.dropDownValue === "View 1") {
      this.setState({ limitTo: 1 });
    } else if (this.state.dropDownValue === "View") {
      this.setState({ limitTo: 1 });
    }
  }

  render() {
    return (
      <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle
          caret
          style={{
            backgroundColor: "transparent",
            borderColor: "white",
            color: "white",
            borderRadius: "20px"
          }}
        >
          {this.state.dropDownValue}
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            <div onClick={this.changeValue}>View 1</div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.changeValue}>View 2</div>
          </DropdownItem>
          <DropdownItem>
            <div onClick={this.changeValue}>View 3</div>
          </DropdownItem>
        </DropdownMenu>
      </ButtonDropdown>
    );
  }
}

export default ViewDropdowns;