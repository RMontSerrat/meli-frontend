import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './List.module.scss';

const List = ({ children, classes }) => {
  const renderItems = children
    .reduce((a, b) => a.concat(b), [])
    .map((item) => (
      <div
        data-testid="List-item"
        key={item.key}
        className={classNames(styles.item, classes.item)}
      >
        {item}
      </div>
    ));

  return (
    <div className={classNames(styles.List, classes.root)} data-testid="List">
      {renderItems}
    </div>
  );
};

List.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
    item: PropTypes.string,
  }),
};

List.defaultProps = {
  classes: {},
};

export default List;
