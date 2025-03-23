"use client";

const processes = [
  {
    id: 1,
    title: "Consultation & Analysis",
    description: "Understanding your business needs and goals",
  },
  {
    id: 2,
    title: "Strategy & Planning",
    description: "Designing a roadmap for development and implementation",
  },
  {
    id: 3,
    title: "Development & Execution",
    description: "Implementing solutions with high standards and precision",
  },
  {
    id: 4,
    title: "Testing & Optimization",
    description: "Ensuring quality, security, and efficiency",
  },
  {
    id: 5,
    title: "Deployment & Support",
    description: "Providing ongoing maintenance and IT Support",
  },
];

export default function OurProcess() {
  return (
    <div
      id="process"
      className="max-w-[1144px] px-6 mx-auto mb-[140px] pt-[100px] "
    >
      <h3 className="mb-[48px] text-center text-xl sm:text-3xl md:text-5xl font-semibold">
        Our Process
      </h3>
      <p className="mb-[64px] text-center font-light">
        From Insight to Implementation - A Streamlined Approach to Excellence
      </p>
      <div className="">
        {processes.map((process, index) => (
          <div
            key={process.id}
            className="grid grid-cols-1 sm:grid-cols-7 md:grid-cols-11 gap-[32px] items-center mb-[16px]"
          >
            <div
              className={`hidden sm:hidden md:flex col-span-1 sm:col-span-3 md:col-span-5 ${
                index % 2 ? "md:order-first" : "md:order-last"
              }`}
            ></div>
            <div className="hidden sm:flex md:flex col-span-1 sm:col-span-1 md:col-span-1 justify-center">
              <div className="size-8 bg-foreground rounded-full flex items-center justify-center">
                <div className="size-3 bg-background rounded-full"></div>
              </div>
            </div>
            <div
              className={`col-span-1 sm:col-span-6 md:col-span-5 border rounded-xl p-8 ${
                index % 2 ? "md:order-last" : "md:order-first"
              }`}
            >
              <p className="text-3xl opacity-[60%]">{process.id}</p>
              <p className="font-bold text-xl">{process.title}</p>
              <p>{process.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
