// export default function MissionVision() {
//   return (
//     <section
//       id="get-started-today"
//       className="relative overflow-hidden bg-blue-600 py-32"
//     >
//       <img
//         alt=""
//         loading="lazy"
//         width="2347"
//         height="1244"
//         decoding="async"
//         data-nimg="1"
//         className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
//         src="/_next/static/media/background-call-to-action.6a5a5672.jpg"
//       />
//       <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
//         <div className="mx-auto max-w-lg text-center">
//           <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
//             Get started today
//           </h2>
//           <p className="mt-4 text-lg tracking-tight text-white">
//             It’s time to take control of your books. Buy our software so you can
//             feel like you’re doing something productive.
//           </p>
//           <a
//             className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-slate-900 hover:bg-blue-50 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
//             color="white"
//             href="/register"
//           >
//             Get 6 months free
//           </a>
//         </div>
//       </div>
//     </section>
//   )
// }

import parse from 'html-react-parser';
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
  {
    name: 'Our Mission',
    description: "To network and gather together God's people that we might do the works of God.",
    icon: PhoneIcon,
  },
  {
    name: 'Our Vision',
    description: "United body serving God's purpose in advancing His Kingdom. <br /> <b>John 17:20-21<b>",
    icon: LifebuoyIcon,
  },
  {
    name: 'Our Mandate',
    description: "ECAQ immediate mandate is to see the manifestation of our dreams - the building of a OneWorshipPlace.",
    icon: NewspaperIcon,
  },
]

export default function MissionVision() {
  return (
    <div className="relative isolate overflow-hidden bg-appBlue pb-24 pt-8">
      {/* <img
        src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      /> */}
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#349b2a] via-white to-[#41f058] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu">
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#2a9b3d] via-white to-[#3cd15c] opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">Support center</h2>
        </div> */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div key={card.name} className="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10">
              <card.icon className="h-7 w-5 flex-none text-indigo-400" aria-hidden="true" />
              <div className="leading-7">
                <h3 className="text-2xl font-semibold text-appGreen">{card.name}</h3>
                <p className="mt-2 text-lg text-gray-300">{parse(card.description)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
