import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import { Input, SearchButton } from '~/components/atoms';

const SearchBar = ({ onSubmit }) => (
  <form className={styles.SearchBar} data-testid="SearchBar" role="search" onSubmit={onSubmit}>
    <Input classes={{ root: styles.input }} placeholder="Buscar produtos, marcas e muito mais..." />
    <SearchButton classes={{ root: styles.button }} type="submit" />
  </form>
);

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};

SearchBar.defaultProps = {
  onSubmit: () => {},
};

export default SearchBar;
