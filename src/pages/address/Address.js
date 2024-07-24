// ShowAddressModel.js
import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
// import './Model.css';

function Address({ closeModel }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        addressLine1: '',
        addressLine2: '',
        pincode: '',
        city: '',
        state: '',
        landmark: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
        // Add your form submission logic here
        closeModel();
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-4xl w-full">
                <AiOutlineClose
                    className="absolute top-4 right-4 text-2xl cursor-pointer"
                    onClick={closeModel}
                />
                <h2 className="text-2xl font-bold text-center mb-4">Address Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="flex space-x-4">
                        <label className="flex-1">
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                        <label className="flex-1">
                            Email:
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                    </div>
                    <div className="flex space-x-4">
                        <label className="flex-1">
                            Phone:
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                        <label className="flex-1">
                            Address Line 1:
                            <input
                                type="text"
                                name="addressLine1"
                                value={formData.addressLine1}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                    </div>
                    <div className="flex space-x-4">
                        <label className="flex-1">
                            Address Line 2:
                            <input
                                type="text"
                                name="addressLine2"
                                value={formData.addressLine2}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </label>
                        <label className="flex-1">
                            Pincode:
                            <input
                                type="text"
                                name="pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                    </div>
                    <div className="flex space-x-4">
                        <label className="flex-1">
                            City:
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                        <label className="flex-1">
                            State:
                            <input
                                type="text"
                                name="state"
                                value={formData.state}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                    </div>
                    <div className="flex space-x-4">
                        <label className="flex-1">
                            Landmark:
                            <input
                                type="text"
                                name="landmark"
                                value={formData.landmark}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                            />
                        </label>
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        Proceed
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Address;
