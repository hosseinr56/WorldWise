import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/product.jsx";
import HomePage from "./pages/HomePage";
import Pricing from "./pages/Pricing";
import PageNotfound from "./pages/PageNotfound";
import AppLayout from "./pages/AppLayout.jsx";
import Login from "./pages/Login.jsx";
import CityList from "./components/CityList.jsx";
import { useEffect, useState } from "react";
const Base_URL = 'http://localhost:9000'

export default function App() {
  const [cities , setcities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(function(){
    async function fetchCities(){
     try{
      setIsLoading(true);
      const res = await fetch(`${Base_URL}/cities`);
      const data = await res.json();
      setcities(data);
     } 
     catch{
      alert('There was an error for loading data');
      }
      finally{
        setIsLoading(false);
      }
    }
    fetchCities();
  },[]);
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="product" element={<Product />} />
      <Route path="pricing" element={<Pricing />} />
      <Route path="login" element={<Login />} />
      <Route path="app" element={<AppLayout />}>
        <Route index element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
        <Route path="countries" element={<p>list of countries</p>} />
        <Route path="form" element={<p>form</p>} />
      </Route>
      <Route path="*" element={<PageNotfound />} />
    </Routes>
    </BrowserRouter>
  )
}
