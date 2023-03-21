import { useState, useEffect, useRef } from 'react'

export default function UpdateFighter({ 
    fighters, 
    updateFighter, 
    setUpdateFighter,
    onAddFighter 
    }) {
//   const [updateFighter, setUpdateFighter] = useState({})
    const [gyms, setGyms] = useState([])
    const [divisions, setDivisions] = useState([])

    const formRef = useRef(null);
    const [selectedFighter, setSelectedFighter] = useState(fighters[0]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const editedFighter = Object.fromEntries(formData.entries());
    console.log('edited fighter', editedFighter)
    try {
      const req = await fetch(
        `http://localhost:3000/fighters/${selectedFighter}`, {
        method: 'PATCH',
        // body: editedFighter
        body: JSON.stringify({
            gym_id: editedFighter.gym_id
        })
      });
      if (!req.ok) {
        throw new Error('Network response was not ok');
      }
    let res = await req.json()
    console.log("Res", res)
    let updateFighterData = await res.json();
    console.log(updateFighterData);
    setUpdateFighter(updateFighterData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    // <div>
    //   <label>
    //     Select Fighter:
    //     <select value={selectedFighter.id} onChange={handleSelect}>
    //       {fighters.map((fighter) => (
    //         <option key={fighter.id} value={fighter.id}>
    //           {fighter.id}
    //         </option>
    //       ))}
    //     </select>
    //   </label>
    //   <form ref={formRef} onSubmit={handleSubmit}>
    //     <label>
    //       First Name:
    //       <input type="text" name="first_name" defaultValue={selectedFighter.first_name} />
    //     </label>
    //     <label>
    //       Last Name:
    //       <input type="text" name="last_name" defaultValue={selectedFighter.last_name} />
    //     </label>
    //     {/* Add more form fields for other fighter properties */}
    //     <button type="submit">Save Changes</button>
    //   </form>
    // </div>
  <>
    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

    <div className="mt-10 sm:mt-0">
    <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-base font-semibold leading-6 text-gray-900">Update Athlete Info</h3>
              <p className="mt-1 text-sm text-gray-600">Please update all the necessary information.</p>
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
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
                        <option key={fighter.id} value={fighter.id}>{fighter.first_name} {fighter.last_name} - {fighter.gym_name}</option>
                        ))}
                </select>
            </div>
            <form action="#" method="PATCH" ref={formRef} onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                        First name
                      </label>
                      <input
                      type="text"
                      name="first_name"
                      id="first_name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      id="last_name"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <label htmlFor="email-address" className="block text-sm font-medium leading-6 text-gray-900">
                      Email address
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      <option value=""></option>
                      <option>M</option>
                      <option>F</option>
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Gym
                    </label>
                    <select
                      id="gym_id"
                      name="gym_id"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {gyms.map(gym => (
                          <option key={gym.id} value={gym.id}>{gym.name}</option>
                          ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Division
                    </label>
                    <select
                      id="division_id"
                      name="division_id"
                      className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    >
                      {divisions.map((divison) => (
                        <option key={divison.id} value={divison.id}>
                          {divison.name} - {divison.lbs}lbs ({divison.kg}kg)
                          </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Wins
                    </label>
                    <input
                      type="number"
                      name="wins"
                      id="wins"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Losses
                    </label>
                    <input
                      type="number"
                      name="losses"
                      id="losses"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-1">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Draw
                    </label>
                    <input
                      type="number"
                      name="draw"
                      id="draw"
                      className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium leading-6 text-gray-900">
                    Division
                  </label>
                  <select
                    id="status"
                    name="status"
                    className="mt-2 block w-full rounded-md border-0 bg-white py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                      <option key={updateFighter.status} value={updateFighter.status}>active</option>
                      <option key={updateFighter.status} value={updateFighter.status}>inactive</option>
                  </select>
                </div>
                
              </div>
              <div className="shadow sm:overflow-hidden sm:rounded-md">
              <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Instagram
                    </label>
                    <div className="mt-2 flex rounded-md shadow-sm">
                      <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                        @
                      </span>
                      <input
                        type="text"
                        name="insta"
                        id="insta"
                        className="block w-full flex-1 rounded-none rounded-r-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="fighter-instagram"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                  <div className="mt-2 flex items-center">
                    <span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 rounded-md border border-gray-300 bg-white py-1.5 px-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-50"
                    >
                      Change
                    </button>
                  </div>


                <div>
                  <label className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                  <div className="mt-2 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* <div className="flex items-center">
              <input
                id="status"
                name="status"
                type="checkbox"
                className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
              />
              <label htmlFor="push-email" className="ml-3 block text-sm font-medium leading-6 text-gray-900">
                In-Active (do not mark if active)
              </label>
            </div> */}

              <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
          </form>
        </div>
      </div>
    </div>

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>

  </>
  )
}