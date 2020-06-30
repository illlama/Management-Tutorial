import React from 'react';
import './App.css';
import Customer from './components/Customer';

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

const App = () => {
  return (
    <div className="gray-background">
      {customers.map((customer) => {
        return <Customer {...customer} />;
      })}
    </div>
  );
};
export default App;
