import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { cn } from "../../shared/utils/twm-clsx";

interface Props {
  galleryId: string;
  albumName: string;
  path: string;
  thumbnail: string;
  images: string[] | undefined;
}

export default function SimpleGalleryNoThumb({
  galleryId,
  albumName,
  path,
  thumbnail,
  images,
}: Props) {
  useEffect(() => {
    let lightbox = new PhotoSwipeLightbox({
      gallery: "#" + galleryId,
      children: "a",
      pswpModule: () => import("photoswipe"),
    });
    lightbox.init();

    return () => {
      lightbox.destroy();
      lightbox = null!;
    };
  }, [galleryId]);

  return (
    <>
      <div className="relative group mx-auto auto-rows-fr gap-8 lg:mx-0 lg:max-w-none h-72">
        <article className="flex justify-center relative isolate overflow-hidden rounded-xl bg-gray-900 h-full">
          <img
            src={thumbnail}
            alt=""
            className="absolute inset-0 -z-10 h-full w-full"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-800 via-gray-900/30"></div>
          <div className="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"></div>

          <div className="flex flex-col justify-end text-center my-4">
            <h3 className="text-md font-semibold text-gray-50">
              <a>
                <span></span>
                <div className="flex">
                  <p>{albumName}</p>
                  <br />
                </div>
              </a>
              <span className="text-xs">Images ({images?.length})</span>
            </h3>
          </div>
        </article>
        <div className="pswp-gallery" id={galleryId}>
          {images?.map((image, index) => (
            <a
              href={path + image}
              data-pswp-width="768"
              data-pswp-height="512"
              key={galleryId + "-" + index}
              target="_blank"
              rel={`noreferrer - ${index}`}
              className={cn(
                "absolute inset-0 border-b-[1px] border-appGreen transition duration-2000 ease-in-out",
                index !== 0 ? "hidden" : ""
              )}
            ></a>
          ))}
        </div>
      </div>
    </>
  );
}
