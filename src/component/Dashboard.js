'use strict';
import React from 'react';
import {connect} from 'react-redux';
import {categoryCreate, categoryUpdate, categoryDestroy } from '../action/category-actions.js';
import CategoryForm from '../category-from.js'

//componentDidMount gets fired if the item gets rendered

class Dashboard extends React.Component{
 componentDidMount() {
   this.props.categoryCreate({ title: 'test category'});
   this.props.categoryCreate({title: 'bleh'});
 }
 render() {
   return (
     <main className='dashboard-container'>
      <h2>Dashboard</h2>

      <CategoryForm
        buttonText='create a category'
        onComplete={this.props.categoryCreate} />
      
      {this.props.categories.map(item =>
      <div key={item.id}>
      <h3>{item.title}</h3>
      </div>
      )}
      </main>
   )
 }
}

const mapStateToProps = (state) =>{
return {
  categories:state
  }
}

const mapDispatchToProps = (dispatch, getState) => {return {
  categoryCreate: (category) => dispatch(categoryCreate(category)),
  categoryUpdate: (category) => dispatch(categoryUdate(category)),
  categoryDestroy: (category) => dispatch(categoryDestroy(category))
}}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
