import { useState } from 'react'
import logo from '../../assets/logos/wc-logo.png'
import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'


export default function EventCard({ event }) {
    // const [showAtheleteModal, setShowAtheleteModal] = useState(false)

    return (
    <div key={event.id} className="group relative">
        <div 
            // onClick={() => setShowAtheleteModal(true)}
            className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img src=
                {event.poster_img ? 
                    event.poster_img : logo}                
                alt="event promo"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm font-medium text-black-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    #{event.event_number} {event.name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                    {event.date} @ {event.location}
                </p>
            </div>
{/* 
      {showAtheleteModal ? (
        <AthleteModal fighter={fighter} setShowAtheleteModal={setShowAtheleteModal} />
            ) : null} */}
        </div>
    </div>
)}