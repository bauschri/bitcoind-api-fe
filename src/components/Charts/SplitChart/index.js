import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { Table } from 'reactstrap';
//import {CanvasJS} from 'canvasjs';
//var CanvasJS = require('./canvasjs.min');
var CanvasJSReact = require('./canvasjs.react');
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

/*
<div>
  <CanvasJSChart options={options}
  />
</div>
*/
class SplitChartPanel extends Component {
  render() {
    const options = {
      title: {
        text: "Basic Column Chart in React"
      },
      data: [{
        type: "column",
        dataPoints: [
            { label: "Apple",  y: 10  },
            { label: "Orange", y: 15  },
            { label: "Banana", y: 25  },
            { label: "Mango",  y: 30  },
            { label: "Grape",  y: 28  }
        ]
       }]
   }

   return (
      <div>
        <CanvasJSChart options = {options}
            /* onRef = {ref => this.chart = ref} */
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {

  };
};

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(withNamespaces('translation')(SplitChartPanel))
);
