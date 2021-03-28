import React, {
  useState, useRef, useCallback, useEffect,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ProgressiveImage.module.scss';

const ProgressiveImage = ({
  src, classes, alt, ...props
}) => {
  const [imageLoaded, changeImageLoaded] = useState(false);
  const imgRef = useRef();

  const handleImgLoaded = useCallback(() => {
    changeImageLoaded(true);
  }, []);

  useEffect(() => {
    if (imgRef?.current?.complete) {
      handleImgLoaded();
    }
  }, [imgRef, handleImgLoaded, imageLoaded]);

  return (
    <figure className={classNames(styles.ProgressiveImage, classes.root)} data-testid="ProgressiveImage">
      <span className={classNames(styles.overlayImage, { [styles.loaded]: imageLoaded })} />
      <img
        alt={alt}
        ref={imgRef}
        src={src}
        onLoad={handleImgLoaded}
        {...props}
      />
    </figure>
  );
};

ProgressiveImage.propTypes = {
  src: PropTypes.string.isRequired,
  classes: PropTypes.shape({
    root: PropTypes.string,
  }),
  alt: PropTypes.string.isRequired,
};

ProgressiveImage.defaultProps = {
  classes: {},
};

export default ProgressiveImage;
