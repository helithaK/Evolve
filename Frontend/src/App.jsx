import React from "react";
import FooterComponent from "./components/footer/FooterComponent";
import BodyComponent from "./components/body/BodyComponent";
import { Layout, List } from "antd";
import { fetchProducts } from "../src/api/services/productService";
import { useState, useEffect } from "react";
import GridComponent from "./components/body/GridComponent";

const App = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <Layout>
      <BodyComponent>
        <h1>Home</h1>
        <GridComponent products={products}/>
      </BodyComponent>
      <FooterComponent />
    </Layout>
  );
};
export default App;
