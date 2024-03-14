import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { GalleryModel } from "../../app/models/gellery-model";

interface Props {
  galleryId: string;
  images: GalleryModel[];
}

export default function SimpleGallery({ galleryId, images }: Props) {
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
      <h1 className="mt-16 font-bold text-lg">With Thumbnail</h1>
      <div className="pswp-gallery" id={galleryId}>
        <ul
          role="list"
          className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
        >
          {images.map((image, index) => (
            <a
              href={image.imageUrl}
              data-pswp-width="768"
              data-pswp-height="512"
              key={galleryId + "-" + index}
              target="_blank"
              rel="noreferrer"
            >
              <li className="relative">
                <div className="group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                  <img
                    src={image.imageUrl}
                    alt=""
                    className="pointer-events-none object-cover group-hover:opacity-75"
                  />
                  <button
                    type="button"
                    className="absolute inset-0 focus:outline-none"
                  >
                    <span className="sr-only">
                      View details for IMG_4985.HEIC
                    </span>
                  </button>
                </div>
                <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">
                  IMG_4985.HEIC
                </p>
                <p className="pointer-events-none block text-sm font-medium text-gray-500">
                  3.9 MB
                </p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </>
  );
}
