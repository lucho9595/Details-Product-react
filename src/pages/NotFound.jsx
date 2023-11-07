import React from 'react'
import { NavLink } from 'react-router-dom'

export const NotFound = () => {
  return (
    <>
    <h1>Ruta no encontrada</h1>
    <NavLink to='/'><button>Volver al inicio</button></NavLink>
    </>
  )
}
