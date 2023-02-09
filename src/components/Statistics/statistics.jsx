import PropTypes from 'prop-types';
import css from './statistics.module.css';

const Statistics = ({ options, total, positivePercentage }) => (
  <>
    <p className={css.stat_text}>Good: {options.good}</p>
    <p className={css.stat_text}>Neutral: {options.neutral}</p>
    <p className={css.stat_text}>Bad: {options.bad}</p>
    <p className={css.stat_text}>Total : {total}</p>
    <p className={css.stat_text}>Positive feedback : {positivePercentage}%</p>
  </>
);

Statistics.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
