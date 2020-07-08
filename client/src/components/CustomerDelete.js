import React from 'react';

const CustomerDelete = ({ id, stateRefresh }) => {
  const deleteCustomer = () => {
    const url = '/api/customer/' + id;
    fetch(url, {
      method: 'DELETE',
    });
    stateRefresh();
  };
  return <button onClick={() => deleteCustomer()}>Delete</button>;
};

export default CustomerDelete;
