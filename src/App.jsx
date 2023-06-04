import React from 'react'
import './App.css'
import Button from 'react-bootstrap/Button';
import Layout from './components/shared/Layout';
import { Route, Routes } from 'react-router-dom';
import AllCars from './pages/AllCars';
import AddCar from './pages/AddCar';

function App() {

  return (
   
    <>
     <Layout>
      <Routes>
        <Route path='/' element={<AllCars/>}></Route>
        <Route path='/addcar' element={<AddCar/>}></Route>
      </Routes>
     </Layout>
   </>
  )
}

export default App
