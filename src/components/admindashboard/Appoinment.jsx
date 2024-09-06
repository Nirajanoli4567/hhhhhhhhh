import React, { useState } from "react";
import Sidebar from "./Sidebar";

function Appointments() {
  // Sample data for appointments
  const initialAppointments = [
    { id: 1, name: "John Doe", address: "123 Elm Street", date: "2024-09-10", status: "Approved" },
    { id: 2, name: "Jane Smith", address: "456 Oak Avenue", date: "2024-09-12", status: "Pending" },
    { id: 3, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Approved" },
    { id: 4, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Pending" },
    { id: 5, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Approved" },
    { id: 6, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Pending" },
    { id: 7, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Approved" },
    { id: 8, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Pending" },
    { id: 9, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Approved" },
    { id: 10, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Pending" },
    { id: 11, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Approved" },
    { id: 12, name: "Emily Johnson", address: "789 Pine Road", date: "2024-09-15", status: "Pending" },
  ];

  const itemsPerPage = 10; // Number of items per page
  const [appointments, setAppointments] = useState(initialAppointments);
  const [currentPage, setCurrentPage] = useState(1);

  // Function to toggle appointment status
  const toggleStatus = (id) => {
    setAppointments((prevAppointments) =>
      prevAppointments.map((appointment) =>
        appointment.id === id
          ? { ...appointment, status: appointment.status === "Pending" ? "Approved" : "Pending" }
          : appointment
      )
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(appointments.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentAppointments = appointments.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <section className="appoinment">
        <aside className="sidebar w-64 h-screen fixed top-0 left-0 flex flex-col">
          <Sidebar />
        </aside>
        <main className="flex ml-24 mt-5 p-4 flex-col w-full">
          <h1 className="text-xl font-bold mb-4">Appointments</h1>
          <div className="overflow-x-auto">
            <table className="min-w-[90vw] bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-100 border-b">
                  <th className="py-2 px-4 text-left">Name</th>
                  <th className="py-2 px-4 text-left">Address</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Operations</th> {/* Added column */}
                </tr>
              </thead>
              <tbody>
                {currentAppointments.map((appointment) => (
                  <tr key={appointment.id} className={`border-b ${appointment.status === "Approved" ? "bg-green-100" : "bg-yellow-100"}`}>
                    <td className="py-2 px-4">{appointment.name}</td>
                    <td className="py-2 px-4">{appointment.address}</td>
                    <td className="py-2 px-4">{appointment.date}</td>
                    <td className="py-2 px-4">
                      <span className={`font-semibold ${appointment.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                        {appointment.status}
                      </span>
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => toggleStatus(appointment.id)}
                        className="text-blue-500 hover:text-blue-700 bg-red-300 rounded-lg p-2 font-semibold"
                      >
                      Change the status
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <nav>
              <ul className="flex list-style-none">
                {Array.from({ length: totalPages }, (_, index) => (
                  <li key={index + 1} className={`mx-1 ${currentPage === index + 1 ? "font-bold" : ""}`}>
                    <button
                      onClick={() => handlePageChange(index + 1)}
                      className={`px-4 py-2 border rounded ${currentPage === index + 1 ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
                    >
                      {index + 1}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Appointments;
