import React from 'react';
import PropTypes from 'prop-types';
import style from './CountriesDisplay.module.css';

function CountriesDisplay({ country, color }) {
  return (
    <div className={style.countryWrapper} color={color}>
      <img className={style.countryFlag} src={country.countryInfo.flag} alt="Country flag" />
      <div className={style.countryInfo}>
        <p>
          {country.country}
          <br />
          <span>
            {new Intl.NumberFormat('en').format(country.active)}
            {' '}
            active cases
          </span>
        </p>

      </div>
    </div>
  );
}

export default CountriesDisplay;

CountriesDisplay.defaultProps = {
  country: {
    country: '',
    active: 0,
    countryInfo: {
      flag: '',
    },
  },
  color: 'false',
};

CountriesDisplay.propTypes = {
  country: PropTypes.shape({
    country: PropTypes.string,
    active: PropTypes.number,
    countryInfo: PropTypes.shape({
      flag: PropTypes.string,
    }),
  }),
  color: PropTypes.string,
};
