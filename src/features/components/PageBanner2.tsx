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

interface Props {
  imageBannerSrc: string;
}

export default function PageBanner2({ imageBannerSrc }: Props) {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <img
        src={imageBannerSrc}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 md:pt-28 md:pb-28 lg:pt-32 lg:pb-32 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2> */}
          <p className="mt-2 text-3xl font-bold tracking-tight text-appBlue lg:text-5xl">
            The right price for you,{" "}
            <br className="hidden sm:inline lg:hidden" />
            whoever you are
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-appGreen">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit
            numquam eligendi quos odit doloribus molestiae voluptatum.
          </p>
          <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-appBlue pb-24 sm:pb-32">
        <div className="-mt-24 lg:-mt-32">
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
    </div>
  );
}
