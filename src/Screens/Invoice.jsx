import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import SweetAlert from 'sweetalert2';

const InvoiceManagement = () => {
  const [invoices, setInvoices] = useState([]);
  const [newInvoice, setNewInvoice] = useState({
    invoiceNumber: '',
    clientName: '',
    amount: '',
    dueDate: '',
    status: 'Unpaid',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewInvoice({ ...newInvoice, [name]: value });
  };

  const handleAddInvoice = () => {
    const { invoiceNumber, clientName, amount, dueDate } = newInvoice;

    if (invoiceNumber && clientName && amount && dueDate) {
      if (isEditing) {
        const updatedInvoices = [...invoices];
        updatedInvoices[editIndex] = newInvoice;
        setInvoices(updatedInvoices);
        setIsEditing(false);
      } else {
        setInvoices([...invoices, newInvoice]);
      }
      resetForm();
    } else {
      SweetAlert.fire({
        icon: 'error',
        title: 'Missing Fields',
        text: 'Please fill out all fields.',
        confirmButtonColor: '#3085d6',
      });
    }
  };

  const handleEditInvoice = (index) => {
    setNewInvoice(invoices[index]); 
    setIsEditing(true);             
    setEditIndex(index);           
  };

  const handleDeleteInvoice = (index) => {
    SweetAlert.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this invoice!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedInvoices = invoices.filter((_, i) => i !== index);
        setInvoices(updatedInvoices);
        SweetAlert.fire('Deleted!', 'Invoice has been deleted.', 'success');
      }
    });
  };

  const resetForm = () => {
    setNewInvoice({
      invoiceNumber: '',
      clientName: '',
      amount: '',
      dueDate: '',
      status: 'Unpaid',
    });
    setIsEditing(false);  
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Invoice Management</h2>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Invoice Number:</label>
        <input
          type="text"
          name="invoiceNumber"
          value={newInvoice.invoiceNumber}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter invoice number"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Client Name:</label>
        <input
          type="text"
          name="clientName"
          value={newInvoice.clientName}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter client name"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Amount:</label>
        <input
          type="number"
          name="amount"
          value={newInvoice.amount}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          placeholder="Enter amount"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Due Date:</label>
        <input
          type="date"
          name="dueDate"
          value={newInvoice.dueDate}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium text-gray-700">Status:</label>
        <select
          name="status"
          value={newInvoice.status}
          onChange={handleInputChange}
          className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
        >
          <option value="Unpaid">Unpaid</option>
          <option value="Paid">Paid</option>
        </select>
      </div>

      <button
        onClick={handleAddInvoice}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        {isEditing ? 'Update Invoice' : 'Add Invoice'}
      </button>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Invoice List:</h3>
        {invoices.length > 0 ? (
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 text-center">Invoice #</th>
                <th className="py-2 text-center">Client Name</th>
                <th className="py-2 text-center">Amount</th>
                <th className="py-2 text-center">Due Date</th>
                <th className="py-2 text-center">Status</th>
                <th className="py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {invoices.map((invoice, index) => (
                <tr key={index}>
                  <td className="py-2 text-center">{invoice.invoiceNumber}</td>
                  <td className="py-2 text-center">{invoice.clientName}</td>
                  <td className="py-2 text-center">{formatCurrency(invoice.amount)}</td>
                  <td className="py-2 text-center">{invoice.dueDate}</td>
                  <td className="py-2 text-center">{invoice.status}</td>
                  <td className="py-2 flex justify-center space-x-2">
                    <button
                      className="text-blue-500 hover:text-blue-700"
                      onClick={() => handleEditInvoice(index)}
                    >
                      <FaEdit />
                    </button>
                    <button
                      className="text-red-500 hover:text-red-700"
                      onClick={() => handleDeleteInvoice(index)}
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No invoices available.</p>
        )}
      </div>
    </div>
  );
};

export default InvoiceManagement;
