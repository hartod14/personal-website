export interface Project {
  id: string;
  title: string;
  description: string;
  imageThumbnail: string;
  images: string[];
  techStack: string[];
  detailsLink: string;
  livePreviewLink?: string;
  link?: string;
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
    link: "",
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
    link: "https://jovaasset.com",
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
    link: "",
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
    images: [
      "/portfolio/mazzu/1.png",
      "/portfolio/mazzu/2.png",
      "/portfolio/mazzu/3.png",
      "/portfolio/mazzu/4.png",
    ],
    techStack: ["Laravel", "MySQL", "React", "Midtrans", "QR Code Scanning"],
    detailsLink: "/projects/mazzumultivision",
    link: "",
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
    link: "",
    keyFeatures: [
      "Purchasing and vendor management for raw materials and supplies",
      "Stock and inventory tracking with date-based filtering",
      "Production process management, including work orders and list of materials",
      "Data export functionality",
    ],
    challengesAndSolutions:
      "Ensuring seamless integration across multiple business modules—purchasing, inventory, production, and sales—while maintaining data accuracy. Designing a system that is flexible enough to accommodate various manufacturing workflows and scalable to support business growth. Implementing reliable data tracking based on specific date ranges.",
  },
  {
    id: "jovaresto",
    title: "JovaResto",
    description:
      "JovaResto is Point of Sale (POS) system specifically designed for restaurants. It supports multi-tenancy, enabling different restaurants (tenants) to operate independently within the same system. Each tenant can manage its own menu, staff, transactions, and configurations without interfering with others.",
    imageThumbnail: "/portfolio/jovaresto/1.png",
    images: ["/portfolio/jovaresto/1.png", "/portfolio/jovaresto/2.png"],
    techStack: ["Golang", "GraphQL", "MySQL"],
    detailsLink: "/projects/jovaresto",
    link: "https://jovaresto.com",
    keyFeatures: [
      "Multi-tenant architecture",
      "Order and transaction management",
      "Offline support service",
      "Customizable menu and user roles",
    ],
    challengesAndSolutions:
      "My main contribution to the JovaResto project was developing the Superadmin Dashboard, which serves as the central control panel for managing the entire platform. I implemented core features such as tenant management, allowing superadmins to create, update, and suspend restaurant tenants. Additionally, I worked on integrating system-level settings and monitoring tools to give administrators better visibility and control over the application. Throughout the project, I also supported the main backend engineer by assisting with core logic development and debugging tasks, ensuring smooth and stable system",
  },
  {
    id: "stayza",
    title: "Stayza",
    description:
      "Stayza is a full-stack property rental web application developed as part of a bootcamp project. The platform connects property owners with renters, enabling a seamless process for listing, discovering, booking, and managing rental properties. Designed with scalability and user experience in mind, Stayza simulates a real-world rental platform similar to Booking.com.",
    imageThumbnail: "/portfolio/stayza/1.png",
    images: ["/portfolio/stayza/1.png", "/portfolio/stayza/2.png", "/portfolio/stayza/3.png", "/portfolio/stayza/4.png"],
    techStack: [
      "Next.js",
      "Express.js",
      "PostgreSQL",
      "Cloudinary",
      "Vercel",
      "Midtrans",
    ],
    detailsLink: "/projects/stayza",
    link: "https://stayza-renting-property.vercel.app/",
    keyFeatures: [
      "Developed full-stack web application that allows users to search, book, and rent properties",
      "Created system for property owners (tenants) to list, manage, and monitor their properties",
      "Implemented payment gateway to handle online transactions",
      "Customizable menu and user roles",
    ],
    challengesAndSolutions:
      "One of the key challenges in developing Stayza was designing a clean and user-friendly UI/UX that remained fully responsive across various devices. Implementing efficient image upload functionality using Cloudinary's API and integrating it seamlessly into the property listing form was also a critical task. Additionally, integrating the Midtrans payment gateway required careful handling to ensure secure and smooth online transactions, including managing transaction status updates and fallback scenarios. On the backend, I focused on building a well-structured relational database schema using PostgreSQL to support complex relationships between users, properties, bookings, and payments. Finally, I managed deployment and environment configurations for both the frontend and backend, leveraging Vercel and other cloud-based tools to ensure a smooth and stable production environment.",
  },
  {
    id: "roxitgym",
    title: "RoxitGYM",
    description:
      "RoxitGYM is a gym management system developed for a specific fitness center. The platform streamlines various gym operations, including attendance tracking, class bookings, staff management, and member interactions, both through the web and mobile interface.",
    imageThumbnail: "/portfolio/roxitgym/1.png",
    images: ["/portfolio/roxitgym/1.png","/portfolio/roxitgym/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/roxitgym",
    link: "https://roxit.co.id",
    keyFeatures: [
      "Integrated with gate camera systems to automatically detect and log member check-ins.",
      "Handles transactions, staff administration, member records, and scheduling data.",
      "Allows members to book personal training sessions, instructors, and fitness classes via their mobile devices.",
      "Staff (PTs and instructors) and members can manage their schedules and accounts directly through the mobile platform.",
    ],
    challengesAndSolutions:
      "I supported the core developer by refactoring and maintaining legacy code to improve overall system performance and readability. I also contributed to the development of several new features within the admin panel, helping enhance administrative workflows and feature accessibility.",
  },
  {
    id: "stiab",
    title: "STIAB Bodhidharma",
    description:
      "This project involved developing individual admin panels as Content Management Systems (CMS) for the official website of STIAB Bodhidharma, a Buddhist college, along with its various sub-websites. Each site — including the main landing page and more than 5 sub-sites such as Prodi (Study Programs), BEM (Student Council), and UPM (Quality Assurance Unit) — has its own dedicated backend for managing its specific content.",
    imageThumbnail: "/portfolio/stiab/1.png",
    images: ["/portfolio/stiab/1.png", "/portfolio/stiab/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/stiab",
    link: "https://stab-bodhidharma.ac.id/id",
    keyFeatures: [
      "Built separate admin panels for each website, allowing administrators to manage content independently.",
      "Implemented CRUD functionality for master data such as banners, news, announcements, public information, and other dynamic content.",
      "Each CMS is tailored to the needs of its respective department or organization, ensuring flexibility and ease of use for admins.",
    ],
    challengesAndSolutions:
      "A major challenge was ensuring consistency and scalability while building and maintaining multiple admin panels with similar structures but different content needs. I had to ensure API reliability and performance for each site, with secure data access and optimized query handling. Managing authentication, access control, and preventing cross-site data interference were also key focuses throughout the development process.",
  },
  {
    id: "undangbahagia",
    title: "UndangBahagia",
    description:
      "UndangBahagia is a digital wedding invitation platform that allows users to create personalized and interactive wedding invitations. The platform is designed to be user-friendly and visually engaging, combining elegant design with seamless functionality.",
    imageThumbnail: "/portfolio/undangbahagia/1.png",
    images: ["/portfolio/undangbahagia/1.png","/portfolio/undangbahagia/2.png","/portfolio/undangbahagia/3.png"],
    techStack: ["Next.js", "Golang", "VPS", "Docker", "MySQL", "Figma"],
    detailsLink: "/projects/undangbahagia",
    link: "https://undangbahagia.com",
    keyFeatures: [
      "Users can create their own wedding invitations by entering relevant details such as bride and groom names, date, location, and event timeline.",
      "Features interactive animations and smooth transitions to enhance the overall user experience.",
      "Responsive design ensures the invitations look great on both desktop and mobile devices.",
      "Custom invitations can be shared via URL, eliminating the need for physical cards.",
    ],
    challengesAndSolutions:
      "One of the main challenges was designing and building visually creative and diverse invitation templates while keeping performance and responsiveness in mind. I focused primarily on UI/UX design, crafting intuitive and beautiful interfaces using Figma. Additionally, I contributed to creating the ERD and defining the business flow, ensuring smooth integration between user inputs, frontend rendering, and backend data management. I also occasionally supported both frontend and backend developers during implementation, helping with styling, data structure planning, and user interaction logic.",
  },
  {
    id: "grhamanggala",
    title: "GrhaManggala",
    description:
      "GrhaManggala is a content management system (CMS) and mobile-supported platform developed for a Vihara's company profile and religious activities. The system includes a web-based admin panel and a mobile application that allows users to register for events and track their attendance at temple activities.",
    imageThumbnail: "/portfolio/grhamanggala/1.png",
    images: ["/portfolio/grhamanggala/1.png","/portfolio/grhamanggala/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/grhamanggala",
    link: "https://www.grhabuddhamanggala.or.id/",
    keyFeatures: [
      "Users can register for religious events and community activities through the mobile app.",
      "Admins can manage events, content, and users through a web-based panel with full CRUD functionality.",
      "Allows admins to monitor participant activity and attendance via the backend",
    ],
    challengesAndSolutions:
      "One of the main challenges was designing a backend structure that could support both the web admin panel and mobile app consistently and securely. I focused on building clean and scalable APIs, managing authentication logic, and ensuring data integrity across both platforms. I also contributed to structuring the admin panel with intuitive CRUD features to streamline content and event management for temple administrators.",
  },
  {
    id: "kalamkudus",
    title: "Kalam Kudus",
    description:
      "Kalam Kudus is a web-based Content Management System (CMS) developed for a school to manage and display its profile, announcements, and general information. The platform provides an admin panel that allows the school staff to easily update content on the school's official landing page.",
    imageThumbnail: "/portfolio/kalamkudus/1.png",
    images: ["/portfolio/kalamkudus/1.png","/portfolio/kalamkudus/2.png"],
    techStack: ["Laravel", "MySQL"],
    detailsLink: "/projects/kalamkudus",
    link: "https://www.skkk2batam.sch.id/",
    keyFeatures: [
      "Enables administrators to manage various content sections such as banners, news, announcements, vision & mission, and other informational content.",
    ],
    challengesAndSolutions:
      "A key challenge was designing a CMS that was both powerful and simple enough for school staff to use efficiently. I focused on creating a user-friendly backend interface, implementing role-based access control, and ensuring that the content management flow was intuitive and reliable. Additionally, I optimized the backend to ensure fast data retrieval and a smooth content publishing experience.",
  },
];
