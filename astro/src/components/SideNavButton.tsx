import { useState } from "react";
import { useStore } from "@nanostores/react";
import { isSideNavOpen } from "@store/sharedStore";

export default function SideNavButton() {
  const [hoverHambugerMenu, setHoverHambugerMenu] = useState(false);
  const $isSideNavOpen = useStore(isSideNavOpen);

  return (
    <li className="p-0 m-0 list-none">
        <button
          className="flex justify-center items-center transition duration-200 ease-in-out rounded-full h-12 w-auto px-4 mx-3 text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white cursor-pointer"
          onMouseEnter={() => setHoverHambugerMenu(true)}
          onMouseLeave={() => setHoverHambugerMenu(false)}
          onClick={() => isSideNavOpen.set(!$isSideNavOpen)}
        >
          {hoverHambugerMenu ?
            <svg
              className="flex h-6 w-6 fill-current text-indigo-800 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            :
            <svg
              className="flex h-6 w-6 fill-current text-white transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
    }
        </button>
      </li>
  )
}
