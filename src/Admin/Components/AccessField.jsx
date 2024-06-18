import React from 'react';
import { useNavigate } from 'react-router-dom';

const AccessField = () => {
    const navigate = useNavigate();

    const handleNavigateToTrainee = () => {
        navigate('/admin/register-trainee');
    };

    const handleNavigateToEmployee = () => {
        navigate('/admin/register-employee');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-300 to-blue-700">
            <div className="p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">Choose Access Type</h2>
                <button
                    className="w-full px-4 py-3 mb-4 text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={handleNavigateToTrainee}
                >
                    Register as Trainee
                </button>
                <button
                    className="w-full px-4 py-3 text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={handleNavigateToEmployee}
                >
                    Register as Employee
                </button>
            </div>
        </div>
    );
}

export default AccessField;
