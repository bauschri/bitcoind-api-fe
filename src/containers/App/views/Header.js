import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router';

import { Input } from 'reactstrap';

import LogoImage from '../images/logo.png';


const Header = ({}) => {
  return (
    <header>
      <div className="container navbar navbar-expand flex-column flex-md-row bd-navbar">
        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              Blockchain Economics
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
};

const mapStateToProps = state => {
  return {

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null,
  )(withNamespaces('translation')(Header))
);
