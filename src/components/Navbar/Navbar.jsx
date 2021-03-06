import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Navbar.module.css';
import search from '../../images/search.svg';
import home from '../../images/casa.svg';

function Navbar({ pageTo }) {
  switch (pageTo) {
    case 'No':
      return <div>Nop</div>;
    default:
      return (
        <div className={style.navbar}>
          <Link to="/"><img className={style.navbar__img} src={home} alt="Home" /></Link>
          <h1 className={style.navbar__title}>covid-19 stats</h1>
          <img className={style.navbar__img} src={search} alt="search" />
        </div>
      );
  }
}

export default Navbar;

Navbar.defaultProps = {
  pageTo: '',
};

Navbar.propTypes = {
  pageTo: PropTypes.string,
};
