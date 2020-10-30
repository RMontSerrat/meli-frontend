import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import { SearchButton } from '~/components/atoms';

const SearchBar = () => (
  <form className={styles.SearchBar} data-testid="SearchBar">
    <SearchButton />
  </form>
);

SearchBar.propTypes = {};

SearchBar.defaultProps = {};

export default SearchBar;
