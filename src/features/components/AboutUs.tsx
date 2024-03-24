import { observer } from "mobx-react-lite";
import { useStore } from "../../app/stores/store";
import { useEffect, useState } from "react";
import parse from "html-react-parser";
import TW from "../tw/TW";
import TWIntercessors from "../tw/TWIntercessors";

// const stats = [
//   { name: "Nationalitites", value: "9" },
//   { name: "Total Number of Members", value: "14,294" },
//   { name: "Total Number of Churches", value: "111" },
//   { name: "Alliance", value: "2" },
// ];

export default observer(function AboutUs() {
  const { aboutStore } = useStore();
  const { loadAbout, selectedAbout: abt } = aboutStore;
  const [open, setOpen] = useState(false);
  const [openInter, setOpenInter] = useState(false);

  function setAlliance() {
    console.log("opn :", open);
    setOpen((open) => (open = !open));
  }
  function setIntercessor() {
    setOpenInter((openInter) => (openInter = !openInter));
  }

  useEffect(() => {
    loadAbout("1");
  }, [loadAbout]);

  return (
    <>
      <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
        <img
          src={abt?.backgroundImage}
          alt=""
          className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
        />

        <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply"></div>

        <div
          className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div
          className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          aria-hidden="true"
        >
          <div
            className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {/* <h2 className="text-base font-semibold leading-7 text-indigo-400">Everything you need</h2> */}
            <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {abt?.title}
            </p>
            <p className="mt-2 text-lg leading-8 text-appGreen">
              {abt?.subtitle}
            </p>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-1 gap-16 text-base leading-7 text-white lg:max-w-none lg:grid-cols-2">
            <div>{abt?.desc && parse(abt.desc)}</div>
            <div>{abt?.desc2 && parse(abt.desc2)}</div>
          </div>

          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-5">
              <div className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                <dt className="mt-3 text-base leading-7 text-gray-300">
                  {abt?.statNationalityText}
                </dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                  {abt?.statNationalityValue}
                </dd>
              </div>

              <div className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                <dt className="mt-3 text-base leading-7 text-gray-300">
                  {abt?.statMembersText}
                </dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                  {abt?.statMembersyValue}
                </dd>
              </div>

              <div className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                <dt className="mt-3 text-base leading-7 text-gray-300">
                  {abt?.statChurchesText}
                </dt>
                <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                  {abt?.statChurchesValue}
                </dd>
              </div>

              <a onClick={() => setAlliance()} className="cursor-pointer">
                <div className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                  <dt className="flex items-center mt-3 text-base leading-7 text-gray-300">
                    {abt?.statAllianceText}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-1 ml-2 w-5 h-5 text-appGreen"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                    {abt?.statAlianceValue}
                  </dd>
                </div>
              </a>

              
              <a onClick={() => setIntercessor()} className="cursor-pointer">
                <div className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen">
                  <dt className="flex items-center mt-3 text-base leading-7 text-gray-300">
                    Partnership with Intercessors
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="mt-1 ml-2 w-5 h-5 text-appGreen"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                    {abt?.statAlianceValue}
                  </dd>
                </div>
              </a>

              {/* {stats.map((stat) => (
                <div
                  key={stat.name}
                  className="flex flex-col-reverse px-4 py-1 border-l-[1px] border-appGreen"
                >
                  <dt className="mt-3 text-base leading-7 text-gray-300">
                    {stat.name}
                  </dt>
                  <dd className="text-4xl font-bold leading-9 tracking-tight text-white">
                    {stat.value}
                  </dd>
                </div>
              ))} */}
            </dl>
            <div className="text-center mt-16">
              <p className="text-gray-50">
                <span className="text-appGreen font-bold">Source: </span>
                {abt?.source}
              </p>
            </div>
          </div>
        </div>
      </div>
      <TWIntercessors isCollapse={openInter} clickHandler={setIntercessor} />
      <TW isCollapse={open} clickHandler={setAlliance} />
    </>
  );
});
