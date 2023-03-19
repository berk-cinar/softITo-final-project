import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavigationSource = () => {
  return (
    <div>
        Kaynak <br/>
        <Link to='/target'>Kaynak</Link><br/>
        <Link to='/target/301'>Id</Link><br/>
    </div>
  )
}