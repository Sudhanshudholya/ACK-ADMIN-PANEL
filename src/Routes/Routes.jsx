import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Components/Layout';
import UserManagement from '../Screens/UserManagement';
import Presales from '../Screens/Presales';
import Sales from '../Screens/Sales';
import ContentManagement from '../Screens/ContentManagement'
import ProductManagement from '../Screens/ProductManagement';
import TokenManagement from '../Screens/TokenManagement';
import ABPCommission from '../Screens/ABPCommission';
import ServiceManagement from '../Screens/ServiceManagement';
import Login from '../Screens/Login';
import InvoiceManagement from '../Screens/Invoice';
import WithoutLogin from '../Components/WithoutLogin';
import Auth from '../Components/Auth';

const router = createBrowserRouter([
  {
    path: '/',
    element: <WithoutLogin><Login /></WithoutLogin>,
  },

  {
    path: '/layout',
    element: <Auth><Layout /></Auth>,
    children: [
      { path: 'user-management', element: <Auth><UserManagement /></Auth> },
      { path: 'pre-sales', element: <Auth><Presales /></Auth> },
      {path:  'sales' , element: <Auth><Sales/></Auth>},
      { path: 'content-management' , element: <Auth><ContentManagement/></Auth>},
      { path: 'invoice' , element: <Auth><InvoiceManagement/></Auth>},
      { path: 'product-management', element:<Auth> <ProductManagement /></Auth> },
      { path: 'token-management', element: <Auth><TokenManagement /></Auth> },
      { path: 'abp-commission', element: <Auth><ABPCommission /></Auth> },
      { path: 'service-management', element: <Auth><ServiceManagement /></Auth> },
    ],
  },
]);

export default router;
