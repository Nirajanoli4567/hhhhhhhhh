import React from "react";
import Sidebar from "./Dsidebar";

function Dappoinment() {
    const appointments = [
        {
          id: 1,
          name: "John Doe",
          address: "123 Elm Street",
          date: "2024-09-10",
          status: "Approved",
        },
        {
          id: 2,
          name: "Jane Smith",
          address: "456 Oak Avenue",
          date: "2024-09-12",
          status: "Pending",
        },
        {
          id: 3,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Approved",
        },
        {
          id: 4,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Pending",
        },
        {
          id: 5,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Approved",
        },
        {
          id: 6,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Pending",
        },
        {
          id: 7,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Approved",
        },
        {
          id: 8,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Pending",
        },
        {
          id: 9,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Approved",
        },
        {
          id: 10,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Pending",
        },
        {
          id: 11,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Approved",
        },
        {
          id: 12,
          name: "Emily Johnson",
          address: "789 Pine Road",
          date: "2024-09-15",
          status: "Pending",
        },
      ];
  return (
    <div>
      <section className="appoinment">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col  text-white">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Doctor's Appointments</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[90vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Address</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appointment) => (
                  <tr key={appointment.id} >
                    <td className="py-2 px-4">{appointment.name}</td>
                    <td className="py-2 px-4">{appointment.address}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">
                      <span className={`font-semibold ${appointment.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                        {appointment.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Dappoinment;
