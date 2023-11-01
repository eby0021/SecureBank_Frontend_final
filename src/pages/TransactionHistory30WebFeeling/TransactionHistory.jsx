import React from 'react';
import TransactionRow from './TransactionRow';

const TransactionHistory = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <TransactionRow
          key={transaction.id}
          id={transaction.id}
          senderAccountNumber={transaction.senderAccountNumber}
          receiverAccountNumber={transaction.receiverAccountNumber}
          amount={transaction.amount}
          transDate={transaction.transDate}
        />
      ))}
    </div>
  );
};

export default TransactionHistory;
