import React, { useState, useEffect } from 'react';
import Img from '../Screens/Bag1.png'
import Imgs from '../Screens/Bag2.png'
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2'; // Import SweetAlert

const ProductManagement = () => {
  // Initialize products state with localStorage
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    return savedProducts ? JSON.parse(savedProducts) : [
      {
        id: 1,
        name: 'UltimateFix',
        category: 'Tailes Adhesive Wall & Floor',
        quality: 'A++',
        mrp: 799,
        rate: 499,
        image: Img,
      },
      {
        id: 2,
        name: 'UltimateFix',
        category: 'Tailes Adhesive Wall & Floor',
        quality: 'A++',
        mrp: 799,
        rate: 499,
        image: Imgs,
      },
    ];
  });
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', category: '', quality: '', mrp: '', rate: '', image: null });
  const [editingProductId, setEditingProductId] = useState(null);

  // Save products to localStorage whenever products state changes
  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const openModal = (product = {}) => {
    setNewProduct(product);
    setEditingProductId(product.id || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNewProduct({ name: '', category: '', quality: '', mrp: '', rate: '', image: null });
    setEditingProductId(null);
  };

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewProduct({ ...newProduct, image: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const saveProduct = () => {
    if (!newProduct.name || !newProduct.category || !newProduct.quality || !newProduct.mrp || !newProduct.rate || !newProduct.image) {
      alert('Please fill out all fields and upload an image.');
      return;
    }

    if (editingProductId) {
      setProducts(products.map(product => product.id === editingProductId ? { ...newProduct, id: editingProductId } : product));
    } else {
      setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    }

    closeModal();
  };

  const deleteProduct = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you really want to delete this product?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        setProducts(products.filter(product => product.id !== id));
        Swal.fire(
          'Deleted!',
          'The product has been deleted.',
          'success'
        );
      }
    });
  };

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-4 py-4">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0">
          <div>
            <h2 className="text-lg font-semibold">Product Management</h2>
            <p className="mt-1 text-sm text-gray-700">
              This is a list of all Products. You can add new Products, edit or delete existing ones.
            </p>
          </div>
          <div>
            <button
              type="button"
              onClick={() => openModal()}
 className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add New Product
            </button>
          </div>
        </div>
        <div className="mt-6 flex flex-col">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">S.No</th>
                      <th className="px-12 py-3.5 text-left text-sm font-normal text-gray-700">Photo</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Product Name</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Category</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Quality</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">MRP</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Rate</th>
                      <th className="px-4 py-3.5 text-left text-sm font-normal text-gray-700">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {products.map((product, index) => (
                      <tr key={product.id}>
                        <td>{index + 1}</td>
                        <td><img src={product.image} alt={product.name} className='h-16 w-16' /></td>
                        <td>{product.name}</td>
                        <td>{product.category}</td>
                        <td>{product.quality}</td>
                        <td>{product.mrp}</td>
                        <td>{product.rate}</td>
                        <td className='flex items-center px-5 py-12'>
                          <span onClick={() => openModal(product)}><FaRegEdit className="cursor-pointer text-blue-500" /></span>
                          <span onClick={() => deleteProduct(product.id)}><FaTrashAlt className="cursor-pointer text-red-500 ml-3" /></span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">{editingProductId ? 'Edit Product' : 'Add New Product'}</h2>
            <div className="space-y-4">
              <input type="text" name="name" value={newProduct.name} onChange={handleInputChange} placeholder="Product Name" className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" name="category" value={newProduct.category} onChange={handleInputChange} placeholder="Category" className="w-full p-2 border border-gray-300 rounded" />
              <input type="text" name="quality" value={newProduct.quality} onChange={handleInputChange} placeholder="Quality" className="w-full p-2 border border-gray-300 rounded" />
              <input type="number" name="mrp" value={newProduct.mrp} onChange={handleInputChange} placeholder="MRP" className="w-full p-2 border border-gray-300 rounded" />
              <input type="number" name="rate" value={newProduct.rate} onChange={handleInputChange} placeholder="Rate" className="w-full p-2 border border-gray-300 rounded" />
              <input type="file" onChange={handleImageUpload} className="w-full p-2 border border-gray-300 rounded" />
              {newProduct.image && <img src={newProduct.image} alt="Preview" className="h-24 w-24 object-cover mt-4" />}
              <div className="flex justify-end space-x-4">
                <button onClick={closeModal} className="bg-gray-500 text-white px-4 py-2">Cancel</button>
                <button onClick={saveProduct} className="bg-green-500 text-white px-4 py-2">{editingProductId ? 'Save Changes' : 'Add Product'}</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductManagement;
