/* eslint-disable import/no-cycle */

import React from 'react';
import { useRouter } from 'next/router';
import styles from './HeaderSearch.module.scss';
import { SearchBar } from '~/components/molecules';
import { Container } from '~/components/atoms';
import logo from '../../../assets/images/logo.png';

const HeaderSearch = () => {
  const route = useRouter();
  const { query: { q } = {} } = route || {};

  const handleGoToHome = (e) => {
    e.preventDefault();
    route.push('/');
  };

  const handleSubmit = (value) => {
    route.push(`/items?q=${value}`);
  };

  return (
    <div className={styles.HeaderSearch} data-testid="HeaderSearch">
      <Container>
        <a href="/" onClick={handleGoToHome}>
          <img src={logo} title="Mercado livre - Logo" alt="Logo" />
        </a>
        <SearchBar value={q} onSubmit={handleSubmit} />
      </Container>
    </div>
  );
};

export default HeaderSearch;
