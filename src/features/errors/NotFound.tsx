import { Link } from "react-router-dom";

export default function NotFound() {
    return (
      <div className="bg-white">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Oops - we've looked everywhere but could not find what you are looking for!
            </h2>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {/* <a
                href="#"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get started
              </a> */}
              <Link to='/' className="border-2 border-gray-200 rounded-lg px-3 py-2 text-sm font-semibold leading-6 text-gray-900">
                Return to home page <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  