import { useEffect } from "react";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import { cn } from "../../shared/utils/twm-clsx";
import { GalleryModel } from "../../app/models/gallery-model";

interface Props {
  galleryId: string;
  images: GalleryModel[];
}

export default function SimpleGalleryNoThumb({ galleryId, images }: Props) {
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
  },[galleryId]);

  return (
    <>
      <h1 className="mt-16 font-bold text-lg">Without Thumbnail</h1>
      <div className="pswp-gallery mt-2" id={galleryId}>
        {images.map((image, index) => (
          <a
            href={image.imageURL}
            data-pswp-width={image.width}
            data-pswp-height={image.height}
            key={galleryId + "-" + index}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "relative hover:bg-white inset-x-0 top-0 z-40 border-b-[1px] border-appGreen transition duration-2000 ease-in-out",
              image.isHidden ? "hidden" : ""
            )}
          >
            <span className="pointer-events-none text-sm font-medium text-gray-50 px-3 py-2 bg-appGreen rounded-md">
              Images ({images.length})
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
