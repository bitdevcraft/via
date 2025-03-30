import Image from "next/image";

export default function Hero() {
  return (
    <div
      id="hero-section"
      className="relative max-w-[1144px] px-6 mx-auto sm:my-[100px] md:my-0"
    >
      <div className="flex flex-col flex-col-reverse sm:flex-row h-screen sm:h-full md:h-screen items-center justify-center">
        <div className="sm:flex-1 translate-y-[50%] sm:translate-y-[0%]">
          <h1 className="hidden sm:flex font-bold text-7xl sm:text-8xl md:text-9xl">
            VIA
          </h1>
          <p className="text-2xl sm:text-3xl md:text-4xl font-thin">
            helping companies{" "}
            <span className="font-semibold italic">
              Venture Into Advancement
            </span>{" "}
            through technology
          </p>
        </div>
        <div className="sm:flex-1 flex justify-end items-center">
          <Image
            src={"/images/via.png"}
            alt="hero-image"
            width={800}
            height={800}
            className=""
          ></Image>
        </div>
      </div>
    </div>
  );
}
