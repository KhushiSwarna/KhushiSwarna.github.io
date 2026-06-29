# Khushi Swarna Portfolio

Modern dark personal portfolio website for a software engineering internship candidate. The content is centralized in src/data/portfolio.ts and is based only on the provided resume details.

## Tech Stack

- React
- Vite
- TypeScript
- Tailwind CSS

## Install

Run npm install.

## Run Locally

Run npm run dev.

## Build

Run npm run build.

## Preview Production Build

Run npm run preview.

## Customize Content

Edit portfolio content in src/data/portfolio.ts.

Missing items from the resume, such as GitHub, live project links, project screenshots, and school dates, are left as TODO comments instead of invented content.

## Resume PDF

The site points to public/resume.pdf. The included file is a placeholder and intentionally does not include a phone number. Before deploying, replace it with a redacted resume PDF if the portfolio will be public.

## Deployment

GitHub Pages: push the project to GitHub, build with npm run build, and deploy the dist folder with your preferred workflow.

Vercel: import the GitHub repository, use npm run build as the build command, and use dist as the output directory.

Netlify: import the GitHub repository, use npm run build as the build command, and use dist as the publish directory.
