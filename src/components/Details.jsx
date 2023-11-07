import React from 'react'
import { NavLink } from 'react-router-dom'

export const Details = () => {
  return (
    <>
    <h1>Detalle del producto:</h1>
    <NavLink to='/'><button>Volver al inicio</button></NavLink>
    </>
  )
}
