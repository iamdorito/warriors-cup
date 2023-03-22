import { useState, useEffect } from 'react'

export default function UpdateFighter({ 
    fighters, 
    updateFighter, 
    setUpdateFighter,
    onAddFighter 
    }) {

    const { id, first_name, last_name, email, gym, division } = fighters;

    const [gyms, setGyms] = useState([])
    const [divisions, setDivisions] = useState([])
    const [selectedFighter, setSelectedFighter] = useState(fighters[0]);

    const [fighterData, setFighterData] = useState({
        firstName: selectedFighter.first_name,
        lastName: selectedFighter.last_name,
        nickname: selectedFighter.nickname,
        email: selectedFighter.email,
        gender: selectedFighter.gender,
        gymId: selectedFighter.gym_id,
        divisionId: selectedFighter.division_id,
        wins: selectedFighter.wins,
        losses: selectedFighter.losses,
        draw: selectedFighter.draw,
        headshot: selectedFighter.headshot,
        insta: selectedFighter.insta,
        status: selectedFighter.status,
    });

  //  GET GYMS to map in form
  useEffect(() => {
      const fetchGyms = async () => {
      let res = await fetch("http://localhost:3000/gyms");
      let gymData = await res.json();
      setGyms(gymData);
  };
    fetchGyms();
  },[]);

  //  GET DIVISIONS to map in form 
  useEffect(() => {
  const fetchDivisions = async () => {
    let res = await fetch("http://localhost:3000/divisions");
    let divisionData = await res.json();
    setDivisions(divisionData);
  };
    fetchDivisions();
  },[]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFighterData({ ...fighterData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/fighters/${selectedFighter}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        fighterData: setFighterData
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to update fighter');
      }
      return response.json();
    })
    .then((data) => {
      // handle success
      console.log(data)
    // setFighterData(data)
    })
    .catch((error) => {
      // handle error
      console.log('error bitch')
    })
  }


  return (
    <div>
        <div className="col-span-6 sm:col-span-3">
            <label className="block text-sm font-medium leading-6 text-gray-900">
                Pick an Athlete to Update
            </label>
            <select
                onChange={(e)=>
                    // console.log(e.target.value)
                    setSelectedFighter(e.target.value)}
                id="gym_id"
                name="gym_id"
                className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                {fighters.map(fighter => (
                    <option key={fighter.id} value={fighter.id}>{fighter.first_name} {fighter.last_name} - {fighter.gym_id}</option>
                    ))}
            </select>
        </div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name
          <input type="text" name="first_name" defaultValue="first name" 
            value={fighterData.firstName} onChange={handleChange} 
            />
        </label>
        <label>
          Last Name
          <input type="text" name="last_name" ddefaultValue="last name"
            value={fighterData.lastName} onChange={handleChange} 
            />
        </label>
        <label>
          Nickname
          <input type="text" name="nickname" ddefaultValue="nickname"
            value={fighterData.nickname} onChange={handleChange} 
            />
        </label>
        <label>
          Email
          <input type="text" name="email" defaultValue="email" 
            value={fighterData.email} onChange={handleChange} 
            />
        </label>
        <label>
          Gender
          <select name="gender"             
            value={fighterData.gender} onChange={handleChange} 
            >
            <option value="F">F</option>
            <option value="M">M</option>
          </select>
        </label>
        <label>
          Gym
          <select name="gym_id"
            value={fighterData.gymId} onChange={handleChange} 
            >
            {gyms.map(gym => (
                <option key={gym.id} value={gym.id}>{gym.name}</option>
            ))}
          </select>
        </label>
        <label>
          Division
          <select name="division_id"
            value={fighterData.divisionId} onChange={handleChange} 
            >
            {divisions.map(division => (
                <option key={division.id} value={division.id}>{division.name} ({division.lbs}lbs)</option>
            ))}
          </select>
        </label>
        {/* Add more form fields for other fighter properties */}
        <button type="submit">Save Changes</button>
      </form>
    </div>
  )
}