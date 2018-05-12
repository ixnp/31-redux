'use strict';


import React from 'react';
import { connect } from 'react-redux';
import { categoryCreate } from '../actions/category-actions.js';

class CategoryList extends React.Component {

  render() {
    return <div>
      <h1>Category List</h1>
      <ul>{this.displayCats()}</ul>
      </div>
  }

  displayCats() {
    return this.props.categories.map(category => {
      return <li key={category.id}>{category.name}</li>
    })
  }

}
const mapStateToProps = state => ({
  categories: state.categories
});

//will need this for update later 
// const mapDispatchToProps = (dispatch, getState) => {
//   return {
//     categoryCreate: val => dispatch(categoryCreate(val))
//   }
// }

export default connect(mapStateToProps, null)(CategoryList);
