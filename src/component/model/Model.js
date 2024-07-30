import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import axios from 'axios';
import './Model.css';
import { useNavigate } from 'react-router-dom';

function ShowModel({ closeModel }) {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        isLogin: true,
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

        if (formData.isLogin) {
            axios.post('http://localhost:3001/login', {
                email: formData.email,
                password: formData.password
            })
            .then(result => {
                if (result.data === "Success") {
                    // Save user info to localStorage
                    localStorage.setItem('user', JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone
                    }));
                    closeModel();
                    navigate('/');
                } else {
                    alert(result.data);
                }
            })
            .catch(err => console.log(err));
        } else {
            if (formData.password !== formData.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            axios.post('http://localhost:3001/signup', {
                name: formData.name,
                phone: formData.phone,
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
            })
            .then(result => {
                if (result.data === "Signup Success") {
                    // Save user info to localStorage
                    localStorage.setItem('user', JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone
                    }));
                    alert('Signup Success');
                    closeModel();
                    navigate('/');
                }
            })
            .catch(err => console.log(err));
        }
    };

    const toggleForm = () => {
        setFormData(prevData => ({
            ...prevData,
            isLogin: !prevData.isLogin,
        }));
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password');
    };

    return (
        <div className="fixed inset-0 w-full overflow-scroll flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <AiOutlineClose
                    className="absolute top-4 right-4 text-2xl cursor-pointer"
                    onClick={closeModel}
                />
                <h2 className="text-2xl font-bold text-center mb-4">
                    {formData.isLogin ? 'Login' : 'Signup'}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {!formData.isLogin && (
                        <>
                            <label className="block">
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
                            <label className="block">
                                Phone:
                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-2 border border-gray-300 rounded"
                                    required
                                />
                            </label>
                        </>
                    )}
                    <label className="block">
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
                    <label className="block">
                        Password:
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                            required
                        />
                    </label>
                    {!formData.isLogin && (
                        <label className="block">
                            Confirm Password:
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                    )}
                    {formData.isLogin && (
                        <button
                            type="button"
                            className="text-blue-500 underline"
                            onClick={handleForgotPassword}
                        >
                            Forgot Password?
                        </button>
                    )}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                        {formData.isLogin ? 'Login' : 'Signup'}
                    </button>
                </form>
                <p className="text-center mt-4">
                    {formData.isLogin ? 'New user? ' : 'Already have an account? '}
                    <button
                        onClick={toggleForm}
                        className="text-blue-500 underline"
                    >
                        {formData.isLogin ? 'Signup' : 'Login'}
                    </button>
                </p>
            </div>
        </div>
    );
}

export default ShowModel;
