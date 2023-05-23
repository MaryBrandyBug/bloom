import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Carousel.module.scss';

function Carousel({ imgPath }) {
  const cx = classNames.bind(styles);
  const slides = imgPath.map((item) => <img src={item.path} alt={item.alt} />);
  return (
    <section className={cx('container')}>
      <div className={cx('logos-slider')}>
        {slides}
      </div>
      <div className={cx('logos-slider')}>
        {slides}
      </div>
    </section>
  );
}

Carousel.defaultProps = {
  imgPath: null,
};

Carousel.propTypes = {
  imgPath: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.string])),
};

export default Carousel;
