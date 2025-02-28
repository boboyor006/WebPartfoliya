
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container max-w-4xl mx-auto px-4 flex justify-center">
        <ul className="flex space-x-8">
          <li>
            <a 
              href="#about" 
              onClick={scrollToSection('about')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              About
            </a>
          </li>
          <li>
            <a 
              href="#services" 
              onClick={scrollToSection('services')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Services
            </a>
          </li>
          <li>
            <a 
              href="#statistics" 
              onClick={scrollToSection('statistics')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Statistics
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              onClick={scrollToSection('contact')}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
