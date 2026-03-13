import {
  Github,
  Linkedin,
  ExternalLink,
  Mail,
  MapPin,
  Code2,
  Database,
  Server,
  Wrench,
  Bug,
  Globe,
  Zap,
  CreditCard,
  Smartphone,
  Layout,
  Star,
  Quote,
} from 'lucide-react';

import { FaInstagram } from 'react-icons/fa';
import { SiFiverr } from 'react-icons/si';

/* ============================================================
   All portfolio content lives here – edit once, used everywhere.
   ============================================================ */

// ── Navigation ──────────────────────────────────────────────
export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

// ── Hero ────────────────────────────────────────────────────
export const hero = {
  greeting: "Hello, I'm",
  name: 'Ajaypal Singh',
  title: 'Full Stack Developer',
  highlight: 'MERN Stack',
  bio: 'I build modern, scalable web applications with clean code and pixel-perfect designs. Specializing in React, Node.js, and MongoDB — turning ideas into performant digital experiences.',
  resumeUrl: '/Ajaypal_Singh_Resume.pdf',
  socials: [
    { icon: Github, label: 'GitHub', url: 'https://github.com/' },
    { icon: Linkedin, label: 'LinkedIn', url: 'https://linkedin.com/in/' },
    { icon: SiFiverr, label: 'Fiverr', url: 'https://fiverr.com/' },
    { icon: FaInstagram, label: 'Instagram', url: 'https://instagram.com/_ajaypal_singh_' },
  ],
};

// ── About ───────────────────────────────────────────────────
export const about = {
  headline: 'About Me',
  summary:
    "I'm a passionate Full Stack Developer with expertise in the MERN stack. I love crafting seamless user experiences backed by robust server-side logic. From concept to deployment, I handle the full development lifecycle with an eye for detail and a drive for performance.",
  journey:
    'My journey into web development started with a curiosity about how websites work. That curiosity quickly evolved into a deep passion for building real-world applications that solve problems. Over the years, I have honed my skills across React.js, Node.js, Express.js, and MongoDB, delivering production-ready projects for clients around the globe.',
  objective:
    'I aim to leverage my technical expertise and problem-solving abilities to create impactful digital solutions. Whether it\'s a startup MVP or an enterprise-grade platform, I bring dedication, clean architecture, and a user-first mindset to every project.',
  problemSolving:
    'I thrive on debugging complex issues and optimizing performance. Clients often bring me challenging bugs and legacy code — and I enjoy untangling them into clean, maintainable solutions.',
};

// ── Skills ──────────────────────────────────────────────────
export const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    color: '#3F4F44', // Olive Green
    skills: [
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 80 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: '#3F4F44',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 88 },
    ],
  },
  {
    title: 'Database',
    icon: Database,
    color: '#3F4F44',
    skills: [
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase', level: 75 },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: '#3F4F44',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 },
      { name: 'Postman', level: 80 },
      { name: 'Razorpay', level: 75 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

// ── Projects ────────────────────────────────────────────────
export const projects = [
  {
    id: 1,
    title: 'Khammaghani Food Delivery',
    description:
      'A full-featured MERN stack food delivery platform with restaurant listings, cart management, order tracking, and Razorpay payment integration.',
    image: null,
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Razorpay'],
    category: 'Full Stack',
    liveUrl: 'https://Khammaghani.online',
    githubUrl: 'https://github.com/Ajaypal110/KhammaGhani',
  },
  {
    id: 4,
    title: 'Wanderlust - Accommodation Listing',
    description:
      'A full-stack accommodation listing platform allowing users to explore, create, and review property listings globally. Features secure authentication and modern UI.',
    image: null,
    tags: ['Node.js', 'Express', 'MongoDB', 'EJS', 'Bootstrap'],
    category: 'Full Stack',
    liveUrl: 'https://wanderlust-4mjx.onrender.com/',
    githubUrl: 'https://github.com/Ajaypal110/Wanderlust',
  },
];

export const projectCategories = ['All', 'Full Stack', 'Frontend', 'Backend'];

// ── Experience ──────────────────────────────────────────────
export const experiences = [
  {
    role: 'Freelance Full Stack Developer',
    company: 'Self-Employed',
    period: '2023 – Present',
    points: [
      'Built and deployed full-stack MERN applications for diverse clients globally.',
      'Specialized in bug fixing and debugging complex codebases to deliver rapid solutions.',
      'Optimized website performance, achieving 40%+ faster load times on client projects.',
      'Integrated third-party APIs and payment gateways (Razorpay) into production applications.',
      'Delivered responsive, mobile-first designs with Tailwind CSS and Framer Motion.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Freelance Projects',
    period: '2022 – 2023',
    points: [
      'Developed custom websites for small businesses and startups.',
      'Implemented SEO best practices to improve client visibility.',
      'Created reusable component libraries and design systems.',
      'Collaborated with designers and clients to translate mockups into pixel-perfect UIs.',
    ],
  },
];

// ── Services ────────────────────────────────────────────────
export const services = [
  {
    icon: Layout,
    title: 'MERN Stack Development',
    description:
      'End-to-end web application development using MongoDB, Express.js, React.js, and Node.js with clean architecture.',
  },
  {
    icon: Bug,
    title: 'Bug Fixing',
    description:
      'Fast and reliable debugging of web applications. I find and fix complex issues others leave behind.',
  },
  {
    icon: Zap,
    title: 'Website Optimization',
    description:
      'Performance auditing and optimization — faster load times, better Core Web Vitals, and smoother UX.',
  },
  {
    icon: Server,
    title: 'API Integration',
    description:
      'Seamless integration of third-party APIs, webhooks, and microservices into your existing applications.',
  },
  {
    icon: CreditCard,
    title: 'Payment Gateway Integration',
    description:
      'Secure payment processing with Razorpay, Stripe, and other payment providers for your e-commerce needs.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Web Development',
    description:
      'Mobile-first, fully responsive websites that look stunning on every device and screen size.',
  },
];

// ── Testimonials ────────────────────────────────────────────
export const testimonials = [
  {
    name: 'Rahul Sharma',
    role: 'Startup Founder',
    content:
      'Ajaypal delivered our food delivery platform ahead of schedule. His attention to detail and problem-solving skills are exceptional. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Priya Patel',
    role: 'E-commerce Business Owner',
    content:
      'He fixed critical bugs in our e-commerce site that other developers couldn\'t solve. Fast, professional, and great communication throughout.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Tech Lead',
    content:
      'Ajaypal integrated our payment gateway flawlessly and optimized our React app performance by 60%. A truly skilled developer.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    role: 'Product Manager',
    content:
      'Working with Ajaypal was a great experience. He understood our requirements quickly and delivered a clean, production-ready codebase.',
    rating: 4,
  },
];

// ── Contact ─────────────────────────────────────────────────
export const contact = {
  email: 'ajaypalsingh82775@gmail.com',
  location: 'Rajasthan, India',
  availability: 'Available for Freelance',
};
