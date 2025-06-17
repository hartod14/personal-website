export interface Project {
  id: string;
  title: string;
  description: string;
  imageThumbnail: string;
  images: string[];
  techStack: string[];
  detailsLink: string;
  livePreviewLink?: string;
  keyFeatures: string[];
  challengesAndSolutions: string;
}

export const projects: Project[] = [
  {
    id: "plut-umkm",
    title: "PLUT-UMKM",
    description:
      "A web application designed to collect and manage data from UMKM (Micro, Small, and Medium Enterprises) participants in Batam. The platform allows users to fill out detailed forms about their businesses, including personal and business-related information.",
    imageThumbnail: "/portfolio/plut/1.png",
    images: ["/portfolio/plut/1.png", "/portfolio/plut/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/plut-umkm",
    keyFeatures: [
      "Dynamic form system for UMKM participants to register and input business data",
      "Export functionality to generate Excel reports of participant data",
      "Attendance management for training sessions",
    ],
    challengesAndSolutions:
      "Ensuring accurate and complete data storage for each participant without loss or duplication. Designing a user-friendly and intuitive admin panel that can be easily used by elderly or less tech-savvy users, with clear navigation and accessible form layouts.",
  },
  {
    id: "jovaasset",
    title: "JovaAsset",
    description:
      "JovaAsset is a SaaS-based multi-tenant inventory management system designed to help organizations monitor and manage the lifecycle of their assets. Each tenant (organization) operates in an isolated environment with its own data and configuration, ensuring security and scalability across multiple clients. The system provides end-to-end tracking of inventory movement, from receiving and usage to breakage and repairs.",
    imageThumbnail: "/portfolio/jovaasset/1.png",
    images: [
      "/portfolio/jovaasset/1.png",
      "/portfolio/jovaasset/2.png",
      "/portfolio/jovaasset/3.png",
    ],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/jovaasset",
    keyFeatures: [
      "Track the full inventory lifecycle, including receiving, usage, breakage, repair, and disposal",
      "Multi-tenant architecture to support multiple organizations with data isolation",
      "Role-based permissions with approval/rejection workflows for inventory requests",
      "Real-time status updates and activity logs for all inventory actions",
      "Audit trail functionality to ensure accountability",
    ],
    challengesAndSolutions:
      "Ensuring accurate and consistent data handling across tenants while maintaining strong data isolation. Building a permission system that adapts to each tenant's organizational structure and workflow requirements.",
  },
  {
    id: "jovanotaris",
    title: "JovaNotaris",
    description:
      "JovaNotaris is a SaaS-based multi-tenant notary service management system designed to help notary offices streamline the creation, organization, and management of legal documents. Each notary office (tenant) operates within its own isolated environment, allowing multiple clients to use the platform securely and independently.",
    imageThumbnail: "/portfolio/jovanotaris/1.png",
    images: [
      "/portfolio/jovanotaris/1.png",
      "/portfolio/jovanotaris/2.png",
      "/portfolio/jovanotaris/3.png",
    ],
    techStack: ["Laravel", "MySQL", "React"],
    detailsLink: "/projects/jovanotaris",
    keyFeatures: [
      "Generate a variety of notary documents, including notarial deeds, waarmerking (document legalization), PPAT (Land Deed Official) documents, and more",
      "Flexible and customizable worksheet forms tailored to different notary service types",
      "Multi-tenant architecture with data isolation for each notary office",
      "Document tracking and management features for easy access and compliance",
      "Clean, user-friendly interface optimized for daily operational use",
    ],
    challengesAndSolutions:
      "Building a dynamic document system that adapts to the diverse and detailed requirements of various notary services. Ensuring data isolation, security, and compliance across multiple tenants while maintaining system scalability and ease of use. Integrated React components into Blade views and APIs to allow real-time, widget-based form customization (e.g., date pickers, dynamic dropdowns). This hybrid approach enables users to build and manage forms visually while maintaining strong backend validation and storage via Laravel.",
  },
  {
    id: "mazzumultivision",
    title: "Mazzumultivision",
    description:
      'A ticket management system that allows users to purchase tickets online by selecting specific seats or ticket types. Designed and integrated an interactive seat map for user seat selection. Participated in the development of one of the biggest stand-up comedy events "Agak Laen".',
    imageThumbnail: "/portfolio/mazzu/1.png",
    images: ["/portfolio/mazzu/1.png", "/portfolio/mazzu/2.png", "/portfolio/mazzu/3.png", "/portfolio/mazzu/4.png"],
    techStack: ["Laravel", "MySQL", "React", "Midtrans", "QR Code Scanning"],
    detailsLink: "/projects/mazzumultivision",
    keyFeatures: [
      "Event creation with support for various seat configurations",
      "Designed and integrated an interactive seat map for user seat selection",
      "Integrated the Midtrans payment gateway for secure online transactions",
      "Automatically generates PDF tickets and sends them via email after successful transactions",
    ],
    challengesAndSolutions:
      "Developing dynamic event and ticket type forms to make it easier for event organizers to create events, while ensuring users receive the correct tickets they ordered",
  },
  {
    id: "hrsoftware",
    title: "Hrsoftware",
    description:
      "Hrsoftware is a comprehensive manufacturing management system designed to streamline and automate key business operations in the manufacturing sector. Built as a centralized platform, it enables organizations to manage various processes efficiently, from procurement to sales, all within a single interface.",
    imageThumbnail: "/portfolio/hrsoft/1.png",
    images: ["/portfolio/hrsoft/1.png", "/portfolio/hrsoft/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/hrsoftware",
    keyFeatures: [
      "Purchasing and vendor management for raw materials and supplies",
      "Stock and inventory tracking with date-based filtering",
      "Production process management, including work orders and list of materials",
      "Data export functionality",
    ],
    challengesAndSolutions:
      "Ensuring seamless integration across multiple business modules—purchasing, inventory, production, and sales—while maintaining data accuracy. Designing a system that is flexible enough to accommodate various manufacturing workflows and scalable to support business growth. Implementing reliable data tracking based on specific date ranges.",
  },
];
