# Portfolio Website

Welcome to my Software Portfolio Website! This platform showcases my projects, skills, and experience in the field of software development. With a modern design and cutting-edge technologies, it provides a visually appealing and interactive experience for visitors.

## Key Features

### Project Showcase

- **Portfolio Gallery**: Explore a collection of my projects, including web applications, mobile apps, and other software projects.
- **Project Details**: View detailed information about each project, including technologies used, features, and contributions.

### Skills and Expertise

- **Skill Showcase**: Highlight my expertise in various programming languages, frameworks, and technologies.
- **Experience**: Provide an overview of my professional experience, including work history, certifications, and achievements.

### Interactive Design

- **Next.js**: Utilize Next.js for server-side rendering and seamless navigation between pages, enhancing performance and user experience.
- **Motion**: Implement smooth animations and transitions throughout the website with Motion, creating an engaging and interactive interface.
- **GSAP**: Integrate GSAP (GreenSock Animation Platform) for advanced animation effects, adding depth and dynamism to the design.
- **3D Centerpiece**: A single interactive three.js object that follows the cursor, pauses when off-screen, and respects reduced-motion preferences.

### Modern Design

- **Sleek UI**: Employ a sleek and minimalist design approach to create a clean and professional interface.
- **Responsive Layout**: Ensure compatibility with various devices and screen sizes, providing a seamless experience across desktop, tablet, and mobile platforms.
- **Typography and Color Scheme**: Optimize typography and color choices to maintain readability and visual coherence, enhancing the overall aesthetic appeal.

## Getting Started

To explore my Software Portfolio Website, simply visit the live website at [keeshigan.com](https://www.keeshigan.com). You can navigate through the various sections to view my projects, skills, and experience.

## Technologies Used

- **Next.js 16 / React 19**: A React framework for building server-side rendered web applications.
- **Tailwind CSS 4 + shadcn/ui**: Utility-first styling with a single token-based theme (`app/globals.css`) and accessible Radix-based components.
- **React Three Fiber + Drei**: The 3D gyroscope in the hero and on the contact page (`components/three`).
- **Motion**: A motion library for React that makes it easy to create animations and transitions.
- **GSAP**: The GreenSock Animation Platform, a JavaScript library for creating high-performance animations.
- **Lenis**: Smooth scrolling.

## Run Locally

### Development

With docker installed run:
1. docker compose up -w

### Production

With docker installed run:
1. docker build . -t portfolio -f ./Dockerfile.prod
2. docker run --name portfolio-app -p 3000:3000 portfolio:latest
3. Access website on http://localhost:3000

## Contact

If you have any questions or feedback, feel free to reach out:

- Email: kpirabaharan3@gmail.com
- Website: [www.keeshigan.com](https://www.keeshigan.com)
- Github: [github.com/kpirabaharan](https://github.com/kpirabaharan)
- LinkedIn: [linkedin.com/in/kpirabaharan](https://linkedin.com/in/kpirabaharan)

---
