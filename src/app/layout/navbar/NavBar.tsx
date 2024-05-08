import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  HeartIcon,
  Bars3Icon,
  ChartPieIcon,
  ChevronDownIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  PhoneIcon,
  XMarkIcon,
} from "@heroicons/react/16/solid";
import { Fragment, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { cn } from "../../../shared/utils/twm-clsx";
import React from "react";

// https://codesandbox.io/p/sandbox/github/DoctorDerek/headlessui-example-close-popover-dynamically-in-react-hover-flyout-dropdown-menu/tree/main/?file=%2Fsrc%2FApp.js

const about = [
  {
    name: "Mission & Vision",
    description: "Churches of the body of Christ",
    href: "/mission-vision",
    icon: ChartPieIcon,
  },
  {
    name: "Statement of Faith",
    description: "ECAQ programs and benefits",
    href: "/statement-of-faith",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "ECAQ Core",
    description: "How to become a member of ECAQ",
    href: "/ecaq-core",
    icon: FingerPrintIcon,
  },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const membership = [
  {
    name: "ECAQ Members",
    description: "Churches of the body of Christ",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "ECAQ Membership",
    description: "ECAQ programs and benefits",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Join ECAQ",
    description: "How to become a member of ECAQ",
    href: "#",
    icon: FingerPrintIcon,
  },
  // { name: 'Integrations', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
  // { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#', icon: ArrowPathIcon },
];

const callsToAction = [
  { name: "Contact Us", href: "#", icon: PhoneIcon },
  { name: "Prayer Request", href: "#", icon: HeartIcon },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  //    const buttonRef = React.useRef<HTMLInputElement>(null)
  const buttonRef = useRef<React.ElementRef<"button">>(null);

  const headerRef = useRef<React.ElementRef<"div">>(null);
  const isInitial = useRef(true);

  useEffect(() => {
    function updateHeaderStyles() {
      if (!headerRef.current) {
        return;
      }
      //console.log("headerRef.current", headerRef.current);
      // destructuring
      //const { top, height } = headerRef.current.getBoundingClientRect();
      //console.log("header ref", headerRef.current.getBoundingClientRect());

      //console.log("top:" + top, "height: " + height);

      setScroll(window.scrollY > 140);
      // if(top < -80){
      //   console.log("neg80" , window.scrollY)
      // }
      // else {
      //   setScroll(false)
      //   console.log("not-neg80")
      // }

      // let scrollY = clamp(
      //   window.scrollY,
      //   0,
      //   document.body.scrollHeight - window.innerHeight,
      // )

      // if (isInitial.current) {
      //   setProperty('--header-position', 'sticky')
      // }

      // setProperty('--content-offset', `${downDelay}px`)

      // if (isInitial.current || scrollY < downDelay) {
      //   setProperty('--header-height', `${downDelay + height}px`)
      //   setProperty('--header-mb', `${-downDelay}px`)
      // } else if (top + height < -upDelay) {
      //   let offset = Math.max(height, scrollY - upDelay)
      //   setProperty('--header-height', `${offset}px`)
      //   setProperty('--header-mb', `${height - offset}px`)
      // } else if (top === 0) {
      //   setProperty('--header-height', `${scrollY + height}px`)
      //   setProperty('--header-mb', `${-scrollY}px`)
      // }

      // if (top === 0 && scrollY > 0 && scrollY >= downDelay) {
      //   setProperty('--header-inner-position', 'fixed')
      //   removeProperty('--header-top')
      //   removeProperty('--avatar-top')
      // } else {
      //   removeProperty('--header-inner-position')
      //   setProperty('--header-top', '0px')
      //   setProperty('--avatar-top', '0px')
      // }
    }

    function updateStyles() {
      updateHeaderStyles();
      //updateAvatarStyles()
      isInitial.current = false;
    }

    updateStyles();
    window.addEventListener("scroll", updateStyles, { passive: true });
    window.addEventListener("resize", updateStyles);

    return () => {
      window.removeEventListener("scroll", updateStyles);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      className={cn(
        "relative hover:bg-white inset-x-0 top-0 z-40 border-b-[1px] border-appGreen transition duration-2000 ease-in-out",
        scroll ? "sticky bg-white" : "bg-white/20 "
      )}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-2"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              className="cursor-pointer h-16 w-auto"
              src="ecaq-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-8">
          {/* <NavLink to="/" className="text-lg leading-6 text-gray-900">
              HOME
          </NavLink> */}
          <Popover className="relative">
            <Popover.Button
              ref={buttonRef}
              className="flex items-center gap-x-1 text-md leading-6 text-gray-900 outline-0"
            >
              About
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-5 w-screen max-w-xs overflow-hidden rounded-b-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="">
                  {about.map((item) => (
                    <div
                      onClick={() => buttonRef.current?.click()}
                      key={item.name}
                      className="group relative flex items-center gap-x-6 p-4 text-sm leading-6 hover:border-l-2 hover:border-appGreen border-l-2 border-white hover:bg-gray-100"
                    >
                      {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                          <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                        </div> */}
                      <div className="flex-auto">
                        <Link
                          to={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </Link>
                        {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-md leading-6 text-gray-900 outline-0">
              Membership
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-5 w-screen max-w-xs overflow-hidden rounded-b-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {membership.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      {/* <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                      </div> */}
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <NavLink
            to="/news-update"
            className="text-md leading-6 text-gray-900"
          >
            News Update
          </NavLink>
          <NavLink to="/fund-raising" className="text-md leading-6 text-gray-900">
            Fund Raising
          </NavLink>
          <NavLink to="/gallery" className="text-md leading-6 text-gray-900">
            Gallery
          </NavLink>
          <NavLink to="/contact-us" className="text-md leading-6 text-gray-900">
            Contact
          </NavLink>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="bg-appBlue rounded-full py-2.5 px-4 text-sm tracking-wider text-white"
          >
            Donate <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div
            className="flex items-center justify-between"
            onClick={() => buttonRef.current?.click()}
          >
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="" alt="" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        About
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...about].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Membership
                        <ChevronDownIcon
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...membership, ...callsToAction].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button
                    as="a"
                    href="/news-update"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    News Update
                  </Disclosure.Button>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button
                    as="a"
                    href="/gallery"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Gallery
                  </Disclosure.Button>
                </Disclosure>
                <Disclosure>
                  <Disclosure.Button
                    as="a"
                    href="/contact-us"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Contact
                  </Disclosure.Button>
                </Disclosure>
              </div>
              <div className="py-6">
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
