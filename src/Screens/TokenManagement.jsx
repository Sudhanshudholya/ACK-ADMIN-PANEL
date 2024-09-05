import React, { useState, useEffect } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';

const TokenManagement = () => {
  const initialTokens = [
    { id: 1, name: 'Contractor Payment', amount: 1000 },
    { id: 2, name: 'Dealer Incentive', amount: 500 },
    { id: 3, name: 'Referral Bonus', amount: 300 },
  ];

  const [tokens, setTokens] = useState(initialTokens);
  const [newToken, setNewToken] = useState({ name: '', amount: '' });
  const [editingTokenId, setEditingTokenId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const storedTokens = JSON.parse(localStorage.getItem('tokens')) || initialTokens;
    setTokens(storedTokens);
  }, []);

  const handleInputChange = (e) => setNewToken({ ...newToken, [e.target.name]: e.target.value });

  const saveToken = () => {
    if (!newToken.name || !newToken.amount) return alert('Please fill out all fields.');

    const updatedTokens = editingTokenId
      ? tokens.map(token => (token.id === editingTokenId ? { ...newToken, id: editingTokenId } : token))
      : [...tokens, { ...newToken, id: Date.now() }];

    setTokens(updatedTokens);
    localStorage.setItem('tokens', JSON.stringify(updatedTokens));
    closeModal();
  };

  const deleteToken = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to delete this token?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedTokens = tokens.filter(token => token.id !== id);
        setTokens(updatedTokens);
        localStorage.setItem('tokens', JSON.stringify(updatedTokens));
        Swal.fire('Deleted!', 'The token has been removed.', 'success');
      }
    });
  };

  const openModal = (token = {}) => {
    setNewToken(token);
    setEditingTokenId(token.id || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewToken({ name: '', amount: '' });
    setEditingTokenId(null);
  };

  // Format number as INR currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold">Token Management</h2>
          <p className="text-gray-500 mt-2">Manage, edit, or delete existing tokens, or add new ones.</p>
        </div>
        <button
          onClick={() => openModal()}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-500"
        >
          Add New Token
        </button>
      </div>

      <div className="mt-6 overflow-hidden rounded-lg border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">S.No</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Amount</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {tokens.map((token, index) => (
              <tr key={token.id}>
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{token.name}</td>
                <td className="px-6 py-4">{formatCurrency(token.amount)}</td> {/* Display amount in INR */}
                <td className="px-6 py-4 flex space-x-4">
                  <FaRegEdit
                    onClick={() => openModal(token)}
                    className="cursor-pointer text-blue-600 hover:text-blue-800"
                  />
                  <FaTrashAlt
                    onClick={() => deleteToken(token.id)}
                    className="cursor-pointer text-red-600 hover:text-red-800"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-lg font-semibold mb-4">{editingTokenId ? 'Edit Token' : 'Add New Token'}</h2>
            <input
              type="text"
              name="name"
              value={newToken.name}
              onChange={handleInputChange}
              placeholder="Token Name"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <input
              type="number"
              name="amount"
              value={newToken.amount}
              onChange={handleInputChange}
              placeholder="Amount"
              className="w-full mb-4 p-2 border border-gray-300 rounded"
            />
            <div className="flex justify-end space-x-2">
              <button onClick={closeModal} className="bg-gray-400 text-white px-4 py-2 rounded-md">Cancel</button>
              <button onClick={saveToken} className="bg-green-500 text-white px-4 py-2 rounded-md">
                {editingTokenId ? 'Save Changes' : 'Add Token'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TokenManagement;


