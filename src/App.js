import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import SignIn from './components/signIn'
import Persons from './components/persons'
import PrivateRoute from './routing/PrivateRouting'

//redux
import { Provider } from 'react-redux'
import store from './store'


function App() {
  return (
    <Provider store={store}>
  <Router>
    <React.Fragment>
      <Route exact path="/" component={SignIn} />
      <PrivateRoute exact path="/persons" component={Persons}/>
    </React.Fragment>
    </Router>
    </Provider>
  
    
  );
}

export default App;
