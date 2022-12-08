import { useStore } from '@nanostores/react';
import { isSearchBarOpen } from "@store/sharedStore";

export default function SearchBar() {
  const $isSearchBarOpen = useStore(isSearchBarOpen);

  return (
    <>
     {$isSearchBarOpen &&
      <div
        className='absolute top-0 right-0 mr-9 mt-24 z-50 transition duration-300 ease-in-out'
      >
        <div className='flex h-12 bg-gray-50 rounded-full w-[35.6rem]'>
          <form className='flex h-full w-full px-4 m-0 items-center'>
            <input
              id='search-input'
              name='search-input'
              placeholder='Type to search...'
              className='flex h-full w-full bg-transparent text-indigo-800 font-normal text-base'
            />
          </form>
        </div>
      </div>
      }
    </>
  )
};
