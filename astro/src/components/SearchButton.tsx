import { useState } from "react";
import { useStore } from '@nanostores/react';
import { isSearchBarOpen } from "@store/sharedStore";

export default function SearchButton() {
  const [hoverSearchButton, setHoverSearchButton] = useState(false);

  const $isSearchBarOpen = useStore(isSearchBarOpen);

  return (
    <>
      <li className="p-0 m-0 list-none">
        <button
          className="flex justify-center items-center transition duration-200 ease-in-out rounded-full h-12 w-auto px-4 mx-3 text-white bg-indigo-800 hover:text-indigo-800 hover:bg-white cursor-pointer"
          onMouseEnter={() => {
            setHoverSearchButton(true)
          }}
          onMouseLeave={() => {
            setHoverSearchButton(false)
          }}
          onClick={() => {
            isSearchBarOpen.set(!$isSearchBarOpen)
            console.log("showSearchBar: ", $isSearchBarOpen)
          }}
        >
          {hoverSearchButton ?
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          }
        </button>
      </li>
    </>
  )
}
