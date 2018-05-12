import React from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import {BrowserRouter, Route} from 'react-router-dom'
import createAppStore from '../../lib/store.js'

import counterAppReducer from '../reducers/counter-app';
const store = createStore(counterAppReducer);

import Dashboard from './Dashboard';

class App extends React.Component {
  //componentDidMount Fires when a component renders
  componentDidMount() {
    store.subscribe(() => {
      console.log('__STATE__', store.getState());
    });
    store.dispatch({ type:null });
  }
  render() {
    return (
    <section>
			<Provider store={store}>
				<BrowserRouter>
					<Route exact path='/' component={Dashboard}/>
				</BrowserRouter>
			</Provider>
    </section>
    )
  }
}


export default App
