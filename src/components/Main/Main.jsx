import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';
import Carousel from '../Carousel';

import data from './data';

export default function Main() {
  const cx = classNames.bind(styles);
  return (
    <div className={cx('container')}>
      <Carousel imgPath={data} />
    </div>
  );
}
