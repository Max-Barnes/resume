import Image from "next/image";

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
          <li>About</li>
          <li>Education</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>

      <div class="section-header">
        <div class="header-top">
          <p id="takeyour">Take your </p>
          <span id="fancy">
            <p class="skill">Frontend</p>
            <p class="skill">Backend</p>
            <p class="skill">Database</p>
            <p class="skill">Cybersecurity</p>
            <p class="skill">Network</p>
            <p class="skill">Cloud</p>
          </span>
        </div>
        <p>to the Max</p>
      </div>
      <div class="container">
        <div class="section-about">
          <h1>About</h1>
          <div class="about-container">
            <div class="about-text-wrapper">
              <p>
                I'm Max Barnes, and I am a creator at heart. Whether it's
                conceptualizing, creative writing, or figuring out how to make
                day-to-day life easier; I am always driven by the idea of what
                could be. I've cultivated leadership experience and customer
                service skills throughout my career. However, hobby game
                development sparked my fascination with computer science and I
                have been addicted from that point forward.{" "}
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
                Currently working on creating a home lab of my own! This website
                is being hosted on a Raspberry Pi 5. I wanted to do this project
                to have more practical experience in networking and increase my
                skillset. Beyond just hosting this site I plan on hopefully
                someday hosting the backend for a mobile app with the same Pi 5.
              </p>
            </div>
            <div class="project-2">
              <p class="portfolio-text-wrapper-left">
                A proof a concept behind my mobile development ideas. I want to
                create an app where tracking your meals is not so complicated
                and is actually user accessible. The user will only track what
                is necessary based on their dietary requirements or fitness
                goals.{" "}
              </p>
              <Image
                alt="project 2"
                src="/images/sugarcounter.gif"
                height={397}
                width={800}
                class="project-2-img"
              />
            </div>
            <div class="project-3">
              <Image
                alt="project 3"
                src="/images/fitness-elevator.gif"
                height={397}
                width={800}
                class="project-3-img"
              />
              <p class="portfolio-text-wrapper">
                Fitness Elevator was the final capstone project created by my
                group at Tech Elevator. The project simulated agile, having a
                real client and working as a group to make an app from the
                ground up based on a loose set of requirements.{" "}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1>Contact</h1>
          <div>
            <a href="https://www.linkedin.com/in/maxbarnesdev/">Linkedin</a>
            <a href="https://github.com/Max-Barnes">Github</a>
            <a href="mailto:maxbarnes.dev@gmail.com">Email</a>
          </div>
        </div>
      </div>
      <div class="footer">
        <p>Footer</p>
      </div>
    </main>
  );
}
