import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function ForgotModel({ closeForgotPasswordModel }) {
    const [forgotEmail, setForgotEmail] = useState('');
    const [passwordResetSent, setPasswordResetSent] = useState(false);

    const handleForgotEmailChange = (e) => {
        setForgotEmail(e.target.value);
    };

    const handleSendPassword = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3001/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: forgotEmail })
            });
            const result = await res.json();
            if (result.message === "Password reset link sent to your email") {
                setPasswordResetSent(true);
            } else {
                alert(result.message);
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="fixed inset-0 w-full overflow-scroll flex items-center justify-center z-50 bg-gray-900 bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg relative max-w-md w-full">
                <AiOutlineClose
                    className="absolute top-4 right-4 text-2xl cursor-pointer"
                    onClick={closeForgotPasswordModel}
                />
                <h2 className="text-2xl font-bold text-center mb-4">
                    Forgot Password
                </h2>
                <form onSubmit={handleSendPassword} className="space-y-4">
                    <label className="block">
                        Email:
                        <input
                            type="email"
                            name="forgotEmail"
                            value={forgotEmail}
                            onChange={handleForgotEmailChange}
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                            required
                        />
                    </label>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                    >
                        Send
                    </button>
                    {passwordResetSent && (
                        <p className="text-center text-green-500 mt-2">
                            Password reset link sent to your email
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ForgotModel;
