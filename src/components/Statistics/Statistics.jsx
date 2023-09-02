import PropTypes from 'prop-types';
import { StatisticsData } from 'components/StatisticsData/StatisticsData';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.datalist}>
        {stats.map(info => (
          <StatisticsData
            key={info.id}
            label={info.label}
            percentage={info.percentage}
          />
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
