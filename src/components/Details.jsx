import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import loading from "../assets/loading.gif";
import styles from "./Details.module.css";

export const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const getProductsById = async (productId) => {
    try {
      const response = await axios.get(`https://fakestoreapi.com/products/${productId}`);
      const productData = await response.data;
      setProduct(productData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsById(id);
  }, [id]);

  return (
    <div className={styles.containers}>
      <h1 className={styles.title2}>Detalle del producto:</h1>
      {product ? (
        <div className={styles.containerDetails}>
          <h3>{product.title}</h3>
          <img src={product.image} className={styles.images} alt="product" />
          <p className={styles.description}>Descripcion: {product.description}</p>
          <p>Precio: {product.price}</p>
          <p>Cantidad: {product.rating.count}</p>
          <p>SKU: 4892153670</p>
          <NavLink to="/"><button>Volver al inicio</button></NavLink>
        </div>
      ) : (
        <div>
          <img src={loading} className={styles.loading} alt="loading" />
        </div>
      )}
    </div>
  );
};
