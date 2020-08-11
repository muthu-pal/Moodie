import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './SongArtistDropdown.css'

const SongArtistDropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle} className='btn2'>
      <DropdownToggle caret style={{backgroundColor: "transparent", borderColor: "white", color: "white", borderRadius: "20px"}}>
        SONG/ARTIST
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem>SONG</DropdownItem>
        <DropdownItem>ARTIST</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

export default SongArtistDropdown;