import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

export const Card = () => {

    const [data, setData] = useState([]);


    const getProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products');
            const info = await response.data;
            setDate(info)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <h3>Productos:</h3>
            <NavLink to='/details'><button>Detalle</button></NavLink>
        </>
    )
};
