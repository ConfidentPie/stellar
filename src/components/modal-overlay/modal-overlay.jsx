import React from 'react';
import PropTypes from 'prop-types';

import modalOverlay from './modal-overlay.module.css';

const ModalOverlay = ({ onClose }) => {

  return <div className={modalOverlay.overlay} onClick={onClose}></div>;
};

ModalOverlay.propTypes = {
  onClose: PropTypes.func.isRequired
};
export default ModalOverlay;
