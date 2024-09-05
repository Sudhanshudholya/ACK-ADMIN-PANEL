import React, { useState, useEffect } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const ABPCommission = () => {
  const [commissions, setCommissions] = useState([
    { id: 1, name: 'Commission A', rate: '10%', description: 'Description for Commission A' },
    { id: 2, name: 'Commission B', rate: '15%', description: 'Description for Commission B' },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newCommission, setNewCommission] = useState({ name: '', rate: '', description: '' });
  const [editingCommissionId, setEditingCommissionId] = useState(null);

  useEffect(() => {
    const savedCommissions = JSON.parse(localStorage.getItem('abpCommissions')) || [];
    setCommissions(savedCommissions);
  }, []);

  useEffect(() => {
    localStorage.setItem('abpCommissions', JSON.stringify(commissions));
  }, [commissions]);

  const openModal = (commission = {}) => {
    setNewCommission(commission);
    setEditingCommissionId(commission.id || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewCommission({ name: '', rate: '', description: '' });
    setEditingCommissionId(null);
  };

  const handleInputChange = (e) => {
    setNewCommission({ ...newCommission, [e.target.name]: e.target.value });
  };

  const saveCommission = () => {
    if (!newCommission.name || !newCommission.rate || !newCommission.description) {
      Swal.fire('Please fill out all fields.', '', 'warning');
      return;
    }

    if (editingCommissionId) {
      setCommissions(commissions.map(commission =>
        commission.id === editingCommissionId ? { ...newCommission, id: editingCommissionId } : commission
      ));
    } else {
      setCommissions([...commissions, { ...newCommission, id: Date.now() }]);
    }

    closeModal();
  };

  const deleteCommission = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this commission?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setCommissions(commissions.filter(commission => commission.id !== id));
        Swal.fire('Deleted!', 'The commission has been deleted.', 'success');
      }
    });
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">ABP Commission Management</h2>
          <p className="text-sm text-gray-600">Manage commissions, add new ones, edit or delete existing ones.</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500 transition-all"
        >
          Add New Commission
        </button>
      </div>

      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Rate</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Description</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {commissions.map((commission, index) => (
              <tr key={commission.id} className="border-t hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{index + 1}</td>
                <td className="px-6 py-4 text-sm">{commission.name}</td>
                <td className="px-6 py-4 text-sm">{commission.rate}</td>
                <td className="px-6 py-4 text-sm">{commission.description}</td>
                <td className="px-6 py-4 flex items-center space-x-4 text-sm">
                  <FaRegEdit
                    onClick={() => openModal(commission)}
                    className="cursor-pointer text-blue-500 hover:text-blue-600 transition"
                  />
                  <FaTrashAlt
                    onClick={() => deleteCommission(commission.id)}
                    className="cursor-pointer text-red-500 hover:text-red-600 transition"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h3 className="text-xl font-semibold mb-4">{editingCommissionId ? 'Edit Commission' : 'Add New Commission'}</h3>
            <input
              type="text"
              name="name"
              value={newCommission.name}
              onChange={handleInputChange}
              placeholder="Commission Name"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <input
              type="text"
              name="rate"
              value={newCommission.rate}
              onChange={handleInputChange}
              placeholder="Commission Rate"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <textarea
              name="description"
              value={newCommission.description}
              onChange={handleInputChange}
              placeholder="Commission Description"
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={closeModal}
                className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
              >
                Cancel
              </button>
              <button
                onClick={saveCommission}
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
              >
                {editingCommissionId ? 'Save Changes' : 'Add Commission'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ABPCommission;



