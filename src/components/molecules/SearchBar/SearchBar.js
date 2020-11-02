import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchBar.module.scss';
import { Input, SearchButton } from '~/components/atoms';

const SearchBar = ({ onSubmit, value: valueProp }) => {
  const [value, changeInputValue] = useState(valueProp);

  useEffect(() => {
    changeInputValue(valueProp);
  }, [valueProp]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(value);
  };

  const handleInputChange = (e) => {
    changeInputValue(e.target.value);
  };

  return (
    <form
      className={styles.SearchBar}
      data-testid="SearchBar"
      role="search"
      onSubmit={handleSubmit}
    >
      <Input
        classes={{ root: styles.input }}
        placeholder="Buscar produtos, marcas e muito mais..."
        value={value}
        onChange={handleInputChange}
      />
      <SearchButton classes={{ root: styles.button }} type="submit" />
    </form>
  );
};

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
  value: PropTypes.string,
};

SearchBar.defaultProps = {
  onSubmit: () => {},
  value: '',
};

export default SearchBar;
