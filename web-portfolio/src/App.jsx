import { useState } from 'react'
import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    <>
    <NavBar/>
      <div>
    <Routes>        
      <Route path="/"  element={<Stocks/>} />
      <Route path="/favourites"  element={<Favourites />}/>
      <Route path="/cart"  element={<Cart/>}/>
    </Routes>
    </div>
    </>
  )
}

export default App
