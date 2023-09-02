import css from './Friend.module.css';
import PropTypes from 'prop-types';

export const Friend = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.item}>
      <span className={`status ${isOnline ? css.online : css.offline}`}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
