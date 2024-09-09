import React from 'react';

const InvoicePage = () => {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-md rounded-md">
      {/* Header */}
      <div className="flex justify-between mb-6">
        <div>
          <h2 className="text-xl font-bold">Invoice</h2>
          <p className="text-gray-500">Invoice #12345</p>
          <p className="text-gray-500">Date: 2024-09-09</p>
          <p className="text-gray-500">Due Date: 2024-09-30</p>
        </div>
        <div className="text-right">
          <h3 className="text-lg font-semibold">Your Company</h3>
          <p className="text-gray-500">1234 Street Name</p>
          <p className="text-gray-500">City, Country, Zip Code</p>
        </div>
      </div>

      {/* Customer Information */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold mb-2">Bill To:</h4>
        <p className="text-gray-500">Customer Name</p>
        <p className="text-gray-500">Customer Address</p>
        <p className="text-gray-500">Email: customer@example.com</p>
      </div>

      {/* Invoice Items */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b">Item</th>
              <th className="px-4 py-2 border-b">Quantity</th>
              <th className="px-4 py-2 border-b">Unit Price</th>
              <th className="px-4 py-2 border-b">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2 border-b">Service 1</td>
              <td className="px-4 py-2 border-b">2</td>
              <td className="px-4 py-2 border-b">$50</td>
              <td className="px-4 py-2 border-b">$100</td>
            </tr>
            {/* More rows can be added here */}
          </tbody>
        </table>
      </div>

      {/* Summary */}
      <div className="flex justify-between mt-9">
        <div>
          <p className="text-gray-500">Subtotal: $100</p>
          <p className="text-gray-500">Tax: $10</p>
          <p className="font-bold">Total: $110</p>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-7 border-t pt-4">
        <p className="text-gray-500">Thank you for your business!</p>
        <p className="text-gray-500">Payment is due within 30 days.</p>
      </div>
    </div>
  );
};

export default InvoicePage;
