import React from 'react';
import Sidebar from "./Sidebar";
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto'; // Ensure you have chart.js installed and imported

// Example billing data
const billingData = [
  { invoiceNo: 'INV001', amount: '$500', date: '2024-09-01', status: 'Paid' },
  { invoiceNo: 'INV002', amount: '$750', date: '2024-09-05', status: 'Pending' },
  { invoiceNo: 'INV003', amount: '$300', date: '2024-09-10', status: 'Paid' },
  { invoiceNo: 'INV004', amount: '$450', date: '2024-09-15', status: 'Pending' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Pending' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Pending' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Pending' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  { invoiceNo: 'INV005', amount: '$600', date: '2024-09-20', status: 'Paid' },
  // Add more rows as needed
];

const recentPayments = [
  { id: 1, amount: '$500', date: '2024-09-01' },
  { id: 2, amount: '$750', date: '2024-09-05' },
  // Add more payments as needed
];

const chartData = {
  labels: ['Paid', 'Pending'],
  datasets: [
    {
      label: 'Total Billing',
      data: [3, 2], // Number of 'Paid' and 'Pending' statuses
      backgroundColor: ['#4CAF50', '#FFC107'],
    },
  ],
};

const Billing = () => {
  return (
    <div>
      <section className="billing flex">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex-1 ml-24 mt-5 p-4 flex flex-col">
          <div className="flex">
            {/* Billing Table */}
            <div className="w-1/2 p-4">
              <h2 className="text-xl font-bold mb-4">Billing Details</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200">
                  <thead>
                    <tr className="bg-gray-100 border-b">
                      <th className="py-2 px-4 text-left">Invoice No</th>
                      <th className="py-2 px-4 text-left">Amount</th>
                      <th className="py-2 px-4 text-left">Date</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billingData.map((item, index) => (
                      <tr key={index} className="border-b">
                        <td className="py-2 px-4">{item.invoiceNo}</td>
                        <td className="py-2 px-4">{item.amount}</td>
                        <td className="py-2 px-4">{item.date}</td>
                        <td className={`py-2 px-4 ${item.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'}`}>
                          {item.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Payments and Bar Chart */}
            <div className="w-1/2 p-4 flex flex-col space-y-4">
              {/* Recent Payments */}
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Recent Payments</h2>
                <div className="space-y-4">
                  {recentPayments.map(payment => (
                    <div key={payment.id} className="bg-gray-100 p-4 rounded">
                      <p><strong>Amount:</strong> {payment.amount}</p>
                      <p><strong>Date:</strong> {payment.date}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Chart */}
              <div className="bg-white p-4 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Billing Overview</h2>
                <Bar data={chartData} options={{ responsive: true }} />
              </div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Billing;
