# Khadija Ourahou — Personal Portfolio

**Information Security · Networking · Software Development**


## About

This is the source code of my personal portfolio — a fully responsive single-page application built with React 18. It is designed to present my background, projects, and skills to recruiters and collaborators in a clean and professional way.

The portfolio covers three main areas of expertise:

- **Information Security** — security fundamentals, vulnerability analysis, and best practices
- **Networking** — protocols, infrastructure, and system administration
- **Software Development** — web applications, scripting, and open-source projects

---

## Features

| Feature | Description |
|---|---|
| Responsive design | Optimized for mobile, tablet, and desktop |
| Smooth navigation | Scroll-based nav with active section tracking |
| Animated titles | Role cycling via react-type-animation |
| Project grid | Filterable by technology or category |
| Contact form | Functional form powered by EmailJS — no backend |
| CV download | Accessible from the navbar, hero, about, and contact sections |
| Scroll animations | Cards revealed on scroll via IntersectionObserver |
| Light theme | Navy and blue accent palette with clean typography |

---

## Project Structure

```
portfolio/
├── public/
│   ├── index.html                  # HTML entry point + EmailJS CDN
│   └── cv-khadija-ourahou.pdf      # CV file (add manually)
│
├── src/
│   ├── App.jsx                     # All React components
│   ├── index.css                   # Global styles & CSS custom properties
│   ├── index.js                    # React entry point
│   │
│   └── data/
│       └── portfolioData.js        # Centralized content file
│
├── package.json
└── README.md
```

### Content file — `portfolioData.js`

All portfolio content is managed from a single file, making updates fast and straightforward.

| Export | Description |
|---|---|
| `personalInfo` | Name, email, GitHub, LinkedIn, CV path |
| `education` | Degree entries rendered in the timeline |
| `skills` | Skill categories and individual items |
| `languages` | Spoken languages with proficiency percentages |
| `certifications` | Certifications with issuer and external link |
| `projects` | Project cards with description, tags, and GitHub links |
| `blogPosts` | Blog or article cards |

---

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) — version 18 or higher
- npm — version 9 or higher

You can verify your versions with:

```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/khadijaourahou/portfolio.git

# 2. Navigate into the project folder
cd portfolio

# 3. Install all dependencies
npm install
```

### Running locally

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000).  
The page reloads automatically whenever you save a file.

### Production build

```bash
npm run build
```

This generates an optimized static build inside the `build/` folder, ready to deploy on any static hosting platform.

---

## Tech Stack

| Layer | Technology | Role |
|---|---|---|
| Framework | React 18 | UI rendering and component structure |
| Styling | Plain CSS + custom properties | Theming and responsive layout |
| Icons | react-icons | Feather, Simple Icons, Tabler icon sets |
| Animations | CSS transitions + IntersectionObserver | Scroll-reveal and hover effects |
| Type animation | react-type-animation | Cycling role titles in the hero section |
| Contact form | EmailJS | Client-side email sending without a backend |
| Fonts | Plus Jakarta Sans · JetBrains Mono | UI typography and code blocks |

---

## License

Distributed under the [MIT License](LICENSE).  


---

*Built by Khadija Ourahou — 2026*