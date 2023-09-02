import PropTypes from 'prop-types';
import css from './StatisticsData.module.css';

export const StatisticsData = ({ label, percentage, backgroundColor }) => {
  const itemStyle = { backgroundColor: backgroundColor };
  return (
    <div className={css.item} style={itemStyle}>
      <span className={css.label}>{label}</span>
      <span className="percentage">{percentage}%</span>
    </div>
  );
};

StatisticsData.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  backgroundColor: PropTypes.string.isRequired,
};
