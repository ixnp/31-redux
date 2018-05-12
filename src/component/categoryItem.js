'use strict';

import React from 'react';

//import category or something//

class categoryItem extends React.Component{
  constructor(props){
    super(props);
  }

  list() {
    return this.props.notes.map((item, index) => {
      return <categoryItem id={item.id} budget={item.budget} name={item.name} timestamp={item.timestamp} 
      key={index} index={index} 
      removeItem={this.props.removeItem}
      /> 
    });
  }

  render(){
    return <div>
        <ul>
          {this.list()}
        </ul>
    </div>
  }
}
export default categoryItem;