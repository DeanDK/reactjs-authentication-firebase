import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import {firebaseApp} from './firebase';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducers'
import {logUser} from './actions';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    console.log('qweqeq', user);
    const {email}  = user;
    store.dispatch((logUser(email)));
    browserHistory.push('/app');
  } else {
    console.log('blabla')
    browserHistory.replace('/signin');
  }
})

ReactDOM.render(
  <Provider store={store}>
    <Router path="/" history={browserHistory}>
    <Route path="/app" component={App}/>
    <Route path="/signin" component={SignIn}/>
    <Route path="/signup" component={SignUp}/>
  </Router>
  </Provider>
, document.getElementById('root'))
