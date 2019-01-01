import React from 'react';
import PropTypes from 'prop-types';
import { withNamespaces } from 'react-i18next';
import { withRouter } from 'react-router-dom';
import connect from 'react-redux/es/connect/connect';

const Main = ({ children }) => {
  return <main className="container" role="main">{children}</main>;
};

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

const mapStateToProps = state => {
  return {

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(withNamespaces('translation')(Main))
);
