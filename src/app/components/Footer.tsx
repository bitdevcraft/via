import LogoBadge from "./LogoBadge";

export default function Footer() {
  return (
    <div className="max-w-[1144px] px-6 mx-auto">
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 gap-[32px]">
        <div className="col-span-1 sm:col-span-4 md:col-span-6">
          <h3>Let&rsquo;s Work Together</h3>
          <div>Dubai, United Arab Emirates</div>
          <div>venturesintoadvancement@gmail.com</div>
          <div>+971 50 164 6135</div>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-6">
          <LogoBadge size={48} />
        </div>
      </div>
    </div>
  );
}
