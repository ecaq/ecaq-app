import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    Cog6ToothIcon,
    FingerPrintIcon,
    LockClosedIcon,
    ServerIcon,
  } from '@heroicons/react/20/solid'
 
  const stats = [
    { name: 'Church Members', value: '143+' },
    { name: 'Ministries', value: '300+' },
    { name: 'Alliance', value: '40' },
    { name: 'Applications', value: 'Unlimited' },
  ]
  
  const features = [
    {
      name: 'Push to deploy.',
      description: 'We are Evangelical Churches Alliance Qatar (ECAQ). A united network of multi-national expatriate communities of evangelical churches in the State of Qatar, called to live and proclaim the Gospel of Jesus Christ. We are a ministry of many tounges and tribes, a diaspora of Christian believers with purposeful work-based migration for the glory of God.',
      icon: CloudArrowUpIcon,
    },
    {
      name: 'SSL certificates.',
      description: 'Today, ECAQ is one of the recognized religious organizations in Qatar, accorded with an opportunity to build a church and freedom to worship, within the parameters and respect to the host country. With 93 member-congregations, majority of which are Filipinos, it has Africans, Indians and Nepalese  churches, with combined estimate of 7,000 individual believers of the Lord Jesus Christ.',
      icon: LockClosedIcon,
    },
    {
      name: 'Simple queues.',
      description: 'Formed in 2005, it started from the desire of small group of Filipino churches to gather in one place to pray, worship and fellowship. This desire was transformed into a growing and fervent prayer to have a common house for believers.',
      icon: ArrowPathIcon,
    },
    {
      name: 'Advanced security.',
      description: 'Iure sed ab. Aperiam optio placeat dolor facere. Officiis pariatur eveniet atque et dolor.',
      icon: FingerPrintIcon,
    },
    {
      name: 'Powerful API.',
      description: 'Laudantium tempora sint ut consectetur ratione. Ut illum ut rem numquam fuga delectus.',
      icon: Cog6ToothIcon,
    },
    {
      name: 'Database backups.',
      description: 'Culpa dolorem voluptatem velit autem rerum qui et corrupti. Quibusdam quo placeat.',
      icon: ServerIcon,
    },
  ]
  
  export default function AboutEcaq() {
    return (
      <div className="bg-appBlue py-24 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">


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
                <div key={stat.name} className="flex items-center flex-col-reverse">
                  <div className="border-l-[1px] border-appGreen space-y-6 px-6">                    
                  <dd className="flex items-start text-5xl font-bold leading-9 tracking-tight text-white">{stat.value}</dd>
                  <dt className="flex items-start text-base leading-7 text-gray-300">{stat.name}</dt>
                  </div>
                </div>
              ))}
            </dl>
          </div>

        </div>
      </div>
    )
  }
  