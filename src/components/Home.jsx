import styles from '../assets/css/HomeStyles.module.css'
import animation from '../assets/images/animation.gif'
import jsLogo from '../assets/images/JavaScript.png'
import pythonLogo from '../assets/images/Python.png'
import clock from '../assets/images/Clock.png'
import bilguun  from '../assets/images/billy.jpeg'
import saruul  from '../assets/images/saruul.jpeg'




const Home = () => {

  return (
    <div className={`${styles.homePageContainer}`}>
      {/* desktop */}
      <section className={`row ${styles.section1} section1`}>
        <div className={`col-lg-6 col-6 ${styles.homeContainer1}`}>
          <h2>One-Time Software Development Course</h2>
          <h1>Collaborate<br />and Evolve</h1>
          <h2>Gain essential IT skills to stand out <br />in today's tech world</h2>
        </div>
        <div className={`col-lg-6 col-6 ${styles.homeContainer2}`}>
          <img src={animation} alt="Animation" />
        </div>
      </section>
      {/* Mobile */}
      <section className={`row ${styles.section1Mobile} section1`}>
        <div className={`col-12 ${styles.homeContainer2}`}>
          <img src={animation} alt="Animation" />
        </div>
        <div className={`col-12 ${styles.homeContainer1}`}>
          <h2>One-Time Software Development Course</h2>
          <h1>Collaborate<br />and Evolve</h1>
          <h2>Gain essential IT skills to stand out <br />in today's tech world</h2>
        </div>
      </section>

      <section className={`row ${styles.section2}`}>
        <div className={`${styles.mainContentWrapper1}`}>
          <div className={` ${styles.jsInfo}`}>
            <div className={`col-lg-12 col-md-6 col-12 ${styles.contentWrapper1}`}>
              <span>
                <img src={jsLogo} alt="JavaScript Logo" />
                <h1>JavaScript</h1>
              </span>
              <p>JavaScript is a user-friendly, full-stack framework for dynamic websites and apps. Our MERN stack—MongoDB, ExpressJS, ReactJS, and NodeJS—enables you to build complex web pages with user registration and interactive features through hands-on projects.</p>
            </div>
          </div>
          <div className={` ${styles.pythonInfo}`}>
            <div className={`col-lg-12 col-md-6 col-12 ${styles.contentWrapper2}`}>
              <span>
                <img src={pythonLogo} alt="Python Logo" />
                <h1>Python</h1>
              </span>
              <p>Python is a highly sought-after programming language. Our stack includes Python, Flask for server-side, MySQL for data, AJAX for asynchronous, APIs, and Jinja2 for templates. Hands-on project will help you master these technologies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className={`row ${styles.section3}`}>
        <div className={`col-lg-6 col-md-6 col-12 ${styles.overviewContainer1}`}>
          {/* <h2>Monday-Thursday</h2> */}
          <h1>Program<br />Overview</h1>
        </div>
        <div className={`col-lg-6 col-md-6 col-12 ${styles.overviewContainer2}`}>
          <div className={`${styles.overviewSubheader}`}>
            <img src={clock} alt="Clock" />
            <h2>Online</h2>
          </div>
          <p>Learn two complete web development stacks through live, hands-on instruction in an immersive learning environment.</p>
          <ul>
            <li><i className="fa-regular fa-clock"></i>10 months</li>
            {/* <li><i className="fa-regular fa-calendar"></i>Monday - Thursday Lecture days</li> */}
            <li><i className="fa-solid fa-globe"></i>Online Attendance</li>
            <li><i className="fa-regular fa-star"></i>Beginner Friendly!</li>
          </ul>
        </div>
      </section>

      <section className={`row ${styles.mobileSection3}`}>
        <div className={`col-lg-6 col-12 ${styles.overviewContainer1}`}>
          {/* <h2>Monday-Thursday</h2> */}
          <h1>Program<br />Overview</h1>
        </div>
        <div className={`col-lg-6 col-12 ${styles.overviewContainer2}`}>
          <div className={`${styles.overviewSubContainer}`}>
            <div className={`${styles.overviewSubheader}`}>
              <img src={clock} alt="Clock" />
              <h2>Online</h2>
            </div>
            <p>Learn two complete web development stacks through live, hands-on instruction in an immersive learning environment.</p>
          </div>
        </div>
      </section>

      {/* Desktop Course Overview */}
      <section className={`row ${styles.courseOverViewSection}`}>
        <div className={`${styles.courseOverViewHeader}`}>
          <h1 >Curriculum Overview</h1>
        </div>
        <div className={`${styles.courseOverViewContainer}`}>
          <span className={`${styles.courseOverViewSubContainer1}`}>
            <h4>Week 1 to 8</h4>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#fundamentals" aria-label="Open"></button>
          </span>
          <h2>Fundamentals</h2>
          <div className={`modal fade ${styles.modal}`} id="fundamentals" tabIndex="-1" aria-labelledby="fundamentalsLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-title " id="fundamentals">Week 1 to 8</span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <h1>Fundamentals</h1>
                  <p>
                  During Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this six week course, students should be able to build out static web pages with JavaScript interactivity.
                  </p>
                  <p>What you'll focus on</p>
                  <ul>
                    <li>Basic computer literacy</li>
                    <li>Algorithmic foundations</li>
                    <li> HTML, CSS, & JavaScript</li>
                    <li>Git/Github</li>
                    <li>HTTP Request Response</li>
                    <li>Optional: jQuery & Wireframing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.courseOverViewContainer}`}>
          <span className={`${styles.courseOverViewSubContainer1}`}>
            {/* <h4>Week 9 to 24</h4> */}
            <h4>Week 9 to 39</h4>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#mern" aria-label="Open"></button>
          </span>
          <h2>Full-Stack MERN</h2>
          <div className={`modal fade ${styles.modal}`} id="mern" tabIndex="-1" aria-labelledby="mernLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                <span className="modal-title " id="fundamentals">Week 25 to 39</span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <h1>Full-Stack MERN</h1>
                <p>
                  Explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and Node.
                </p>
                <p>
                What you'll focus on
                </p>
                  <ul>
                    <li>JavaScript Fundamentals & OOP</li>
                    <li>Node.JS</li>
                    <li>Express.JS</li>
                    <li>Socket.io</li>
                    <li>MongoDB</li>
                    <li>React</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className={`${styles.courseOverViewContainer}`}>
          <span className={`${styles.courseOverViewSubContainer1}`}>
            <h4>Week 25 to 39</h4>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#python" aria-label="Open"></button>
          </span>
          <h2>Full-Stack Python</h2>
          <div className={`modal fade ${styles.modal}`} id="python" tabIndex="-1" aria-labelledby="pythonLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                <span className="modal-title " id="fundamentals">Week 8 to 24</span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <h1>Full-Stack Python</h1>
                <p>
                  Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classmates and instructor.
                </p>
                <p>What you'll focus on</p>
                  <ul>
                    <li>Python Fundamentals & OOP</li>
                    <li>MySQL</li>
                    <li>Flask</li>
                    <li>MVC Framework</li>
                    <li>ERD / Database Design</li>
                    <li>Web Security Basics</li>
                    <li>Object Relational Mapper</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className={`${styles.courseOverViewContainer}`}>
          <span className={`${styles.courseOverViewSubContainer1}`}>
            <h4>Week 40 to 44</h4>
            <button type="button" className="btn" data-bs-toggle="modal" data-bs-target="#project" aria-label="Open"></button>
          </span>
          <h2>Hands-On Projects & Portfolio Creation</h2>
          <div className={`modal fade ${styles.modal}`} id="project" tabIndex="-1" aria-labelledby="projectLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
              <div className="modal-content">
                <div className="modal-header">
                <span className="modal-title " id="fundamentals">Week 40 to 44</span>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                <h1>Hands-On Projects & Portfolio Creation</h1>
                <p>
                  After mastering the fundamentals and full-stack technologies (Python and JavaScript), you'll apply your knowledge through hands-on projects. This phase will focus on real-life scenarios, preparing you to build a portfolio that showcases your practical experience and development skills.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Course Overview */}
      <section className={`row ${styles.mobileCourseOverViewSection}`}>
        <div className={`${styles.mobileCourseOverViewHeader}`}>
          <h1 >Curriculum Overview</h1>
        </div>
        <div className={`${styles.mobileCourseOverViewContainer}`}>
          <div className={`${styles.mobileSubHeader}`}>
            <span>Week 1 to 8</span>
            <h5>Fundamentals</h5>
          </div>
          <div className={`${styles.mobileCourseOverView}`}>
            <p>
              During Fundamentals, you’ll be introduced to HTML, CSS, and JavaScript along with other common tools in the industry. At the end of this six week course, students should be able to build out static web pages with JavaScript interactivity.
            </p>
            What you'll focus on
            <ul>
              <li>Basic computer literacy</li>
              <li>Algorithmic foundations</li>
              <li> HTML, CSS, & JavaScript</li>
              <li>Git/Github</li>
              <li>HTTP Request Response</li>
              <li>Optional: jQuery & Wireframing</li>
            </ul>
          </div>
        </div>

        <div className={`${styles.mobileCourseOverViewContainer}`}>
          <div className={`${styles.mobileSubHeader}`}>
            {/* <span>Week 9 to 24</span> */}
            <span>Week 9 to 39</span>
            <h5>Full-Stack MERN</h5>
          </div>
          <div className={`${styles.mobileCourseOverView}`}>
            <p>
              Explore your second full-stack language: JavaScript. Studying a wide-range of applicable formats, students can obtain familiarity with building web applications using common industry technologies like MongoDB, Express, React, and Nod
            </p>
            What you'll focus on
            <ul>
              <li>JavaScript Fundamentals & OOP</li>
              <li>Node.JS</li>
              <li>Express.JS</li>
              <li>Socket.io</li>
              <li>MongoDB</li>
              <li>React</li>
            </ul>
          </div>
        </div>
        {/* <div className={`${styles.mobileCourseOverViewContainer}`}>
          <div className={`${styles.mobileSubHeader}`}>
            <span>Week 25 to 39</span>
            <h5>Full-Stack Python</h5>
          </div>
          <div className={`${styles.mobileCourseOverView}`}>
            <p>
              Dive into the first full-stack language: Python. Beginning with small projects, you’ll work your way up to designing a full framework project alongside your classmates and instructor.
            </p>
            What you'll focus on
            <ul>
              <li>Python Fundamentals & OOP</li>
              <li>MySQL</li>
              <li>Flask</li>
              <li>MVC Framework</li>
              <li>ERD / Database Design</li>
              <li>Web Security Basics</li>
              <li>Object Relational Mapper</li>
            </ul>
          </div>
        </div> */}
        <div className={`${styles.mobileCourseOverViewContainer}`}>
          <div className={`${styles.mobileSubHeader}`}>
            <span>Week 40 to 44</span>
            <h5>Hands-On Projects & Portfolio Creation</h5>
          </div>
          <div className={`${styles.mobileCourseOverView}`}>
            <p style={{ 'margin': '0' }}>
              After mastering the fundamentals and full-stack technologies (Python and JavaScript), you'll apply your knowledge through hands-on projects. This phase will focus on real-life scenarios, preparing you to build a portfolio that showcases your practical experience and development skills.
            </p>
          </div>
        </div>

      </section>
      {/* About Us */}
      <section className={`row ${styles.section5}`}>
        <div className={`${styles.whoWeAreContainer}`}>
          <h1 className='col-lg-6 col-md-6 col-12'>Who we are</h1>
          <div className={`col-lg-6 col-md-6 col-12 ${styles.aboutUsBrief}`}>
            <h2>Full Stack Developer and UI UX Designer</h2>
            <p>Develop the essential IT skills needed to thrive and distinguish yourself in today’s ever-evolving tech landscape. With hands-on experience and up-to-date knowledge, gain the expertise that employers seek and stand out as a skilled professional ready to tackle the challenges of the digital world."</p>
          </div>
        </div>
        <div className={`${styles.containerBill}`}>
          <div className={`col-lg-6 col-md-6 col-12 ${styles.about}`}>
            <h1>Bilguun Zorigtbaatar</h1>
            <h3>Fullstack Developer</h3>
            <p>
              Hi!, I'm Bilguun Zorigtbaatar, Fullstack Developer with over three years of experience in fullstack development and QA automation. I have led projects and instructed software developers to create robust, user-friendly web applications. Currently, I am a School Academic System Developer at a college in the U.S. 
            </p>
          </div>
          <img src={bilguun} alt="Bilguun Zorigtbaatar" className='col-lg-6 col-md-6 col-12'/>
        </div>
        <div className={`${styles.containerSaruul}`}>
          <img src={saruul} alt="Saruul Enkhbold" className='col-lg-6 col-md-6 col-12'/>
          <div className={`col-lg-6 col-md-6 col-12 ${styles.about}`}>
            <h1>Saruul Enkhbold</h1>
            <h3>Senior Product Designer</h3>
            <p>Hi! I’m Saruul Enkhbold, a Senior UI/UX Designer and AR Developer with over four years of experience, and I’m passionate about teaching the next generation of designers.

My work focuses on creating user-friendly, impactful designs that blend creativity and functionality. As an educator, I aim to equip students with practical skills, industry insights, and hands-on experience to help them excel in the ever-evolving digital design landscape.

Join me to explore the tools, techniques, and trends shaping the future of UI/UX design and build a strong foundation for your career!</p>
          </div>
        </div>

        {/* Mobile */}
        <div className={`${styles.mobileContainerSaruul}`}>
          <div className={`col-lg-6 col-md-6 col-12 ${styles.about}`}>
            <h1>Saruul Enkhbold</h1>
            <h3>Senior Product Designer</h3>
            <p>Hi! I’m Saruul Enkhbold, a Senior UI/UX Designer and AR Developer with over four years of experience, and I’m passionate about teaching the next generation of designers.

My work focuses on creating user-friendly, impactful designs that blend creativity and functionality. As an educator, I aim to equip students with practical skills, industry insights, and hands-on experience to help them excel in the ever-evolving digital design landscape.

Join me to explore the tools, techniques, and trends shaping the future of UI/UX design and build a strong foundation for your career!</p>
          </div>
          <img src={saruul} alt="Saruul Enkhbold" className='col-lg-6 col-md-6 col-12'/>
        </div>
      </section >

      <section className={`row ${styles.section4}`}>
        <h1>Take a look<br />inside our projects</h1>
        <div className={`${styles.section4Container}`} >
          <div className={`col-lg-6 col-12 ${styles.projectContainer_1}`}>
            <div className={`${styles.projectContainer1}`}>
              <iframe src="https://www.youtube.com/embed/0jqimpqrx2w?si=QnkqOusOo-eIwM3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2>Booboo - a book listing website</h2>
          </div>
          <div className={`col-lg-6 col-12 ${styles.projectContainer_2}`}>
            <div className={`${styles.projectContainer2}`}>
              <iframe src="https://www.youtube.com/embed/ey3GEv2CmlA?si=x-BJ94pXEntAARNh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h2>My Recipes - a web app</h2>
          </div>

        </div>
      </section>
    </div>
  )
}

export default Home