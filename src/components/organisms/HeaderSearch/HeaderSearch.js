import React from 'react';
import styles from './HeaderSearch.module.scss';
import { SearchBar } from '~/components/molecules';
import { Container } from '~/components/templates';
import logo from '../../../assets/images/logo.png';

const HeaderSearch = () => (
  <div className={styles.HeaderSearch} data-testid="HeaderSearch">
    <Container>
      <img src={logo} title="Mercado livre - Logo" alt="Logo" />
      <SearchBar />
    </Container>
  </div>
);

export default HeaderSearch;
