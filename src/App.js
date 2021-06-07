import React, { Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoginContext from './contexts/LoginContext';

import RootNavigation from './routes/Root';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <LoginContext>
        <RootNavigation />
      </LoginContext>
    </Fragment>
  );
};

export default App;
