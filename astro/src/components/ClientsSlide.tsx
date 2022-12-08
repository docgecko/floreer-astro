import type { Client } from '@lib/sanityApi';

export default function ClientsSlide({client}: {client: Client}) {
  return (
    <a
      className="flex justify-center items-center pt-4 pb-4 m-0 cursor-pointer hover:bg-gray-200 w-1/4 h-36"
      key={client._id}
      href={`/work/case-studies?client=${client._id}`}
    >
      <div className="flex bg-transparent">
        <img
          className="h-auto max-h-36 max-w-[148px]"
          src={client.image.url}
          alt={client.name}
        />
      </div>
    </a>
  );
}