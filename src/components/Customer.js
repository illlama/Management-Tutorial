import React from 'react';

const CustomerProfile = ({ ...customer }) => {
  return (
    <div>
      <img src={customer.image} alt="profile" />
      <h2>
        {customer.name}({customer.id})
      </h2>
    </div>
  );
};
const CustomerInfo = ({ ...customer }) => {
  return (
    <div>
      <p>{customer.birthday}</p>
      <p>{customer.gender}</p>
      <p>{customer.job}</p>
    </div>
  );
};

const Customer = ({ ...customer }) => {
  return (
    <div>
      <CustomerProfile {...customer} />
      <CustomerInfo {...customer} />
    </div>
  );
};

export default Customer;
