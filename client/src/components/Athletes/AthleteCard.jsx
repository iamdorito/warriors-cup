import { Fragment, useRef, useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'

import AthleteModal from './AthleteModal'


export default function AthleteCard({fighter}) {
    const [showAtheleteModal, setShowAtheleteModal] = useState(false)

    const toggleModal = () => {
        setShowAtheleteModal(!showAtheleteModal)
    }

    return (
    <div key={fighter.id} className="group relative" onClick={() => setShowAtheleteModal(true)}>
        <div 
            // onClick={() => setShowAtheleteModal(true)}
            className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
            <img
                src=""
                alt=""
                onerror="https://1.bp.blogspot.com/-M6GLgjoNozs/XRy_Rptd_xI/AAAAAABGys8/iyqtusN2u1kekWCwaLmBduCQLDj0z8eRwCLcBGAs/s1600/AW3924710_00.gif"
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            />
            </div>
        <div className="mt-4 flex justify-between">
            <div>
                <h3 className="text-sm font-medium text-black-700">
                    <span aria-hidden="true" className="absolute inset-0" />
                    {fighter.first_name} {fighter.last_name}
                </h3>
                <p className="mt-1 text-sm text-gray-500">{fighter.wins}-{fighter.losses}-{fighter.draw}</p>
            </div>

      {showAtheleteModal ? (
        <AthleteModal fighter={fighter} />
            ) : null}
        </div>
    </div>
)}