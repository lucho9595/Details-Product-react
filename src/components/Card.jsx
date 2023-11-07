import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

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
    }, [])

    return (
        <>
            <h3>Productos:</h3>
            {
                data.map((producto) => {
                    return (
                        <div key={producto.id}>
                            <p>{producto.title}</p>
                            <NavLink to={`/details/${producto.id}`}>
                                <button>Detalle</button>
                            </NavLink>
                        </div>
                    );
                })}
        </>
    )
};
