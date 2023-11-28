import React from 'react';
import { modalCloseType } from '../../utils/prop-types';
import modalOverlay from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {

  return <div className={modalOverlay.overlay} onClick={onClose}></div>;
};

ModalOverlay.propTypes = {
  onClose: modalCloseType,
};
export default ModalOverlay;
