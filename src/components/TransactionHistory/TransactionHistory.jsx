import { Transaction } from 'components/Transaction/Transaction';
import {
  TransactionhistoryEl,
  TheadstyleEl,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionhistoryEl>
      <thead>
        <tr>
          <TheadstyleEl>Type</TheadstyleEl>
          <TheadstyleEl>Amount</TheadstyleEl>
          <TheadstyleEl>Currency</TheadstyleEl>
        </tr>
      </thead>
      {transactions.map(transaction => (
        <Transaction
          key={transaction.id}
          type={transaction.type}
          amount={transaction.amount}
          currency={transaction.currency}
        />
      ))}
    </TransactionhistoryEl>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
