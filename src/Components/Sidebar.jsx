// import React from 'react';



// import { Link } from 'react-router-dom';
// import logo from '../Screens/ack logo.png'

// const Sidebar = () => {
//     return (
//         <div className="w-64 h-screen bg-blue-800 text-white shadow-lg">

//             <div className="p-4 flex items-center justify-center">
//                 <img
//                     src={logo}
//                     alt="ACK Infra Logo"
//                     className="h-auto w-auto"
//                 />
//             </div>

//             <Link to="user-management">
//                 <div className="p-4 hover:bg-blue-700">
//                     User Management
//                 </div>
//             </Link>

         
//             <Link to="sales">
//                 <div className="p-4 hover:bg-blue-700">
//                     Sales
//                 </div>
//             </Link>

//             <Link to="content-management">
//                 <div className="p-4 hover:bg-blue-700">
//                     Content Management
//                 </div>
//             </Link>

//             <Link to="product-management">
//                 <div className="p-4 hover:bg-blue-700">
//                     Product Management
//                 </div>
//             </Link>

//             <Link to="token-management">
//                 <div className="p-4 hover:bg-blue-700">
//                     Token Management
//                 </div>
//             </Link>

//             <Link to="abp-commission">
//                 <div className="p-4 hover:bg-blue-700">
//                     ABP Commission
//                 </div>
//             </Link>


//             <Link to="service-management">
//                 <div className="p-4 hover:bg-blue-700">
//                     Service Management
//                 </div>
//             </Link>

//         </div>
//     );
// }

// export default Sidebar;



// // import { Link } from 'react-router-dom';
// // import logo from '../Screens/ack logo.png';

// // const Sidebar = () => {
// //     const [isOpen, setIsOpen] = useState(false);

// //     const toggleSidebar = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     return (
// //         <div className="relative h-full">
// //             {/* Sidebar Toggle Button for Mobile */}
// //             <button
// //                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
// //                 onClick={toggleSidebar}
// //             >
// //                 ☰ Menu
// //             </button>

// //             {/* Overlay for Mobile */}
// //             {isOpen && (
// //                 <div
// //                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
// //                     onClick={toggleSidebar}
// //                 />
// //             )}

// //             {/* Sidebar */}
// //             <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
// //                 <div className="p-4 flex items-center justify-center">
// //                     <img
// //                         src={logo}
// //                         alt="ACK Infra Logo"
// //                         className="h-12 w-auto"
// //                     />
// //                 </div>

// //                 <Link to="user-management">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         User Management
// //                     </div>
// //                 </Link>

// //                 <Link to="pre-sales">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Pre Sales
// //                     </div>
// //                 </Link>

// //                 <Link to="sales">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Sales
// //                     </div>
// //                 </Link>

// //                 <Link to="content-management">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Content Management
// //                     </div>
// //                 </Link>

// //                 <Link to="product-management">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Product Management
// //                     </div>
// //                 </Link>

// //                 <Link to="token-management">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Token Management
// //                     </div>
// //                 </Link>

// //                 <Link to="abp-commission">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         ABP Commission
// //                     </div>
// //                 </Link>

// //                 <Link to="invoice">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Invoice Management
// //                     </div>
// //                 </Link>

// //                 <Link to="service-management">
// //                     <div className="p-4 hover:bg-blue-700">
// //                         Service Management
// //                     </div>
// //                 </Link>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;


// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import logo from '../Screens/ack logo.png';

// // const Sidebar = () => {
// //     const [isOpen, setIsOpen] = useState(false);

// //     const toggleSidebar = () => {
// //         setIsOpen(!isOpen);
// //     };

// //     return (
// //         <div className="relative">
// //             {/* Sidebar Toggle Button for Mobile */}
// //             <button
// //                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
// //                 onClick={toggleSidebar}
// //             >
// //                 ☰ Menu
// //             </button>

// //             {/* Overlay for Mobile */}
// //             {isOpen && (
// //                 <div
// //                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
// //                     onClick={toggleSidebar}
// //                 />
// //             )}

// //             {/* Sidebar */}
// //             <div className={`fixed top-0 left-0 z-20 h-screen w-64 bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:h-full`}>
// //                 <div className="p-4 flex items-center justify-center">
// //                     <img
// //                         src={logo}
// //                         alt="ACK Infra Logo"
// //                         className="h-12 w-auto"
// //                     />
// //                 </div>

// //                 <nav className="overflow-y-auto h-full">
// //                     <Link to="user-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             User Management
// //                         </div>
// //                     </Link>

// //                     <Link to="pre-sales">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Pre Sales
// //                         </div>
// //                     </Link>

// //                     <Link to="sales">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Sales
// //                         </div>
// //                     </Link>

// //                     <Link to="content-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Content Management
// //                         </div>
// //                     </Link>

// //                     <Link to="product-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Product Management
// //                         </div>
// //                     </Link>

// //                     <Link to="token-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Token Management
// //                         </div>
// //                     </Link>

// //                     <Link to="abp-commission">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             ABP Commission
// //                         </div>
// //                     </Link>

// //                     <Link to="invoice">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Invoice Management
// //                         </div>
// //                     </Link>

// //                     <Link to="service-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Service Management
// //                         </div>
// //                     </Link>
// //                 </nav>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Sidebar;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Screens/ack logo.png';

const Sidebar = () => {
    const [isSalesOpen, setIsSalesOpen] = useState(false);
    const [isPreSalesOpen, setIsPreSalesOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const toggleSalesDropdown = () => {
        setIsSalesOpen(!isSalesOpen);
    };

    const togglePreSalesDropdown = () => {
        setIsPreSalesOpen(!isPreSalesOpen);
    };

    return (
        <div className="relative h-full">
            {/* Sidebar Toggle Button for Mobile */}
            <button
                className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
                onClick={toggleSidebar}
            >
                ☰ Menu
            </button>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
                <div className="p-4 flex items-center justify-center">
                    <img
                        src={logo}
                        alt="ACK Infra Logo"
                        className="h-12 w-auto"
                    />
                </div>

                <div className="space-y-1">
                    <Link to="user-management">
                        <div className="p-4 hover:bg-blue-700">
                            User Management
                        </div>
                    </Link>

                    {/* Sales Dropdown */}
                    <div className="relative">
                        <button
                            className="w-full p-4 hover:bg-blue-700 flex justify-between items-center"
                            onClick={toggleSalesDropdown}
                        >
                            Sales
                            <svg
                                className={`w-5 h-5 transform transition-transform ${isSalesOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isSalesOpen && (
                            <div className="bg-blue-700 space-y-1">
                                <Link to="sales">
                                    <div className="p-4 hover:bg-blue-600">Sales</div>
                                </Link>
                                <Link to="pre-sales">
                                    <div className="p-4 hover:bg-blue-600">Pre sales</div>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Pre Sales Dropdown */}
                    {/* <div className="relative">
                        <button
                            className="w-full p-4 hover:bg-blue-700 flex justify-between items-center"
                            onClick={togglePreSalesDropdown}
                        >
                            Pre Sales
                            <svg
                                className={`w-5 h-5 transform transition-transform ${isPreSalesOpen ? 'rotate-180' : 'rotate-0'}`}
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        {isPreSalesOpen && (
                            <div className="bg-blue-700 space-y-1">
                                <Link to="pre-sales">
                                    <div className="p-4 hover:bg-blue-600">Pre Sales Overview</div>
                                </Link>
                                <Link to="pre-sales/analysis">
                                    <div className="p-4 hover:bg-blue-600">Pre Sales Analysis</div>
                                </Link>
                            </div>
                        )}
                    </div> */}

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
            </div>
        </div>
    );
};

export default Sidebar;

