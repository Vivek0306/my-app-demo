import React from 'react';
import { Box, Modal, Backdrop, Fade } from '@mui/material';

const ModalComponent = ({ open, onClose, children }) => {
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };
  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
    >
      <Fade in={open}>
      <Box sx={style}>{children}</Box>
      </Fade>
    </Modal>
  );
};

export default ModalComponent;
