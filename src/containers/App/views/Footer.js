import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Footer = ({ changeLanguage }) => {
  return (
    <footer className="navbar navbar-expand mt-auto d-flex flex-column">
      <div className="container">
        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
          <li className="nav-item">
            <a
              className="nav-item nav-link mr-md-2"
              href="#"
              onClick={() => changeLanguage('de')}>
              German
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-item nav-link mr-md-2"
              href="#"
              onClick={() => changeLanguage('en')}>
              English
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
