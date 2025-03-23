"use client";
import { useState } from "react";

const services = [
  {
    id: 1,
    title: "Crafting Digital Excellence",
    category: "Web Design",
  },
  {
    id: 2,
    title: "Designing Seamless Experiences",
    category: "UI/UX",
  },
  {
    id: 3,
    title: "Powering Innovation",
    category: "IT Solutions",
  },
  {
    id: 4,
    title: "Building the Future",
    category: "Development",
  },
  {
    id: 5,
    title: "Scaling with Confidence",
    category: "Cloud",
  },
  {
    id: 6,
    title: "Intelligence Redefined",
    category: "AI",
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
    <div className="max-w-[1144px] px-6 mx-auto mb-[240px]">
      <h3 className="mb-[48px] text-center text-xl sm:text-3xl md:text-5xl font-semibold">
        Our Services
      </h3>
      <p className="mb-[64px] text-center font-thin">
        Comprehensive Digital Solutions - From Web Development to IT Security &
        Automation
      </p>
      <div className="flex justify-between mb-[48px] flex-wrap">
        {categories.map((category) => (
          <button
            onClick={() => setFilter(category)}
            key={category}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === category
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-8 md:grid-cols-12 gap-[32px]">
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="col-span-1 sm:col-span-4 md:col-span-6 flex flex-col"
          >
            <div className="h-[340px] rounded-t-lg border"></div>
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
