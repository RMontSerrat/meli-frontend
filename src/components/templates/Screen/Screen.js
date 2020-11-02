import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

import styles from './Screen.module.scss';

const Screen = ({ children, title }) => (
  <div className={styles.Screen} data-testid="Screen">
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      {children}
    </main>
  </div>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Screen;
