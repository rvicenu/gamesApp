import React, { Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoginContext from './contexts/LoginContext';
import GamesContext from './contexts/GamesContext';

import RootNavigation from './routes/Root';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <LoginContext>
        <GamesContext>
          <RootNavigation />
        </GamesContext>
      </LoginContext>
    </Fragment>
  );
};

export default App;
