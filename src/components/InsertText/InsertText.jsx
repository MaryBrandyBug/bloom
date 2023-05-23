import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './InsertText.module.scss';

function InsertText({ imgPath, textArr }) {
  const cx = classNames.bind(styles);

  const text = textArr.map((item) => (item.style === 'bold' ? <b>{item.text}</b> : item.text));
  return (
    <section className={cx('container')}>
      <div className={cx('large-text')}>
        <h2>
          {text}
        </h2>
      </div>
      {
        imgPath
          ? (
            <div className={cx('arrow')}>
              <img src={imgPath} alt="" />
            </div>
          )
          : null
      }
    </section>
  );
}

InsertText.defaultProps = {
  imgPath: null,
  textArr: null,
};

InsertText.propTypes = {
  imgPath: PropTypes.string,
  textArr: PropTypes.arrayOf((PropTypes.oneOfType([PropTypes.string]))),
};

export default InsertText;
