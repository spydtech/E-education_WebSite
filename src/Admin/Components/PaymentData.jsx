import React from 'react'

const PaymentData = () => {
    return (
        <div className="overflow-x-auto px max-w-6xl">
            <div className="">
                <h1 className='text-[#F19E22]'>Payment Method</h1>
        <table className="min-w-full bg-[#F19E22]">
          <thead>
            <tr className="text-left">
              <th className="px-4 border  py-2 text-white">Date</th>
              <th className="px-4 border py-2 text-white">User Id</th>
              <th className="px-4 border py-2 text-white">Full Name</th>
              <th className="px-4 border py-2 text-white">E-Mail ID</th>
              <th className="px-4 border py-2 text-white">Course</th>
              <th className="px-4 border py-2 text-white">Payment Method</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className=" px-4 py-2">2/3/2024</td>
              <td className=" px-4 py-2">42310</td>
              <td className=" px-4 py-2">User</td>
              <td className=" px-4 py-2">user@email.com</td>
              <td className=" px-4 py-2">JavaScript</td>
              <td className=" px-4 py-2">Credit Card</td>
            </tr>
            {/* Repeat table rows as needed */}
          </tbody>
        </table>
        </div>
      </div>
    )
}

export default PaymentData

