import { useEffect } from 'react';
import { motion } from 'framer-motion';
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
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="hero-section">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <motion.h1 
                className="full-name"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Poojith Reddy 
              </motion.h1>
              <motion.p 
                className="about"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Senior Software Engineer specializing in scalable backend systems, cloud infrastructure, and AI-powered automation. I architect resilient microservices and distributed data pipelines using Java Spring, Python, and AWS services. I love designing intelligent workflows with RAG architectures, agent frameworks, and modern LLM integrations.
                <br /><br />
                I turn complex problems into elegant, production-ready solutions that improve system performance and engineering velocity. From high-throughput APIs to infrastructure automation, I build systems that scale reliably and empower teams to ship faster.
              </motion.p>
              <motion.ul 
                className="social-icons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.li
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" />
                  </a>
                </motion.li>
                <motion.li
                  whileHover={{ scale: 1.15, rotate: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
                    <Icon name="linkedin" />
                  </a>
                </motion.li>
              </motion.ul>
            </div>
            {/* <div className="image" data-aos="fade-up">
              <div className="cover">
                <Icon name="lines-vector" />
              </div>
              <img className="avatar" src="/assets/img/avatar.png" alt="Poojith Reddy Annachedu" />
            </div> */}
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
                  <motion.li data-tab="bofa" className="active" data-aos="fade-up" whileHover={{ x: 10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>Bank of America</motion.li>
                  <motion.li data-tab="iit" data-aos-delay="50" data-aos="fade-up" whileHover={{ x: 10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>Illinois Institute of Technology</motion.li>
                  <motion.li data-tab="adp" data-aos-delay="100" data-aos="fade-up" whileHover={{ x: 10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>ADP</motion.li>
                  <motion.li data-tab="hca" data-aos-delay="150" data-aos="fade-up" whileHover={{ x: 10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>HCA Healthcare</motion.li>
                  <motion.li data-tab="indianservers" data-aos-delay="200" data-aos="fade-up" whileHover={{ x: 10, transition: { duration: 0.2 } }} whileTap={{ scale: 0.98 }}>Indian Servers</motion.li>
                </ul>
              </div>
            </div>

            {/* Bank of America */}
            <motion.div 
              className="content active" 
              id="bofa"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Senior Software Engineer</h4>
                <p className="location">Chicago, Illinois, United States (Hybrid)</p>
                <p className="period">May 2024 – Present</p>
                <ul className="stack-list">
                  <li className="tag">Java</li>
                  <li className="tag">Spring Boot</li>
                  <li className="tag">AWS</li>
                  <li className="tag">Microservices</li>
                  <li className="tag">CI/CD</li>
                  <li className="tag">Distributed Systems</li>
                </ul>
              </div>
              <div className="line"></div>
              <motion.ul 
                className="responsibilities"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  Designing and building scalable backend systems and distributed services using Java, Spring Boot, and cloud-native patterns to support high-performance financial applications.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  Implementing microservices architectures with event-driven messaging, RESTful APIs, and robust data persistence layers to ensure reliability and performance at scale.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  Working with AWS infrastructure, CI/CD pipelines, and containerization to deliver resilient, observable systems that enable engineering teams to move fast without breaking things.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Collaborating on AI-enabled features and automation workflows using modern agent frameworks, RAG architectures, and intelligent document processing to create operational leverage.
                </motion.li>
              </motion.ul>
            </motion.div>

            {/* Illinois Institute of Technology */}
            <div className="content" id="iit">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Graduate Research And Teaching Assistant</h4>
                <p className="location">Chicago, Illinois, United States (On-site)</p>
                <p className="period">Sep 2023 – Apr 2024</p>
                <ul className="stack-list">
                  <li className="tag">Java</li>
                  <li className="tag">Computer Networking</li>
                  <li className="tag">Research</li>
                  <li className="tag">Teaching</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li>Assisted in teaching and mentoring students in undergraduate and graduate computer science courses, providing guidance on programming concepts, algorithms, and system design.</li>
                <li>Conducted research on distributed systems, networking protocols, and database optimization techniques, contributing to academic publications and innovative solutions.</li>
                <li>Supported course preparation, grading, and lab sessions while helping students develop strong technical foundations in Java, networking, and software engineering principles.</li>
              </ul>
            </div>

            {/* ADP */}
            <div className="content" id="adp">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Software Engineer</h4>
                <p className="location">Hyderabad, India</p>
                <p className="period">Jul 2022 – Jul 2023</p>
                <ul className="stack-list">
                  <li className="tag">Spring Boot</li>
                  <li className="tag">Spring MVC</li>
                  <li className="tag">Kafka</li>
                  <li className="tag">Spring Data JPA</li>
                  <li className="tag">AWS</li>
                  <li className="tag">Lambda</li>
                  <li className="tag">DynamoDB</li>
                  <li className="tag">Spring Security</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li>Optimized distributed, high-performance backend for ADP Payroll Fraud Detection using Spring MVC, Kafka, and Spring Data JPA, leveraging caching and asynchronous processing to boost throughput by 60% and reduce latency.</li>
                <li>Implemented secure, scalable data logging for ADP Wage Payments with AWS Lambda and S3, improving traceability and audit readiness.</li>
                <li>Enhanced W-2 processing speed by 14× and reduced API response time by 55% using event-driven AWS Step Functions, CloudWatch, and DynamoDB.</li>
                <li>Integrated method-level Spring Security with AWS Cognito for granular role-based access control, strengthening data protection and compliance.</li>
                <li>Migrated 120+ enterprise applications from EV5 to EV6 using ADP&apos;s OneNext tool and AWS EC2 and CloudFormation to modernize infrastructure.</li>
              </ul>
            </div>

            {/* HCA Healthcare */}
            <div className="content" id="hca">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Software Engineer & Intern</h4>
                <p className="location">Hyderabad, Telangana, India (Hybrid)</p>
                <p className="period">Jan 2020 – Jul 2022</p>
                <ul className="stack-list">
                  <li className="tag">Java</li>
                  <li className="tag">Spring Boot</li>
                  <li className="tag">MySQL</li>
                  <li className="tag">Software Infrastructure</li>
                  <li className="tag">Microservices</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li>Developed and maintained backend services for healthcare management systems using Java and Spring Boot, supporting critical patient data processing and clinical workflows.</li>
                <li>Built RESTful APIs and microservices to integrate legacy systems with modern cloud infrastructure, improving system reliability and performance.</li>
                <li>Collaborated with cross-functional teams to design database schemas, optimize queries, and ensure data integrity across distributed healthcare applications.</li>
                <li>Participated in code reviews, testing, and deployment processes while following agile methodologies and best practices for software development in the healthcare domain.</li>
              </ul>
            </div>

            {/* Indian Servers */}
            <div className="content" id="indianservers">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Full-stack Developer (Apprenticeship)</h4>
                <p className="location">Hyderabad, Telangana, India (Hybrid)</p>
                <p className="period">May 2021 – Jul 2021</p>
                <ul className="stack-list">
                  <li className="tag">React</li>
                  <li className="tag">Java</li>
                  <li className="tag">MongoDB</li>
                  <li className="tag">Python</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li>Assisted in developing a lightweight API testing tool using React and Java to streamline basic testing workflows.</li>
                <li>Supported the creation of APIs for authentication and database operations, improving system reliability.</li>
                <li>Contributed to integrating MongoDB for logging API activity and enhancing data security.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="service-section" id="services">
          <div className="container">
            <div className="section-name center" data-aos="fade-up">
              <div className="content">
                <p className="above-title">Skills</p>
                <h4 className="title">Specialized in</h4>
              </div>
            </div>
            <div className="service-item-wrapper">
              <motion.div 
                className="service-item" 
                data-aos="fade-up" 
                data-aos-delay="200"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
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
              </motion.div>
              <motion.div 
                className="service-item" 
                data-aos="fade-up" 
                data-aos-delay="250"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
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
              </motion.div>
              <motion.div 
                className="service-item" 
                data-aos="fade-up" 
                data-aos-delay="300"
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                  transition: { duration: 0.3 }
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
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
              </motion.div>
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
            <motion.article 
              className="portfolio-item"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <a href="https://github.com/poojithreddy28/github-analytics-forecasting" target="_blank" rel="noopener noreferrer">
                <motion.figure
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/assets/img/github_analytics.png" alt="GitHub Analytics Forecasting Platform" />
                </motion.figure>
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
            </motion.article>
          </div>

          {/* <!-- RetailPulse SmartHomes --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="350">
            <motion.article 
              className="portfolio-item"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <a href="https://github.com/poojithreddy28/SpringBoot-MicroServices" target="_blank" rel="noopener noreferrer">
                <motion.figure
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/assets/img/retail_microservices.png" alt="RetailPulse SmartHomes" />
                </motion.figure>
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
            </motion.article>
          </div>

          {/* <!-- SmartHomes E-commerce Platform --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
            <motion.article 
              className="portfolio-item"
              whileHover={{ 
                y: -10,
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                transition: { duration: 0.3 }
              }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a href="https://github.com/poojithreddy28/SmartHomes" target="_blank" rel="noopener noreferrer">
                <motion.figure
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img src="/assets/img/smart_home.png" alt="SmartHomes E-commerce" />
                </motion.figure>
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
            </motion.article>
          </div>

        </div>
      </div>
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
                <motion.div 
                  className="education-item" 
                  data-aos="fade-up" 
                  data-aos-delay="100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h4 className="school">Illinois Institute of Technology</h4>
                  <p className="degree-field">Master&apos;s in Computer Science (MCS), CGPA: 3.5/4.0</p>
                  <p className="period">Aug 2023 – May 2025</p>
                  <p className="achievement">Awarded $12,000 scholarship</p>
                </motion.div>
                <motion.div 
                  className="education-item" 
                  data-aos="fade-up" 
                  data-aos-delay="150"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <h4 className="school">Jawaharlal Nehru Technological University Hyderabad</h4>
                  <p className="degree-field">Bachelor&apos;s degree - Electronics and Communications Engineering</p>
                  
                </motion.div>
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
            <motion.div 
              className="contact-wrapper"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="contact-info">
                <motion.h2 
                  className="section-title"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Contact Me
                </motion.h2>
                <motion.p 
                  className="section-subtitle"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  You can reach me via email:
                </motion.p>
                <motion.div 
                  className="email-box"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                >
                  <a href="mailto:poojithannachedu.work@gmail.com" className="email-link">poojithannachedu.work@gmail.com</a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </motion.main>
    </Layout>
  );
}