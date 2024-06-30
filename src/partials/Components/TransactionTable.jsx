import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from './Modal.jsx';
import { EditTransactionForm } from './EditTransactionForm.jsx';
import { AddTransactionForm } from './AddTransactionForm.jsx';
import TransactionLines from './TransactionLines.jsx';

import { useModal } from '../../hooks/useModal';
import { useDashboard } from '../../hooks/useDashboard.jsx';
import {
  selectTransactionCategories,
  selectTransactions,
} from '../../redux/transactions/transactionsSlice';

import sprite from '../../images/svg/sprite.svg';
import * as style from '../../sass/Module/TransactionTable.module.css';

const TransactionTable = () => {
  const { isOpen, toggle } = useModal();
  const [editContent, setEditContent] = useState('');

  const transactions = useSelector(selectTransactions);
  const categories = useSelector(selectTransactionCategories);

  const { isBigScreenOrTablet, isMobile } = useDashboard();

  if (isOpen) {
    document.body.classList.add('modal-open');
  } else {
    document.body.classList.remove('modal-open');
  }
  const handleEditItem = (content, id, name) => {
    toggle();
    setEditContent({ content, id, name });
    isOpen && document.body.classList.add('modal-open');
  };

  const handleAddItem = () => {
    toggle();
    setEditContent(null);
  };
  return (
    <section className={style.transactions_section}>
      <div className={style.transactions_container}>
        {isMobile && (
          <ul className={style.transactions_list}>
            {transactions.length > 0 ? (
              transactions.map(transaction => (
                <TransactionLines
                  handleEditItem={handleEditItem}
                  key={transaction.id}
                  transaction={transaction}
                />
              ))
            ) : (
              <div className={style.empty_transactions}>No transactions</div>
            )}
          </ul>
        )}
        {isBigScreenOrTablet && (
          <>
            {transactions.length > 0 ? (
              <table className={style.transactions_table}>
                <thead>
                  <tr className={style.transaction_row_head}>
                    <th>Date</th>
                    <th style={{ textAlign: 'center' }}>Type</th>
                    <th>Category</th>
                    <th>Comment</th>
                    <th style={{ textAlign: 'right' }}>Sum</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody className={style.table_body}>
                  {transactions.map(transaction => (
                    <TransactionLines
                      handleEditItem={handleEditItem}
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </tbody>
              </table>
            ) : (
              <>
                <table className={style.transactions_table}>
                  <thead>
                    <tr className={style.transaction_row_head}>
                      <th>Date</th>
                      <th style={{ textAlign: 'center' }}>Type</th>
                      <th>Category</th>
                      <th>Comment</th>
                      <th style={{ textAlign: 'right' }}>Sum</th>
                      <th></th>
                    </tr>
                  </thead>
                </table>
                <div className={style.empty_transactions}>No transactions</div>
              </>
            )}
          </>
        )}
        <button onClick={() => handleAddItem()} className={style.btn_add}>
          {' '}
          <svg className={style.icon_plus}>
            <use xlinkHref={`${sprite}#icon-plus`} />
          </svg>
        </button>
      </div>
      {isOpen && (
        <Modal closeModal={toggle}>
          {editContent ? (
            <EditTransactionForm
              editContent={editContent}
              categories={categories}
              toggle={toggle}
            />
          ) : (
            <AddTransactionForm categories={categories} toggle={toggle} />
          )}
        </Modal>
      )}
    </section>
  );
};

export default TransactionTable;
