// src/components/RegisterTrainee.js
import React, { useState } from 'react';

function generateUsername() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

function generatePassword(length = 12) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

const RegisterTrainee = () => {
    const [employee, setEmployee] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mobilenumber, setMobileNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleAddEmployee = () => {
        const username = generateUsername();
        const password = generatePassword();
        setEmployee({ username, password });
        setFirstName('');
        setLastName('');
        setMobileNumber('');
        setEmail('');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="p-8 bg-white rounded-lg shadow-lg max-w-md w-full">
                <h2 className="mb-4 text-2xl font-bold text-center text-blue-600">Register Trainee</h2>
                <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="First Name"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                        />
                        <input
                            type="number"
                            placeholder="Mobile Number"
                            value={mobilenumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-3"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            onClick={handleAddEmployee}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Generate Credentials
                        </button>
                    </div>
                </div>
                {employee && (
                    <div className="w-full max-w-sm bg-white shadow-md rounded px-8 pt-6 pb-8">
                        <h2 className="text-2xl font-bold mb-4">Generated Credentials</h2>
                        <ul>
                            <li className="mb-2">
                                <p><strong>Username:</strong> {employee.username}</p>
                                <p><strong>Password:</strong> {employee.password}</p>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RegisterTrainee;
