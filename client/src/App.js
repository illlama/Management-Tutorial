import React from 'react';
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
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 1080,
  },
});

const customers = [
  {
    id: 1,
    image: 'https://placeimg.com/64/64/1',
    name: '홍길동',
    birthday: 19931221,
    gender: 'male',
    job: 'developer',
  },
  {
    id: 2,
    image: 'https://placeimg.com/64/64/2',
    name: '정하루',
    birthday: 19981211,
    gender: 'female',
    job: 'developer',
  },
  {
    id: 3,
    image: 'https://placeimg.com/64/64/3',
    name: '판다킴',
    birthday: 19921121,
    gender: 'female',
    job: 'developer',
  },
];

const App = (styles) => {
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
          {customers.map((customer) => {
            return <Customer key={customer.id} {...customer} />;
          })}
        </TableBody>
      </Table>
    </Paper>
  );
};
export default withStyles(styles)(App);
