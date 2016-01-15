import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import classNames from 'classnames/bind'
import styles from './Navigation.scss'

const cx = classNames.bind(styles)

const Navigation = () => (
  <nav className={cx('Navigation')} role="navigation">
    <Link
      to="/"
      className={cx('Navigation-item')}
      activeClassName={cx('Navigation-item--active')}>
      Counter
    </Link>

    <Link
      to="/starwars"
      className={cx('Navigation-item')}
      activeClassName={cx('Navigation-item--active')}>
      Starwars
    </Link>
  </nav>
)


export default Navigation
