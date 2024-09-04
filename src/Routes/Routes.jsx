// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '../Components/Layout';
import UserManagement from '../Screens/UserManagement';
import Sales from '../Screens/Sales';
import ContentManagement from '../Screens/ContentManagement';
import ProductManagement from '../Screens/ProductManagement';
import TokenManagement from '../Screens/TokenManagement';
import ABPCommission from '../Screens/ABPCommission';
import ServiceManagement from '../Screens/ServiceManagement';



function Router() {
  return (
    <BrowserRouter>
      <Routes>        
          <Route path="/" element={<Layout />}>
          <Route path='/user-management' element={<UserManagement />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/content-management" element={<ContentManagement />} />
          <Route path="/product-management" element={<ProductManagement />} />
          <Route path='/token-management' element={<TokenManagement/>}/>
          <Route path='/abp-commission' element={<ABPCommission/>}/>
          <Route path='/service-management' element={<ServiceManagement/>}/>    
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
