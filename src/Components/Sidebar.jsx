import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Screens/ack logo.png' 

const Sidebar = () => {
    return (
        <div className="w-64 h-screen bg-blue-800 text-white shadow-lg">

            <div className="p-4 flex items-center justify-center">
                <img
                    src={logo}
                    alt="ACK Infra Logo"
                    className="h-12 w-auto"
                />
            </div>

            <Link to="user-management">
                <div className="p-4 hover:bg-blue-700">
                    User Management
                </div>
            </Link>

            <Link to="sales">
                <div className="p-4 hover:bg-blue-700">
                    Sales
                </div>
            </Link>

            <Link to="content-management">
                <div className="p-4 hover:bg-blue-700">
                    Content Management
                </div>
            </Link>

            <Link to="product-management">
                <div className="p-4 hover:bg-blue-700">
                    Product Management
                </div>
            </Link>

            <Link to="token-management">
                <div className="p-4 hover:bg-blue-700">
                    Token Management
                </div>
            </Link>

            <Link to="abp-commission">
                <div className="p-4 hover:bg-blue-700">
                    ABP Commission
                </div>
            </Link>

            <Link to="service-management">
                <div className="p-4 hover:bg-blue-700">
                    Service Management
                </div>
            </Link>

        </div>
    );
}

export default Sidebar;


