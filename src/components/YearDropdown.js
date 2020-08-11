import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './YearDropdown.css'

const YearDropdowns = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='btn' size="lg">
      <DropdownToggle caret style={{backgroundColor: "#1db954", color: "white", borderRadius: "20px", fontWeight:"bolder"}}>
        YEAR
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem disabled>2015</DropdownItem>
        <DropdownItem>2016</DropdownItem>
        <DropdownItem>2017</DropdownItem>
        <DropdownItem>2018</DropdownItem>
        <DropdownItem>2019</DropdownItem>
        <DropdownItem>2020</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default YearDropdowns;