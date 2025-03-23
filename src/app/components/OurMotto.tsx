export default function OurMotto() {
  return (
    <div className="max-w-[1144px] px-6 mx-auto mb-[140px] pt-[100px]">
      <h3 className="pl-14 sm:pl-15 md:pl-24 font-bold text-xl sm:text-3xl md:text-5xl translate-y-[100%]">
        Our Motto
      </h3>
      <div className="relative py-6 sm:py-10 md:py-18 ">
        <div className="absolute top-0 left-0 px-6">
          <LeftQuote />
        </div>
        <div className="">
          <p className="font-bold text-5xl sm:text-7xl md:text-9xl p-6 bg-foreground/20">
            Turning Possibilities into Digital Realities.
          </p>
        </div>
        <div className="absolute bottom-0 right-0 px-6 ">
          <RightQuote />
        </div>
      </div>
    </div>
  );
}

function LeftQuote() {
  return (
    <svg
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 0 34 34"
      xmlns="http://www.w3.org/2000/svg"
      className="size-14 sm:size-18 md:size-30 -translate-x-[50%]"
    >
      <path d="m31.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2zm-19.2 0h-7.2l-4.8 9.6v14.4h14.4v-14.4h-7.2z" />
    </svg>
  );
}

function RightQuote() {
  return (
    <svg
      fill="currentColor"
      width="800px"
      height="800px"
      viewBox="0 -10 34 34"
      xmlns="http://www.w3.org/2000/svg"
      className="size-14 sm:size-18 md:size-30 translate-x-[50%]"
    >
      <path d="m2.4 24h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2zm19.2 0h7.2l4.8-9.6v-14.4h-14.4v14.4h7.2z" />
    </svg>
  );
}
