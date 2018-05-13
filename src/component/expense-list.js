'use strict';
import React from 'react';
import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';

export default class ExpensesList extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {
      timestampsTest: [
        new Date(),
        new Date(),
        new Date(),
        new Date(),
        
      ]
    };
    console.log('9 hi')
  }

  
  render() { 
    return <React.Fragment>
      <h1>Timestamps</h1>
      {this.state.timestampsTest.map(timestamp => {
     return <div>{timestamp.toString()}</div>
      })}
    </React.Fragment>
  }
}

