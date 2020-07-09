import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import {
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  CircularProgress,
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
  progress: {
    margin: theme.spacing(2),
  },
});

const App = (styles) => {
  const [customers, setCustomers] = useState('');
  const [completed, setCompleted] = useState(0);
  const [query, setQuery] = useState('customers');
  // const getQueryUrl = useCallback(() => {
  //   return '/api/' + query;
  // }, [query]);
  // const callApi = async () => {
  //   const url = getQueryUrl();
  //   const response = await fetch(url);
  //   const body = await response.json();
  //   return body;
  // };
  // const stateRefresh = () => {
  //   setCustomers('');
  //   setCompleted(0);
  //   callApi()
  //     .then((res) => setCustomers(res))
  //     .catch((err) => console.log(err));
  // };

  const progress = () => {
    setCompleted((completed) => (completed >= 100 ? 0 : completed + 1));
  };
  const callApi = async () => {
    setInterval(progress, 15);
    const response = await axios('/api/customers');
    setCustomers(response.data);
  };
  const stateRefresh = () => {
    setCustomers('');
    setCompleted(0);
    callApi();
  };
  useEffect(() => {
    callApi();
  }, []);
  // useEffect(async () => {

  //   callApi()
  //     .then((res) => setCustomers(res))
  //     .catch((err) => console.log(err));
  // }, [getQueryUrl]);

  return (
    <div>
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
              <TableCell>설정</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {customers ? (
              customers.map((customer) => {
                return (
                  <Customer
                    key={customer.id}
                    stateRefresh={stateRefresh}
                    {...customer}
                  />
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan="6" align="center">
                  <CircularProgress
                    className={styles.classes.progress}
                    variant="determinate"
                    value={completed}
                  />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
      <CustomerAdd stateRefresh={stateRefresh} />
    </div>
  );
};
export default withStyles(styles)(App);
