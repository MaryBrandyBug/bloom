import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import data from './data';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const cx = classNames.bind(styles);
  const menu = data.map((item) => <li className={cx('menu__item')}><Link to="/">{item}</Link></li>);

  return (
    <div className={cx('container')}>
      <p className={cx('logo')}>bloom</p>
      <ul className={cx('menu__container')}>
        {menu}
      </ul>
    </div>
  );
}
