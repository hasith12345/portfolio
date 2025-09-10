# Sagar's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features dark/light mode toggle, smooth animations, and a professional design showcasing skills, education, projects, and contact information.

## 🚀 Features

- **Modern Design**: Clean, professional layout with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 and modern web practices
- **Accessibility**: WCAG compliant with proper contrast ratios and semantic HTML
- **SEO Optimized**: Meta tags, structured data, and optimized images

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 📦 Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/sagar-portfolio.git
   cd sagar-portfolio
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

\`\`\`
sagar-portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind config
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── about-section.tsx
│   ├── contact-section.tsx
│   ├── education-section.tsx
│   ├── hero-section.tsx
│   ├── navigation.tsx
│   ├── projects-section.tsx
│   ├── skills-section.tsx
│   └── theme-toggle.tsx
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
├── public/               # Static assets
├── next.config.mjs       # Next.js configuration
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## 🎨 Customization

### Personal Information
Update the following files with your information:
- `components/hero-section.tsx` - Name, bio, and social links
- `components/about-section.tsx` - About me content
- `components/education-section.tsx` - Educational background
- `components/projects-section.tsx` - Your projects
- `components/skills-section.tsx` - Your skills and technologies
- `components/contact-section.tsx` - Contact information

### Styling
- Colors and themes: `app/globals.css`
- Component styles: Individual component files
- Animations: CSS classes in `globals.css`

### Images
Replace placeholder images in the `public/` directory:
- `professional-headshot-of-young-it-student-develope.jpg`
- `modern-fintech-dashboard-with-purple-gradient.jpg`
- `modern-ecommerce-platform.png`
- `project-management-dashboard.png`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Theme Support

- Automatic system theme detection
- Manual theme toggle
- Smooth transitions between themes
- Proper contrast ratios for accessibility

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms
\`\`\`bash
npm run build
npm start
\`\`\`

## 📊 Performance

- Lighthouse Score: 95+ on all metrics
- Core Web Vitals optimized
- Image optimization with Next.js
- Lazy loading for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Email**: rashindusagar@gmail.com
- **Phone**: +94 788050565
- **Location**: Katubedda, Sri Lanka

---

Built with ❤️ by Sagar
