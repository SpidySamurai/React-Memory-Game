import React from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home'
import Gameboard from '../Gameboard'
import Result from '../Result'
import NotFound from '../NotFound'
import Layout from '../../Components/Layout'
import './App.css'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path='/gameboard' element={
          <Layout>
            <Gameboard />
          </Layout>
        } />
        <Route path='/result' element={
          <Layout>
            <Result />
          </Layout>
        } />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </HashRouter>
  )
}