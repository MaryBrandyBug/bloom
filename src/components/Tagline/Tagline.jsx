import React from 'react';
import classNames from 'classnames/bind';
import styles from './Tagline.module.scss';

export default function Tagline() {
  const cx = classNames.bind(styles);
  return (
    <section className={cx('container')}>
      <div className={cx('content')}>
        <h1>Discover, nurture, bloom</h1>
        <h3>
          <b>Product & Engineering Recruitment, </b>
          with a human touch and a dash of
          <b> va va bloom</b>
        </h3>
      </div>
    </section>
  );
}
