// Single source of truth for portfolio content.
// Everything here comes from the original site or the public GitHub repos
// linked below — edit this file to update copy without touching components.

import cyberImg from "../assets/project-cyberprotections.webp";
import templeImg from "../assets/project-templetrust.webp";

export const profile = {
  name: "Siddhesh Sarfare",
  firstName: "Siddhesh",
  role: "Frontend Web Developer",
  intro:
    "Hi, I'm Siddhesh, a front-end web developer. I work on projects to create intuitive and engaging experiences.",
  email: "siddhesh.sarfare2001@gmail.com",
};

export const socials = [
  { label: "GitHub", handle: "Siddhesh-Sarfare", href: "https://github.com/Siddhesh-Sarfare", icon: "github" },
  { label: "X (Twitter)", handle: "@Siddheshsarfar2", href: "https://x.com/Siddheshsarfar2", icon: "x" },
];

export const navLinks = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export const about = {
  paragraphs: [
    "I build websites end to end — from the interface people see to the content tools that keep them running.",
    "My recent work includes Laravel-powered sites with admin dashboards for managing news, galleries and events, and the React front end of this portfolio. Before that I tinkered with IoT, wiring ESP8266 boards to stream live sensor data to the web.",
  ],
  audiences: ["Startups", "Trusts", "Marketing teams", "Agencies"],
};

export const featuredProjects = [
  {
    id: "cyberprotections",
    title: "CyberProtections",
    kind: "Awareness platform",
    summary:
      "A cybersecurity awareness website that helps people understand and protect themselves from cybercrime.",
    highlights: [
      "Public pages for resources, news, blogs, FAQs, a gallery and a grievances section",
      "Role-based admin panel to manage news, blogs, FAQs, gallery, sliders and SEO",
      "Contact form backed by Laravel, with rate-limited public routes",
    ],
    stack: ["Laravel 8", "PHP", "Blade", "SCSS", "JavaScript"],
    image: cyberImg,
    imageAlt: "CyberProtections home page with a 'Do you know?' cybersecurity statistic and an illustrated server with a shield",
    source: "https://github.com/Siddhesh-Sarfare/cyber-protections",
  },
  {
    id: "templetrust",
    title: "TempleTrust",
    kind: "Devotional website",
    summary:
      "A Marathi-language website for a devotional trust, presenting its purpose, programmes and gallery to devotees.",
    highlights: [
      "Fully Marathi public site with introduction, programmes, gallery and contact pages",
      "Admin dashboard to manage sliders, gallery, trustees and programmes",
      "Dedicated screen-reader page alongside the main navigation",
    ],
    stack: ["Laravel 8", "PHP", "Blade", "SCSS", "JavaScript"],
    image: templeImg,
    imageAlt: "TempleTrust 'Prastavana' page in Marathi with a temple banner and an aarti photograph",
    source: "https://github.com/Siddhesh-Sarfare/TempleTrust",
  },
];

export const otherProjects = [
  {
    id: "iot-thingspeak",
    title: "IoT Weather Station",
    summary:
      "A NodeMCU ESP8266 weather station that publishes live sensor readings to a ThingSpeak channel.",
    stack: ["Arduino (C++)", "ESP8266", "ThingSpeak"],
    icon: "cloud",
    source: "https://github.com/Siddhesh-Sarfare/IOT-Weather-Station-Thingspeak",
  },
  {
    id: "iot-web",
    title: "Web-hosted Weather Station",
    summary:
      "The ESP8266 posts temperature and humidity to a PHP + MySQL backend with CRUD endpoints and an HTML dashboard.",
    stack: ["PHP", "MySQL", "HTML", "Arduino (C++)"],
    icon: "chip",
    source: "https://github.com/Siddhesh-Sarfare/IOT-website-hosted-weather-station",
  },
  {
    id: "portfolio",
    title: "This portfolio",
    summary:
      "The site you're on — a responsive single-page React app with a token-based theme, light/dark modes and accessible navigation.",
    stack: ["React", "Tailwind CSS", "GitHub Pages"],
    icon: "code",
    source: "https://github.com/Siddhesh-Sarfare/Portfolio",
  },
];

// Grouped by where each tool has actually been used, rather than self-rated levels.
export const skillGroups = [
  {
    title: "Frontend",
    icon: "layout",
    items: [
      { name: "React", usedIn: "Portfolio" },
      { name: "JavaScript", usedIn: "All web projects" },
      { name: "HTML", usedIn: "All web projects" },
      { name: "CSS / SCSS", usedIn: "CyberProtections, TempleTrust" },
      { name: "Tailwind CSS", usedIn: "Portfolio" },
    ],
  },
  {
    title: "Backend",
    icon: "server",
    items: [
      { name: "Laravel", usedIn: "CyberProtections, TempleTrust" },
      { name: "PHP", usedIn: "Laravel apps, weather station" },
      { name: "Blade templates", usedIn: "CyberProtections, TempleTrust" },
      { name: "MySQL", usedIn: "Web-hosted weather station" },
    ],
  },
  {
    title: "IoT & hardware",
    icon: "chip",
    items: [
      { name: "Arduino (C++)", usedIn: "Weather stations" },
      { name: "ESP8266 / NodeMCU", usedIn: "Weather stations" },
      { name: "ThingSpeak", usedIn: "IoT Weather Station" },
    ],
  },
  {
    title: "Workflow",
    icon: "git",
    items: [
      { name: "Git & GitHub", usedIn: "Every project" },
      { name: "GitHub Pages", usedIn: "Portfolio deployment" },
    ],
  },
];
