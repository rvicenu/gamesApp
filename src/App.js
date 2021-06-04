import React, { Fragment } from 'react';
import {
  StatusBar,
} from 'react-native';

import RootNavigation from './routes/Root';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle={'dark-content'} />
      <RootNavigation />
    </Fragment>
  );
};

export default App;
