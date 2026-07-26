// Central content source for Siddhant Singh's portfolio.

export const personalInfo = {
  name: "Siddhant Singh",
  firstName: "Siddhant",
  brandName: "Siddhant Singh",
  title: "Business Applications Developer & Senior Data Analyst",
  location: "Massachusetts, USA",
  phone: "+1 (617) 413-5248",
  emails: {
    primary: "singh.siddhant2@northeastern.edu",
  },
  summary:
    "Business applications developer and senior data analyst specializing in Power BI, Microsoft Fabric, Power Platform, SharePoint, workflow automation, and data-driven operational transformation.",
  resumeUrl: "/Siddhant_Singh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/siddhantsid2199",
  linkedin: "https://www.linkedin.com/in/siddhantsingh21",
  tableau: "https://public.tableau.com/app/profile/siddhant.singh6977",
};

export const heroContent = {
  greeting: "Hi, I'm Siddhant Singh",
  titleHighlight: "Business Applications Developer",
  subtitle:
    "I build intelligent analytics products, automated workflows, and decision-ready business applications with Power BI, Microsoft Fabric, and Power Platform.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: `mailto:${personalInfo.emails.primary}?subject=Portfolio Inquiry&body=Hello Siddhant,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ABest Regards,`,
  },
  ctaResume: { text: "Download Resume", href: personalInfo.resumeUrl },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Siddhant Singh</span>, a business applications developer and senior data analyst who turns complex operational data into scalable analytics products, automated workflows, and clear executive decisions. My work spans Power BI, Microsoft Fabric, Power Platform, SharePoint, Python, SQL, and enterprise process improvement.`,
  techStack: ["Power BI", "Microsoft Fabric", "Power Platform"],
};

export const technicalSkills = {
  categories: [
    {
      title: "Business Intelligence",
      skills: ["Power BI", "DAX", "Power Query / M", "Semantic Modeling", "Row-Level Security"],
    },
    {
      title: "Microsoft Platform",
      skills: ["Microsoft Fabric", "Power Apps", "Power Automate", "SharePoint", "Copilot Studio"],
    },
    {
      title: "Data Engineering",
      skills: ["Python", "PySpark", "SQL", "ETL Pipeline Design", "Delta Lake"],
    },
    {
      title: "Cloud & Automation",
      skills: ["Azure Data Factory", "Azure", "Alteryx", "Workflow Automation", "MySQL"],
    },
    {
      title: "Analytics & Planning",
      skills: ["Excel", "Power Query", "PivotTables", "Simulation Modeling", "Data Storytelling"],
    },
    {
      title: "Delivery & Leadership",
      skills: ["Stakeholder Management", "Process Improvement", "Agile Delivery", "Scope Control", "Schedule Control"],
    },
  ],
};

export const projects = [
  {
    id: "population-health",
    number: "01",
    badge: "Featured Analytics Project",
    title: "Population Health Analysis",
    description:
      "A three-page population health analytics experience synthesizing 55,500 patient admissions across nine hospitals. It reveals length-of-stay drivers, cost concentration, admission patterns, patient demographics, medication usage, and condition-level trends for data-driven planning.",
    outcomes: ["55,500 admissions", "9 hospitals", "$25,539 average bill"],
    techTags: ["Power BI", "Excel", "Python", "SQL", "Claude"],
    image: "/projects/population-health.png",
    documentUrl: "/projects/Population%20Health%20Analysis.pdf",
    links: {
      github: "https://github.com/siddhantsid2199/Population-Health-Analytics",
    },
    isFlagship: true,
  },
  {
    id: "logistics-performance",
    number: "02",
    badge: "Supply Chain Analytics",
    title: "Logistics Performance Analysis",
    description:
      "An end-to-end logistics dashboard evaluating on-time delivery, cutoff compliance, route efficiency, processing time, distance, and delivery performance to expose bottlenecks across the supply-chain network.",
    outcomes: ["15K shipments", "83.54% on time", "33.72M distance covered"],
    techTags: ["Python", "Power BI", "Data Modeling", "Power Query"],
    image: "/projects/logistics-performance.png",
    documentUrl: "/projects/Logistics%20Performance%20Analysis.pdf",
    links: {
      github: "https://github.com/siddhantsid2199/Logistics-Performance-Analysis",
    },
    isFlagship: false,
  },
  {
    id: "workforce-analytics",
    number: "03",
    badge: "People Analytics",
    title: "Meet the Workforce — HR Analytics",
    description:
      "A three-page workforce intelligence report covering employee demographics, salary, attrition, termination reasons, departmental composition, and employee-level drilldowns for a 750-person organization.",
    outcomes: ["750 employees", "$68K average salary", "3 report views"],
    techTags: ["Power BI", "Data Modeling", "DAX", "Power Query"],
    image: "/projects/hr-analytics.png",
    documentUrl: "/projects/Meet%20the%20Workforce-%20HR%20Analytics.pdf",
    links: {},
    isFlagship: false,
  },
  {
    id: "supply-chain",
    number: "04",
    badge: "Operational Intelligence",
    title: "Supply Chain Management",
    description:
      "A four-page operational analytics report connecting supplier efficiency, manufacturing quality, inventory health, logistics, sales, and customer performance in one cohesive decision-support experience.",
    outcomes: ["4,922 ordered units", "92.07% production efficiency", "4 report views"],
    techTags: ["Power BI", "Supply Chain Analytics", "DAX", "Power Query"],
    image: "/projects/supply-chain.png",
    documentUrl: "/projects/Supply%20Chain%20Management.pdf",
    links: {},
    isFlagship: false,
  },
];

export const experienceList = [
  {
    organization: "Viatris Inc.",
    role: "Senior Data Analyst",
    duration: "March 2026 — Present",
    location: "USA",
    highlights: [
      "Built a SharePoint site and Power Apps application for 40+ users, feeding a Power BI-powered weekly operational review.",
      "Automated SharePoint workflows and reporting with Power Automate, reducing repetitive manual tasks by 24%.",
      "Designed 5+ Power BI dashboards on Microsoft Fabric semantic models for three major technology-transfer projects.",
      "Developed a Copilot Studio agent adopted by five senior directors and a PySpark/Fabric mini data warehouse using ADF and Delta Lake.",
    ],
  },
  {
    organization: "Northeastern University",
    role: "Teaching & Research Assistant",
    duration: "September 2025 — December 2025",
    location: "USA",
    highlights: [
      "Guided 90+ students in Power BI, narrative visualization, data storytelling, and GenAI-assisted analytics.",
      "Delivered rubric-aligned feedback using Copilot in Power BI, LLM-assisted DAX, and modern analytics workflows.",
    ],
  },
  {
    organization: "Viatris Inc.",
    role: "Data Analyst Intern",
    duration: "July 2024 — December 2024",
    location: "USA",
    highlights: [
      "Developed forecasting simulations for a $1B+ technology-transfer program.",
      "Replaced a legacy Excel process with Alteryx, Python, and Power BI, reducing update time from 6+ hours to under 10 minutes.",
      "Built simulation tools for 40+ planners across ten sites and Power BI dashboards ranked in Viatris' top 3%.",
    ],
  },
  {
    organization: "Habtec Tubes Industry",
    role: "Data Analyst",
    duration: "October 2020 — July 2023",
    location: "India",
    highlights: [
      "Built 8+ Power BI dashboards for yield, WIP, logistics, and material usage, improving logistics efficiency by 20%.",
      "Processed 15M+ records with SQL to optimize order grouping and delivery prioritization, reducing analysis time by 25%.",
      "Led a five-person analytics team through Agile delivery across global time zones.",
    ],
  },
];

export const education = {
  degree: "Master of Science, Data Analytics Engineering",
  institution: "Northeastern University",
  location: "Massachusetts",
  dates: "September 2023 — December 2025",
  gpa: "4.0 / 4.0",
};

export const certificates = {
  featured: [
    {
      name: "Microsoft Certified: Power BI Data Analyst Associate",
      issuer: "Microsoft",
      detail: "Earned July 19, 2025 · Expires July 19, 2026",
      icon: "▦",
      fileUrl: "/certificates/Power%20BI%20Data%20Analyst-%20Siddhant%20Singh.pdf",
      verifyUrl: "https://learn.microsoft.com/api/credentials/share/en-us/SiddhantSingh-2382/E74BDCF6C35E7198?sharingId=7BE7648116D63CD1",
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      detail: "Issued July 12, 2025 · Expires July 12, 2028",
      icon: "☁",
      fileUrl: "/certificates/AWS%20Certified%20Cloud%20Practitioner%20certificate.pdf",
      verifyUrl: "https://aws.amazon.com/verification",
    },
    {
      name: "Databricks Fundamentals Accreditation",
      issuer: "Databricks",
      detail: "Completed August 7, 2025",
      icon: "◇",
      fileUrl: "/certificates/Databricks_Fundamentals.pdf",
      verifyUrl: "https://credentials.databricks.com/32745114-fe58-4372-916b-cc61fa236534#acc.mgcCFQGe",
    },
    {
      name: "Designer Core: Data Manipulation",
      issuer: "Alteryx",
      detail: "Issued October 16, 2024 · Expires October 16, 2026",
      icon: "A",
      fileUrl: "/certificates/Alteryx.pdf",
    },
  ],
};

export const footerContent = {
  taglines: [
    "Business Applications & Analytics",
    "Power BI · Fabric · Power Platform",
    "Automation that drives decisions",
  ],
  credential: "MS Data Analytics Engineering · GPA 4.0",
  copyright: `© ${new Date().getFullYear()} Siddhant Singh | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
