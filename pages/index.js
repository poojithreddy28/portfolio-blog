import { useEffect } from 'react';
import Layout from '../components/Layout';
import Head from 'next/head';
import Link from 'next/link';
import Icon from '../components/Icon';

export default function Home() {
  useEffect(() => {
    // Initialize any client-side scripts here
  }, []);

  return (
    <Layout title="Poojith Reddy Annachedu | Portfolio">
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="content" data-aos="fade-up">
              <h1 className="full-name">Poojith Reddy <span className="primary">Annachedu.</span></h1>
              <p className="about">
                I am a Computer Science graduate student at Illinois Institute of Technology Chicago, and currently serving as a Software Engineer Intern at Reality AI. I specialize in full-stack development, cloud architecture, and AI integration with expertise in Spring ecosystem, microservices, and containerization technologies. My technical proficiency spans Java, Python, JavaScript, and frameworks like Spring Boot and React, complemented by experience with databases including PostgreSQL, MongoDB, and Elasticsearch. At ADP, I engineered high-performance backend services and microservices that improved system throughput by 30% and enhanced fraud detection efficiency by 35%. I've successfully implemented CI/CD pipelines, observability solutions, and scaled applications using AWS, Docker, and Kubernetes. With over 400 coding problems solved on platforms like LeetCode and certifications including AWS Cloud Practitioner, I combine strong algorithmic thinking with practical engineering skills to deliver reliable, scalable, and user-centric applications.
              </p>
              <ul className="social-icons">
                <li>
                  <a href="https://github.com/poojithreddy28" target="_blank" rel="noopener noreferrer">
                    <Icon name="github" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/poojith-reddy-annachedu/" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className="image" data-aos="fade-up">
              <div className="cover">
                <svg className="lines-vector" viewBox="0 0 199 210">
                  {/* Since SVG sprite is not easily usable in Next.js, we'll use an inline SVG or image */}
                  {/* You can replace this with your actual lines-vector SVG */}
                </svg>
              </div>
              <img className="avatar" src="/assets/img/avatar.png" alt="Poojith Reddy Annachedu" />
            </div>
          </div>
        </section>

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
                  <li>API Integration</li>
                  <li>Agile Methodologies</li>
                  <li>Machine Learning</li>
                  <li>App Development</li>
                  <li>Unit and Integration testing</li>
                </ul>
              </div>
              <div className="service-item" data-aos="fade-up" data-aos-delay="250">
                <h4 className="vstitle">Languages/Frameworks</h4>
                <ul className="bulletp">
                  <li>Python</li>
                  <li>Java</li>
                  <li>C</li>
                  <li>SQR</li>
                  <li>Dart</li>
                  <li>HTML, CSS</li>
                  <li>Javascript</li>
                  <li>Flask</li>
                  <li>Flutter</li>
                  <li>ADPR</li>
                </ul>
              </div>
              <div className="service-item" data-aos="fade-up" data-aos-delay="300">
                <h4 className="vstitle">Technologies & Databases</h4>
                <ul className="bulletp">
                  <li>Big Data</li>
                  <li>Data Analysis</li>
                  <li>RESTAPI</li>
                  <li>PostgreSQL, MySQL, Oracle DB</li>
                  <li>Computer Networks</li>
                  <li>Python Modules: NumPy, Pandas, Matplotlib, OpenCV</li>
                  <li>Tools: Git, VS Code, UltraEdit, Jupiter Notebook, PyCharm</li>
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
                  {/* Arrow left icon */}
                </div>
                <div className="next">
                  {/* Arrow right icon */}
                </div>
              </div>
            </div>
            <div className="portfolio-item-wrapper">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide" data-aos="fade-up" data-aos-delay="200">
                    <article className="portfolio-item">
                      <a href="https://github.com/poojithreddy28/The-Movie-Database" target="_blank" rel="noopener noreferrer">
                        <figure>
                          <img src="/assets/img/MovieDB.png" alt="The Movie Database" />
                        </figure>
                        <div className="detail">
                          <h4 className="title">The Movie Database</h4>
                          <div className="bottom">
                            <span className="tag">Flutter</span>
                            <span className="tag">RESTAPI</span>
                            <span className="tag">Dart</span>
                          </div>
                        </div>
                      </a>
                    </article>
                  </div>
                  
                  <div className="swiper-slide" data-aos="fade-up" data-aos-delay="300">
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
                            <span className="tag">Scikit Learn</span>
                          </div>
                        </div>
                      </a>
                    </article>
                  </div>
                  
                  <div className="swiper-slide" data-aos="fade-up" data-aos-delay="400">
                    <article className="portfolio-item">
                      <a href="https://github.com/poojithreddy28/emotion_detection_cnn" target="_blank" rel="noopener noreferrer">
                        <figure>
                          <img src="/assets/img/Emotion_Detection.png" alt="Emotion Detection Using Deep Learning" />
                        </figure>
                        <div className="detail">
                          <h4 className="title">Emotion Detection Using Deep Learning</h4>
                          <div className="bottom">
                            <span className="tag">CNN</span>
                            <span className="tag">Keras</span>
                            <span className="tag">Tensorflow</span>
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
                  {/* Arrow right icon */}
                </div>
                <ul>
                  <li data-tab="apple" className="active" data-aos="fade-up">ADP</li>
                  <li data-tab="microsoft" data-aos-delay="50" data-aos="fade-up">Indian Servers</li>
                </ul>
              </div>
            </div>
            <div className="content active" id="apple">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Member Technical</h4>
                <p className="location">Hyderabad, India</p>
                <p className="period">July 2022- July 2023</p>
                <ul className="stack-list">
                  <li className="tag">Java</li>
                  <li className="tag">SQL</li>
                  <li className="tag">Data Analysis</li>
                  <li className="tag">SQR</li>
                  <li className="tag">ADPR</li>
                  <li className="tag">HCM</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li data-aos-delay="50" data-aos="fade-up">Developed optimized Programs for generating complex HCM-related reports using Structured Query Reporting Language (SQR) and Java.</li>
                <li data-aos-delay="100" data-aos="fade-up">Implemented user controls to enhance the user interface, reducing complexity and addressing major panel issues in the front end. Applied pragmatic solutions to optimize the UX.</li>
                <li data-aos-delay="150" data-aos="fade-up">Deployed 120-plus client applications from Enterprise Version EV5 to the latest version EV6 emphasizing high availability and low latency.</li>
                <li data-aos-delay="200" data-aos="fade-up">Performed Data analysis on ad-hoc requests on whether clients can be upgraded to the latest version or not.</li>
                <li data-aos-delay="250" data-aos="fade-up">Played a core role in developing the One-Next tool, focusing on automation and reducing work complexity by 40 percent. Collaborated with cross-functional teams, including product and design, to ensure effective implementation.</li>
                <li data-aos-delay="300" data-aos="fade-up">Wrote SQL Scripts, for CRUD operations with key relations based on client requests before application deployments.</li>
              </ul>
            </div>
            <div className="content" id="microsoft">
              <div className="headline" data-aos-delay="50" data-aos="fade-up">
                <h4 className="job-title">Machine Learning Intern</h4>
                <p className="location">Hyderabad, India</p>
                <p className="period">July 2021 - August 2021</p>
                <ul className="stack-list">
                  <li className="tag">Deep Learning</li>
                  <li className="tag">Keras</li>
                  <li className="tag">Tensorflow</li>
                  <li className="tag">Machine Learning</li>
                </ul>
              </div>
              <div className="line"></div>
              <ul className="responsibilities">
                <li>Has been exposed to supervised and unsupervised machine learning algorithms and learned the basics of deep learning tools like Tensorflow, Keras, and computer vision.</li>
                <li>Assisted incoming interns in resolving doubts and improving their fundamentals in Python and Machine learning-related areas.</li>
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
                  <p className="degree-field">Master's degree - Computer Science</p>
                  <p className="date">August 2023 - Expected May 2025</p>
                </div>
                <div className="education-item" data-aos="fade-up" data-aos-delay="150">
                  <h4 className="school">Mahatma Gandhi Institute Of Technology</h4>
                  <p className="degree-field">Bachelor's degree - Electronics and Communications Engineering</p>
                  <p className="date">2018 - 2022</p>
                </div>
              </div>
              <div className="skill">
                {/* Here's the fix - don't wrap the <ul> inside a <p> */}
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