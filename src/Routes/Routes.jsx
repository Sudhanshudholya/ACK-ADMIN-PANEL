// import React from 'react';
// import { createBrowserRouter } from 'react-router-dom';
// import Layout from '../Components/Layout';
// import UserManagement from '../Screens/UserManagement';
// import Presales from '../Screens/Presales';
// import Sales from '../Screens/Sales';
// import ContentManagement from '../Screens/ContentManagement'
// import ProductManagement from '../Screens/ProductManagement';
// import TokenManagement from '../Screens/TokenManagement';
// import ABPCommission from '../Screens/ABPCommission';
// import ServiceManagement from '../Screens/ServiceManagement';
// import Login from '../Screens/Login';


// const router = createBrowserRouter([

//   {
//     path: '/',
//     element: <Login />,
//   },

//   {
//     path: '/layout',
//     element: <Layout />,
//     children: [
//       { path: 'user-management', element: <UserManagement /> },
//       { path: 'sales', element: <Sales /> },
//       { path: 'pre-sales' , element: <Presales/>},
//       { path: 'content-management', element: <ContentManagement /> },
//       { path: 'product-management', element: <ProductManagement /> },
//       { path: 'token-management', element: <TokenManagement /> },
//       { path: 'abp-commission', element: <ABPCommission /> },
//       { path: 'service-management', element: <ServiceManagement /> },
//     ],
//   },
// ]);

// export default router





import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import UserManagement from '../Screens/UserManagement';
import Presales from '../Screens/Presales';
import Sales from '../Screens/Sales';
import ContentManagement from '../Screens/ContentManagement';
import ProductManagement from '../Screens/ProductManagement';
import TokenManagement from '../Screens/TokenManagement';
import ABPCommission from '../Screens/ABPCommission';
import ServiceManagement from '../Screens/ServiceManagement';
import Login from '../Screens/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: '/layout',
    element: <Layout />,
    children: [
      { path: 'user-management', element: <UserManagement /> },
      { path: 'sales', element: <Sales /> },
      { path: 'pre-sales', element: <Presales /> },
      { path: 'content-management', element: <ContentManagement /> },
      { path: 'product-management', element: <ProductManagement /> },
      { path: 'token-management', element: <TokenManagement /> },
      { path: 'abp-commission', element: <ABPCommission /> },
      { path: 'service-management', element: <ServiceManagement /> },
    ],
  },
]);

export default router;
