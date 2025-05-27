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
                I am a Computer Science graduate student at Illinois Institute of Technology Chicago, and currently serving as a Software Engineer Intern at Reality AI. I specialize in full-stack development, cloud architecture, and AI integration with expertise in Spring ecosystem, microservices, and containerization technologies. My technical proficiency spans Java, Python, JavaScript, and frameworks like Spring Boot and React, complemented by experience with databases including PostgreSQL, MongoDB, and Elasticsearch. At ADP, I engineered high-performance backend services and microservices that improved system throughput by 30% and enhanced fraud detection efficiency by 35%. I&apos;ve  successfully implemented CI/CD pipelines, observability solutions, and scaled applications using AWS, Docker, and Kubernetes. With over 400 coding problems solved on platforms like LeetCode and certifications including AWS Cloud Practitioner, I combine strong algorithmic thinking with practical engineering skills to deliver reliable, scalable, and user-centric applications.
              </p>
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

          {/* <!-- Microservices-Based Retail Management System --> */}
          {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="200">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SpringBoot-MicroServices" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/retail_microservices.png" alt="Retail Management System" />
                </figure>
                <div className="detail">
                  <h4 className="title">Retail Management System</h4>
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
          {/* <div className="swiper-slide" data-aos="fade-up" data-aos-delay="250">
            <article className="portfolio-item">
              <a href="https://github.com/poojithreddy28/SmartHomes" target="_blank" rel="noopener noreferrer">
                <figure>
                  <img src="/assets/img/smart_home.png" alt="SmartHomes E-commerce" />
                </figure>
                <div className="detail">
                  <h4 className="title">SmartHomes E-commerce Platform</h4>
                  <div className="bottom">
                    <span className="tag">Flask</span>
                    <span className="tag">React</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">OpenAI</span>
                    <span className="tag">Docker</span>
                    <span className="tag">Kubernetes</span>
                  </div>
                </div>
              </a>
            </article>
          </div> */} 

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
          <li data-tab="reality" className="active" data-aos="fade-up">Reality Agent Platform</li>
          <li data-tab="adp" data-aos-delay="50" data-aos="fade-up">ADP</li>
          <li data-tab="prometheus" data-aos-delay="100" data-aos="fade-up">Prometheus Patent Services</li>
          <li data-tab="indianservers" data-aos-delay="150" data-aos="fade-up">Indian Servers</li>
        </ul>
      </div>
    </div>

    <div className="content active" id="reality">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer Intern</h4>
        <p className="location">San Francisco, United States</p>
        <p className="period">Oct 2024 – Present</p>
        <ul className="stack-list">
          <li className="tag">Python</li>
          <li className="tag">FastAPI</li>
          <li className="tag">LangGraph</li>
          <li className="tag">Spring Boot</li>
          <li className="tag">Firestore</li>
          <li className="tag">PostgreSQL</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Designed and implemented backend solutions for AI workflows using Python FastAPI, LangGraph, and Spring Boot, improving agent responsiveness and system efficiency.</li>
        <li>Enhanced MCQ generator with Plate.js, Next.js, Reveal.js, and Tiptap editor, boosting content generation efficiency and presentation capabilities.</li>
        <li>Streamlined CI/CD pipelines with Docker and GitHub Actions; enabled zero-downtime Firebase and GCP CloudRun deployments with real-time debugging via Log Explorer and LogRocket.</li>
      </ul>
    </div>

    <div className="content" id="adp">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Software Engineer</h4>
        <p className="location">Hyderabad, India</p>
        <p className="period">Apr 2022 – Jul 2023</p>
        <ul className="stack-list">
          <li className="tag">Spring Boot</li>
          <li className="tag">Kafka</li>
          <li className="tag">Redis</li>
          <li className="tag">JPA</li>
          <li className="tag">MongoDB</li>
          <li className="tag">AWS</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Developed and refined backend services using Spring Boot MVC, Kafka, Redis, JPA, and Hibernate, improving throughput by 30% and reducing latency.</li>
        <li>Launched microservices with MongoRepository handling 300+ daily fraud alerts, boosting fraud detection by 35%.</li>
        <li>Built a data logging pipeline using AWS S3 for secure, scalable API storage and retrieval.</li>
        <li>Led migration of 120+ applications from EV5 to EV6 with OneNext Tool, achieving 99.9% uptime and improved operational efficiency.</li>
      </ul>
    </div>

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
          <li className="tag">AWS S3</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Automated IP workflows via a Jakarta EE system with Java Servlets, JSP, and MySQL, cutting manual workload by 40%.</li>
        <li>Built a multi-threaded Spring Boot search API with indexing for legal data processing across MySQL and NoSQL databases.</li>
        <li>Developed a secure patent repository using TLS and AWS S3, enabling compliant global data access.</li>
      </ul>
    </div>

    <div className="content" id="indianservers">
      <div className="headline" data-aos-delay="50" data-aos="fade-up">
        <h4 className="job-title">Machine Learning Intern</h4>
        <p className="location">Hyderabad, India</p>
        <p className="period">Jul 2021 – Aug 2021</p>
        <ul className="stack-list">
          <li className="tag">TensorFlow</li>
          <li className="tag">Keras</li>
          <li className="tag">Python</li>
          <li className="tag">Machine Learning</li>
        </ul>
      </div>
      <div className="line"></div>
      <ul className="responsibilities">
        <li>Explored supervised and unsupervised ML algorithms and deep learning with Keras and TensorFlow.</li>
        <li>Assisted interns in resolving Python and ML doubts, improving onboarding and team productivity.</li>
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
                  <p className="date">August 2023 - Expected May 2025</p>
                </div>
                <div className="education-item" data-aos="fade-up" data-aos-delay="150">
                  <h4 className="school">Mahatma Gandhi Institute Of Technology</h4>
                  <p className="degree-field">Bachelor&apos;s degree - Electronics and Communications Engineering</p>
                  <p className="date">2018 - 2022</p>
                </div>
              </div>
              <div className="skill">
                <div className="description" data-aos="fade-up" data-aos-delay="50">
                  <span className="boldme">Certifications</span>
                  <ul className="ulcont">
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