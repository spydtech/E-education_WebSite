import React from 'react';

const PaymentData = () => {
  // Sample data array
  const paymentData = [
    { date: '2/3/2024', userId: '42310', fullName: 'User A', email: 'usera@email.com', course: 'JavaScript', paymentMethod: 'Credit Card' },
    { date: '3/4/2024', userId: '42314', fullName: 'User B', email: 'userb@email.com', course: 'Java', paymentMethod: 'Online' },
    { date: '4/5/2024', userId: '42318', fullName: 'User C', email: 'userc@email.com', course: 'Python', paymentMethod: 'Debit Card' },
    { date: '5/6/2024', userId: '42322', fullName: 'User D', email: 'userd@email.com', course: 'React', paymentMethod: 'UPI' },
    { date: '6/7/2024', userId: '42326', fullName: 'User E', email: 'usere@email.com', course: 'Node.js', paymentMethod: 'Cash' }
  ];

  return (
    <div className="flex flex-col justify-center overflow-x-auto p-4">
      <h1 className='text-[#2C3E50] font-semibold text-xl py-2'>Payment Method</h1>
      <div className="max-w-6xl">
        <table className="min-w-full border-collapse overflow-hidden">
          <thead>
            <tr className="bg-[#2C3E50] text-white">
              <th className="px-4 py-2 border">Date</th>
              <th className="px-4 py-2 border">User Id</th>
              <th className="px-4 py-2 border">Full Name</th>
              <th className="px-4 py-2 border">E-Mail ID</th>
              <th className="px-4 py-2 border">Course</th>
              <th className="px-4 py-2 border">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((data, index) => (
              <tr key={index} className="bg-white text-[#2C3E50]">
                <td className="px-4 py-2 border">{data.date}</td>
                <td className="px-4 py-2 border">{data.userId}</td>
                <td className="px-4 py-2 border">{data.fullName}</td>
                <td className="px-4 py-2 border">{data.email}</td>
                <td className="px-4 py-2 border">{data.course}</td>
                <td className="px-4 py-2 border">{data.paymentMethod}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PaymentData;
