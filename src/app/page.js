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
          <li>Experience</li>
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
          <p>
            Continuing my education is a priority for me, as I am always
            striving to enhance my skills and knowledge. After completing my
            cohort at Tech Elevator, I am pursuing a degree in Cybersecurity at
            Robert Morris University. In addition to formal education, I am
            actively working toward certifications to validate and further my
            expertise in the field.
          </p>
          <div>
            <h2>In Progress</h2>
          </div>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Portfolio</h1>
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
