/* eslint-disable react/prop-types */

import React from 'react';
import { appWithTranslation } from '~/i18n';
import { useNProgress } from '~/hooks';
import '../styles/index.scss';

const App = ({ Component, pageProps }) => {
  useNProgress();
  return <Component {...pageProps} />;
};

export default appWithTranslation(App);
