import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';

import * as style from "../../sass/Module/Modal.module.css";
import sprite from "../../images/svg/sprite.svg"

const modalRoot = document.querySelector('#modal');

 const Modal = ({ closeModal, children }) => {

  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={style.modalWrapper}>
      <div className={style.modalContent}>
        <button className={style.closeButton} onClick={closeModal}>
          <svg width="16" height="16">
            <use xlinkHref={`${sprite}#icon-close`} />
          </svg>
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
