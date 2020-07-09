import React, { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Button,
  Typography,
} from '@material-ui/core';

const CustomerDelete = ({ id, stateRefresh }) => {
  const deleteCustomer = () => {
    const url = '/api/customer/' + id;
    fetch(url, {
      method: 'DELETE',
    });
    stateRefresh();
  };
  return (
    <div>
      <Button variant="outlined" color="secondary" onClick={deleteCustomer}>
        Delete
      </Button>
    </div>
  );
};

export default CustomerDelete;
