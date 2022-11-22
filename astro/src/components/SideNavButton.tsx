import { createSignal } from "solid-js";

export default function SideNavButton() {
  const [hoverHambugerMenu, setHoverHambugerMenu] = createSignal(false);
  const [showSidenavMenu, setShowSidenavMenu] = createSignal(false);

  return (
    <li class="p-0 m-0 list-none">
        <button
          class="flex justify-center items-center transition duration-200 ease-in-out rounded-full h-12 w-auto px-4 mx-3 text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white cursor-pointer"
          onMouseEnter={() => setHoverHambugerMenu(true)}
          onMouseLeave={() => setHoverHambugerMenu(false)}
          onClick={() => setShowSidenavMenu(!showSidenavMenu())}
        >
          {hoverHambugerMenu() ?
            <svg
              class="flex h-6 w-6 fill-current text-indigo-800 transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            :
            <svg
              class="flex h-6 w-6 fill-current text-white transition duration-200 ease-in-out"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
    }
        </button>
      </li>
  )
}
