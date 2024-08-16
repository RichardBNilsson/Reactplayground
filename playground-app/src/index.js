import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from 'react';

const Home = lazy(() => import('./pages/Home'));
const API = lazy(() => import('./pages/API'));
const Layout = lazy(() => import('./pages/Layout'));


export default function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" elemental={<Layout />}>
            <Route index element={<Home />}/>
            <Route path="api" element={<API />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)