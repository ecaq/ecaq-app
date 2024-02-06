
interface Props {
  imageBannerSrc: string;
}

export default function PageBanner3({ imageBannerSrc }: Props) {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <img
        src={imageBannerSrc}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-24 text-center lg:px-8">
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
          <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>
        </div>
      </div>
    </div>
  );
}
