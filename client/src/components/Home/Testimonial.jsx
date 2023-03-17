import RoadToOne from '../../assets/logos/one-show-road-to-one-v2.PNG'

export default function Testimonial() {
  return (
    <section className="relative isolate overflow-hidden bg-black py-24 px-6 sm:py-32 lg:px-8">
      <div 
        className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" 
        />
      <div 
        // className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-black-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" 
        />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <img className="mx-auto h-12" src={RoadToOne} alt="" />
        <figure className="mt-10">
          <blockquote className="text-center text-xl font-semibold leading-8 text-white sm:text-2xl sm:leading-9">
            <p>
              “Road to ONE USA only through Warrior's Cup.”
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-30 rounded-full"
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Chatri Sityodtong</div>
              <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-white">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-white">CEO of ONE Championship</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}