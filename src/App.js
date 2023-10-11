import React from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Gallerry from './Pages/Gallerry'
import Article from './Pages/Article'
import ArticleDua from './Pages/ArticleDua'
import ArticleTiga from './Pages/ArticleTiga'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Gallery" element={<Gallerry />} />
        <Route path="/Article" element={<Article />} />
        <Route path="/Article-2" element={<ArticleDua />} />
        <Route path="/Article-3" element={<ArticleTiga />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
