import Header from './components/Header.jsx'
import Footers from './components/Footer.jsx'
import Home from './components/Home.jsx'
import Events from './components/Events.jsx'
import Athletes from './components/Athletes.jsx'
import Connect from './components/Connect.jsx'
import Login from './components/Login.jsx'
import SearchResults from './components/SearchResults.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [profile, setProfile] = useState();
  const [search, setSearch ] = useState('');


  return (
    
      <BrowserRouter>
        <Header profile={profile} search={search} setSearch={setSearch} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/athletes' element={<Athletes />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<SearchResults search={search}/>}/>
          <Route path='/footer' element={<Footers />}/>
        </Routes>
      
      </BrowserRouter>
 
  )
}

export default App