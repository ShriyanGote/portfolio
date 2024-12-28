import React from "react";

const experienceData = [
  {
    title: "Undergraduate Researcher",
    organization: "University of California, Santa Cruz",
    duration: "Oct 2024 - Present",
    description:
      "Developed an Open Source Flip-Flop visualizer, increasing simulation accuracy by 25% using TypeScript for the front-end. Optimized simulation algorithms and enabled real-time analog simulations, reducing load time by 40% by analyzing SystemVerilog and VHDL designs.",
    logo: "/images/ucsc-logo.png", // Add logo here
  },
  {
    title: "Software Engineer Intern",
    organization: "Capital One",
    duration: "June 2024 - Aug 2024",
    description:
      "Built the Pantheon portal on Capital One’s Exchange database, improving quality assurance efficiency by 30% using React.js. Led backend development, reducing Databricks processing time by 75% with FastAPI, Python, and AWS.",
    logo: "/images/capitalone-logo.png", // Add logo here
  },
  {
    title: "Software Engineer Intern",
    organization: "San Francisco 49ers",
    duration: "Aug 2023 - Jan 2024",
    description:
      "Produced insights into apparel purchasing trends by analyzing over 20,000 entries with SQL. Improved device performance by 35% in point-of-sale systems through testing and troubleshooting on iOS, Android, and Linux platforms.",
    logo: "/images/sfniners-logo.png", // Add logo here
  },
  {
    title: "Software Development Intern",
    organization: "Electric Power Research Institute",
    duration: "May 2023 - Aug 2023",
    description:
      "Developed a Blazor web app in C# for the company-wide API framework. Improved QA efficiency by 25% by automating testing for MAAP using Python, Angular, and ASP.NET.",
    logo: "/images/epri-logo.png", // Add logo here
  },
];

function Page() {
  return (
    <div className="max-w-5xl mx-auto my-40">
      <h2 className="text-3xl font-semibold my-8">Experience</h2>
      <div className="space-y-10"> {/* Adjust spacing as needed */}
        {experienceData.map((experience, index) => (
          <div key={index} className="text-center"> {/* Center the content */}
            <img
              src={experience.logo}
              alt={`${experience.organization} logo`}
              className="mx-auto mb-4 h-16 w-16" // Logo size and positioning
            />
            <h3 className="text-2xl font-medium">
              {experience.title}, {experience.organization}
            </h3>
            <p className="text-sm text-gray-600">{experience.duration}</p>
            <p className="text-lg mt-2">{experience.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;