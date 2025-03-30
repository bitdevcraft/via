"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function GetInTouch() {
  return (
    <div
      id="contact"
      className="max-w-[1144px] px-6 mx-auto  mb-[140px] pt-[100px]"
    >
      <div className="grid grid-cols-1 sm:grid-cols-4 md:grid-cols-12 gap-[32px] items-start">
        <div className="col-span-1 sm:col-span-4 md:col-span-8">
          <p className="font-bold text-4xl">Get in Touch</p>
          <p>
            We&rsquo;d love to hear from you. Fill out the form and we&rsquo;ll
            get back to you as soon as possible.
          </p>
        </div>
        <div className="col-span-1 sm:col-span-4 md:col-span-4 flex flex-col gap-[8px]">
          <Input
            placeholder="Name"
            className="bg-gray-100"
            suppressHydrationWarning
          />
          <Input
            placeholder="Mobile Number"
            type="phone"
            className="bg-gray-100"
            suppressHydrationWarning
          />
          <Input
            placeholder="Email"
            type="email"
            className="bg-gray-100"
            suppressHydrationWarning
          />
          <Textarea
            placeholder="Message"
            className="bg-gray-100"
            suppressHydrationWarning
          />
          <Button suppressHydrationWarning>Submit</Button>
        </div>
      </div>
    </div>
  );
}
