import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Reception from './pages/Reception/Reception';
import Floor from './pages/Floor/Floor';
import Forbidden from './pages/Forbidden/Forbidden';
import PrivateRoute from './utils/PrivateRoute';
const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Reception />} />
          <Route path="/forbidden" element={<Forbidden />} />
          <Route
            path="/floor/:index"
            element={
              <PrivateRoute>
                <Floor />
              </PrivateRoute>
            }
          />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;