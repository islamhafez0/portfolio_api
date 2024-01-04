const p1_1 = "/project-images/p1-1.jpg";
const p1_2 = "/project-images/p1-2.jpg";
const p1_3 = "/project-images/p1-3.jpg";

const p2_1 = "/project-images/p2_1.jpg";
const p2_2 = "/project-images/p2_2.jpg";
const p2_3 = "/project-images/p2_3.jpg";

const p3_1 = "/project-images/p3_1.png";
const p3_2 = "/project-images/p3_2.png";
const p3_3 = "/project-images/p3_3.png";

const p4_1 = "/project-images/p4_1.png";
const p6_1 = "/project-images/p6_1.png";
const p7_1 = "/project-images/p7_1.png";

const p8_1 = "/project-images/p8_1.png";
const p8_2 = "/project-images/p8_2.png";
const p8_3 = "/project-images/p8_3.png";

const p9_1 = "/project-images/p9_1.png";

const projects = [
  {
    slug: "ecommerce-cms",
    images: [p8_1, p8_2, p8_3],
    title: "Ecommerce CMS",
    description:
      "Developed a cross-platform mobile app showcasing skills in Next.js, React, Typescript, Payload, Scss, and Stripe integration.",
    technologies: ["Next", "React", "Typescript", "Payload", "Scss", "Stripe"],
    github: "https://github.com/islamhafez0/BookFinderDemo",
  },
  {
    slug: "movies-project",
    images: [p3_1, p3_2, p3_3],
    title: "Movies Website",
    description:
      "Crafted an interactive multimedia project demonstrating creativity and innovation using React, Redux, JavaScript, and TMDB API.",
    technologies: ["React", "Redux", "JavaScript", "TMDB-API", "Scss"],
    github: "https://github.com/islamhafez0/MoviesDemo",
    demo: "https://movies-app-a67a7.web.app/",
  },
  {
    slug: "book-finder",
    images: [p7_1],
    title: "Book Finder",
    description:
      "Discover your next favorite book with this responsive website built using React and JavaScript. Utilizing the Open Library API, it provides real-time updates, allowing you to explore a vast collection of books. Experience a user-friendly interface for seamless book searching and find your next literary adventure.",
    technologies: ["React", "JavaScript", "Css"],
    github: "https://github.com/islamhafez0/BookFinderDemo",
    demo: "https://book-finder-demo-e007b.web.app/",
  },
  {
    slug: "dynamic-responsive-ecommerce",
    images: [p1_1, p1_2, p1_3],
    title: "Dynamic & Responsive E-Commerce",
    description:
      "Explore a dynamic and responsive web app highlighting proficiency in Next.js, Typescript, Stripe integration, Sanity CMS, and Tailwind styling.",
    technologies: ["Next.js", "Typescript", "Stripe", "Sanity", "Tailwind"],
    github: "https://github.com/islamhafez0/ecommerce-website",
    demo: "https://ecommerce-website-five-flax.vercel.app/",
  },
  {
    slug: "budget-app",
    images: [p9_1],
    title: "Budget App",
    description:
      "Built a mobile app for managing budgets using React, Javascript, and a Fake Server.",
    technologies: ["React", "Javascript", "Fake Server"],
    github: "https://github.com/islamhafez0/BudgetApp",
  },
  {
    slug: "blog-website-project",
    images: [p2_1, p2_2, p2_3],
    title: "Blog Website",
    description:
      "Designed an innovative UI/UX for this project, demonstrating a keen eye for user experience using Javascript, React, and Firebase.",
    technologies: ["Javascript", "React", "Firebase", "Formik"],
    github: "https://github.com/islamhafez0/BlogProject",
    demo: "https://blog-demo-d01c4.firebaseapp.com/",
  },
  {
    slug: "prayer-timings",
    images: [p4_1],
    title: "Prayer Timings App",
    description:
      "Built a cross-platform mobile app focusing on prayer timings using React, Javascript, and Athan API.",
    technologies: ["React", "Javsscript", "Athan-API"],
    github: "https://github.com/islamhafez0/prayer-timings",
    demo: "https://prayer-timings.vercel.app/",
  },
  {
    slug: "to-do-list-app",
    images: [p6_1],
    title: "Todo List App",
    description:
      "Responsive Todo List app built with React, JavaScript, and Athan API for prayer timings. Features real-time updates and category sorting.",
    technologies: ["React", "JavaScript", "Redux"],
    github: "https://github.com/islamhafez0/TodoListAppCodeRepo",
    demo: "https://todo-list-app-f2117.web.app/",
  },
];
module.exports = projects;
