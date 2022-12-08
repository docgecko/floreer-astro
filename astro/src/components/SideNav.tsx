import { useState } from 'react';
import { useStore } from '@nanostores/react';
import { isSideNavOpen } from '@store/sharedStore';

export default function SideNav() {
  const [hamburgerClose, setHamburgerClose] = useState<boolean>(true);
  const [selectedNav, setSelectedNav] = useState<string>("work");

  const $isSideNavOpen = useStore(isSideNavOpen);

  return (
    <>
      {$isSideNavOpen ? (
        <>
          <div className="absolute top-0 left-0 flex flex-col h-auto bg-gray-50 z-50 w-full">
            <header className="flex flex-row relative w-full h-auto border-b border-gray-300">
              <div className="flex w-1/4 h-auto">
                <nav
                  className="flex relative h-24 w-full justify-start items-center pl-9 text-md font-medium"
                >
                  <a href="" className="p-3 rounded-full">
                    <img
                      src="images/floreer_icon.png"
                      alt="Welcome to Floreer"
                      className="flex flex-row w-40 flex-shrink-0"
                    />
                  </a>
                </nav>
              </div>

              <div
                className="flex w-3/4 h-auto justify-end items-center pr-6 text-md font-medium z-30"
              >
                <ul className="flex flex-row p-0 m-0 list-none">
                  <li className="p-0 m-0 list-none">
                    <button
                      className="flex justify-center items-center transition duration-200 ease-in-out rounded-full h-12 w-auto px-4 mx-3 text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white cursor-pointer"
                      onMouseEnter={() => setHamburgerClose(true)}
                      onMouseLeave={() => setHamburgerClose(false)}
                      onClick={() => isSideNavOpen.set(false)}
                    >
                      {hamburgerClose === false ? (
                        <svg
                        className="flex h-6 w-6 fill-current text-white transition duration-200 ease-in-out"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                      ) : (
                        <svg
                          className="flex h-6 w-6 fill-current text-indigo-800 transition duration-200 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      )}
                    </button>
                  </li>
                </ul>
              </div>
            </header>

            <main className="flex flex-row relative w-full h-min-[37em]">
              <div className="flex flex-col w-1/4 border-r border-gray-300">
                <a
                  className={`flex flex-row justify-between items-center w-auto max-h-16 ml-9 pr-6 border-b border-gray-300 cursor-pointer ${
                    selectedNav === "work" ? "border-r-4 border-r-indigo-800 pr-5" : "border-r-0 mr-0"
                  }`}
                  onClick={() => setSelectedNav("work")}
                >
                  <h1 className="flex text-2xl p-6">Work</h1>
                  <div className="flex w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  className="flex flex-row justify-between items-center w-auto max-h-16 ml-9 pr-6 border-b border-gray-300 cursor-pointer"
                  href="thinking"
                >
                  <h1 className="flex text-2xl p-6">Thinking</h1>
                </a>

                <a
                  className={`flex flex-row justify-between items-center w-auto max-h-16 ml-9 pr-6 border-b border-gray-300 cursor-pointer ${
                    selectedNav === "about" ? "border-r-4 border-r-indigo-800 pr-5" : "border-r-0 mr-0"
                  }`}
                  onClick={() => setSelectedNav("about")}
                >
                  <h1 className="flex text-2xl p-6">About</h1>
                  <div className="flex w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>

                <a
                  className={`flex flex-row justify-between items-center w-auto max-h-16 ml-9 pr-6 border-b border-gray-300 cursor-pointer ${
                    selectedNav === "connect" ? "border-r-4 border-r-indigo-800 pr-5" : "border-r-0 mr-0"
                  }`}
                  onClick={() => setSelectedNav("connect")}
                >
                  <h1 className="flex text-2xl p-6">Connect</h1>
                  <div className="flex w-6 h-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </a>
              </div>

              <div className="flex w-3/4 px-36 py-4 h-min-[75%]">
                {selectedNav === "work" && (
                  <ul className="text-base">
                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"
                    >
                      <a href="/work/case-studies">
                        Case Studies
                      </a>
                    </li>

                    <li
                      className="py-2 mb-4 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/work/services">
                        Services
                      </a>
                    </li>
                    <ul className="text-sm font-light pl-4">
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"
                      >
                        <a href="/work/services/assets">
                          Assets
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"
                      >
                        <a href="/work/services/digital-delivery">
                          Digital Delivery
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/governance">
                          Governance
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/learning-and-development">
                          Learning and Development
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/performance">
                          Performance
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/procurement">
                          Procurement
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/risk">
                          Risk
                        </a>
                      </li>
                      <li
                        className="py-2 cursor-pointer hover:text-indigo-800"

                      >
                        <a href="/work/services/transformation">
                          Transformation
                        </a>
                      </li>
                    </ul>

                    <li
                      className="py-2 mt-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/work/industries">
                        Industries
                      </a>
                    </li>

                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/work/clients">
                      Clients
                      </a>
                    </li>
                  </ul>
                )}

                {selectedNav === "about" && (
                  <ul className="text-base">
                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/about/floreer">
                      About Floreer
                      </a>
                    </li>
                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/about/people">
                      People
                      </a>
                    </li>
                  </ul>
                )}

                {selectedNav === "connect" && (
                  <ul className="text-base">
                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/connect/contact-us">
                        Contact Us
                      </a>
                    </li>
                    <li
                      className="py-2 mb-6 border-b border-gray-300 font-semibold cursor-pointer hover:text-indigo-800"

                    >
                      <a href="/connect/locations">
                        Locations
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </main>

            <footer className="flex relative w-full border-t border-gray-300">
              <div
                className="flex flex-row w-full justify-between items-center text-gray-500 text-xs px-9 py-6"
              >
                <div className="flex justify-start w-auto">
                  &copy; 2013-2021 Floreer, Lda. All rights reserved.
                </div>
                <div className="flex justify-end w-auto">
                  <ul className="flex flex-row">
                    <li className="px-2">
                      <a
                        className="border-b border-transparent pb-1 hover:border-gray-500 transition duration-300 ease-in-out cursor-pointer"
                        href="/about/cookie-policy"
                      >
                        Cookie Policy
                      </a>
                    </li>
                    |
                    <li className="px-2">
                      <a
                        className="border-b border-transparent pb-1 hover:border-gray-500 transition duration-300 ease-in-out cursor-pointer"
                        href="/about/privacy-policy"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    |
                    <li className="px-2">
                      <a
                        className="border-b border-transparent pb-1 hover:border-gray-500 transition duration-300 ease-in-out cursor-pointer"
                        href="/about/terms-of-use"
                      >
                        Terms of Use
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </footer>
          </div>
          <div
            className="fixed inset-0 bg-black opacity-60 z-40"
            id="black-out"
          ></div>
        </>
      ) : (
        <div
          className="absolute top-0 left-[-100%] bg-transparent z-40"
          id="black-out"
        ></div>
      )}
    </>
  )
}
