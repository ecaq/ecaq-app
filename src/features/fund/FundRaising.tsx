import { observer } from "mobx-react-lite";
import PageBanner from "../components/PageBanner";

export default observer(function FundRaising() {

  return (
    <div className="bg-white">
      <PageBanner imageBannerSrc="img1.jpeg" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16">
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fund Raising Campaign
          </h2>
          {/* <p className="mt-2 text-lg leading-8 text-gray-600">
            Stay informed and updated with the latest news and events.
          </p> */}
          <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">

          </div>
        </div>
      </div>
    </div>
  );
})
