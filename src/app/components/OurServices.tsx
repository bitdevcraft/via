"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Crafting Digital Excellence",
    category: "Web Design",
    image: "/images/web.png",
    bg: "#edd4ca",
  },
  {
    id: 2,
    title: "Designing Seamless Experiences",
    category: "UI/UX",
    image: "/images/uiux.png",
    bg: "#4b4d74",
  },
  {
    id: 3,
    title: "Powering Innovation",
    category: "IT Solutions",
    image: "/images/it.png",
    bg: "#ffffff",
  },
  {
    id: 4,
    title: "Building the Future",
    category: "Development",
    image: "/images/web.png",
    bg: "#edd4ca",
  },
  {
    id: 5,
    title: "Scaling with Confidence",
    category: "Cloud",
    image: "/images/cloud.png",
    bg: "#282a3c",
  },
  {
    id: 6,
    title: "Intelligence Redefined",
    category: "AI",
    image: "/images/ai.png",
    bg: "#52489e",
  },
];

const categories = [
  "All",
  ...new Set(services.map((service) => service.category)),
];

export default function OurServices() {
  const [filter, setFilter] = useState("All");

  const filteredServices =
    filter === "All"
      ? services
      : services.filter((service) => service.category === filter);
  return (
    <div
      id="services"
      className="max-w-[1144px] px-6 mx-auto mb-[140px] pt-[100px]"
    >
      <h3 className="mb-[48px] text-center text-xl sm:text-3xl md:text-5xl font-semibold">
        Our Services
      </h3>
      <p className="mb-[64px] text-center font-light">
        Comprehensive Digital Solutions - From Web Development to IT Security &
        Automation
      </p>
      <div className="flex justify-between mb-[48px] gap-[16px] overflow-x-auto pb-4">
        {categories.map((category) => (
          <Button
            onClick={() => setFilter(category)}
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
            suppressHydrationWarning
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 gap-[32px]">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="col-span-1 sm:col-span-4 md:col-span-6 flex flex-col"
          >
            <div
              className="h-[340px] rounded-t-lg border flex justify-center items-center"
              style={{ backgroundColor: service.bg }}
            >
              <Image
                src={service.image}
                alt="hero-image"
                width={300}
                height={300}
                className=""
              ></Image>
            </div>
            <div className="min-h-[100px] rounded-b-lg border p-4">
              <p className="text-md">{service.category}</p>
              <h4 className="text-lg sm:text-xl md:text-2xl font-bold">
                {service.title}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
