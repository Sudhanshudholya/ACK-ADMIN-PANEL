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
import { FaEdit, FaTrash } from 'react-icons/fa';

const ContentManagement = () => {
  const [contents, setContents] = useState([]);
  const [newContent, setNewContent] = useState({
    id: null,
    name: '',
    description: '',
    mission: '',
    vision: '',
    values: '',
    image: null,
  });
  const [editingContentId, setEditingContentId] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContent({ ...newContent, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewContent({ ...newContent, image: URL.createObjectURL(file) });
  };

  // Save or Update content
  const handleSave = () => {
    if (editingContentId) {
      // Update existing content
      setContents(
        contents.map((content) =>
          content.id === editingContentId ? { ...newContent, id: editingContentId } : content
        )
      );
      setEditingContentId(null);
    } else {
      // Add new content
      setContents([...contents, { ...newContent, id: Date.now() }]);
    }
    setNewContent({
      id: null,
      name: '',
      description: '',
      mission: '',
      vision: '',
      values: '',
      image: null,
    });
  };

  // Delete content
  const handleDelete = (id) => {
    setContents(contents.filter((content) => content.id !== id));
  };

  // Edit content
  const handleEdit = (content) => {
    setNewContent(content);
    setEditingContentId(content.id);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Content Management</h2>

      {/* Form for Adding/Editing Content */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">{editingContentId ? 'Edit Content' : 'Add New Content'}</h3>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Company Name:</label>
          <input
            type="text"
            name="name"
            value={newContent.name}
            placeholder="Enter company name"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Description:</label>
          <textarea
            name="description"
            value={newContent.description}
            placeholder="Enter company description"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Mission:</label>
          <textarea
            name="mission"
            value={newContent.mission}
            placeholder="Enter company mission"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Vision:</label>
          <textarea
            name="vision"
            value={newContent.vision}
            placeholder="Enter company vision"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Core Values:</label>
          <textarea
            name="values"
            value={newContent.values}
            placeholder="Enter core values"
            onChange={handleInputChange}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium text-gray-700">Company Logo:</label>
          <input type="file" onChange={handleImageUpload} className="mt-1" />
          {newContent.image && (
            <img src={newContent.image} alt="Company Logo" className="mt-2 h-32 w-32 object-cover" />
          )}
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          {editingContentId ? 'Update Content' : 'Add Content'}
        </button>
      </div>

      {/* List of Contents */}
      <div>
        <h3 className="text-lg font-semibold mb-2">Company Content List</h3>

        {contents.length > 0 ? (
          contents.map((content) => (
            <div key={content.id} className="p-4 border mb-4 rounded-md shadow-sm">
              <h4 className="text-xl font-bold">{content.name}</h4>
              <p>{content.description}</p>
              <p><strong>Mission:</strong> {content.mission}</p>
              <p><strong>Vision:</strong> {content.vision}</p>
              <p><strong>Values:</strong> {content.values}</p>
              {content.image && <img src={content.image} alt="Company Logo" className="mt-2 h-16 w-16 object-cover" />}
              <div className="flex justify-end space-x-4 mt-4">
                <button
                  onClick={() => handleEdit(content)}
                  className="bg-yellow-500 text-white px-4 py-1 rounded-md hover:bg-yellow-600 flex items-center"
                >
                  <FaEdit className="mr-2" /> Edit
                </button>
                <button
                  onClick={() => handleDelete(content.id)}
                  className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 flex items-center"
                >
                  <FaTrash className="mr-2" /> Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No content available. Add some content!</p>
        )}
      </div>
    </div>
  );
};

export default ContentManagement;



