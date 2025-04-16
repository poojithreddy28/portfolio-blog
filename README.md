
# Portfolio & Tech Blog — By Poojith Reddy Annachedu

A modern, responsive personal portfolio and technical blog featuring a sleek design, dark mode, and markdown-powered content system. Built with industry-standard technologies and seamless AWS deployment. This site is a hub for my work, projects, and technical writings where I share insights on **System Design**, **Data Structures & Algorithms**, **Software Engineering Principles**, and **Generative AI Workflows**.

---

<h2 style="display: flex; align-items: center; gap: 10px;">
  Tech Stack
  <img src="https://github.com/user-attachments/assets/0b5a4650-2c05-40fd-ba90-0b8a1bbcc75b" alt="Tech Stack" height = "30" width="40" />
</h2>


![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-264de4?style=for-the-badge&logo=css3&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)
![AWS CloudFront](https://img.shields.io/badge/AWS%20CloudFront-232F3E?style=for-the-badge&logo=amazonaws&logoColor=white)
![AWS Lambda](https://img.shields.io/badge/AWS%20Lambda-FF9900?style=for-the-badge&logo=aws-lambda&logoColor=white)
![AWS API Gateway](https://img.shields.io/badge/AWS%20API%20Gateway-FF4F8B?style=for-the-badge&logo=amazonapigateway&logoColor=white)
![AWS DynamoDB](https://img.shields.io/badge/AWS%20DynamoDB-4053D6?style=for-the-badge&logo=amazondynamodb&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub%20Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
---

## ⚙️ Architecture & AWS Integration

This portfolio-blog setup uses a fully serverless, cloud-native architecture:

- **Static Hosting with S3 + CloudFront**  
  The Next.js app is exported as a static site and deployed to **AWS S3**, with **CloudFront** used as a global CDN for fast and secure content delivery.

- **API Gateway + Lambda for Dynamic Stats**  
  Blog post view/like metrics are handled via API Gateway-triggered Lambda functions for seamless serverless interactions.

- **DynamoDB for Metrics Storage**  
  Views and likes are stored and queried from **AWS DynamoDB**, a fast and scalable NoSQL database.

- **GitHub Actions for CI/CD**  
  Every push to the main branch triggers a GitHub Actions workflow to:
  - Build the Next.js static output
  - Upload the site to S3
  - Invalidate the CloudFront cache for instant updates

---

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Blog System**: Write posts in markdown with support for code syntax highlighting
- **Static Site Generation**: Fast loading times and SEO-friendly
- **Smooth Animations**: Subtle animations enhance the user experience
- **AWS Integration**: Automated deployment to S3 and CloudFront


## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm or yarn
- Git

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/poojithreddy28/portfolio-blog.git
   cd portfolio-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to see the site.

## Creating Blog Posts

Blog posts are written in Markdown format and stored in the `content/blog` directory. Each post should include frontmatter with metadata:

```markdown
---
title: "My Post Title"
date: "2025-03-24"
category: "Category Name"
excerpt: "A brief description of the post."
---

# Post content goes here
```

## 🚀 Deployment & Architecture Overview

This project uses a fully serverless CI/CD pipeline powered by **GitHub Actions** for automated deployment to **AWS S3**, **CloudFront**, and backend integrations via **Lambda** and **API Gateway**.

### ⚙️ Deployment Workflow

1. On every push to the `main` branch:
   - The Next.js site is built using `npm run build`.
   - Static files are exported using `next export`.
   - Files are uploaded to an S3 bucket configured for static website hosting.
   - CloudFront cache is invalidated to instantly reflect new changes.

2. API Routes (like blog views and likes) are handled by **Lambda functions** triggered via **API Gateway**:
   - `getStats` — Retrieve blog post metrics from **DynamoDB**.
   - `updateView` — Increment view count on post load.
   - `updateLike` — Update like count on user interaction.

---

### 🧰 AWS Setup Guide

1. **Create an S3 Bucket**
   - Enable static website hosting.
   - Set public read permissions or use CloudFront to restrict access.

2. **Create a CloudFront Distribution**
   - Connect it to the S3 bucket as the origin.
   - Enable invalidations for instant cache refresh after each deployment.

3. **Set Up Lambda + API Gateway**
   - Create 3 Lambda functions: `getStats`, `updateView`, and `updateLike`.
   - Expose each function through API Gateway using `GET` and `POST` routes.
   - Attach proper IAM roles with **DynamoDB** access.

4. **Provision a DynamoDB Table**
   - Table Name: `BlogMetrics`
   - Primary Key: `postId` (string)
   - Attributes: `views` (number), `likes` (number)

5. **Configure GitHub Secrets for CI/CD**
   - `AWS_ACCESS_KEY_ID`
   - `AWS_SECRET_ACCESS_KEY`
   - `S3_BUCKET`


## Customization

- **Content**: Update personal information in `pages/index.js`
- **Styling**: Modify the CSS files in the `styles` directory
- **Theme**: Adjust color variables in `styles/globals.css`
- **Components**: Modify or extend components in the `components` directory

## License

This project is open source and available under the [MIT License](LICENSE).

# 🤝 Contributing Guide

Would you love to contribute? You're most welcome! Here's how to get started:

1. **Fork the repository** on GitHub.
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/portfolio-blog.git
   cd portfolio-blog
   ```
3. Make your changes.
4. Commit and push:
   ```bash
   git add .
   git commit -m "Your meaningful commit message"
   git push origin your-branch-name
   ```
5. Open a Pull Request to the `main` branch.

That’s it! 🎉

---

Created by [Poojith Reddy Annachedu](https://github.com/poojithreddy28)

