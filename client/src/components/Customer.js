import React from 'react';
import { TableRow, TableCell } from '@material-ui/core';
import '../App.css';
const Customer = ({ ...customer }) => {
  return (
    <TableRow>
      <TableCell>{customer.id}</TableCell>
      <TableCell>
        <img src={customer.image} alt="profile" className="custoemr-image" />
      </TableCell>
      <TableCell> {customer.name}</TableCell>
      <TableCell> {customer.birthday}</TableCell>
      <TableCell> {customer.gender}</TableCell>
      <TableCell>{customer.job}</TableCell>
    </TableRow>
  );
};

export default Customer;
