import React from 'react';

const ReportsAndMasters = () => {
  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold text-red-500">Reports & Masters</h1>
      <div className="grid grid-cols-3 gap-6 mt-8">
        {[
          'Masters',
          'Consultation Setup',
          'Consultation',
          'Facility Management',
          'Settings',
          'Inpatient',
          'Laboratory Setup',
          'Laboratory',
          'Rehabilitation & Physiotherapy',
          'Nursing',
          'Records and History',
          'Reports'
        ].map((title, index) => (
          <div
            key={index}
            className="bg-blue-600 text-white text-center font-medium py-20 px-4 rounded-md"
          >
            {title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReportsAndMasters;
