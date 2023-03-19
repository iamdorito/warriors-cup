import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './components/Home/Home.jsx'
import Events from './components/Events/Events.jsx'
import AllAthletes from './components/Athletes/AllAthletes.jsx'
import NewAthleteForm from './components/Athletes/NewAthleteForm.jsx'

import Connect from './components/Connect.jsx'
import Announcements from './components/Announcements.jsx'
import Login from './components/Login.jsx'
import SearchResults from './components/SearchResults.jsx'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

import './App.css'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [profile, setProfile] = useState();
  const [search, setSearch ] = useState('');


  return (
    
      <BrowserRouter>
        <Header profile={profile} search={search} setSearch={setSearch} mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/athletes' element={<AllAthletes />} />
          <Route path='/newathlete' element={<NewAthleteForm />} />
          <Route path='/connect' element={<Connect />} />
          <Route path='/announcements' element={<Announcements />} />
          <Route path='/login' element={<Login />} />
          <Route path='/search' element={<SearchResults/>}/>
        </Routes>
      <Footer />
      </BrowserRouter>
 
  )
}

export default App