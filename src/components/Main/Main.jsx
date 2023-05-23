import React from 'react';
import classNames from 'classnames/bind';
import styles from './Main.module.scss';

import Carousel from '../Carousel';
import InsertText from '../InsertText';

import { companiesLogosPaths, arrowWithFlyPath, welcomeText } from './data';

export default function Main() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx('container')}>
      <Carousel imgPath={companiesLogosPaths} />
      <InsertText imgPath={arrowWithFlyPath} textArr={welcomeText} />
    </section>
  );
}
