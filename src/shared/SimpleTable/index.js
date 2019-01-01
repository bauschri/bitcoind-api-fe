import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'reactstrap';

const SimpleTable = ({ headers, lines }) => (
  <Table>
    <thead>
      <tr>
        {headers.map((header, index) => (
          <th key={`SimpleTable-Header-${index}`}>{header}</th>
        ))}
      </tr>
    </thead>
    <tbody>
    {lines.map((line, index) => (
      <tr key={`SimpleTable-Line-${index}`}>
        {line.map((col, colIndex) => (
          <td key={`SimpleTable-Line-Row-${colIndex}`}>{col}</td>
        ))}
      </tr>
    ))}
    </tbody>
  </Table>
);

SimpleTable.propTypes = {
  headers: PropTypes.array.isRequired,
  lines: PropTypes.array.isRequired,
};

export default SimpleTable;
