// libraries
import React from 'react';
import { Provider } from 'react-redux'

// functions
import store from './redux'

// components
import Routes from "./routes";

const App = () => {
  return (
    <Provider store={store}>
        <Routes />
    </Provider>
  );
}

export default App;
