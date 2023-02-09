import React from 'react';
import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = props => (
  <>
    <p className={css.stat_text}>Good: {props.good}</p>
    <p className={css.stat_text}>Neutral: {props.neutral}</p>
    <p className={css.stat_text}>Bad: {props.bad}</p>
    <p className={css.stat_text}>Total : {props.total}</p>
    <p className={css.stat_text}>
      Positive feedback : {props.positivePercentage}%
    </p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
