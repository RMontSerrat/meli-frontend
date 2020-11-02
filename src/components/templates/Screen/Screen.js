/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { HeaderSearch } from '~/components/organisms';

import favicon from '~/assets/images/favicon.ico';

import styles from './Screen.module.scss';
import Container from '~/components/templates';

const Screen = ({ children, title }) => (
  <div className={styles.Screen} data-testid="Screen">
    <Head>
      <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      <title>{title}</title>
      <link rel="icon" href={favicon} />
    </Head>
    <HeaderSearch />
    <main className={styles.main}>
      <Container variant="column">
        {children}
      </Container>
    </main>
  </div>
);

Screen.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Screen;
