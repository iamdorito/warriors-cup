import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Sponsors from './Sponsors';
import Testimonial from './Testimonial';

import image1 from '../../assets/wc-1.png';
import image2 from '../../assets/wc-2.png';
import image3 from '../../assets/wc-3.png';
import image4 from '../../assets/wc-4.png';
import '../../css/home.css'

export default function Home() {

  return (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full py-1 px-3 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Representing Road to ONE USA.{' '}
              <a href="#" className="font-semibold text-red-600">
                <span className="absolute inset-0" aria-hidden="true" />
                Learn more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Warrior's Cup
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Three Pillars Promotions presents the home of East Coast Muay Thai. Fully sanctioned by WBC.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get tickets
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
             <section className='slider-container'>
             <div className='slider-wrapper'>
                  <div className="slider">
                     <img id="slide-1" src={image4} alt="img1" />
                     <img id="slide-2" src={image2} alt="img2" />
                     <img id="slide-3" src={image3} alt="img3" />
                     <img id="slide-4" src={image1} alt="img4" />
                 </div>
                 <div className="slider-nav">
                     <a href="#slide-1"></a>
                     <a href="#slide-2"></a>
                     <a href="#slide-3"></a>
                     <a href="#slide-4"></a>
                 </div>
             </div>
             </section>
             <Testimonial />
             <Sponsors />
      </div>
  )
}