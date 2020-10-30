import React from 'react';
import SearchIcon from '../../../assets/icons/search.svg';

import styles from './SearchButton.module.scss';

const SearchButton = () => (
  <button className={styles.root} type="button">
    <SearchIcon />
  </button>
);

export default SearchButton;
