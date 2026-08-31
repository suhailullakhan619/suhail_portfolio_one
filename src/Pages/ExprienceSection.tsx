import type { ExperienceItemType } from "../ui/ExprienceSection/work-experience";
import { WorkExperience } from "../ui/ExprienceSection/work-experience";
import mobil80Logo from '../assets/mobil80Image.png'
import prinstonLogo from '../assets/PrinstonSmartEngineerLogo.png'
const WORK_EXPERIENCE: ExperienceItemType[] = [
  {
    id: "mobil80",
    companyName: "Mobil80 Solutions and Services Pvt. Ltd.",
    companyLogo: mobil80Logo,
    companyUrl: "https://www.mobil80.com/",// add logo if you have
    positions: [
      {
        id: "mobil80-fullstack",
        title: "Full Stack Developer",
        employmentPeriod: "Dec 2025 — Present",
        employmentType: "Full-time",
        icon: "code",
        description: `• Built and maintained enterprise platforms including EZTRAK, QR Portal, and EZTRAK-BMS using React.js and Vue.js for a Singapore-based client, delivering real-time asset tracking and business workflow management — now live on iOS, Android, and web.

• Engineered AWS serverless backend services with Lambda, API Gateway, DynamoDB, Cognito, S3, and AppSync, integrating GraphQL and REST APIs to support secure, scalable, and data-driven applications.

• Designed responsive, reusable UI components with Vue.js, Tailwind CSS, and Vuetify, implementing Role-Based Access Control (RBAC), protected routes, and modern state management to enhance security and user experience.

• Optimized application performance through efficient state management, geolocation-based features, and map integrations, while collaborating across frontend, backend, and cloud teams following modern development best practices.`,
        skills: [
          "React.js",
          "Vue.js",
          "Node.js",
          "AWS Serverless (Lambda, API Gateway, DynamoDB, Cognito, S3, AppSync)",
          "GraphQL & REST APIs",
          "RBAC & Authentication",
          "Tailwind CSS & Vuetify",
          "State Management",
          "Performance Optimization",
          "Git & GitHub",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "prinston",
    companyName: "Prinston Smart Engineers",
    companyLogo: prinstonLogo,
    companyUrl: "https://prinstonsmart.com/",
    positions: [
      {
        id: "prinston-intern",
        title: "Fullstack Web Developer (Intern)",
        employmentPeriod: "Feb 2025 — Jun 2025",
        employmentType: "Internship",
        icon: "code",
        description: `• Developed responsive web applications using React.js and Tailwind CSS, ensuring UI consistency and cross-device compatibility.

• Managed server state using TanStack Query, optimizing API data fetching and reducing redundant network requests by ~25%.

• Built reusable UI components to improve development speed and maintain consistency across multiple modules.`,
        skills: [
          "React.js",
          "Tailwind CSS",
          "TanStack Query",
          "JavaScript",
          "Component Design",
          "API Integration",
        ],
      },
    ],
    isCurrentEmployer: false,
  },
];

export default function WorkExperienceSection() {
  return (
    <>

      <section id="experience" className=" bg-black w-full pt-6 pb-b ">
        <h2 className="text-3xl md:text-4xl font-bold text-white bg-black  pb-6 text-center w-full">
          EXPERIENCE
        </h2>
        <div className="flex items-center justify-center p-4  md:p-8">
          <WorkExperience
            className=" w-full sm:w-4/5  rounded-lg border"
            experiences={WORK_EXPERIENCE}
          />
        </div>
      </section>
    </>
  );
}
