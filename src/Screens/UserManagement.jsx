import React, { useState, useEffect } from 'react';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa'; // Importing icons
import Swal from 'sweetalert2';

const employeesData = [
  {
    id: "667bd67a55b54416ebf842f7",
    email: 'sudhanshu@gmail.com',
    name: 'Sudhanshu',
    phone: "1234567890",
    role: 'Contractor',
  },
  {
    id: "667bd6ab55b54416ebf842f9",
    email: 'ransh@gmail.com',
    name: 'Ransh',
    phone: "1234567890",
    role: 'Contractor',
  },
];

const UserManagement = () => {
  const [employees, setEmployees] = useState(employeesData);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentEmployee, setCurrentEmployee] = useState(null);
  const [newEmployee, setNewEmployee] = useState({
    email: '',
    name: '',
    phone: '',
    role: '',
  });

  // Load data from localStorage when component mounts
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  // Save employees to localStorage whenever employees state changes
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  // Handle input change for the new employee form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  // Handle adding or editing an employee
  const handleSaveEmployee = () => {
    if (isEditing) {
      setEmployees(
        employees.map((employee) =>
          employee.email === currentEmployee.email ? newEmployee : employee
        )
      );
      setIsEditing(false);
    } else {
      setEmployees([...employees, newEmployee]);
    }
    setShowModal(false);
    setNewEmployee({
      email: '',
      name: '',
      phone: '',
      role: '',
    });
  };

  // Handle editing an employee
  const handleEditEmployee = (employee) => {
    setCurrentEmployee(employee);
    setNewEmployee(employee);
    setIsEditing(true);
    setShowModal(true);
  };

  // Handle deleting an employee
  const handleDeleteEmployee = (employee) => {
    Swal.fire({
      title: 'Are you sure?',
      text: `Do you want to delete ${employee.name}?`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setEmployees(employees.filter((emp) => emp.email !== employee.email));
        Swal.fire('Deleted!', `${employee.name} has been deleted.`, 'success');
      }
    });
  };

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">User Management</h2>
            <p className="mt-1 text-sm text-gray-600">
              Manage your users efficiently. Add, edit, or delete user details.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setNewEmployee({
                  email: '',
                  name: '',
                  phone: '',
                  role: '',
                });
                setShowModal(true);
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add New User
            </button>
          </div>
        </div>
        <div className="mt-6 overflow-x-auto">
          <div className="border border-gray-200 rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">S.No</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Email</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Name</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Contact No.</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Role</th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-600">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {employees.map((employee, index) => (
                  <tr key={employee.email}>
                    <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{employee.email}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{employee.name}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{employee.phone}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{employee.role}</td>
                    <td className="px-6 py-4 text-sm text-gray-600 flex space-x-2">
                      <button
                        onClick={() => handleEditEmployee(employee)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDeleteEmployee(employee)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
            <h3 className="text-lg font-medium text-gray-800">{isEditing ? 'Edit User' : 'Add New User'}</h3>
            <div className="mt-4 space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={newEmployee.name}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone"
                value={newEmployee.phone}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                value={newEmployee.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={newEmployee.email}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEmployee}
                className="bg-blue-600 text-white px-4 py-2 rounded-md"
              >
                {isEditing ? 'Save Changes' : 'Add User'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;

