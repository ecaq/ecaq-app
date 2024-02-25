interface Props {
  imageBannerSrc: string;
}

export default function PageBanner2({ imageBannerSrc }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9 pt-20 md:mt-[-60px] lg:mt-[-220px]">
      <img
        src={imageBannerSrc}
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
      />
      <div className="mx-auto max-w-7xl px-6 md:pt-[110px] lg:pt-[320px] text-center lg:px-8">
        <div className="mx-auto max-w-lg sm:max-w-4xl">
          {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Pricing</h2> */}
          <p className="mt-2 text-xl sm:text-3xl font-bold tracking-tight text-appBlue lg:text-5xl">
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
        </div>
      </div>
    </div>
  );
}
