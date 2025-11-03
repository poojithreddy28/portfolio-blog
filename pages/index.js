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
                I’m a software engineer who loves the intersection of backend engineering and applied AI. My focus is designing reliable, scalable systems - clean architectures, clear contracts, and performance-first services - so teams can move fast without breaking things.

On the Java side, I work with Spring Boot, Kafka, and cloud-native microservices, pairing CI/CD, containers, and observability to keep systems resilient and maintainable. On the AI side, I build orchestration layers, agentic workflows, and retrieval-backed experiences that automate complex tasks and improve developer and user outcomes.

What drives me is turning complexity into simple, durable solutions. I enjoy tackling distributed systems problems, evolving cloud architectures, and shipping AI-enabled features that create real leverage for engineering teams. Open to full-time roles where Java backends and AI move from proof-of-concept to production.              </p>
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
                  <li>Java (Core Java, Java EE)</li>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>HTML, CSS</li>
                  <li>C</li>
                  <li>Spring Boot</li>
                  <li>Spring MVC</li>
                  <li>Spring Security</li>
                  <li>Spring Data JPA</li>
                  <li>Spring Cloud</li>
                  <li>ReactJS</li>
                  <li>NextJS</li>
                  <li>Hibernate</li>
                  <li>JUnit</li>
                  <li>Maven</li>
                </ul>
              </div>
              <div className="service-item" data-aos="fade-up" data-aos-delay="300">
                <h4 className="vstitle">Technologies & Infrastructure</h4>
                <ul className="bulletp">
                  <li>AWS, Azure, GCP</li>
                  <li>Docker, Kubernetes</li>
                  <li>Jenkins</li>
                  <li>Prometheus, Grafana</li>
                  <li>Tempo, Loki</li>
                  <li>Log Explorer, Log Rocket</li>
                  <li>MySQL, PostgreSQL</li>
                  <li>MongoDB, Elasticsearch</li>
                  <li>Firebase</li>
                  <li>ActiveMQ, Kafka</li>
                  <li>REST API</li>
                  <li>TLS-encrypted data transfer</li>
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

          {/* <!-- The Movie Database App --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="300">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/The-Movie-Database" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/MovieDB.png" alt="The Movie Database" />
                </figure>
                <div className="detail">
                  <h4 className="title">The Movie Database</h4>
                  <div className="bottom">
                    <span className="tag">Flutter</span>
                    <span className="tag">Dart</span>
                    <span className="tag">Firebase</span>
                    <span className="tag">Provider</span>
                    <span className="tag">Dio</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- Used Cars Price Prediction --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="350">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/cars_price_prediction" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/car_price.png" alt="Used Cars Price Prediction" />
                </figure>
                <div className="detail">
                  <h4 className="title">Used Cars Price Prediction</h4>
                  <div className="bottom">
                    <span className="tag">Machine Learning</span>
                    <span className="tag">Python</span>
                    <span className="tag">Scikit-Learn</span>
                    <span className="tag">Pandas</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- Emotion Detection Using Deep Learning --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/emotion_detection_cnn" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/Emotion_Detection.png" alt="Emotion Detection" />
                </figure>
                <div className="detail">
                  <h4 className="title">Emotion Detection Using Deep Learning</h4>
                  <div className="bottom">
                    <span className="tag">TensorFlow</span>
                    <span className="tag">Keras</span>
                    <span className="tag">CNN</span>
                    <span className="tag">Computer Vision</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- GitHub Analytics Forecasting Dashboard --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="450">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/github-analytics-forecasting" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/github_analytics.png" alt="GitHub Analytics Forecasting" />
                </figure>
                <div className="detail">
                  <h4 className="title">GitHub Analytics Forecasting</h4>
                  <div className="bottom">
                    <span className="tag">React</span>
                    <span className="tag">Flask</span>
                    <span className="tag">TensorFlow</span>
                    <span className="tag">GCP</span>
                    <span className="tag">Docker</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- RetailPulse Microservices --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="500">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SpringBoot-MicroServices" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/retail_microservices.png" alt="RetailPulse" />
                </figure>
                <div className="detail">
                  <h4 className="title">RetailPulse</h4>
                  <div className="bottom">
                    <span className="tag">Spring Boot</span>
                    <span className="tag">Kafka</span>
                    <span className="tag">MongoDB</span>
                    <span className="tag">MySQL</span>
                    <span className="tag">Docker</span>
                    <span className="tag">Kubernetes</span>
                  </div>
                </div>
              </a>
            </article>
          </div>

          {/* <!-- SmartHomes E-commerce Platform --> */}
          <div className="swiper-slide" data-aos="fade-up" data-aos-delay="550">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SmartHomes" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/smart_home.png" alt="SmartHomes E-commerce" />
                </figure>
                <div className="detail">
                  <h4 className="title">SmartHomes</h4>
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
          <li data-tab="kaplan" className="active" data-aos="fade-up">Kaplan</li>
          <li data-tab="adp" data-aos-delay="50" data-aos="fade-up">ADP</li>
          <li data-tab="prometheus" data-aos-delay="100" data-aos="fade-up">Prometheus Patent Services</li>
          <li data-tab="indianservers" data-aos-delay="150" data-aos="fade-up">Indian Servers</li>
        </ul>
      </div>
    </div>

    {/* Kaplan */}
    <div className="content active" id="kaplan">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer</h4>
        <p className="location">Chicago, United States</p>
        <p className="period">May 2024 – Present</p>
        <ul className="stack-list">
          <li className="tag">Next.js</li>
          <li className="tag">Reveal.js</li>
          <li className="tag">LangGraph</li>
          <li className="tag">Gemini 1.5</li>
          <li className="tag">Redis</li>
          <li className="tag">Firebase</li>
          <li className="tag">GCP</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Built a presentation tool using Reveal.js and enhanced an MCQ generator with Plate.js and Next.js; improved UX by 25% using Redux Toolkit.</li>
        <li>Engineered AI orchestration with LangGraph and Gemini 1.5, leveraging Redis caching to reduce response time and boost system efficiency by 30%.</li>
        <li>Implemented CI/CD with GitHub Actions and Docker for Firebase and GCP Cloud Run; enabled zero-downtime rollouts and real-time debugging with LogRocket.</li>
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
        <li>Built backend services for payroll fraud detection using Spring MVC, Kafka, and JPA, increasing throughput by 60% and reducing latency.</li>
        <li>Implemented secure logging with AWS Lambda and S3, improving W-2 processing speed 14× and reducing API latency by 55%.</li>
        <li>Integrated Spring Security for method-level access control, strengthening data protection and compliance.</li>
        <li>Migrated 120+ enterprise applications from EV5 to EV6 with OneNext tool using AWS cloud services.</li>
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
        <li>Automated IP workflows via Jakarta EE system using Java Servlets, JSP, and MySQL, reducing manual work and achieving 99.9% deadline compliance.</li>
        <li>Built a multi-threaded Spring Boot search API with indexing optimizations for legal documents across MySQL and NoSQL.</li>
        <li>Developed a secure patent repository using TLS encryption and AWS S3, enabling global data access with compliance.</li>
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
          <li className="tag">API Development</li>
          <li className="tag">Authentication</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Developed a lightweight API testing tool using React and Java to streamline testing workflows.</li>
        <li>Built APIs for authentication and DB operations, increasing reliability and maintainability.</li>
        <li>Integrated MongoDB for logging API activity, enhancing observability and data security.</li>
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
                  <p className="degree-field">Master&apos;s degree - Computer Science</p>
                
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