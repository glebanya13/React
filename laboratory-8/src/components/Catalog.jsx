import React, { useState } from "react";
import SortTable from "./SortTable";
import productA from "../assets/productA.png";
import productB from "../assets/productB.png";
import Search from "./Search";

const Catalog = () => {
  const [sortField, setSortField] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortOrder("asc");
    }
  };

  const products = [
    {
      id: 1,
      name: "Product A",
      price: 25.99,
      quantity: 30,
      weight: 1.5,
      image: productA,
      description: "Description for Product A",
      isNew: true,
      discount: 10,
    },
    {
      id: 2,
      name: "Product B",
      price: 20.99,
      quantity: 50,
      weight: 2.0,
      image: productB,
      description: "Description for Product B",
      isNew: false,
      discount: 20,
    },
  ];

  const sortedProducts = [...products].sort((a, b) => {
    const columnA = a[sortField];
        const columnB = b[sortField];

        if (sortOrder === 'asc') {
            if (columnA < columnB) return -1;
            if (columnA > columnB) return 1;
            return 0;
        } else {
            if (columnA > columnB) return -1;
            if (columnA < columnB) return 1;
            return 0;
        }

  });

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Product Catalog</h2>
      <Search catalog={products} />
      <SortTable sortedProducts={sortedProducts} sortField={sortField} sortOrder={sortOrder} handleSort={handleSort} />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {sortedProducts.map((product) => (
          <div key={product.id} style={cardStyle}>
            <img src={product.image} alt={product.name} style={imageStyle} />
            <h3 style={{ marginTop: "10px" }}>{product.name}</h3>
            <p style={priceStyle}>Price: ${product.price}</p>
            <p>Quantity: {product.quantity}</p>
            <p>Weight: {product.weight} kg</p>
            <p>{product.description}</p>
            <p>{product.isNew ? <span style={{ color: "green" }}>New</span> : ""}</p>
            <p style={discountStyle}>Discount: {product.discount}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const cardStyle = {
  border: "1px solid #ccc",
  borderRadius: "8px",
  padding: "15px",
  margin: "15px",
  width: "250px",
  textAlign: "center",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const imageStyle = {
  width: "100%",
  borderRadius: "8px",
  marginBottom: "10px",
};

const priceStyle = {
  fontWeight: "bold",
  color: "#333",
};

const discountStyle = {
  color: "red",
  fontWeight: "bold",
};

export default Catalog;
