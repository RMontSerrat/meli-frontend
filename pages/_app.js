/* eslint-disable react/prop-types */

import React from 'react';
import { Provider } from 'react-redux';
import { useStore } from '~/store';
import '../styles/globals.scss';

const App = ({ Component, pageProps }) => {
  const store = useStore(pageProps.initialReduxState);

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default App;
