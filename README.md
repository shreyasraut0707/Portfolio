# Shreyas Raut - Professional Portfolio Website# React + TypeScript + Vite

A modern, responsive portfolio website showcasing AI & Data Science expertise, projects, and professional experience.This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## ✨ FeaturesCurrently, two official plugins are available:

- **Modern Design** - Beautiful gradient backgrounds and smooth animations- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh

- **Responsive Layout** - Works perfectly on mobile, tablet, and desktop- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

- **Professional Sections**:

  - Hero Section with Profile Photo## React Compiler

  - Technical Skills (7 categories)

  - Work Experience TimelineThe React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

  - Featured Projects

  - Education & Certifications## Expanding the ESLint configuration

  - Footer with Social Links

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

- **Interactive Elements**:

  - Smooth scroll navigation```js

  - Hover effects on cardsexport default defineConfig([

  - Animated transitions globalIgnores(['dist']),

  - Social media links (GitHub, LinkedIn, Email) {

    files: ['**/*.{ts,tsx}'],

## 🛠️ Tech Stack extends: [

      // Other configs...

- **React 19** - UI Library

- **TypeScript** - Type-safe development // Remove tseslint.configs.recommended and replace with this

- **Vite** - Lightning-fast build tool tseslint.configs.recommendedTypeChecked,

- **CSS3** - Modern styling with animations // Alternatively, use this for stricter rules

- **Responsive Design** - Mobile-first approach tseslint.configs.strictTypeChecked,

      // Optionally, add this for stylistic rules

## 📁 Project Structure tseslint.configs.stylisticTypeChecked,

````// Other configs...

src/    ],

├── components/           # React components    languageOptions: {

│   ├── Header.tsx      parserOptions: {

│   ├── Hero.tsx        project: ['./tsconfig.node.json', './tsconfig.app.json'],

│   ├── Skills.tsx        tsconfigRootDir: import.meta.dirname,

│   ├── Experience.tsx      },

│   ├── Projects.tsx      // other options...

│   ├── Education.tsx    },

│   └── Footer.tsx  },

├── data/])

│   └── resume.ts        # All portfolio content```

├── styles/              # CSS files

│   ├── index.css        # Global stylesYou can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

│   ├── Header.css

│   ├── Hero.css```js

│   ├── Skills.css// eslint.config.js

│   ├── Experience.cssimport reactX from 'eslint-plugin-react-x'

│   ├── Projects.cssimport reactDom from 'eslint-plugin-react-dom'

│   ├── Education.css

│   └── Footer.cssexport default defineConfig([

├── types/  globalIgnores(['dist']),

│   └── index.ts         # TypeScript interfaces  {

├── App.tsx    files: ['**/*.{ts,tsx}'],

├── main.tsx    extends: [

└── index.css      // Other configs...

```      // Enable lint rules for React

      reactX.configs['recommended-typescript'],

## 🚀 Quick Start      // Enable lint rules for React DOM

      reactDom.configs.recommended,

1. **Clone the repository:**    ],

   ```bash    languageOptions: {

   git clone https://github.com/shreyasraut0707/portfolio.git      parserOptions: {

   cd portfolio        project: ['./tsconfig.node.json', './tsconfig.app.json'],

   ```        tsconfigRootDir: import.meta.dirname,

      },

2. **Install dependencies:**      // other options...

   ```bash    },

   npm install  },

   ```])

````

3. **Run development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:5173](http://localhost:5173) in your browser

4. **Build for production:**

   ```bash
   npm run build
   ```

5. **Preview production build:**
   ```bash
   npm run preview
   ```

## 📝 Customization

### Update Your Information

Edit `src/data/resume.ts` to update:

- Personal information
- Skills
- Work experience
- Projects
- Education
- Certifications

### Update Profile Photo

Replace `src/assets/profile.jpg` with your own photo

### Customize Colors

Edit the CSS variables in `src/styles/index.css`:

```css
:root {
  --primary: #6366f1;
  --secondary: #ec4899;
  /* ... other colors ... */
}
```

## 🌐 Deployment

### Deploy on Vercel (Recommended - 2 minutes!)

1. **Push code to GitHub:**

   ```bash
   git add .
   git commit -m "Initial portfolio"
   git push origin main
   ```

2. **Go to Vercel:**

   - Visit https://vercel.com
   - Click "Sign Up" → "Continue with GitHub"
   - Click "New Project"
   - Select your portfolio repository
   - Click "Deploy"

3. **Get your live URL:** `https://portfolio-yourname.vercel.app`

### Deploy on Netlify

1. Go to https://netlify.com
2. Click "New site from Git"
3. Select your GitHub repository
4. Auto-deploy enabled!

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## 📱 Responsive Design

- ✅ Desktop (1024px+)
- ✅ Tablet (768px - 1023px)
- ✅ Mobile (480px - 767px)
- ✅ Small Mobile (<480px)

## 🎨 Design Features

- Gradient backgrounds
- Smooth animations and transitions
- Interactive hover effects
- Professional color scheme
- Accessibility-friendly

## 📞 Contact & Social Links

- Email: shreyasraut0007@gmail.com
- GitHub: https://github.com/shreyasraut0707
- LinkedIn: https://linkedin.com/in/shreyas-raut-ba1103297

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Credits

- Built with React + Vite
- Deployed on Vercel/Netlify
- Designed with modern web standards

---

**Made with ❤️ by Shreyas Raut**
