export default function usePageHeader(number, title) {
  return (
    <div className="mt-20">
      <div className="flex justify-center lg:justify-start items-center space-x-4">
        <span className="text-[#4D4D56] font-bold text-2xl">{number}</span>
        <h1 className="text-xl tracking-[1.75px] lg:text-xl lg:tracking-[4.75px] text-white">
          {title}
        </h1>
      </div>
    </div>
  );
}