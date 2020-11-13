import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ProgressiveImage.module.scss';

const ProgressiveImage = ({
  src, className, alt, ...props
}) => {
  const [imageLoaded, changeImageLoaded] = useState(false);

  return (
    <figure className={classNames(styles.ProgressiveImage, className)} data-testid="ProgressiveImage">
      <span className={classNames(styles.overlayImage, { [styles.loaded]: imageLoaded })} />
      <img
        alt={alt}
        {...props}
        onLoad={() => {
          changeImageLoaded(true);
        }}
        src={src}
      />
    </figure>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  className: PropTypes.string,
  alt: PropTypes.string.isRequired,
};

ProgressiveImage.defaultProps = {
  className: null,
};

export default ProgressiveImage;
