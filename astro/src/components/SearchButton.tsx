import { createSignal } from "solid-js";
import { searchBar, setSearchBar } from "../store/sharedStore";

export default function SearchButton() {
  const [hoverSearchButton, setHoverSearchButton] = createSignal(false);
  
  return (
    <>
      <li class="p-0 m-0 list-none">
        <button
          class="flex justify-center items-center transition duration-200 ease-in-out rounded-full h-12 w-auto px-4 mx-3 text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white cursor-pointer"
          onMouseEnter={() => {
            setHoverSearchButton(true)
          }}
          onMouseLeave={() => {
            setHoverSearchButton(false)
          }}
          onClick={() => {
            setSearchBar(!searchBar())
            console.log("showSearchBar: ", searchBar())
          }}
        >
          {hoverSearchButton() ?
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        </button>
      </li>
    </>
  )
}

