import type { Client } from '@lib/sanityApi';

export default function ClientsSlide({slide}: any) {
  console.log("slide data", slide);

  return (
    <div className="flex flex-col relative w-full">
      {slide && slide.map((client: Client) => (
        <div
          className="flex flex-wrap w-full h-72 transition duration-200 ease-in-out"
        >
          <a
            className="flex justify-center items-center pt-4 pb-4 m-0 cursor-pointer hover:bg-gray-200 w-1/4 h-36"
          >
            <div className="flex bg-transparent">
              <img
                className="h-auto max-h-36 max-w-[148px]"
                src={client.image.url}
                alt={client.name}
              />
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}