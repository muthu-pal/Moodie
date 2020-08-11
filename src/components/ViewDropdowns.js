import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './ViewDropdowns.css'

const ViewDropdowns = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{backgroundColor: "transparent", borderColor: "white", color: "white", borderRadius: "20px"}}>
        View
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem>10</DropdownItem>
        <DropdownItem>25</DropdownItem>
        <DropdownItem>50</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default ViewDropdowns;