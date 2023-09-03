import { TdEl } from './Transaction.styled';
import PropTypes from 'prop-types';

export const Transaction = ({ type, amount, currency }) => {
  return (
    <tbody>
      <tr>
        <TdEl>{type}</TdEl>
        <TdEl>{amount}</TdEl>
        <TdEl>{currency}</TdEl>
      </tr>
    </tbody>
  );
};

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
