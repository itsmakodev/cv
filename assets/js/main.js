const translations = {
  en: {
    skipLink: "Skip to content",
    navAbout: "About",
    navEducation: "Education",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navGithub: "GitHub",
    navContact: "Contact",
    heroEyebrow: "2026 Portfolio · Computer Engineering",
    heroLead:
      "Computer Engineering student focused on software development, web applications, algorithms and databases.",
    heroSummary:
      "I am looking for internships and first junior opportunities where I can bring fast learning, teamwork and a strong technical foundation in Java, Python, C, SQL and modern web technologies.",
    ctaCv: "Download CV",
    ctaLinkedinTodo: "LinkedIn pending",
    availability: "Available for internships and junior roles",
    factLocation: "Location",
    factEducation: "Education",
    factFocus: "Focus",
    factFocusValue: "Software, web and data",
    factLanguages: "Languages",
    factLanguagesValue: "Native ES · EN B2 · FR A1",
    aboutEyebrow: "About",
    aboutTitle: "Technical profile with a learning mindset",
    aboutTextOne:
      "I am a Computer Engineering student with a foundation in programming, data structures, algorithms, systems and databases. I am interested in building clear, maintainable and useful software, from web applications to academic projects in Java, C or Python.",
    aboutTextTwo:
      "My goal in 2026 is to join a team where I can learn from real engineering practices, take part in product delivery and keep growing as a software engineer.",
    valueOneTitle: "Problem solving",
    valueOneText: "Logical approach to split problems, validate solutions and improve iteratively.",
    valueTwoTitle: "Teamwork",
    valueTwoText: "Clear communication, ownership and adaptation to new technical environments.",
    valueThreeTitle: "Continuous learning",
    valueThreeText: "Curiosity for modern tools, frontend architecture and software fundamentals.",
    educationEyebrow: "Education",
    educationTitle: "University education",
    educationTime: "Currently studying",
    educationDegree: "Computer Engineering in Information Systems",
    educationPointOne: "Programming in Java, C and Python.",
    educationPointTwo: "Data structures, algorithms and applied logic.",
    educationPointThree: "Databases, digital systems and computer architecture.",
    educationPointFour: "Academic practice with version control and web deployments.",
    skillsEyebrow: "Technical skills",
    skillsTitle: "Stack grouped by area",
    skillsIntro: "Technologies used in academic projects, public repositories and personal web apps.",
    skillLanguages: "Programming languages",
    skillDatabases: "Databases",
    skillTools: "Tools",
    skillTechnologies: "Technologies",
    skillGrowth: "Growth areas",
    projectsEyebrow: "Projects",
    projectsTitle: "Practical work and public repositories",
    projectsIntro:
      "A selection focused on showing code, learning and the ability to build complete or academic solutions.",
    difficulty: "Challenge",
    learning: "Learning",
    repoLink: "Repository",
    demoLink: "Demo",
    noPublicDemo: "No public demo",
    projectMakoDesc:
      "TypeScript web app deployed on Vercel to practice modern frontend architecture, components and professional project structure.",
    projectMakoDifficulty: "Managing a modern stack with many dependencies while keeping the project clear.",
    projectMakoLearning: "Project organization, reusable components and frontend deployment.",
    projectTormentzDesc:
      "Visual portfolio for a creative profile, used to practice interface work, frontend structure and polished web delivery.",
    projectTormentzDifficulty: "Balancing aesthetics, navigation and performance in a visual website.",
    projectTormentzLearning: "Responsive design, visual hierarchy and presentation quality.",
    projectPortfolioDesc: "Personal portfolio focused on presenting technical skills, projects and professional links directly.",
    projectPortfolioDifficulty: "Turning personal information into a clear and navigable presentation.",
    projectPortfolioLearning: "HTML semantics, content structure and progressive enhancement.",
    projectAlgoDesc:
      "Academic project focused on problem solving, data structures and object-oriented programming in Java.",
    projectAlgoDifficulty: "Designing correct, readable solutions under academic constraints.",
    projectAlgoLearning: "Modularity, debugging and algorithmic reasoning.",
    projectDbDesc:
      "Academic practice focused on relational modeling, normalization and SQL queries to organize data consistently.",
    projectDbDifficulty: "Moving from requirements to coherent tables while avoiding redundancy.",
    projectDbLearning: "Relational design, data integrity and maintainable queries.",
    projectPythonDesc:
      "Academic exercises to reinforce computational logic, scripts, basic structures and procedural programming foundations.",
    projectPythonDifficulty: "Handling memory, input/output and edge cases precisely.",
    projectPythonLearning: "Step-by-step thinking, manual testing and basic automation.",
    experienceEyebrow: "Experience",
    experienceTitle: "Academic experience and projects",
    experienceProjectTitle: "Personal and university projects",
    experienceProjectText:
      "Portfolio development, Java, SQL, Python, C and systems exercises. Focus on fundamentals, documentation, GitHub and web deployment.",
    experienceTargetTitle: "Professional goal",
    experienceTargetText:
      "Join a Computer Engineering internship or junior role where I can keep learning with technical mentoring and contribute from day one.",
    certEyebrow: "Certifications",
    certTitle: "Verifiable credentials",
    certText:
      "No verified certifications appear in the current CV. This section is ready for courses, badges or official certifications when available.",
    spokenLanguagesEyebrow: "Languages",
    spokenLanguagesTitle: "Communication",
    spanish: "Spanish",
    english: "English",
    french: "French",
    native: "Native",
    githubTitle: "Public activity and repositories",
    githubIntro: "Lightweight view of public data. If the API fails, the portfolio keeps functional static links.",
    githubBio: "Computer Engineering student and junior software profile.",
    repos: "Public repos",
    contactEyebrow: "Contact",
    contactTitle: "Let us talk about internships, projects or collaboration",
    contactIntro:
      "Available for junior opportunities, university internships and projects where I can keep growing technically.",
    viewCv: "View CV PDF",
    linkedinTodo: "LinkedIn URL pending",
    footerPrefix: "Designed and developed as a static portfolio for GitHub Pages."
  },
  es: {}
};

const originalText = new Map();
const root = document.documentElement;
const languageButtons = document.querySelectorAll("[data-lang]");
const themeToggle = document.getElementById("theme-toggle");
const backToTop = document.getElementById("back-to-top");
const header = document.querySelector("[data-header]");
const sections = document.querySelectorAll("main > section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

document.querySelectorAll("[data-i18n]").forEach((element) => {
  originalText.set(element.dataset.i18n, element.textContent);
});

const getPreferredTheme = () => {
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

const setTheme = (theme) => {
  root.dataset.theme = theme;
  localStorage.setItem("theme", theme);
  themeToggle?.setAttribute(
    "aria-label",
    theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"
  );
};

const setLanguage = (lang) => {
  root.lang = lang;
  localStorage.setItem("language", lang);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = lang === "es" ? originalText.get(key) : translations.en[key] || originalText.get(key);
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
};

const revealElements = () => {
  const elements = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
  );

  elements.forEach((element) => observer.observe(element));
};

const updateNavigationState = () => {
  if (!("IntersectionObserver" in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        navLinks.forEach((link) => {
          link.toggleAttribute("aria-current", link.getAttribute("href") === `#${entry.target.id}`);
        });
      });
    },
    {
      rootMargin: `-${header?.offsetHeight || 72}px 0px -62% 0px`,
      threshold: 0.05
    }
  );

  sections.forEach((section) => observer.observe(section));
};

const hydrateGithub = async () => {
  const repoList = document.getElementById("github-repos");
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/itsmakodev"),
      fetch("https://api.github.com/users/itsmakodev/repos?sort=updated&per_page=5")
    ]);

    if (!userResponse.ok || !reposResponse.ok) return;

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    document.getElementById("github-name").textContent = user.name || "itsmakodev";
    document.getElementById("github-bio").textContent = user.bio || document.getElementById("github-bio").textContent;
    document.getElementById("gh-repos").textContent = user.public_repos ?? "10";
    document.getElementById("gh-followers").textContent = user.followers ?? "0";
    document.getElementById("gh-following").textContent = user.following ?? "0";

    repoList.replaceChildren(
      ...repos.map((repo) => {
        const item = document.createElement("li");
        const link = document.createElement("a");
        const meta = document.createElement("span");

        link.href = repo.html_url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        link.textContent = repo.name;
        meta.textContent = [repo.language, repo.homepage ? "Demo" : null, repo.description].filter(Boolean).join(" · ");

        item.append(link, meta);
        return item;
      })
    );
  } catch {
    // Static fallback remains visible when the public GitHub API is unavailable.
  }
};

document.getElementById("current-year").textContent = new Date().getFullYear();
setTheme(getPreferredTheme());
setLanguage(localStorage.getItem("language") || "es");
revealElements();
updateNavigationState();
hydrateGithub();

themeToggle?.addEventListener("click", () => {
  setTheme(root.dataset.theme === "dark" ? "light" : "dark");
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

window.addEventListener(
  "scroll",
  () => {
    backToTop?.classList.toggle("is-visible", window.scrollY > 500);
  },
  { passive: true }
);

backToTop?.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
