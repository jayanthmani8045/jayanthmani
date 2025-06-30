# 🚀 Dynamic Portfolio Website - Jayanth Mani

A modern, responsive portfolio website that dynamically switches between **Software Engineer** and **Data Engineer/AI-ML Specialist** roles, built with React, TypeScript, and SCSS.

[![Alt Text](https://github.com/jayanthmani8045/jayanthmani/blob/main/Frontend/Portfolio/public/jm.png?raw=true)](https://jayanthmani.onrender.com)
[Portfolio Live](https://jayanthmani.onrender.com)

## ✨ Features

### 🔄 **Dynamic Role Switching**
- Toggle between Software Engineer and Data Engineer personas
- Content automatically adapts based on selected role
- Smooth transitions and animations

### 🎨 **Modern Design**
- **Glassmorphism UI** with backdrop blur effects
- **Gradient backgrounds** and professional color schemes
- **Interactive animations** and hover effects
- **Responsive design** for all devices

### 🛠️ **Technical Excellence**
- Built with **React 18** and **TypeScript** for type safety
- **SCSS** with variables and mixins for maintainable styling
- **Component-based architecture** for scalability
- **SEO optimized** with semantic HTML

## 🎯 Role-Specific Content

### 👨‍💻 **Software Engineer (SD&FS&ML618)**
- Full-stack development projects
- Web applications and automation systems
- React, Node.js, TypeScript focus
- System architecture and UI/UX emphasis

### 📊 **Data Engineer/Scientist (Data618)**
- ETL pipelines and data architecture
- Machine learning and AI implementations
- Python, SQL, cloud platforms focus
- Predictive analytics and data visualization

## 🔧 Tech Stack

- **Frontend:** React 18, TypeScript
- **Styling:** SCSS, CSS Variables, Responsive Design
- **Build Tool:** Vite
- **Icons:** Lucide React
- **Development:** ESLint, TypeScript strict mode

## 📦 Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Quick Start
```bash
# Clone the repository
git clone https://github.com/jayanthmani8045/jayanth-portfolio.git
cd jayanth-portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
jayanth-portfolio/
├── src/
│   ├── components/           # React components
│   │   ├── Header/          # Navigation and role toggle
│   │   ├── Hero/            # Hero section with contact info
│   │   ├── Experience/      # Work experience
│   │   ├── Projects/        # Featured projects
│   │   ├── Skills/          # Technical skills
│   │   ├── Education/       # Education and certifications
│   │   └── Portfolio/       # Main portfolio component
│   ├── data/
│   │   └── portfolioData.ts # Content configuration
│   ├── types/
│   │   └── portfolio.types.ts # TypeScript interfaces
│   ├── styles/
│   │   ├── variables.scss   # SCSS variables
│   │   ├── mixins.scss      # SCSS mixins
│   │   └── Portfolio.scss   # Main styles
│   ├── App.tsx
│   └── main.tsx
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎨 Customization

### Adding New Roles
1. Update `RoleType` in `src/types/portfolio.types.ts`
2. Add role data to `portfolioData` in `src/data/portfolioData.ts`
3. Update toggle buttons in `Header.tsx`

### Modifying Content
- **Personal Info:** Update `portfolioData.personal` in `portfolioData.ts`
- **Projects:** Modify `portfolioData.roles[role].projects`
- **Skills:** Update `portfolioData.roles[role].skills`
- **Experience:** Edit `portfolioData.roles[role].experience`

### Styling Changes
- **Colors:** Modify variables in `src/styles/variables.scss`
- **Layout:** Update component styles in respective SCSS files
- **Animations:** Adjust transitions in `src/styles/mixins.scss`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px+

## 🚀 Deployment

```bash
# Deploy
npm run build
npm run deploy
```

## 🌟 Key Features Showcase

### Dynamic Content Switching
- **Software Role:** Emphasizes web development, automation, and system architecture
- **Data Role:** Highlights ETL pipelines, machine learning, and analytics

### Professional Animations
- Smooth fade-in effects on scroll
- Interactive hover states on cards
- Glassmorphism effects throughout

### Performance Optimized
- **Vite** for fast development and builds
- **Tree shaking** for minimal bundle size
- **Optimized assets** and lazy loading

## 📊 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, Best Practices)
- **Bundle Size:** < 500KB gzipped
- **First Contentful Paint:** < 1.5s
- **Time to Interactive:** < 2.5s

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Jayanth Mani**
- 📧 Email: [mani.j@northeastern.edu](mailto:mani.j@northeastern.edu)
- 📍 Location: Boston, MA
- 💼 LinkedIn: [jayanth-mani-b478a51b9](https://linkedin.com/in/jayanth-mani-b478a51b9/)
- 💻 GitHub: [jayanthmani8045](https://github.com/jayanthmani8045)
- 🌐 Portfolio: [https://jayanthmani.onrender.com](https://jayanthmani.onrender.com)

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - The web framework used
- [TypeScript](https://www.typescriptlang.org/) - For type safety
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Lucide React](https://lucide.dev/) - Beautiful icons
- [SCSS](https://sass-lang.com/) - CSS preprocessor

---

⭐ **Star this repository if you found it helpful!**

🔗 **[View Live Demo](https://jayanthmani.onrender.com)** | 📁 **[Source Code](https://github.com/jayanthmani8045/jayanthmani.git)**

---

*Built with ❤️ by Jayanth Mani - Software Engineer & Data Engineer*
