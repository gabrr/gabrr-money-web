// libraries
import React from 'react';
import { Provider } from 'react-redux'

// functions
import store from './redux'

// components
import Routes from "./routes";
import { Badges } from './components/molecules';

const App = () => {

  return (
    <Provider store={store}>
        <Routes />
        <Badges />
        {/* <AppLoadingState loading={loading} /> */}
    </Provider>
  );
}

export default App;
