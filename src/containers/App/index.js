import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import AppView from './AppView';

const mapStateToProps = store => ({

});

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(AppView)
);
