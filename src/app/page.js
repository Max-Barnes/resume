import Image from "next/image";
import React from "react";

export default function Landing() {
  return (
    <main>
      <div class="navbar">
        <div class="logo">
          <p>
            Max <span id="ln">Barnes</span>
          </p>
        </div>
        <ul class="nav-items">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#education">Education</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      <div class="section-header">
        <div class="header-top">
          <p id="takeyour">Take your </p>
          <span id="fancy">
            <p class="skill">Frontend</p>
            <p class="skill">Backend</p>
            <p class="skill">Database</p>
            <p class="skill">IT Security</p>
            <p class="skill">Network</p>
            <p class="skill">Cloud</p>
          </span>
        </div>
        <p>to the Max</p>
      </div>
      <p id="about"> </p>
      <div class="container">
        <div class="section-about">
          <h1>About</h1>
          <div class="about-container">
            <div class="about-text-wrapper">
              <p>
                I&apos;m Max Barnes, and I am a creator at heart. Whether
                it&apos;s conceptualizing, creative writing, or figuring out how
                to make day-to-day life easier; I am always driven by the idea
                of what could be. I&apos;ve cultivated leadership experience and
                customer service skills throughout my career. However, hobby
                game development sparked my fascination with computer science,
                and I decided to make the jump into a new career.
              </p>
              <div>
                <a
                  id="download-button"
                  href="/MaxwellBarnesResume.pdf"
                  download="max-barnes-resume.pdf"
                >
                  Download Resume
                </a>
              </div>
            </div>

            <div class="about-image-wrapper">
              <Image
                src="/images/headshot.jpg"
                width={450}
                height={577}
                alt="max barnes"
                class="about-image"
              />
            </div>
          </div>
        </div>
        <p id="education"> </p>
        <div class="section-education">
          <h1>Education</h1>
          <div class="education-wrapper">
            <div class="education-text-wrap">
              <p>
                Continuing my education is a priority for me, as I am always
                striving to enhance my skills and knowledge. Now, after
                completing my cohort at Tech Elevator, I am pursuing a degree in
                Cybersecurity at Robert Morris University. In addition to formal
                education, I am actively working toward certifications to
                validate and further my expertise in the field.
              </p>
            </div>
            <div class="certs">
              <h2>In Progress</h2>
              <div class="in-progress">
                <Image
                  src="/images/aws-sa.png"
                  width={300}
                  height={300}
                  alt=" certification"
                />
                <Image
                  src="/images/aws-sec.png"
                  width={300}
                  height={300}
                  alt=" certification"
                />
                <Image
                  src="/images/comptia-net+.png"
                  width={300}
                  height={300}
                  alt=" certification"
                />
                <Image
                  src="/images/compita-sec+.png"
                  width={300}
                  height={300}
                  alt=" certification"
                />
                <Image
                  src="/images/rmu-logo.jpg"
                  width={300}
                  height={300}
                  alt=" certification"
                />
              </div>

              <h2>Completed</h2>
              <div class="completed">
                <Image
                  src="/images/tech_elevator.png"
                  width={300}
                  height={300}
                  alt=" certification"
                />
              </div>
            </div>
          </div>
        </div>
        <p id="portfolio"> </p>
        <div class="section-portfolio">
          <h1>Portfolio</h1>
          <div class="project-box">
            <div class="project-1">
              <Image
                alt="project 1"
                src="/images/Rasp_01.png"
                height={440}
                width={800}
                class="project-1-img"
              />
              <p class="portfolio-text-wrapper">
                I am currently building my own home lab, starting with this
                website hosted on a Raspberry Pi 5. This project is part of my
                effort to gain hands-on experience in various areas of
                programming and expand my skill set. In the future, I aim to use
                the same Raspberry Pi to host the backend for a mobile app as
                well.
              </p>
            </div>
            <div class="project-2">
              <p class="portfolio-text-wrapper-left">
                A proof of concept for my mobile development ideas, this project
                is a visual aid that simplifies tracking sugar in your meals,
                making it more user-friendly and accessible. The app will allow
                users to track only what is essential based on their dietary
                requirements or fitness goals.
              </p>
              <Image
                alt="project 2"
                src="/images/sugarcounter.gif"
                height={397}
                width={800}
                class="project-2-img"
                unoptimized
              />
            </div>
            <div class="project-3">
              <Image
                alt="project 3"
                src="/images/fitness-elevator.gif"
                height={397}
                width={800}
                class="project-3-img"
                unoptimized
              />
              <p class="portfolio-text-wrapper">
                Fitness Elevator was the final capstone project my group
                developed at Tech Elevator. The project simulated an agile
                environment, where we worked together to build an app from the
                ground up for a real client, based on a loosely defined set of
                requirements.
              </p>
            </div>
          </div>
        </div>
        <p id="contact"> </p>
        <div class="section-contact">
          <h1>Contact</h1>
          <div class="contact-wrapper">
            <p>
              Have any questions or opportunities? Don&apos;t hesitate to reach
              out—I&apos;ll get back to you as soon as possible!
            </p>
            <p>Email: maxbarnes.dev@gmail.com</p>
            <div class="link-wrapper">
              <a href="https://www.linkedin.com/in/maxbarnesdev/">
                <Image
                  src="/images/linkedin.png"
                  width={100}
                  height={100}
                  alt=" certification"
                />
              </a>
              <a href="https://github.com/Max-Barnes">
                <Image
                  src="/images/github.png"
                  width={100}
                  height={100}
                  alt=" certification"
                />
              </a>
              <a href="mailto:maxbarnes.dev@gmail.com">
                <Image
                  src="/images/email.png"
                  width={100}
                  height={100}
                  alt=" certification"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
