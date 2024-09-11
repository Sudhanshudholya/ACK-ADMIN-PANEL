// import React from 'react'

// const ContentManagement = () => {
//   return (
//     <div>
//       Content Management
//     </div>
//   )
// }

// export default ContentManagement

import React, { useState } from 'react';

const CompanyManagement = () => {
  const [companyInfo, setCompanyInfo] = useState({
    name: '',
    description: '',
    address: '',
   
  });
  const [companies, setCompanies] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setCompanyInfo({ ...companyInfo, [e.target.name]: e.target.value });
  };

  // Add or update company information
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingIndex !== null) {
      const updatedCompanies = companies.map((company, index) =>
        index === editingIndex ? companyInfo : company
      );
      setCompanies(updatedCompanies);
      setEditingIndex(null);
    } else {
      setCompanies([...companies, companyInfo]);
    }
    setCompanyInfo({ name: '', description: '', address: '' });
  };

  // Edit company information
  const handleEdit = (index) => {
    setEditingIndex(index);
    setCompanyInfo(companies[index]);
  };

  // Delete company information
  const handleDelete = (index) => {
    const updatedCompanies = companies.filter((_, i) => i !== index);
    setCompanies(updatedCompanies);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Company Information Management</h1>

      {/* Company Information Form */}
      <form onSubmit={handleSubmit} className="bg-gray-100 p-4 mb-4 shadow-md rounded">
        <div className="mb-4">
          <label className="block text-gray-700">Company Name:</label>
          <input
            type="text"
            name="name"
            value={companyInfo.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Description:</label>
          <input
            type="text"
            name="description"
            value={companyInfo.description}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Address:</label>
          <input
            type="text"
            name="address"
            value={companyInfo.address}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
       
       
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {editingIndex !== null ? 'Update Company' : 'Add Company'}
        </button>
      </form>

      {/* Company Information Table */}
      <table className="min-w-full bg-white shadow-md rounded">
        <thead>
          <tr className="bg-gray-200">
            <th className="text-left py-2 px-4">Company Name</th>
            <th className="text-left py-2 px-4">Description</th>
            <th className="text-left py-2 px-4">Address</th>
            <th className="text-left py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody>
          {companies.map((company, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{company.name}</td>
              <td className="border px-4 py-2">{company.description}</td>
              <td className="border px-4 py-2">{company.address}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompanyManagement;

