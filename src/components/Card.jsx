import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

export const Card = () => {
    const [data, setData] = useState([]);

    const getProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const info = await response.data;
            setData(info);
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <>
            <h3>Productos:</h3>
            {
                data.map((producto) => {
                    return (
                        <div className={styles.containerInfo} key={producto.id}>
                            <p className={styles.title}>{producto.title}</p>
                            <NavLink to={`/details/${producto.id}`}>
                                <button className={styles.button}>Detalle</button>
                            </NavLink>
                        </div>
                    );
                })}
        </>
    )
};
