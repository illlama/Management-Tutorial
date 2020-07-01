import React, { useState, useEffect } from 'react';
import './App.css';
import Customer from './components/Customer';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

const App = (styles) => {
  const [customers, setCustomers] = useState('');
  const callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  };
  useEffect(() => {
    callApi()
      .then((res) => setCustomers(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Paper className={styles.classes.root}>
      <Table className={styles.classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>번호</TableCell>
            <TableCell>사진</TableCell>
            <TableCell>이름</TableCell>
            <TableCell>생년월일</TableCell>
            <TableCell>성별</TableCell>
            <TableCell>직업</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers
            ? customers.map((customer) => {
                return <Customer key={customer.id} {...customer} />;
              })
            : ''}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default withStyles(styles)(App);
