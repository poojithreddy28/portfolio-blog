# Portfolio & Blog

A modern, responsive personal portfolio and technical blog featuring a sleek design, dark mode, and markdown-powered content system. Built with industry-standard technologies and seamless AWS deployment.

## Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Dark/Light Mode**: Theme toggle with persistent user preference
- **Blog System**: Write posts in markdown with support for code syntax highlighting
- **Static Site Generation**: Fast loading times and SEO-friendly
- **Smooth Animations**: Subtle animations enhance the user experience
- **AWS Integration**: Automated deployment to S3 and CloudFront

## Technologies Used

- **Next.js**: React framework for static site generation
- **React**: UI component library
- **CSS Modules**: Scoped styling
- **AWS S3**: Static file hosting
- **AWS CloudFront**: Content delivery network
- **GitHub Actions**: CI/CD pipeline

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

## Deployment

This project uses GitHub Actions for CI/CD deployment to AWS S3 and CloudFront:

1. The workflow is triggered on push to the main branch
2. Next.js build is run to generate static files
3. Files are uploaded to the configured S3 bucket
4. CloudFront cache is invalidated to show changes immediately

### Setting Up AWS Deployment

1. Create an S3 bucket for hosting
2. Set up CloudFront distribution pointing to your S3 bucket
3. Create an IAM user with appropriate permissions
4. Add the following repository variables in GitHub:
   - AWS_ACCESS_KEY_ID
   - AWS_SECRET_ACCESS_KEY
   - S3_BUCKET

## Customization

- **Content**: Update personal information in `pages/index.js`
- **Styling**: Modify the CSS files in the `styles` directory
- **Theme**: Adjust color variables in `styles/globals.css`
- **Components**: Modify or extend components in the `components` directory

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- [Next.js](https://nextjs.org/) for the amazing React framework
- [AWS](https://aws.amazon.com/) for hosting infrastructure
- [GitHub Actions](https://github.com/features/actions) for CI/CD pipeline

---

Created by [Poojith Reddy Annachedu](https://github.com/poojithreddy28)

