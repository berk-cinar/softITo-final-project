import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'

export const ApplicationLayout = () => {
  return (
    <div>
        <Navbar/>
        <br/><br/>
        <Outlet/>
        <Footer/>
    </div>
  )
}