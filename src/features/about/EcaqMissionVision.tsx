import CoreValueHistory from "../components/CoreValueHistory";
import PageBanner2 from "../components/PageBanner2";

export default function EcaqMissionVision() {
  return (
    <div className="-mt-16">
      <PageBanner2 imageBannerSrc="img1.jpeg" />

      <div className="mx-auto max-w-7xl pt-16 lg:flex lg:gap-x-16 lg:px-8">
        <main className="px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20">
          <CoreValueHistory />
        </main>
      </div>
    </div>
  );
}
