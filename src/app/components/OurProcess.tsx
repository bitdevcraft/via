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
    <div className="max-w-[1144px] px-6 mx-auto mb-[240px]">
      <h3 className="mb-[48px] text-center text-xl sm:text-3xl md:text-5xl font-semibold">
        Our Process
      </h3>
      <p className="mb-[64px] text-center font-thin">
        From Insight to Implementation - A Streamlined Approach to Excellence
      </p>
      <div>
        {processes.map((process) => (
          <div key={process.id}>
            <p>{process.id}</p>
            <p>{process.title}</p>
            <p>{process.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
