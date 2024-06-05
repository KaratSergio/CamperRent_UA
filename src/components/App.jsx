import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout';

const Home = React.lazy(() => import('../pages/Home'));
const Catalog = React.lazy(() => import('../pages/Catalog'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const NotFound = React.lazy(() => import('../pages/NotFound'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
