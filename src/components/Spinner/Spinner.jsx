import React from 'react';
import { Backdrop, CircularProgress } from '@mui/material';

export const Spinner = ({ loading = false, onClose }) => (
  <Backdrop
    sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
    open={loading}
    onClick={onClose}
  >
    <CircularProgress color='inherit' />
  </Backdrop>
);

export default Spinner;
