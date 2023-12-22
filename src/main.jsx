import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { App,Learn,Blog,Download,Docs,Certification,Guides,About } from './sections'
import { MainLayout } from './layouts'



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<App/>} />
        <Route path='/learn' element={<Learn/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/download' element={<Download/>} />
        <Route path='/docs' element={<Docs/>} />
        <Route path='/certification' element={<Certification/>} />
        <Route path='/guides' element={<Guides/>} />
        <Route path='/about' element={<About/>} />

      </Route>
    </Routes>
  </BrowserRouter>
)
