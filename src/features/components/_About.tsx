
const stats = [
    { name: 'Nationalities', value: '143+' },
    { name: 'Total Number of Members', value: '300+' },
    { name: 'Alliance', value: '40' },
    { name: 'Applications', value: 'Unlimited' },
  ]

export default function About() {
    return (
      <>
        <div className="relative overflow-hidden bg-gray-900 px-6 py-20 shadow-xl sm:px-10 sm:py-24 md:px-12 lg:px-20">
          <img
            className="absolute inset-0 h-full w-full object-cover brightness-150 saturate-0"
            src="bible-bg.jpg"
            alt=""
          />
          {/* 
            COLOR OVERLAY
          */}
          <div className="absolute inset-0 bg-gray-900/60 mix-blend-multiply"></div>

          <div
            className="absolute -left-80 -top-56 transform-gpu blur-3xl"
            aria-hidden="true"
          >
            {/* <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-[0.45]" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> */}
          </div>
          <div
            className="hidden md:absolute md:bottom-16 md:left-[50rem] md:block md:transform-gpu md:blur-3xl"
            aria-hidden="true"
          >
            {/* <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-r from-[#ff4694] to-[#776fff] opacity-25" style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"></div> */}
          </div>

          <div className="relative">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
                <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  About ECAQ
                </p>
                <p className="mt-2 text-lg leading-8 text-appGreen">
                  A call to build the House of the Lord
                </p>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-1 gap-16 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
                <div>
                  <p>
                    We are Evangelical Churches Alliance Qatar (ECAQ). A united
                    network of multi-national expatriate communities of
                    evangelical churches in the State of Qatar, called to live
                    and proclaim the Gospel of Jesus Christ. We are a ministry
                    of many tounges and tribes, a diaspora of Christian
                    believers with purposeful work-based migration for the glory
                    of God.
                  </p>
                  <p className="mt-8">
                    Formed in 2005, it started from the desire of small group of
                    Filipino churches to gather in one place to pray, worship
                    and fellowship. This desire was transformed into a growing
                    and fervent prayer to have a common house for believers.
                  </p>
                </div>
                <div>
                  <p>
                    Today, ECAQ is one of the recognized religious organizations
                    in Qatar, accorded with an opportunity to build a church and
                    freedom to worship, within the parameters and respect to the
                    host country. With 93 member-congregations, majority of
                    which are Filipinos, it has Africans, Indians and Nepalese
                    churches, with combined estimate of 7,000 individual
                    believers of the Lord Jesus Christ.
                  </p>
                  {/* <p className="mt-8">
              Today, ECAQ is one of the recognized religious organizations in Qatar, accorded with an opportunity to build a church and freedom to worship, within the parameters and respect to the host country. With 93 member-congregations, majority of which are Filipinos, it has Africans, Indians and Nepalese  churches, with combined estimate of 7,000 individual believers of the Lord Jesus Christ.
              </p> */}
                </div>
              </div>

              <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                  {stats.map((stat) => (
                    <div
                      key={stat.name}
                      className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen"
                    >
                      <dt className="mt-3 text-base leading-7 text-gray-300">
                        {stat.name}
                      </dt>
                      <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}