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
        otp: '',
        isLogin: true,
        otpSent: false,
        otpVerified: false
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
                    sendOTP();
                    setFormData(prevData => ({ ...prevData, otpSent: true }));
                }
            })
            .catch(err => console.log(err));
        }
    };

    const sendOTP = () => {
        axios.post('http://localhost:3001/send-otp', {
            phone: formData.phone
        })
        .then(result => console.log('OTP Sent:', result))
        .catch(err => console.log('Error sending OTP:', err));
    };

    const verifyOTP = () => {
        axios.post('http://localhost:3001/verify-otp', {
            phone: formData.phone,
            otp: formData.otp
        })
        .then(result => {
            if (result.data.message === "OTP verified successfully") {
                // Save user info to localStorage
                localStorage.setItem('user', JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone
                }));
                alert('OTP Verified Successfully');
                setFormData(prevData => ({
                    ...prevData,
                    otpVerified: true,
                    otpSent: false,
                    otp: '',
                    isLogin: true
                }));
            } else {
                alert('Invalid OTP');
            }
        })
        .catch(err => console.log('Error verifying OTP:', err));
    };

    const toggleForm = () => {
        setFormData(prevData => ({
            ...prevData,
            isLogin: !prevData.isLogin,
            otpSent: false,
            otpVerified: false
        }));
    };

    const handleForgotPassword = () => {
        console.log('Forgot Password');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <AiOutlineClose
                    className="absolute top-4 right-4 text-2xl cursor-pointer"
                    onClick={closeModel}
                />
                <h2 className="text-2xl font-bold text-center mb-4">
                    {formData.isLogin ? 'Login' : (formData.otpSent ? 'Verify OTP' : 'Signup')}
                </h2>
                {!formData.otpSent ? (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        {!formData.isLogin && !formData.otpVerified && (
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
                        {!formData.isLogin && !formData.otpVerified && (
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
                            {formData.isLogin ? 'Login' : (formData.otpVerified ? 'Signup' : 'Send OTP')}
                        </button>
                    </form>
                ) : (
                    <div className="space-y-4">
                        <label className="block">
                            Enter OTP:
                            <input
                                type="text"
                                name="otp"
                                value={formData.otp}
                                onChange={handleChange}
                                className="w-full mt-1 p-2 border border-gray-300 rounded"
                                required
                            />
                        </label>
                        <button
                            onClick={verifyOTP}
                            className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
                        >
                            Verify OTP
                        </button>
                    </div>
                )}
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