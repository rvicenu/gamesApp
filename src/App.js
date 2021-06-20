import React, { Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';
import LoginContext from './contexts/LoginContext';
import GamesContext from './contexts/GamesContext';
import PhotoContext from './contexts/PhotoContext';

import RootNavigation from './routes/Root';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <LoginContext>
        <GamesContext>
          <PhotoContext>
            <RootNavigation />
          </PhotoContext>
        </GamesContext>
      </LoginContext>
    </Fragment>
  );
};

export default App;
