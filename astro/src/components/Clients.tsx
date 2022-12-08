import { useState, useEffect } from "react";
import type { Client } from '@lib/sanityApi';
import { getClients } from '@lib/sanityApi';

export default function Clients(
    { slides, slideMin, slideMax }:
    { slides: Client[][], slideMin: number, slideMax: number }
  ) {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [hoverNext, setHoverNext] = useState<boolean>(false);
  const [hoverPrev, setHoverPrev] = useState<boolean>(false);

  function updateSelectedSlide(direction: number): void {
    console.log({ selectedSlide, slideMax, slideMin, direction})
    if (direction === 1) {
      if (selectedSlide < slideMax) {
        setSelectedSlide(selectedSlide + 1);
      } else {
        setSelectedSlide(slideMin);
      }
    } else {
      if (selectedSlide > slideMin) {
        setSelectedSlide(selectedSlide - 1);
      } else {
        setSelectedSlide(slideMax);
      }
    }
  }
  console.log({ selectedSlide })

  return (
    <>
      {/* Clients Slide */}
      <div className="flex flex-col relative w-full">
        <div
          className="flex flex-wrap w-full h-72 transition duration-200 ease-in-out"
        >
          {slides.length > 0 && slides[selectedSlide].map((client: Client) => (
            <a
              className="flex justify-center items-center pt-4 pb-4 m-0 cursor-pointer hover:bg-gray-200 w-1/4 h-36"
              key={client._id}
            >
              <div className="flex bg-transparent">
                <img
                  className="h-auto max-h-36 max-w-[148px]"
                  src={client.image.url}
                  alt={client.name}

                />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Forward Button */}
      <div className="flex absolute top-0 -right-12 w-12 h-full">
        <div
          className="flex relative w-12 h-full z-50 justify-center items-center cursor-pointer"
          onClick={() => updateSelectedSlide(1)}
          onMouseEnter={() => setHoverNext(true)}
          onMouseLeave={() => setHoverNext(false)}
        >
          {hoverNext === false ? (
            <div
            className="flex font-light justify-center items-center text-sm text-white bg-gray-500 rounded-full w-8 h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          ) : (
            <div
            className="flex font-light justify-center items-center text-sm text-white bg-indigo-800 rounded-full w-8 h-8"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </>
  );
}