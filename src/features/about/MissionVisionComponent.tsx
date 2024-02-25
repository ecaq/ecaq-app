import parse from "html-react-parser";

const tiers = [
  {
    name: "Hobby",
    id: "tier-hobby",
    href: "#",
    priceMonthly: "Our Mission",
    description:
      "To network and gather together God's people that we might do the works of God.",
  },
  {
    name: "Team",
    id: "tier-team",
    href: "#",
    priceMonthly: "Our Vision",
    description:
      "United body serving God's purpose in advancing His Kingdom. <br /> <b>John 17:20-21</b>",
  },
  {
    name: "Team",
    id: "tier-team",
    href: "#",
    priceMonthly: "Our Mandate",
    description:
      "ECAQ immediate mandate is to see the manifestation of our dreams - the building of a OneWorshipPlace.",
    features: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "1-hour, dedicated support response time",
      "Marketing automations",
    ],
  },
];

export default function MissionVisionComponent() {
  return (
    <div className="flow-root bg-appWhite">
      <div className="-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-8 sm:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.id}
                className="flex gap-x-4 rounded-xl bg-gray-200 p-3 lg:p-6 ring-1 ring-inset ring-white/10"
              >
                <div>
                  {/* <h3 id={tier.id} className="text-base font-semibold leading-7 text-indigo-600">
                      {tier.name}
                    </h3> */}
                  <div className="mt-2 flex items-baseline gap-x-2">
                    <span className="text-2xl lg:text-4xl font-bold tracking-tight text-appGreen">
                      {tier.priceMonthly}
                    </span>
                    {/* <span className="text-base font-semibold leading-7 text-gray-600">/month</span> */}
                  </div>
                  <p className="mt-6 text-base leading-7 text-appBlue">
                    {parse(tier.description)}
                  </p>
                </div>
                {/* <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className="mt-8 block rounded-md bg-indigo-600 px-3.5 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get started today
                  </a> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
