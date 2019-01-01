import React from 'react';
import PropTypes from 'prop-types';

import { Navbar, Nav, NavbarToggler, Collapse } from 'reactstrap';


const NavbarHeader = ({ label, actions }) => {
  return (
    <Navbar color="light" light expand="md">
      <span className="title">{label}</span>
      <NavbarToggler />
      <Collapse isOpen={false} navbar>
        <Nav className="ml-auto" navbar>
          {actions}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

NavbarHeader.propTypes = {
  label: PropTypes.string.isRequired,
  actions: PropTypes.array.isRequired,
};

export default NavbarHeader;
