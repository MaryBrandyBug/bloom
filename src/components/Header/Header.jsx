import React from 'react';
import classNames from 'classnames/bind';
import Navbar from '../Navbar';
import styles from './Header.module.scss';

export default function Header() {
  const cx = classNames.bind(styles);
  return (
    <header className={cx('container')}>
      <Navbar />
    </header>
  );
}
