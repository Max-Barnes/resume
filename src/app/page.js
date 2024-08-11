import Image from "next/image";

export default function Landing() {
  return (
    <main>
      <div class="navbar">
        <p class="logo">
          Max <span id="ln">Barnes</span>
        </p>
        <ul class="nav-items">
          <li>About</li>
          <li>Education</li>
          <li>Experience</li>
          <li>Portfolio</li>
        </ul>
      </div>

      <div class="section-header">
        <div class="header-top">
          <p>Take your </p>
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
            <p>
              I'm Max Barnes, and I am a creator at heart. Whether it's
              conceptualizing, creative writing, or figuring out how to make
              day-to-day life easier; I am always driven by the idea of what
              could be. I've cultivated leadership experience and customer
              service skills throughout my career across various industries.
              However, my journey into creating video games as a hobby sparked
              my fascination with coding and its potential to take my ideas and
              build them into anything.{" "}
            </p>
            <a>Download Resume</a>
            <p>Last Updated: 8/11/2024</p>
            <a href="https://www.linkedin.com/in/maxbarnesdev/">Linkedin</a>
            <a href="https://github.com/Max-Barnes">Github</a>
            <a href="mailto:maxbarnes.dev@gmail.com">Email</a>
          </div>
        </div>
        <div>
          <h1>Education</h1>
        </div>
        <div>
          <h1>Experience</h1>
        </div>
        <div>
          <h1>Portfolio</h1>
        </div>
      </div>
      <div class="footer">
        <p>Footer</p>
      </div>
    </main>
  );
}
