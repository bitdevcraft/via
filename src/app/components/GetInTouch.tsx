import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function GetInTouch() {
  return (
    <div className="max-w-[1144px] px-6 mx-auto mb-[240px]">
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 gap-[32px] border items-center">
        <div className="col-span-1 sm:col-span-4 md:col-span-8">
          <p className="font-bold text-4xl">Get in Touch</p>
          <p>
            We&rsquo;d love to hear from you. Fill out the form below and
            we&rsquo;ll get back to you as soon as possible.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-4">
          <Input />
        </div>
      </div>
    </div>
  );
}
