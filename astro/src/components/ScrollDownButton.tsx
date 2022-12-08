function ScrollToSection(id: string) {
  console.log({ id });
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    });
  }
}

export default function ScrollDownButton() {
  return (
    <div className='flex flex-col absolute w-1/2 h-screen z-30 text-center'>
      {/* <span className='absolute left-full bottom-16 w-40 h-10 -ml-20 text-indigo-800'>
        scroll down
      </span> */}
      <button
        className='animate-bounce scroll absolute left-full bottom-8 w-11 h-11 bg-white rounded-full outline-none -ml-6'
        onClick={() => ScrollToSection('section-services')}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='-4 -4 32 32'
          stroke='currentColor'
          className='cursor-pointer text-indigo-800'
        >
          <path
            className='ml-2'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='1'
            d='M19 13l-7 7-7-7m14-8l-7 7-7-7'></path>
        </svg>
      </button>
    </div>
  );
}
