/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/

import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import SimpleGalleryNoThumb from "./SimpleGalleryNoThumb";
import { useEffect } from "react";

// const galleryModel: GalleryModel[] = [
//   {
//     imageURL:
//       "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format",
//     thumbURL:
//       "https://images.unsplash.com/photo-1582053433976-25c00369fc93?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//     width: 768,
//     height: 512,
//     isHidden: false,
//   },
//   {
//     imageURL:
//       "https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80",
//     thumbURL:
//       "https://images.unsplash.com/photo-1614926857083-7be149266cda?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=512&q=80",
//     width: 768,
//     height: 512,
//     isHidden: true,
//   },
//   {
//     imageURL:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//     thumbURL:
//       "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=512&q=80",
//     width: 768,
//     height: 512,
//     isHidden: true,
//   },
// ];

export default observer(function Gallery() {
  const { galleryStore } = useStore();
  const { loadGalleriesWithImages, getGalleries } = galleryStore;
  useEffect(() => {
    loadGalleriesWithImages();
  }, [loadGalleriesWithImages]);
  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-4 gap-4">
          {getGalleries.map((g) => (
            <SimpleGalleryNoThumb
              galleryId={`my-test-gallery-no-thumb-${g.id}`}
              albumName={g.name}
              path={import.meta.env.VITE_BASE_URL + g.pathUrl + "/"}
              thumbnail={g.imageUrl}
              images={g.imageFileNames}
            />
          ))}

          {/* <SimpleGallery galleryId="my-test-gallery" images={getGalleries} /> */}
        </div>
        <hr className="my-16" />
      </div>
    </div>
  );
});
