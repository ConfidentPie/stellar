import React, { useEffect  } from 'react';
import ReactDOM from 'react-dom';
import modal from './modal.module.css';
import ModalOverlay from '../modal-overlay/modal-overlay';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';

const Modal = ({ children, onClose }) => {
  const modalRoot = document.getElementById("modal");

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [onClose]);

  return  ReactDOM.createPortal(
    <>
      <ModalOverlay onClose={onClose} />
      <div
        className={modal.content}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`${modal.close__button} mt-15 mr-10`}
          onClick={onClose}
        >
          <CloseIcon type='primary' />
        </button>
      {children}
      </div>
    </>, modalRoot
  )
};

export default Modal;