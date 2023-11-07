import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { Card } from './Card'

export const Details = () => {
  const { id } = useParams();
  const product = Card.data.find(product => product.id === id);
  console.log(product)
  if (!product) {
    return <div>No se encontró el producto.</div>;
  }
  return (
    <>
      <h1>Detalle del producto:</h1>
      <NavLink to='/'><button>Volver al inicio</button></NavLink>
    </>
  )
}
