import { useState } from 'react'

export default function AthleteCard({fighter}) {
    return (
    <div key={fighter.id} className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
        <img
            src="https://1.bp.blogspot.com/-M6GLgjoNozs/XRy_Rptd_xI/AAAAAABGys8/iyqtusN2u1kekWCwaLmBduCQLDj0z8eRwCLcBGAs/s1600/AW3924710_00.gif"
            alt=""
            onerror="https://cdn1.vectorstock.com/i/1000x1000/18/25/shiba-inu-boxer-cute-creative-kawaii-cartoon-vector-43691825.jpg"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
        </div>
        <div className="mt-4 flex justify-between">
        <div>
            <h3 className="text-sm font-medium text-black-700">
            <a href={fighter.href}>
                <span aria-hidden="true" className="absolute inset-0" />
                {fighter.first_name} {fighter.last_name}
            </a>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{fighter.wins}-{fighter.losses}-{fighter.draw}</p>
        </div>
        {/* <p className="text-sm font-medium text-gray-900">{fighter.losses}</p> */}
        </div>
    </div>
)}