// src/components/Sidebar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../Screens/ack logo.png' // Ensure this path is correct

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-blue-800 text-white shadow-lg">
            <div className="p-4 flex items-center justify-center">
                <img 
                    src={logo} 
                    alt="ACK Infra Logo"
                    className="h-12 w-auto"
                />
            </div>
            <NavLink to="/user-management">
                <div className="p-4 hover:bg-blue-700">
                    User Management
                </div>
            </NavLink>
            <NavLink to="/sales">
                <div className="p-4 hover:bg-blue-700">
                    Sales
                </div>
            </NavLink>
            <NavLink to="/content-management">
                <div className="p-4 hover:bg-blue-700">
                    Content Management
                </div>
            </NavLink>
            <NavLink to="/product-management">
                <div className="p-4 hover:bg-blue-700">
                    Product Management
                </div>
            </NavLink>
            <NavLink to="/token-management">
                <div className="p-4 hover:bg-blue-700">
                    Token Management
                </div>
            </NavLink>
            <NavLink to="/abp-commission">
                <div className="p-4 hover:bg-blue-700">
                    ABP Commission
                </div>
            </NavLink>
            <NavLink to="/service-management">
                <div className="p-4 hover:bg-blue-700">
                    Service Management
                </div>
            </NavLink>
        </div>
    );
}

export default Sidebar;


