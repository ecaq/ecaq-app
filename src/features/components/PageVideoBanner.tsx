interface Props {
  bannerSrc: string;
}

export default function PageVideoBanner({ bannerSrc }: Props) {
  return (
    <div className="aspect-w-16 aspect-h-9 lg:-mt-16">
      <iframe className="" src={bannerSrc} allow="autoplay"></iframe>
    </div>
  );
}

{
  /* <div className="aspect-w-16 aspect-h-9">
        <object
          type="application/x-shockwave-flash"
          data="http://www.youtube.com/v/6-aVluqleIc?rel=0&loop=1&autoplay=1&showsearch=0&version=3&showinfo=0&modestbranding=1&fs=1"
        ></object>
      </div> */
}
