/* eslint-disable import/no-cycle */

import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { HeaderSearch } from '~/components/organisms';
import { Container } from '~/components/atoms';

import favicon from '../../../assets/images/favicon.ico';

import styles from './Screen.module.scss';

const Screen = ({ children, title }) => (
  <div className={styles.Screen} data-testid="Screen">
    <Head>
      <meta name="viewport" content="initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width" />
      <meta name="description" />
      <title>{title}</title>
      <link rel="icon" href={favicon} />
      <link rel="stylesheet" type="text/css" href="/nprogress.css" />
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
