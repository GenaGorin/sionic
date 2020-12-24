import React from 'react';
import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import AppNavigator from './navigation/AppNavigator';
import { rootReducer } from './screens/redux/rootReducer';

const store = createStore(rootReducer, compose(applyMiddleware(thunk)))

const App = () => {
  return (
    <Provider store = {store}>
      <AppNavigator />
    </Provider>
  );
};


export default App;
