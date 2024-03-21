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
import { Fragment, useState } from "react";
import { Dialog, RadioGroup, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  GlobeAsiaAustraliaIcon,
} from "@heroicons/react/20/solid";
import { cn } from "../../shared/utils/twm-clsx";

const product = {
  name: "Alliance",
  desc: "Our have two strongest allies in faith.",
  imageSrc:
    "https://visionedgemarketing.com/wp-content/uploads/2007/02/krakenimages-Y5bvRlcCx8k-unsplash-200x300.jpg",
  imageAlt:
    "Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.",
  sizes: [
    {
      name: "WEA",
      website: "www.worldea.org",
      description: "Perfect for a reasonable amount of snacks.",
    },
    {
      name: "PCEC",
      website: "www.pcec.org.ph",
      description: "Enough room for a serious amount of snacks.",
    },
  ],
};

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

interface Props {
  isCollapse: boolean;
  clickHandler: () => void;
}

export default function TW({ isCollapse, clickHandler }: Props) {
  //const [open, setOpen] = useState(isCollapse);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  //   function setCollapse(){
  //     isCollapse = true
  //   }
  //   useEffect(()=>{
  //     setCollapse()
  //   }, [setCollapse])

  return (
    <Transition.Root show={isCollapse} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={clickHandler}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
              enterTo="opacity-100 translate-y-0 md:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 md:scale-100"
              leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            >
              <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex w-full items-center rounded-md overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <button
                    type="button"
                    className="hidden absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                    onClick={() => clickHandler}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={product.imageSrc}
                          alt={product.imageAlt}
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {product.name}
                      </h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-1"
                      >
                        <h3 id="information-heading" className="sr-only">
                          Product information
                        </h3>

                        <div className="">
                          <p className=" text-gray-500">{product.desc}</p>
                        </div>
                      </section>

                      <section
                        aria-labelledby="options-heading"
                        className="mt-6"
                      >
                        <h3 id="options-heading" className="sr-only">
                          Product options
                        </h3>

                        <form>
                          <div className="">
                            {/* Size selector */}
                            <RadioGroup
                              value={selectedSize}
                              onChange={setSelectedSize}
                            >
                              {/* <RadioGroup.Label className="block text-sm font-medium text-gray-700">
                                Size
                              </RadioGroup.Label> */}
                              <div className="mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                {product.sizes.map((size) => (
                                  <RadioGroup.Option
                                    as="div"
                                    key={size.name}
                                    value={size}
                                    className={({ active }) =>
                                      cn(
                                        active ? "ring-2 ring-indigo-500" : "",
                                        "relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none"
                                      )
                                    }
                                  >
                                    {({ active, checked }) => (
                                      <>
                                        <a
                                          href={`https://${size.website}`}
                                          target="_blank"
                                        >
                                          <RadioGroup.Label
                                            as="p"
                                            className="text-base font-medium text-gray-900"
                                          >
                                            {size.name}
                                          </RadioGroup.Label>
                                          <RadioGroup.Description
                                            as="p"
                                            className="flex items-center mt-1 text-sm text-gray-500"
                                          >
                                            <GlobeAsiaAustraliaIcon
                                              className="h-5 w-5 mr-2 text-appGreen"
                                              aria-hidden="true"
                                            />
                                            {size.website}
                                          </RadioGroup.Description>
                                        </a>
                                        <div
                                          className={cn(
                                            active ? "border" : "border-2",
                                            checked
                                              ? "border-indigo-500"
                                              : "border-transparent",
                                            "pointer-events-none absolute -inset-px rounded-lg"
                                          )}
                                          aria-hidden="true"
                                        />
                                      </>
                                    )}
                                  </RadioGroup.Option>
                                ))}
                              </div>
                            </RadioGroup>
                          </div>
                        </form>
                      </section>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
