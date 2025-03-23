export default function Hero() {
  return (
    <div id="hero-section" className="relative max-w-[1144px] px-6 mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 h-screen sm:h-[80vh] items-center justify-center">
        <div className="col-span-1 sm:col-span-4 md:col-span-6">
          <h1 className="font-bold text-5xl sm:text-7xl  md:text-9xl">VIA</h1>
          <p className="text-xl sm:text-2xl md:text-4xl font-extralight">
            helping companies{" "}
            <span className="font-semibold italic">
              venture into advancement
            </span>{" "}
            through technology
          </p>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-6"></div>
      </div>
    </div>
  );
}
