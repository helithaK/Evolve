import React from "react";
import { useState, useEffect } from "react";
import CardComponent from "./card/CardComponent";
import {
  fetchProducts,
  fetchProductsPerPage,
} from "../../api/services/productService";
import { List, Pagination } from "antd";

function GridComponent() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const pageData = await fetchProductsPerPage(currentPage, 48);
        setProducts(pageData.products);
        setTotalProducts(pageData.totalProducts);
      } catch (err) {
        setError("Failed to load users.");
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, [currentPage]);

  console.log(loading);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ marginBottom: "4vh" }}>
      <Pagination
        current={currentPage}
        align="center"
        pageSize={48}
        showSizeChanger={false}
        total={totalProducts}
        onChange={(page) => setCurrentPage(page)}
        style={{ textAlign: "center", margin: "20px 0" }}
      />
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 6,
        }}
        dataSource={products}
        renderItem={(product) => (
          <List.Item>
            <CardComponent
              link={product.images[0]}
              title={product.title}
              price={product.price}
            />
          </List.Item>
        )}
      />
    </div>
  );
}

export default GridComponent;
