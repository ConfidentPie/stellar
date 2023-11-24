import React from 'react';
import modalOverlay from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {
  const handleClick = () => {
    onClose();
  };

  return <div className={modalOverlay.overlay} onClick={handleClick}></div>;
};

export default ModalOverlay;
