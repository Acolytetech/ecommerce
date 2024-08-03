// src/components/Address.js
import React, { useState, useEffect } from 'react';
import { fetchAddress } from '../api';

const SAddress = () => {
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetchAddress()
      .then(data => setAddress(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Address</h2>
      <div className="bg-gray-100 p-4 rounded border">
        <p><strong>Name:</strong> {address.name}</p>
        <p><strong>Email:</strong> {address.email}</p>
        <p><strong>Phone:</strong> {address.phone}</p>
        <p><strong>Address Line 1:</strong> {address.addressLine1}</p>
        <p><strong>Address Line 2:</strong> {address.addressLine2}</p>
        <p><strong>Landmark:</strong> {address.landmark}</p>
        <p><strong>City:</strong> {address.city}</p>
        <p><strong>State:</strong> {address.state}</p>
        <p><strong>Pincode:</strong> {address.pincode}</p>
      </div>
    </div>
  );
};

export default SAddress;
