import React, { useState } from 'react';
import { User, Linkedin, Mail, Phone } from 'lucide-react';
import './index.css';

function Header({ toggleAbout, showAbout }) {
  return (
    <header className="text-center w-full max-w-xs">
      <h1 className="text-[28px] font-light">
        Hello, I'm <span className="font-bold text-foreground">Zhe Wei</span>.
      </h1>
      <div className="flex items-center justify-center gap-6 mt-2">
        <button
          onClick={toggleAbout}
          className={`relative p-2 rounded-full transition-colors ${
            showAbout ? "bg-neutral-100" : "hover:bg-neutral-100"
          } hover:text-accent`}
          aria-label="About me"
          title="About me"
        >
          <User className="h-[28px] w-[28px] stroke-[1px]" />
        </button>
        <span className="w-px h-8 bg-foreground"></span>
        <a
          href="https://www.linkedin.com/in/czhew/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-accent"
        >
          <Linkedin className="h-[28px] w-[28px] stroke-[1px]" title="LinkedIn" />
        </a>
        <a href="mailto:czhewei.work@gmail.com" className="hover:text-accent">
          <Mail className="h-[28px] w-[28px] stroke-[1px]" title="Mail" />
        </a>
        <a href="tel:+6596747271" className="hover:text-accent">
          <Phone className="h-[28px] w-[28px] stroke-[1px]" title="Phone" />
        </a>
      </div>
    </header>
  );
}

function AboutSection() {
  const aboutText = [
    "I am currently a DevOps Engineer with experience across financial services, information technology and identity security.",
    "Through cloud technologies, containerisation and automation, I help teams deliver software faster and more reliably, while building infrastructure that is efficient, scalable, and resilient.",
    "Previously, I worked in the Built Environment industry, where I was involved in architectural and project management work. Spending years in architecture taught me that good design is intentional, user-centered, and deeply tied to context. It also taught me to think in layers: structure, flow and experience.",
    "That perspective continues to shape how I approach building modern infrastructure and delivering software today."
  ];

  const sectionStyle = {
    maxWidth: '800px',
    textAlign: 'justify',
    marginTop: '35px', // Add margin to create spacing
  };

  return (
    <section style={sectionStyle}>
      {aboutText.map((paragraph, index) => (
        <p key={index} className="mb-4">
          {paragraph}
        </p>
      ))}
    </section>
  );
}

function App() {
  const [showAbout, setShowAbout] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <Header toggleAbout={toggleAbout} showAbout={showAbout} />
      {showAbout && <AboutSection />}
    </div>
  );
}

export default App;
