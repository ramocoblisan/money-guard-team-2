import React, { useEffect, useMemo, useState } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { yupResolver } from '@hookform/resolvers/yup';
import DatePicker from 'react-datepicker';

import TransactionSwitcher from './TransactionSwitcher';
import FormInput from './FormField';

import { formatDate } from '../../more/addLeaddingzero';

import "react-datepicker/dist/react-datepicker.css";

import * as style from "../../sass/Module/Form.module.css";
import sprite from '../../images/svg/sprite.svg';

export function Form({
  content,
  categories,
  toggle,
  typeForm,
  onDataSubmit,
  schema,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const [selectedOption, setSelectedOption] = useState(null);
  const [type, setType] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [isHidden, setIsHidden] = useState(true);

  useEffect(() => {
    content ? setType(content.type) : setType('EXPENSE');
    setValue('amount', content && +content.amount.toString().replace('-', ''));
    setValue('comment', content && content.comment);
  }, [content, setValue]);

  const categoriesValues = useMemo(() => {
    return categories.map(({ id, name }) => {
      return { value: id, label: name };
    });
  }, [categories]);

  const defaultValue = useMemo(() => {
    return categoriesValues.find(option => {
      return content?.categoryId === option.value;
    });
  }, [content, categoriesValues]);

  const handleChange = selectedOption => {
    setSelectedOption(selectedOption);
    setIsHidden(true);
  };

  const submit = data => {
    if (
      (typeForm === 'add' && type === 'EXPENSE' && selectedOption) ||
      type === 'INCOME'
    ) {
      onDataSubmit({
        transactionDate: formatDate(startDate),
        amount: type === 'EXPENSE' ? +`-${data.amount}` : +data.amount,
        comment: data.comment,
        type: type,
        categoryId:
          type === 'EXPENSE'
            ? selectedOption?.value
            : '063f1132-ba5d-42b4-951d-44011ca46262',
      });
    } else if (typeForm === 'add' && !selectedOption) {
      setIsHidden(false);
      return;
    } else if (typeForm === 'edit') {
      onDataSubmit({
        transactionDate: content ? content.transactionDate : formatDate(startDate),
        amount: type === 'EXPENSE' ? +`-${data.amount}` : +data.amount,
        comment: data.comment,
      });
    }
  };
  const toggleTransaction = type => {
    if (type) {
      setType('INCOME');
    } else {
      setType('EXPENSE');
    }
  };

  return (
    <div className={style.container}>
      <form className={style.formWrapper} onSubmit={handleSubmit(submit)}>
        <h1 className={style.header}>
          {typeForm === 'add' ? 'Add transaction' : 'Edit transaction'}
        </h1>
        {typeForm === 'add' ? (
          <TransactionSwitcher onChange={toggleTransaction} />
        ) : (
          <div>
            <ul className={style.checkBox}>
              <li
                onClick={() => {
                  if (!(typeForm === 'edit' && type === 'EXPENSE')) {
                    toggleTransaction(true);
                  }
                }}
                className={
                  content.type === 'INCOME' || type === 'INCOME'
                    ? style.activeIncome
                    : ''
                }
                disabled={typeForm === 'edit' && type === 'EXPENSE'}
              >
                {' '}
                Income
              </li>
              <span>/</span>
              <li
                onClick={() => {
                  if (!(typeForm === 'edit' && type === 'INCOME')) {
                    toggleTransaction(false);
                  }
                }}
                className={type === 'EXPENSE' ? style.activeExpense : ''}
                disabled={typeForm === 'edit' && type === 'INCOME'}
              >
                {' '}
                Expense{' '}
              </li>
            </ul>
          </div>
        )}
        <div className={style.secondContainer}>
          {type === 'EXPENSE' && (
            <div className={style.category}>
              <Select
                name="category"
                className="react-select-container"
                classNamePrefix="react-select"
                options={categoriesValues}
                placeholder="Select category"
                defaultValue={defaultValue && defaultValue}
                onChange={handleChange}
                isDisabled={typeForm === 'edit'}
              />
              <span className={!isHidden ? style.active : style.hidden}>
                Please, choose the category
              </span>
            </div>
          )}
          <div className={style.boxDate}>
            <FormInput
              className={style.incomeInput}
              name="amount"
              placeholder="0.00"
              autoComplete="false"
              errors={errors}
              register={register}
            />
            <div className={style.svgBox}>
              <DatePicker
                className={style.customInput}
                selected={startDate}
                onChange={date => {
                  setValue('transactionDate', date);
                  setStartDate(date);
                }}
                wrapperClassName={style.reactDatepickerWrapper} // Numele corect este "reactDatepickerWrapper"
                calendarClassName={style.reactDatepickerCalendar} // Numele corect este "reactDatepickerCalendar"
              />
              <svg width="36" height="36">
                <use xlinkHref={`${sprite}#icon-date`} />
              </svg>
              {errors['transactionDate'] && (
                <span>{errors['transactionDate'].message}</span>
              )}
            </div>
          </div>

          <FormInput
            className={style.comment}
            name="comment"
            placeholder="Comment"
            errors={errors}
            register={register}
          />

          <div className={style.btnBox}>
            <button className="modalButtonColor">
              {typeForm === 'add' ? 'ADD' : 'EDIT'}
            </button>
            <button type="button" onClick={toggle} className="modalButton">
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}