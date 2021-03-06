import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Switch, Route } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

import { Header, Main, Footer } from './views';
import { Route, Switch } from 'react-router-dom';
import socketIOClient from 'socket.io-client'
import config from 'config';

import {
  BlockTransactionsList,
  SplitChart,
} from 'components'

const Home = () => (<div>Home</div>)

class AppView extends Component {
  static propTypes = {
    history: PropTypes.shape({
      push: PropTypes.func.isRequired,
    }).isRequired,
  };

  constructor() {
    super();
  }

  render() {
    const { i18n } = this.props;
    //const socket = socketIOClient(config.SOCKET_IO_URI)

    const changeLanguage = lng => {
      i18n.changeLanguage(lng);
    };

    // socket.on('change color', (color) => {
    //   console.log('change color')
    //   document.body.style.backgroundColor = color
    // })

    return (
      <div className="container-fluid d-flex h-100 flex-column p-0">
        <Header />

        <Main>
          <Switch>
            <Route path="*" exact={true} component={Home} />
            <Route path="/chart" exact={true} component={SplitChart} />
            <Route path="/transactions" component={BlockTransactionsList} />
          </Switch>
        </Main>

        <Footer changeLanguage={changeLanguage} />
      </div>
    );
  }
}

export default withNamespaces('translation')(AppView);
