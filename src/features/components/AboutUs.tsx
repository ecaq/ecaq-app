
const stats = [
  { name: 'Nationalitites', value: '143+' },
  { name: 'Total Number of Members', value: '300+' },
  { name: 'Total Number of Churches', value: '40' },
  { name: 'Alliance', value: 'Unlimited' },
]

export default function AboutUs() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <img
        src="bible-bg.jpg"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      
      <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>
      
      <div
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">About ECAQ</p>
            <p className="mt-2 text-lg leading-8 text-appGreen">
                A call to build the House of the Lord
            </p>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-16 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
              We are Evangelical Churches Alliance Qatar (ECAQ). A united network of multi-national expatriate communities of evangelical churches in the State of Qatar, called to live and proclaim the Gospel of Jesus Christ. We are a ministry of many tounges and tribes, a diaspora of Christian believers with purposeful work-based migration for the glory of God.
              </p>
              <p className="mt-8">
              Formed in 2005, it started from the desire of small group of Filipino churches to gather in one place to pray, worship and fellowship. This desire was transformed into a growing and fervent prayer to have a common house for believers.
              </p>
            </div>
            <div>
              <p>
              Today, ECAQ is one of the recognized religious organizations in Qatar, accorded with an opportunity to build a church and freedom to worship, within the parameters and respect to the host country. With 93 member-congregations, majority of which are Filipinos, it has Africans, Indians and Nepalese  churches, with combined estimate of 7,000 individual believers of the Lord Jesus Christ.
              </p>
              {/* <p className="mt-8">
              Today, ECAQ is one of the recognized religious organizations in Qatar, accorded with an opportunity to build a church and freedom to worship, within the parameters and respect to the host country. With 93 member-congregations, majority of which are Filipinos, it has Africans, Indians and Nepalese  churches, with combined estimate of 7,000 individual believers of the Lord Jesus Christ.
              </p> */}
            </div>
          </div>


        <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">

          <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.name} className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                <dt className="mt-3 text-base leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
