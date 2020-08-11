import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './MonthDropdown.css'

const MonthDropdowns = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
      <DropdownToggle caret style={{backgroundColor: "#1db954", color: "white", borderRadius: "20px", fontWeight:"bolder"}}>
        MONTH
      </DropdownToggle>
      <DropdownMenu>
        
        <DropdownItem disabled>JANURARY</DropdownItem>
        <DropdownItem>FEBRUARY</DropdownItem>
        <DropdownItem>MARCH</DropdownItem>
        <DropdownItem>APRIL</DropdownItem>
        <DropdownItem>MAY</DropdownItem>
        <DropdownItem>JUNE</DropdownItem>
        <DropdownItem>JULY</DropdownItem>
        <DropdownItem>AUGUST</DropdownItem>
        <DropdownItem>SEPTEMBER</DropdownItem>
        <DropdownItem>OCTOBER</DropdownItem>
        <DropdownItem>NOVEMBER</DropdownItem>
        <DropdownItem>DECEMBER</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default MonthDropdowns;