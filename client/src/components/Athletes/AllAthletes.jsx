import AthleteCard  from "./AthleteCard"
import NewAthleteForm  from "./NewAthleteForm"
import { useState, useEffect } from 'react'

export default function Athletes() {
  const [fighters, setFighters] = useState([])
  const [openNewFighterForm, setOpenNewFighterForm] = useState(false)
  const [newFighter, setNewFighter] = useState({})

  // GET fighters
  useEffect(() => {
    const fetchFighters = async () => {
      let res = await fetch("http://localhost:3000/fighters");
      let fighterData = await res.json();
      setFighters(fighterData);
    };
      fetchFighters();
    },[]);

  // Add new fighter to list
  const onAddFighter = (newFighter) => {
    setFighters((fighters) => [...fighters, newFighter])
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Athletes</h2>
        <div className="hidden lg:flex lg:flex-1 rg:justify-end">
          <a className="text-sm font-semibold leading-6 text-gray-900" onClick={() => setOpenNewFighterForm(!openNewFighterForm)}>
            Add New Athlete <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        {openNewFighterForm ? (
          <NewAthleteForm 
            newFighter={newFighter} 
            setNewFighter={setNewFighter}
            onAddFighter={onAddFighter} />
          ) : null}
   

        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fighters.map((fighter) => (
            <AthleteCard fighter={fighter} />
          ))}
        </div>
      </div>
    </div>
  )
}