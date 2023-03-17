import AthleteCard  from "./AthleteCard"
import { useState, useEffect } from 'react'

export default function Athletes() {
  const [fighters, setFighters] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/fighters")
      .then((r) => r.json())
      .then((fighters) => 
        setFighters(fighters));
    },[]);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">All Athletes</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {fighters.map((fighter) => (
            <AthleteCard fighter={fighter} />
          ))}
        </div>
      </div>
    </div>
  )
}