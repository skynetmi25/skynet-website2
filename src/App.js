import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen font-sans">
        <header className="bg-red-600 p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">SkyNet</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/booking">Booking</Link></li>
            </ul>
          </nav>
        </header>

        <main className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <section>
      <h2 className="text-4xl font-bold mb-4">Welcome to SkyNet</h2>
      <p>Your trusted partner for networking, security systems, and professional installations.</p>
    </section>
  );
}

function Services() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
      <ul className="space-y-2">
        <li>• Camera Installation (Residential & Commercial)</li>
        <li>• Network Setup & Troubleshooting</li>
        <li>• Audio & Video System Installation</li>
        <li>• Low Voltage Cable Installations</li>
      </ul>
    </section>
  );
}

function About() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">About SkyNet</h2>
      <p>I'm Marty, the CEO of SkyNet. I bring years of hands-on experience in camera systems, networking, and audio setups. At SkyNet, we’re committed to delivering clean, professional work tailored to each client’s unique needs. Your security and satisfaction are our top priorities.</p>
    </section>
  );
}

function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Our Projects</h2>
      <p>Coming soon: photos and details of our latest installations.</p>
    </section>
  );
}

function Contact() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
      <p>Email: info@skynetservices.com</p>
      <p>Phone: (555) 123-4567</p>
      <p>Follow us on social media.</p>
    </section>
  );
}

function Booking() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Book a Consultation</h2>
      <p>Schedule your service through our calendar below:</p>
      <div className="mt-4">
        <iframe
          src="https://calendly.com/your-link"
          width="100%"
          height="600"
          frameBorder="0"
          title="Booking Calendar"
        ></iframe>
      </div>
    </section>
  );
}

export default App;
