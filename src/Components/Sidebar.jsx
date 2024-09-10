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
                    className="h-auto w-auto"
                />
            </div>

            <Link to="user-management">
                <div className="p-4 hover:bg-blue-700">
                    User Management
                </div>
            </Link>

            <Link to="pre-sales">
                <div className="p-4 hover:bg-blue-700">
                    Pre sales
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



// import { Link } from 'react-router-dom';
// import logo from '../Screens/ack logo.png';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative h-full">
//             {/* Sidebar Toggle Button for Mobile */}
//             <button
//                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
//                 onClick={toggleSidebar}
//             >
//                 ☰ Menu
//             </button>

//             {/* Overlay for Mobile */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
//                     onClick={toggleSidebar}
//                 />
//             )}

//             {/* Sidebar */}
//             <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
//                 <div className="p-4 flex items-center justify-center">
//                     <img
//                         src={logo}
//                         alt="ACK Infra Logo"
//                         className="h-12 w-auto"
//                     />
//                 </div>

//                 <Link to="user-management">
//                     <div className="p-4 hover:bg-blue-700">
//                         User Management
//                     </div>
//                 </Link>

//                 <Link to="pre-sales">
//                     <div className="p-4 hover:bg-blue-700">
//                         Pre Sales
//                     </div>
//                 </Link>

//                 <Link to="sales">
//                     <div className="p-4 hover:bg-blue-700">
//                         Sales
//                     </div>
//                 </Link>

//                 <Link to="content-management">
//                     <div className="p-4 hover:bg-blue-700">
//                         Content Management
//                     </div>
//                 </Link>

//                 <Link to="product-management">
//                     <div className="p-4 hover:bg-blue-700">
//                         Product Management
//                     </div>
//                 </Link>

//                 <Link to="token-management">
//                     <div className="p-4 hover:bg-blue-700">
//                         Token Management
//                     </div>
//                 </Link>

//                 <Link to="abp-commission">
//                     <div className="p-4 hover:bg-blue-700">
//                         ABP Commission
//                     </div>
//                 </Link>

//                 <Link to="invoice">
//                     <div className="p-4 hover:bg-blue-700">
//                         Invoice Management
//                     </div>
//                 </Link>

//                 <Link to="service-management">
//                     <div className="p-4 hover:bg-blue-700">
//                         Service Management
//                     </div>
//                 </Link>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../Screens/ack logo.png';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     return (
//         <div className="relative">
//             {/* Sidebar Toggle Button for Mobile */}
//             <button
//                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
//                 onClick={toggleSidebar}
//             >
//                 ☰ Menu
//             </button>

//             {/* Overlay for Mobile */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
//                     onClick={toggleSidebar}
//                 />
//             )}

//             {/* Sidebar */}
//             <div className={`fixed top-0 left-0 z-20 h-screen w-64 bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:h-full`}>
//                 <div className="p-4 flex items-center justify-center">
//                     <img
//                         src={logo}
//                         alt="ACK Infra Logo"
//                         className="h-12 w-auto"
//                     />
//                 </div>

//                 <nav className="overflow-y-auto h-full">
//                     <Link to="user-management">
//                         <div className="p-4 hover:bg-blue-700">
//                             User Management
//                         </div>
//                     </Link>

//                     <Link to="pre-sales">
//                         <div className="p-4 hover:bg-blue-700">
//                             Pre Sales
//                         </div>
//                     </Link>

//                     <Link to="sales">
//                         <div className="p-4 hover:bg-blue-700">
//                             Sales
//                         </div>
//                     </Link>

//                     <Link to="content-management">
//                         <div className="p-4 hover:bg-blue-700">
//                             Content Management
//                         </div>
//                     </Link>

//                     <Link to="product-management">
//                         <div className="p-4 hover:bg-blue-700">
//                             Product Management
//                         </div>
//                     </Link>

//                     <Link to="token-management">
//                         <div className="p-4 hover:bg-blue-700">
//                             Token Management
//                         </div>
//                     </Link>

//                     <Link to="abp-commission">
//                         <div className="p-4 hover:bg-blue-700">
//                             ABP Commission
//                         </div>
//                     </Link>

//                     <Link to="invoice">
//                         <div className="p-4 hover:bg-blue-700">
//                             Invoice Management
//                         </div>
//                     </Link>

//                     <Link to="service-management">
//                         <div className="p-4 hover:bg-blue-700">
//                             Service Management
//                         </div>
//                     </Link>
//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;
