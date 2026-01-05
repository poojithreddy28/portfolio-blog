import { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Icon from '../components/Icon';
import { initPortfolioScripts } from '../lib/portfolioScripts';

export default function Home() {
  useEffect(() => {
    // Import AOS CSS
    import('aos/dist/aos.css');
    
    // Initialize portfolio scripts
    const cleanup = initPortfolioScripts();
    
    // Clean up on component unmount
    return () => {
      if (cleanup) cleanup();
    };
  }, []);


  return (
    <Layout title="Poojith Reddy Annachedu | Portfolio">
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <h1 className="full-name">Poojith Reddy <span className="primary">Annachedu.</span></h1>
              <p className="about">
                Software Engineer with 4+ years of experience building scalable backend systems and cloud-native platforms using Java Spring, Python, and AWS. Designed intelligent automation pipelines using modern agent frameworks, RAG architectures, embeddings, and MCP-based integrations to streamline document processing and operational workflows.

Delivered resilient microservices, distributed data pipelines, and AWS GCP infrastructure that improved system performance, reliability, and engineering efficiency at scale. My focus is on designing reliable, scalable systems with clean architectures and performance-first services that enable teams to move fast without breaking things.

What drives me is turning complexity into simple, durable solutions while leveraging AI to create real leverage for engineering teams and operational workflows.              </p>
              <ul className="social-icons">
                <li>
                  <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="image" data-aos="fade-up">
              <div className="cover">
                <Icon name="lines-vector" />
              </div>
              <img className="avatar" src="/assets/img/avatar.png" alt="Poojith Reddy Annachedu" />
            </div>
          </div>
        </section>
        {/* <section className="blog-preview-section" id="blog">
  {/* <div className="container">
    <div className="blog-preview-wrapper">
      <h4 className="section-subtitle">— Recent Writings</h4>
      <h2 className="section-title">From My Blog</h2>
      <p className="blog-intro text">
        I occasionally write about&nbsp;
        <i className="fas fa-cogs"></i> <strong>backend systems</strong>,&nbsp;
        <i className="fas fa-drafting-compass"></i> <strong>HLD & LLD</strong>,&nbsp;
        <i className="fas fa-sitemap"></i> <strong>scalable distributed systems</strong>,&nbsp;
        <i className="fas fa-code"></i> <strong>DevOps</strong>,&nbsp;
        <i className="fas fa-terminal"></i> <strong>DSA</strong>, and&nbsp;
        <i className="fas fa-laptop-code"></i> <strong>software engineering concepts</strong>. 
        Whether it’s breaking down ideas or writing tutorials, I aim to create valuable content to help others grow.
      </p>
      <Link href="/blog" passHref>
        <a className="blog-btn">
          Explore Blog&nbsp; <i className="fas fa-arrow-right"></i>
        </a>
      </Link>
    </div>
  </div> */}
{/* </section> */} 

        {/* Skills Section */}
        <section className="service-section" id="services">
          <div className="container">
            <div className="section-name center" data-aos="fade-up">
              <div className="content">
                <p className="above-title">Skills</p>
                <h4 className="title">Specialized in</h4>
              </div>
            </div>
            <div className="service-item-wrapper">
              <div className="service-item" data-aos="fade-up" data-aos-delay="200">
                <h4 className="vstitle">Software Development</h4>
                <ul className="bulletp">
                  <li>Data Structures and Algorithms</li>
                  <li>Object Oriented Programming</li>
                  <li>High-Level Design (HLD)</li>
                  <li>API Integration</li>
                  <li>Agile Methodologies</li>
                  <li>Microservices Architecture</li>
                  <li>Design Patterns</li>
                  <li>Clean Architecture</li>
                  <li>Test-Driven Development</li>
                  <li>SAFE Agile Framework</li>
                  <li>CI/CD Pipelines</li>
                </ul>
              </div>
              <div className="service-item" data-aos="fade-up" data-aos-delay="250">
                <h4 className="vstitle">Languages/Frameworks</h4>
                <ul className="bulletp">
                  <li>Java, Python, JavaScript, C, C++</li>
                  <li>React.js, Next.js, AngularJS, Redux</li>
                  <li>Spring Boot, Spring MVC, Spring Security</li>
                  <li>Spring Data JPA, Jakarta EE</li>
                  <li>LangChain, AutoGen, LangGraph, LangSmith</li>
                  <li>RAG, Rasa, MCP</li>
                  <li>REST API, FastAPI, Flask, Node.js</li>
                  <li>HTML, CSS, JSON</li>
                </ul>
              </div>
              <div className="service-item" data-aos="fade-up" data-aos-delay="300">
                <h4 className="vstitle">Technologies & Infrastructure</h4>
                <ul className="bulletp">
                  <li>AWS, GCP, Docker, Kubernetes</li>
                  <li>Jenkins, GitHub Actions</li>
                  <li>Prometheus, Grafana, Tempo, Loki</li>
                  <li>MySQL, PostgreSQL, MongoDB</li>
                  <li>Elasticsearch, Firebase, Supabase</li>
                  <li>DynamoDB, Kafka, SNS</li>
                  <li>OAuth2, JWT, IAM</li>
                  <li>CI/CD Pipelines, JIRA</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
{/* Portfolio Section */}
<section className="portfolio-section" id="portfolios">
  <div className="container">
    <div className="section-name" data-aos="fade-up" data-aos-delay="200">
      <div className="content">
        <p className="above-title">My works</p>
        <h4 className="title">Highlighted Projects</h4>
      </div>
      <div className="slider-navigation">
        <div className="prev">
          <Icon name="arrow-left" />
        </div>
        <div className="next">
          <Icon name="arrow-right" />
        </div>
      </div>
    </div>
    <div className="portfolio-item-wrapper">
      <div className="swiper">
        <div className="swiper-wrapper">

          {/* <!-- GitHub Analytics Forecasting Platform --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="300">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/github-analytics-forecasting" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/github_analytics.png" alt="GitHub Analytics Forecasting Platform" />
                </figure>
                <div className="detail">
                  <h4 className="title">GitHub Analytics Forecasting Platform</h4>
                  <div className="bottom">
                    <span className="tag">React.js</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">Docker</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Cloud Run</span>
                    <span className="tag">LangChain</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- RetailPulse SmartHomes --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="350">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SpringBoot-MicroServices" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/retail_microservices.png" alt="RetailPulse SmartHomes" />
                </figure>
                <div className="detail">
                  <h4 className="title">RetailPulse SmartHomes</h4>
                  <div className="bottom">
                    <span className="tag">ReactJS</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">Kafka</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">OpenAI</span>
                    <span className="tag">RAG</span>
                    <span className="tag">Kubernetes</span>
                    <span className="tag">Prometheus</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- SmartHomes E-commerce Platform --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SmartHomes" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/smart_home.png" alt="SmartHomes E-commerce" />
                </figure>
                <div className="detail">
                  <h4 className="title">SmartHomes E-commerce Platform</h4>
                  <div className="bottom">
                    <span className="tag">Java</span>
                    <span className="tag">React</span>
                    <span className="tag">FastAPI</span>
                    <span className="tag">Docker</span>
                    <span className="tag">OpenAI</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

        {/* Experience Section */}

<section className="experience-section" id="experience">
  <div className="container">
    <div className="side">
      <div className="section-name" data-aos="fade-up">
        <p className="above-title">Career path</p>
        <h4 className="title">Work Experience</h4>
      </div>
      <div className="companies-list">
        <div className="selector">
          <Icon name="arrow-right" />
        </div>
        <ul>
          <li data-tab="kyron" className="active" data-aos="fade-up">Kyron Medical</li>
          <li data-tab="kaplan" data-aos-delay="50" data-aos="fade-up">Kaplan</li>
          <li data-tab="adp" data-aos-delay="100" data-aos="fade-up">ADP</li>
          <li data-tab="prometheus" data-aos-delay="150" data-aos="fade-up">Prometheus Patent Services</li>
        </ul>
      </div>
    </div>

    {/* Kyron Medical */}
    <div className="content active" id="kyron">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer</h4>
        <p className="location">United States</p>
        <p className="period">May 2025 – Present</p>
        <ul className="stack-list">
          <li className="tag">OpenAI APIs</li>
          <li className="tag">LangChain</li>
          <li className="tag">Python</li>
          <li className="tag">AWS</li>
          <li className="tag">PostgreSQL</li>
          <li className="tag">S3</li>
          <li className="tag">IAM</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Developed AI-powered utilities and internal tooling using OpenAI APIs, LangChain, and embeddings for document classification and claims triage, accelerating internal review workflows and cutting clerical workloads by 20%.</li>
        <li>Implemented scalable data-processing pipelines, including a Python-based scraper for CVS client workflows, extracting structured healthcare data from multi-step web flows and increasing downstream processing accuracy by 30%.</li>
        <li>Built internal admin dashboards and API integrations for operational teams, implementing pagination, RBAC authorization, audit logging, and error-resilient communication between microservices.</li>
        <li>Led end-to-end AWS infrastructure modernization for Kyron&apos;s medical billing platform, architecting secure VPC networking, ALB-backed EC2 deployments, RDS PostgreSQL, S3/KMS encryption, and IAM least-privilege roles to strengthen reliability.</li>
      </ul>
    </div>

    {/* Kaplan */}
    <div className="content" id="kaplan">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer</h4>
        <p className="location">Chicago, United States</p>
        <p className="period">May 2024 – May 2025</p>
        <ul className="stack-list">
          <li className="tag">Python</li>
          <li className="tag">LangGraph</li>
          <li className="tag">LangSmith</li>
          <li className="tag">Redis</li>
          <li className="tag">RAG</li>
          <li className="tag">Docker</li>
          <li className="tag">Kubernetes</li>
          <li className="tag">GCP</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Engineered robust AI workflow orchestration using Python with LangGraph, LangSmith, Redis caching, RAG pipelines, and semantic search embeddings to accelerate distributed processing and boost system response times by 30%.</li>
        <li>Optimized CI/CD automation with GitHub Actions, Docker, and Kubernetes, enabling frictionless deployments to Firebase Functions and GCP Cloud Run, thereby enhancing reliability and scalability.</li>
        <li>Advanced cloud-native infrastructure and agile delivery by implementing comprehensive monitoring and observability with Prometheus and Grafana, driving operational excellence across engineering teams.</li>
      </ul>
    </div>

    {/* ADP */}
    <div className="content" id="adp">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer</h4>
        <p className="location">Hyderabad, India</p>
        <p className="period">Apr 2022 – Jul 2023</p>
        <ul className="stack-list">
          <li className="tag">Spring Boot</li>
          <li className="tag">Kafka</li>
          <li className="tag">Spring MVC</li>
          <li className="tag">AWS</li>
          <li className="tag">JPA</li>
          <li className="tag">Lambda</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Optimized a distributed, high-performance backend for ADP Payroll Fraud Detection using Spring MVC, Kafka, and Spring Data JPA, leveraging caching and asynchronous processing to boost throughput by 60% and reduce latency.</li>
        <li>Implemented secure, scalable data logging for ADP Wage Payments with AWS Lambda and S3, improving traceability.</li>
        <li>Integrated method-level Spring Security with AWS Cognito for granular role-based access control, strengthening data protection.</li>
        <li>Migrated 120+ enterprise applications from EV5 to EV6 using ADP&apos;s OneNext tool along with AWS EC2 and CloudFormation to modernize infrastructure.</li>
      </ul>
    </div>

    {/* Prometheus Patent Services */}
    <div className="content" id="prometheus">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Developer Intern & Engineer</h4>
        <p className="location">Hyderabad, India</p>
        <p className="period">Dec 2020 – Mar 2022</p>
        <ul className="stack-list">
          <li className="tag">Java</li>
          <li className="tag">Jakarta EE</li>
          <li className="tag">Spring Boot</li>
          <li className="tag">MySQL</li>
          <li className="tag">NoSQL</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Developed and deployed a Jakarta EE-based patent management system with JSPs and Servlets on Azure, automating IP workflows and ensuring 99.9% deadline compliance.</li>
        <li>Designed a scalable Spring Boot-powered patent search API with multi-threading and indexing optimizations, leveraging Azure Blob Storage for secure document handling.</li>
      </ul>
    </div>


  </div>
</section>

        {/* Blog/Volunteering Section */}
        <section className="blog-section" id="blog">
          <div className="container">
            <div className="section-name center" data-aos="fade-up">
              <div className="content">
                <p className="above-title">Career path</p>
                <h4 className="title">Volunteering</h4>
              </div>
            </div>
            <div className="post-item-wrapper">
              <article className="post-item" data-aos="fade-up" data-aos-delay="50">
                <figure>
                  <img src="/assets/img/streetcause.jpg" alt="Street Cause MGIT" />
                </figure>
                <div className="content">
                  <h3 className="title">Street Cause MGIT - Student Coordinator</h3>
                  <div className="detail">
                    <time className="tag">April 2019 - June 2020</time>
                  </div>
                  <p className="body">
                    Worked as a Student Coordinator at Street Cause Mgit club, where I contributed to building socially conscious leaders. Organized impactful events such as blood and food donations, fostering a sense of togetherness and uplifting the lives of the underprivileged.
                  </p>
                </div>
              </article>
              <article className="post-item" data-aos="fade-up" data-aos-delay="100">
                <figure>
                  <img src="/assets/img/electrobuzz.jpg" alt="Electrobuzz" />
                </figure>
                <div className="content">
                  <h3 className="title">Electrobuzz - Operations Head</h3>
                  <div className="detail">
                    <time className="tag">March 2019 - May 2019</time>
                  </div>
                  <p className="body">I have served as an head of operator for conducting Electrobuzz tech fest in ECE department.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="education-skill-section" id="education">
          <div className="container">
            <div className="section-name" data-aos="fade-up">
              <p className="above-title">Learning Path</p>
              <h4 className="title">Education</h4>
            </div>
            <div className="education-skill-wrapper">
              <div className="education">
                <div className="education-item" data-aos="fade-up" data-aos-delay="100">
                  <h4 className="school">Illinois Institute of Technology</h4>
                  <p className="degree-field">Master&apos;s in Computer Science (MCS), CGPA: 3.5/4.0</p>
                  <p className="period">Aug 2023 – May 2025</p>
                  <p className="achievement">Awarded $12,000 scholarship</p>
                </div>
                <div className="education-item" data-aos="fade-up" data-aos-delay="150">
                  <h4 className="school">Jawaharlal Nehru Technological University Hyderabad</h4>
                  <p className="degree-field">Bachelor&apos;s degree - Electronics and Communications Engineering</p>
                  
                </div>
              </div>
              <div className="skill">
                <div className="description" data-aos="fade-up" data-aos-delay="50">
                  <span className="boldme">Certifications</span>
                  <ul className="ulcont">
                    <li><a href="https://www.credly.com/badges/e033e1b0-0970-4122-8cc5-f50c004d3829/linked_in_profile" target="_blank" rel="noopener noreferrer">
                        AWS Certified Cloud Practitioner – Amazon Web Services 
                      </a></li> 
                      <li><a href="https://learn.deeplearning.ai/accomplishments/e74ca176-400b-4832-88f9-99b1f8c6c8b8" target="_blank" rel="noopener noreferrer">
                        AI agents in LangGraph - DeepLearning.AI
                      </a></li> 
                      <li><a href="https://learn.deeplearning.ai/accomplishments/704e9d26-a35f-446f-9c2f-3c2401981673?usp=sharing" target="_blank" rel="noopener noreferrer">
                        AI Agentic Design Patterns with AutoGen - DeepLearning.AI
                      </a></li> 
                    <li>
                      <a href="https://www.coursera.org/account/accomplishments/verify/PL47A73VJDFG?utm_source=mobile&utm_medium=certificate&utm_content=cert_image&utm_campaign=pdf_header_button&utm_product=course" target="_blank" rel="noopener noreferrer">
                        Certified by the University of Michigan in completing Getting Started with Python (05/2021)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.udemy.com/certificate/UC-bbf83f16-9e05-4033-80ab-35744779579f/" target="_blank" rel="noopener noreferrer">
                        Data Science real-world projects in Python – UDEMY (07/2021)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.udemy.com/certificate/UC-31445f9a-129b-4679-b0f0-117ae7d74053/" target="_blank" rel="noopener noreferrer">
                        SQL for Data Analytics – UDEMY (12/2021)
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hackerrank.com/certificates/7c77d2b6c304" target="_blank" rel="noopener noreferrer">
                        Certified by HackerRank in completing Problem Solving
                      </a>
                    </li>
                    <li>
                      <a href="https://www.hackerrank.com/certificates/694d95d88ac4" target="_blank" rel="noopener noreferrer">
                        Certified by HackerRank on completing Python Programming
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact">
          <div className="container">
            <div className="contact-wrapper">
              <div className="contact-info">
                <h2 className="section-title">Contact Me</h2>
                <p className="section-subtitle">You can reach me via email:</p>
                <div className="email-box">
                  <a href="mailto:poojithannachedu.work@gmail.com" className="email-link">poojithannachedu.work@gmail.com</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}