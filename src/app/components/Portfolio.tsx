import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';
import { useState } from 'react';

export function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">Oskar Ortiz</div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="hover:underline">About</a>
              <a href="#skills" className="hover:underline">Skills</a>
              <a href="#projects" className="hover:underline">Projects</a>
              <a href="#contact" className="hover:underline">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-black">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>About</a>
                <a href="#skills" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Skills</a>
                <a href="#projects" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Projects</a>
                <a href="#contact" className="hover:underline" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
              <p className="text-sm text-gray-500 uppercase tracking-wide mb-2">HERO SECTION</p>
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">Software Engineer</h1>
              <p className="text-xl lg:text-2xl text-gray-600 mb-6">Full Stack Developer</p>
              <div className="bg-gray-200 h-24 mb-6 rounded flex items-center justify-center">
                <span className="text-gray-500">Description Text Block</span>
              </div>
              <button className="bg-black text-white px-8 py-3 border-2 border-black hover:bg-white hover:text-black transition-colors">
                View My Work
              </button>
            </div>

            {/* Profile Image */}
            <div className="order-1 lg:order-2">
              <div className="w-64 h-64 lg:w-80 lg:h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Profile Photo</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center">SKILLS SECTION</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Technologies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['React', 'JavaScript', 'Python', 'Next.js', 'Git', 'Tailwind'].map((skill) => (
              <div 
                key={skill}
                className="border-2 border-black p-8 text-center hover:bg-gray-100 transition-colors"
              >
                <div className="w-16 h-16 bg-gray-300 mx-auto mb-4 rounded"></div>
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center">PROJECTS SECTION</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Work</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="border-2 border-black">
                <div className="bg-gray-300 h-48 flex items-center justify-center border-b-2 border-black">
                  <span className="text-gray-600">Project Image</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-2">Project {project}</h3>
                  <div className="bg-gray-200 h-16 mb-4 rounded flex items-center justify-center">
                    <span className="text-gray-500 text-sm">Description</span>
                  </div>
                  <button className="border-2 border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="border-b-2 border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-sm text-gray-500 uppercase tracking-wide mb-2 text-center">CONTACT SECTION</p>
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>
          
          <div className="max-w-2xl mx-auto">
            {/* Contact Form */}
            <form className="space-y-6 mb-8">
              <div>
                <label className="block mb-2 font-medium">Name</label>
                <input 
                  type="text" 
                  className="w-full border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input 
                  type="email" 
                  className="w-full border-2 border-black p-3 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea 
                  className="w-full border-2 border-black p-3 h-32 focus:outline-none focus:ring-2 focus:ring-gray-400"
                  placeholder="Your message"
                />
              </div>
              
              <button 
                type="submit"
                className="w-full bg-black text-white py-3 border-2 border-black hover:bg-white hover:text-black transition-colors"
              >
                Send Message
              </button>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Github size={32} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Linkedin size={32} />
              </a>
              <a href="#" className="hover:opacity-70 transition-opacity">
                <Mail size={32} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center">Oskar Ortiz — 2026</p>
        </div>
      </footer>
    </div>
  );
}
