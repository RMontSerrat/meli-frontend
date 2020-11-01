import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import AngleRight from '../../../assets/icons/angle-right.svg';
import styles from './Breadcrumb.module.scss';

const Breadcrumb = ({ items }) => (
  <ol className={styles.Breadcrumb} data-testid="Breadcrumb">
    {items.map((item, i) => (
      <Fragment key={item}>
        <li>
          {item}
        </li>
        {i < items.length - 1 && <AngleRight />}
      </Fragment>
    ))}
  </ol>
);

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Breadcrumb;
