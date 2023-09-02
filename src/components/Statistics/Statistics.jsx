import PropTypes from 'prop-types';
import { StatisticsData } from 'components/StatisticsData/StatisticsData';
import css from './Statistics.module.css';
export const Statistics = ({ title, stats }) => {
  return (
    <div className={css.statistics}>
      <div className={css.titleblock}>
        {title && <h2 className={css.title}>{title}</h2>}
      </div>

      <div className={css.datalist}>
        {stats.map(info => (
          <StatisticsData
            key={info.id}
            label={info.label}
            percentage={info.percentage}
            backgroundColor={getRandomColor()}
          />
        ))}
      </div>
    </div>
  );
};

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

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
