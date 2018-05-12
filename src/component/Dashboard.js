'use strict';
import React from 'react';
import CategoryForm from './category-form.js';
import CategoryList from './category-list.js';
class Dashboard extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {};
    console.log('9 hi')
  }

  
  render() {
    
    return <div>
    <CategoryForm></CategoryForm>
    <CategoryList></CategoryList>
    
    </div>
  }
}

export default Dashboard;