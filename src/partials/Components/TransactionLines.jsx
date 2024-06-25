import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useDashboard } from '../../hooks/ueDashboard';
import { deleteTransactionThunk } from '../../redux/transactions/operations';
import { selectTransactionCategories } from '../../redux/transactions/transactionsSlice';

import sprite from '../../images/svg/sprite.svg';
import * as style from "../../sass/Module/TransactionLines.module.css";

const TransactionLines = ({ transaction, handleEditItem }) => {
  const { id, transactionDate, type, categoryId, comment, amount } =
    transaction;

  const { isBigScreenOrTablet, isMobile } = useDashboard();

  const dispatch = useDispatch();
  const categories = useSelector(selectTransactionCategories);

  function getCategoryName(id) {
    const category = categories.find(category => category.id === id);
    return category ? category.name : 'Income';
  }

  const handleDeleteTransaction = () => {
    dispatch(deleteTransactionThunk(transaction));
  };

  const signType = type.toLowerCase() === 'income' ? '+' : '-';

  const transactionBorderColor =
    type.toLowerCase() === 'income' ? style.income_border : style.expense_border;

  const transactionTextColor =
    type.toLowerCase() === 'income' ? style.income_text : style.expense_text;
  
  const formattedAmount = amount.toLocaleString('ru-RU', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <>
      {isMobile && (
        <li
          key={id}
          className={`${style.transaction_item} ${transactionBorderColor}`}
        >
          <table className={style.transactions_table_mobile}>
            <tbody className={style.table_body}>
              <tr className={style.transaction_row_mobile}>
                <td className={style.transaction_first_column}>Date</td>
                <td>{transactionDate}</td>
              </tr>
              <tr className={style.transaction_row_mobile}>
                <td className={style.transaction_first_column}>Type</td>
                <td>{signType}</td>
              </tr>
              <tr className={style.transaction_row_mobile}>
                <td className={style.transaction_first_column}>Category</td>
                <td>{getCategoryName(categoryId)}</td>
              </tr>
              <tr className={style.transaction_row_mobile}>
                <td className={style.transaction_first_column}>Comment</td>
                <td>{comment}</td>
              </tr>
              <tr className={style.transaction_row_mobile}>
                <td className={style.transaction_first_column}>Sum</td>
                <td className={transactionTextColor}>{formattedAmount}</td>
              </tr>
              <tr className={style.transaction_row_mobile}>
                <td>
                  <button
                    className={style.btn_delete}
                    onClick={handleDeleteTransaction}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleEditItem(
                        { categoryId, type, amount, comment, transactionDate },
                        id
                      )
                    }
                    className={style.btn_edit}
                  >
                    <svg className={style.icon_edit}>
                      <use xlinkHref={`${sprite}#icon-edit`} />
                    </svg>{' '}
                    Edit
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </li>
      )}
      {isBigScreenOrTablet && (
        <tr className={style.transaction_row}>
          <td className={style.transaction_colum}>{transactionDate}</td>
          <td className={style.transaction_colum} style={{ textAlign: 'center' }}>
            {signType}
          </td>
          <td className={style.transaction_colum}>{getCategoryName(categoryId)}</td>
          <td className={style.transaction_colum}>{comment}</td>
          <td
            className={`${style.transaction_colum} ${transactionTextColor}`}
            style={{ textAlign: 'right' }}
          >
            {formattedAmount}
          </td>
          <td className={style.transaction_colum}>
            <div className={style.btn_wrapper}>
              <button
                onClick={() =>
                  handleEditItem(
                    { categoryId, type, amount, comment, transactionDate },
                    id
                  )
                }
                className={style.btn_edit}
              >
                <svg className={style.icon_edit}>
                  <use xlinkHref={`${sprite}#icon-edit`} />
                </svg>
              </button>
              <button
                className={style.btn_delete}
                onClick={handleDeleteTransaction}
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      )}
    </>
  );
};

export default TransactionLines;