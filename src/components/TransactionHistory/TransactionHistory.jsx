import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css'

function TransactionHistory({items}) {
    return (
    <table className={css.transactionHistory}>
  <thead>
    <tr className={css.transactionHead}>
      <th className={css.transactionHeadLine}>Type</th>
      <th className={css.transactionHeadLine}>Amount</th>
      <th className={css.transactionHeadLine}>Currency</th>
    </tr>
  </thead>

  <tbody className={css.transactionBody}>
  {items.map(({id, type, amount, currency}) => (
  <tr key={id}>
      <td className={css.transactionLine}>{type}</td>
      <td className={css.transactionLine}>{amount}</td>
      <td className={css.transactionLine}>{currency}</td>
    </tr>))}
  </tbody>
</table>
    )
}

TransactionHistory.prototypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.number,
        currency: PropTypes.string,
    })
    )
}

export default TransactionHistory;