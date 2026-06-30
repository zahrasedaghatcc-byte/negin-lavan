import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import Products from "./pages/Products";
import ProductsCategory from "./pages/Products/category";
import ProductID from "./pages/Product";

function App() {
  const [locale, _] = useState("fa");

  useEffect(() => {
    const isRTL = ["fa", "ar", "he", "ur"].includes(locale);

    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [locale]);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:category" element={<ProductsCategory />} />
        <Route path="/product/:id" element={<ProductID />} />
      </Routes>
    </Layout>
  );
}

export default App;
