import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Table } from 'reactstrap';

const BlockTransactionsTable = ({ entries }) => (
  <Table>
    <thead>
      <tr>
        <th>Number</th>
        <th>Status</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {entries.map((entry, index) => (
        <tr key={index}>
          <td>{entry.id}</td>
          <td>{entry.name}</td>
          <td />
        </tr>
      ))}
    </tbody>
  </Table>
);

const entries = [
  {id: 1, name: 'test 1'},
  {id: 2, name: 'test 2'},
  {id: 3, name: 'test 3'},
]

const BlockTransactionsList = ({}) => {
  const isLoading = false;

  return (
    <div>
      <h1>Customers ({entries.length})</h1>

      {isLoading ? 'Loading...' : <BlockTransactionsTable entries={entries} />}
    </div>
  );
};

BlockTransactionsList.propTypes = {

};

const mapStateToProps = state => {
  return {

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(withNamespaces('translation')(BlockTransactionsList))
);
