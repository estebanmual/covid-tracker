import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ContinentDisplay.module.css';
import africaIMG from '../../images/africa.svg';
import asiaIMG from '../../images/asia.svg';
import europeIMG from '../../images/europe.svg';
import northAmericaIMG from '../../images/northAmerica.svg';
import oceaniaIMG from '../../images/oceania.svg';
import southAmericaIMG from '../../images/southAmerica.svg';
import arrow from '../../images/arrow-right.svg';

export default function ContinentsDisplay({ continent }) {
  const { name, active } = continent;
  function mapImg() {
    switch (name) {
      case 'Asia':
        return <img className={style.mapImg} src={asiaIMG} alt="Continent Map" />;
      case 'North America':
        return <img className={style.mapImg} src={northAmericaIMG} alt="Continent Map" />;

      case 'South America':
        return <img className={style.mapImg} src={southAmericaIMG} alt="Continent Map" />;

      case 'Europe':
        return <img className={style.mapImg} src={europeIMG} alt="Continent Map" />;

      case 'Australia-Oceania':
        return <img className={style.mapImg} src={oceaniaIMG} alt="Continent Map" />;

      case 'Africa':
        return <img className={style.mapImg} src={africaIMG} alt="Continent Map" />;

      default:
        return null;
    }
  }

  return (
    <div>
      {mapImg()}
      <span className={style.info}>
        <p className={style.name}>{name}</p>
        <p className={style.number}>{new Intl.NumberFormat('en').format(active)}</p>
        <Link to={`/${name}`}><img className={style.arrow} src={arrow} alt="Arrow" /></Link>
      </span>
    </div>
  );
}

ContinentsDisplay.defaultProps = {
  continent: {
    name: '',
    active: 0,
  },
};

ContinentsDisplay.propTypes = {
  continent: PropTypes.shape({
    name: PropTypes.string,
    active: PropTypes.number,
  }),
};
