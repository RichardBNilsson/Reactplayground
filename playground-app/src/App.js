import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./pages/Header"
import Home from "./pages/Home"
import API from "./pages/API"
import Layout from "./pages/Layout"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" elemental={<Layout />}>
          <Route index element={<Home />}/>
          <Route path="api" element={<API />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
