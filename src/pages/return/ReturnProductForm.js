import React, { useState } from 'react';

const ReturnProductForm = () => {
  const [formData, setFormData] = useState({
    orderNumber: '',
    productName: '',
    reason: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, photo: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic
    console.log(formData);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 border rounded-lg shadow-lg bg-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Return Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">Order Number</label>
          <input
            type="text"
            id="orderNumber"
            name="orderNumber"
            value={formData.orderNumber}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="productName" className="block text-sm font-medium text-gray-700">Product Name</label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason for Return</label>
          <textarea
            id="reason"
            name="reason"
            value={formData.reason}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Upload Photo</label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Return Request
        </button>
      </form>
    </div>
  );
};

export default ReturnProductForm;
