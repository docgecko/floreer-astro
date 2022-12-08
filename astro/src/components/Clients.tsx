import { useState, useEffect } from "react";
import type { Client } from '@lib/sanityApi';
import { getClients } from '@lib/sanityApi';
import ClientsSlide from "./ClientsSlide";

export default function Clients(
    { slides, slideMin, slideMax }:
    { slides: Client[][], slideMin: number, slideMax: number }
  ) {
  const [selectedSlide, setSelectedSlide] = useState<number>(0);
  const [hoverNext, setHoverNext] = useState<boolean>(false);
  const [hoverPrev, setHoverPrev] = useState<boolean>(false);

  function updateSelectedSlide(slideNo: number): void {
    if (slideNo >= slideMin && slideNo <= slideMax) {
      setSelectedSlide(slideNo);
    } else if (slideNo < slideMin) {
      setSelectedSlide(slideMax);
    } else if (slideNo > slideMax) {
      setSelectedSlide(slideMin);
    }
  }

  return (
    <>
      {/* Clients Slide */}
      <div className="flex flex-col relative w-full">
        <div
          className="flex flex-wrap w-full h-72 transition duration-200 ease-in-out"
        >
          {slides.length > 0 && slides[selectedSlide].map((client: Client) => (
            <ClientsSlide client={client} key={client._id} />
          ))}
        </div>
      </div>

      {/* Back Button */}
      <div className="flex absolute top-0 left-0 w-12 h-full">
        <a
          className="flex relative w-12 h-full z-50 justify-center items-center cursor-pointer"
          onClick={() => updateSelectedSlide(selectedSlide - 1)}
          onMouseEnter={() => setHoverPrev(true)}
          onMouseLeave={() => setHoverPrev(false)}
        >
          {hoverPrev === false ? (
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
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
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
                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}
        </a>
      </div>

      {/* Forward Button */}
      <div className="flex absolute top-0 right-0 w-12 h-full">
        <div
          className="flex relative w-12 h-full z-50 justify-center items-center cursor-pointer"
          onClick={() => updateSelectedSlide(selectedSlide + 1)}
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

      {/* Row of Buttons */}
      <div className="flex flex-row relative w-full h-12 justify-center items-end">
        {slides.length > 0 && slides.map((slide: Client[], index: number) => (
          <a
            className={`flex font-light justify-center items-center text-xs ${selectedSlide === index ? "bg-indigo-800" : "bg-gray-300 hover:bg-gray-500"} rounded-full w-3 h-3 mx-2 cursor-pointer`}
            onClick={() => updateSelectedSlide(index)}
            key={index}
          />
        ))}
      </div>
    </>
  );
}