import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product.jsx";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotfound from "./pages/PageNotfound";

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
    </BrowserRouter>
  )
}
