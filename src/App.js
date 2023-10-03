import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/Home/HomePage';
import ProductView from './pages/ProductView/ProductViewPage';
import ProductEditPage from './pages/ProductEdit/ProductEditPage';
import { fetchAppConf } from './redux/appConfSlice';
import { fetchProductData } from './redux/productSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();

  // Fetch app data
  useEffect(() => {
    dispatch(fetchAppConf());
    dispatch(fetchProductData());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/product" element={<ProductView />} />
          <Route path="/product/edit" element={<ProductEditPage />} />
          <Route path="/*" element={<div>Page not found</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
