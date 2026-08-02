// Central content source for Siddhant Singh's portfolio.

export const personalInfo = {
  name: "Siddhant Singh",
  firstName: "Siddhant",
  brandName: "Siddhant Singh",
  title: "Data Analyst | Business Intelligence & AI Analytics",
  location: "Massachusetts, USA",
  phone: "+1 (617) 413-5248",
  emails: {
    primary: "siddhantsid2199@gmail.com",
  },
  summary:
    "Data Analyst with 4 years of experience turning multi-source data into automated reporting and executive insight through SQL, Python, Power BI, Alteryx, semantic models, KPI dashboards, and AI-enabled analytics workflows.",
  resumeUrl: "/Siddhant_Singh_Resume.pdf",
};

export const socialLinks = {
  github: "https://github.com/siddhantsid2199",
  linkedin: "https://www.linkedin.com/in/siddhantsingh21",
  tableau: "https://public.tableau.com/app/profile/siddhant.singh6977",
};

export const heroContent = {
  greeting: "Hi, I'm Siddhant Singh",
  titleHighlight: "Data Analyst @",
  titleCompany: "Viatris",
  subtitle:
    "I turn multi-source data into automated reporting, semantic models, KPI dashboards, and executive insights with SQL, Python, Power BI, and Alteryx.",
  ctaPrimary: { text: "View My Work", href: "#projects" },
  ctaSecondary: {
    text: "Contact Me",
    href: `mailto:${personalInfo.emails.primary}?subject=Portfolio Inquiry&body=Hello Siddhant,%0D%0A%0D%0AI came across your portfolio and would like to connect.%0D%0A%0D%0ABest Regards,`,
  },
  ctaResume: { text: "Download Resume", href: personalInfo.resumeUrl },
};

export const aboutContent = {
  heading: "Hello!",
  bio: `I'm <span class="text-black text-xl font-black mx-1 tracking-wide uppercase">Siddhant Singh</span>, a Data Analyst with 4 years of experience turning multi-source data into automated reporting and executive insight. I build ETL pipelines, semantic models, and KPI dashboards with SQL, Python, Power BI, and Alteryx, while embedding AI and GenAI tools into analytics workflows to accelerate delivery and scale self-service reporting.`,
  techStack: ["Power BI", "Python", "Microsoft Fabric", "SQL", "Alteryx"],
};

export const technicalSkills = {
  categories: [
    {
      title: "Business Intelligence",
      skills: [
        { name: "Power BI", level: 95 },
        { name: "Tableau", level: 90 },
        { name: "DAX", level: 92 },
        { name: "Power Query / M", level: 92 },
        { name: "Semantic Modeling", level: 90 },
        { name: "Row-Level Security", level: 88 },
      ],
    },
    {
      title: "Microsoft Platform",
      skills: [
        { name: "Microsoft Fabric", level: 90 },
        { name: "Power Apps", level: 88 },
        { name: "Power Automate", level: 92 },
        { name: "SharePoint", level: 92 },
        { name: "Copilot Studio", level: 84 },
        { name: "GenAI / LLM Integration", level: 86 },
      ],
    },
    {
      title: "Data Engineering",
      skills: [
        { name: "Python", level: 88 },
        { name: "PySpark", level: 84 },
        { name: "SQL", level: 92 },
        { name: "ETL Pipeline Design", level: 90 },
        { name: "Delta Lake", level: 82 },
      ],
    },
    {
      title: "Cloud & Automation",
      skills: [
        { name: "Azure Data Factory", level: 86 },
        { name: "Azure", level: 84 },
        { name: "Alteryx", level: 92 },
        { name: "Workflow Automation", level: 94 },
        { name: "ETL Pipelines", level: 92 },
      ],
    },
    {
      title: "Analytics & Planning",
      skills: [
        { name: "Microsoft Excel", level: 95 },
        { name: "Power Query", level: 94 },
        { name: "Power Pivot", level: 90 },
        { name: "PivotTables", level: 92 },
        { name: "Simulation Modeling", level: 90 },
        { name: "Data Storytelling", level: 92 },
      ],
    },
    {
      title: "Delivery & Leadership",
      skills: [
        { name: "Stakeholder Management", level: 92 },
        { name: "Process Improvement", level: 94 },
        { name: "Agile Delivery", level: 88 },
        { name: "Scope Control", level: 86 },
        { name: "Schedule Control", level: 88 },
      ],
    },
  ],
};

export const processContent = {
  badge: "How I Work",
  heading: "My Process",
  description:
    "I follow a structured, collaborative, and highly technical approach to turn operational questions into trusted analytics products and automated solutions.",
  cards: [
    {
      number: "01",
      title: "Discover",
      text: "I begin by understanding the business goal, stakeholders, source systems, constraints, and the decisions the solution must support.",
    },
    {
      number: "02",
      title: "Design",
      text: "I define the data model, metrics, workflow, user experience, and delivery architecture before development begins.",
    },
    {
      number: "03",
      title: "Build",
      text: "I create reliable pipelines, semantic models, dashboards, applications, and automations using the right Microsoft and data tools.",
    },
    {
      number: "04",
      title: "Deliver",
      text: "I validate results with users, optimize performance, document the solution, and enable teams to make confident decisions.",
    },
  ],
  endText: "Ready to deliver!",
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
    techTags: ["Power BI", "Microsoft Excel", "Python", "SQL", "Power Query", "M Language", "Claude"],
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
    techTags: ["Python", "Power BI", "Data Modeling", "Power Query", "MCP"],
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
    techTags: ["Power BI", "Microsoft Excel", "Data Modeling", "DAX", "Power Query"],
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
  {
    id: "nyc-violations",
    number: "05",
    badge: "Tableau Analytics",
    title: "NYC Parking & Camera Violations",
    description:
      "An analysis of 2022 New York City parking and camera violations uncovering geographic, temporal, and economic patterns to support targeted enforcement and safer streets.",
    outcomes: ["133,448 cases", "$10.69M total fines", "$80.10 average fine"],
    techTags: ["Tableau", "Python", "Data Analysis", "Geospatial Analytics", "Data Storytelling"],
    image: "/projects/nyc-violations.png",
    documentUrl: "/projects/NYC%20Parking%20and%20Camera%20Violations.pdf",
    showDocumentButton: false,
    links: {
      github: "https://github.com/siddhantsid2199/Exploring-Patterns-in-Parking-and-Camera-Violations-in-NYC",
      demo: "https://public.tableau.com/views/ExploringPatternsinParkingandCameraViolationsinNYC/Dashboard?:language=en-US&:display_count=n&:origin=viz_share_link",
    },
    isFlagship: false,
  },
  {
    id: "alteryx-workflows",
    number: "06",
    badge: "Workflow Automation",
    title: "Alteryx Workflows",
    description:
      "A collection of reusable Alteryx Designer workflows created to solve data preparation, transformation, and analytical problem scenarios through visual automation.",
    outcomes: ["Reusable workflow", "Visual ETL", "Automated preparation"],
    techTags: ["Alteryx", "Alteryx One (Agentic AI)", "ETL", "Data Preparation", "Workflow Design"],
    image: null,
    documentUrl: null,
    links: {
      github: "https://github.com/siddhantsid2199/Alteryx-Workflows-Multiple-Problems-",
    },
    isFlagship: false,
  },
  {
    id: "virtual-vault",
    number: "07",
    badge: "SQL Case Study",
    title: "Virtual Bank",
    description:
      "A four-part SQL case study exploring a digital bank's customer nodes, transactions, balances, growth, and operational metrics to support smarter planning and decision-making.",
    outcomes: ["4-part case study", "Relational datasets", "Business metrics"],
    techTags: ["SQL", "Data Exploration", "Financial Analytics", "Relational Modeling"],
    image: "/projects/neobank-sql.png",
    documentUrl: "/projects/Virtual%20Vault%20SQL%20Analytics.pdf",
    links: {
      github: "https://github.com/siddhantsid2199/Virtual-Vault-SQL-Analytics-for-NeoBank",
    },
    isFlagship: false,
  },
  {
    id: "weekly-issues-power-app",
    number: "08",
    badge: "Power Platform Solution",
    title: "Weekly Issues (Power Apps)",
    description:
      "A tiered Power Platform application for managing utility project entries, combining a Canvas App interface, SharePoint data storage, Power Fx logic, and Power Automate enrichment workflows.",
    outcomes: ["Canvas App UI", "Automated enrichment", "SharePoint backend"],
    techTags: ["SharePoint", "Power Automate", "Power Apps", "Copilot Studio", "Power Fx", "Canvas Apps"],
    image: "/projects/weekly-issues-power-app.png",
    documentUrl: "/projects/Weekly%20Issues%20Power%20App.pdf",
    links: {
      github: "https://github.com/siddhantsid2199/Weekly-Issues-Power-App-",
    },
    isFlagship: false,
  },
  {
    id: "martlytics",
    number: "09",
    badge: "DataMart Exploration",
    title: "Martlytics",
    description:
      "A SQL-driven DataMart exploration examining sales performance and the impact of sustainable supply-chain packaging across the business and its individual market segments.",
    outcomes: ["5-part case study", "Sales performance", "Sustainability analysis"],
    techTags: ["SQL", "Data Cleaning", "Data Exploration", "Data Mart", "Supply Chain Analytics"],
    image: "/projects/martlytics.png",
    documentUrl: "/projects/Martlytics%20DataMart%20Exploration.pdf",
    links: {
      github: "https://github.com/siddhantsid2199/Martlytics-A-DataMart-Exploration-",
    },
    isFlagship: false,
  },
];

export const experienceList = [
  {
    organization: "Viatris Inc.",
    role: "Data Analyst",
    duration: "March 2026 — Present",
    location: "USA",
    highlights: [
      "Developed a simulation model to forecast project timelines and volumes as part of a $1B+ tech-transfer project to minimize regulatory and inventory costs, enabling leadership decisions on risk tradeoffs",
      "Transformed a legacy Excel model into an automated Alteryx workflow integrated with Python simulation and Power BI, cutting manual update time from 6+ hours to under 10 minutes",
      "Improved report performance by 30% for 4 weekly performance metrics by integrating data from SAP S/4HANA, Rapid Response, and Datacube (OLAP) into unified analytics pipelines using Alteryx, Python, SQL, and Power BI",
      "Designed 9+ Power BI dashboards on semantic models in Microsoft Fabric (DAX, Power Query/M) for budget tracking and risk escalation across 4 projects that ranked in the top 3% of dashboards at Viatris",
      "Building a PySpark-based data warehouse on Microsoft Fabric with Azure Data Factory orchestration and Delta Lake medallion architecture, feeding Power BI semantic models and SQL queries",
    ],
  },
  {
    organization: "Viatris Inc.",
    role: "Data Analyst Intern",
    duration: "July 2024 — December 2024",
    location: "USA",
    highlights: [
      "Translated complex business requirements from Senior Directors/VP leadership into detailed technical specifications, configuring automated pipelines, metrics, and executive visuals, accelerating systemwide adoption across 4+ global teams",
      "Enhanced reporting capabilities, designed and optimized 100+ SQL queries and PL/SQL packages, and created Power BI dashboards for Senior Directors and Lead Specialists",
      "Built ETL pipelines and optimized 50+ Alteryx workflows to automate forecast vs. actual variance analysis, feeding Power BI executive dashboards and cutting reporting cycle time by 28%",
      "Delivered a solution using Power Apps, SharePoint, and Dataverse integrating multiple reports using Power Automate to capture and submit operational data, integrated with Microsoft Copilot Studio agent, adopted by 5 Lead Specialists",
      "Streamlined reporting with Power Automate workflows on SharePoint lists to de-duplicate multi-value fields, append version-controlled comments, and automate ad-hoc report summaries and emails, reducing manual tasks by 24%",
      "Owned 4 Excel simulation tools leveraging Power Query, Power Pivot, DAX measures, what-if scenario modeling, dynamic array formulas, and nested SUMIFS/VLOOKUP logic, adopted by 40 planners across 10 sites",
    ],
  },
  {
    organization: "Northeastern University",
    role: "Teaching & Research Assistant",
    duration: "September 2025 — December 2025",
    location: "USA",
    highlights: [
      "Guided 90+ students on Power BI dashboards, narrative visualization design, leveraging GenAI tools (Copilot in Power BI, LLM-drafted DAX, MCP) to deliver rubric-aligned feedback grounded in data-storytelling principles and BI design",
    ],
  },
  {
    organization: "Habtec Tubes Industry",
    role: "Data Analyst",
    duration: "October 2020 — July 2023",
    location: "India",
    highlights: [
      "Initiated end-to-end development of 8+ Tableau dashboards tracking yield, WIP, and logistics KPIs and material usage trends, identifying operational bottlenecks and delivering actionable insights that improved logistics efficiency by 20%",
      "Supported Integrated Business Planning (IBP) and sourcing initiatives by analyzing sales forecasts, production capacity, and supplier performance data, applying Lean Six Sigma methodologies to improve planning accuracy",
      "Pioneered a logistics optimization approach with SQL for procurement and production teams, processing 15M+ records to group similar orders and prioritize delivery dates, cutting analysis time by 25%",
      "Led a high-performing analytics team of 5 through Agile sprint cycles, coordinating deliverables, resolving blockers, and ensuring on-time delivery of enterprise BI assets across global time zones",
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
    "Business Intelligence & AI Analytics",
    "SQL · Python · Power BI · Alteryx",
    "Data-driven insights for decisions",
  ],
  credential: "MS Data Analytics Engineering · GPA 4.0",
  copyright: `© ${new Date().getFullYear()} Siddhant Singh | Built with React`,
};

export const emailjsConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_EMAILJS_SERVICE_ID",
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_EMAILJS_TEMPLATE_ID",
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_EMAILJS_PUBLIC_KEY",
};
