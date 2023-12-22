import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../components'

const MainLayout = () => {
  return (
    <div className='flex min-h-screen flex-col'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default MainLayout