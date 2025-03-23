import { Mail, Map, Phone } from "lucide-react";
import LogoBadge from "./LogoBadge";

export default function Footer() {
  return (
    <div className="max-w-[1144px] px-6 mx-auto">
      <hr />
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 gap-[32px] items-start">
        <div className="col-span-1 sm:col-span-4 md:col-span-6 mt-[56px] flex flex-col gap-[8px]">
          <h3 className="text-xl font-bold">Let&rsquo;s Work Together</h3>
          <div className="flex items-center gap-[8px]">
            <Map size={24} /> <p>Dubai, United Arab Emirates</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Mail size={24} /> <p>venturesintoadvancement@gmail.com</p>
          </div>
          <div className="flex items-center gap-[8px]">
            <Phone size={24} /> <p>+971 50 164 6135</p>
          </div>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-6 flex justify-center sm:justify-end">
          <LogoBadge size={256} />
        </div>
      </div>
    </div>
  );
}
