import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Calendar, Download, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#specializations', label: 'Specializations' },
    { href: '#experience', label: 'Experience' },
    { href: '#testimonials', label: 'Testimonials' },
    { href: '#contact', label: 'Contact' },
  ];

  const services = [
    'Cataract Surgery',
    'Glaucoma Treatment',
    'Diabetic Retinopathy',
    'Refractive Surgery',
    'Premium IOLs',
    'Emergency Eye Care'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-primary-deep to-primary text-white">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <h3 className="text-2xl font-playfair font-bold mb-3">
                  Dr. Anurag Kumar Kashyap
                </h3>
                <p className="text-primary-foreground/80 leading-relaxed">
                  Dedicated to providing exceptional eye care with cutting-edge technology 
                  and compassionate treatment. Your vision, our passion.
                </p>
              </div>
              
              {/* Credentials */}
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                  MS Gold Medalist
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                  FIOL
                </span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm font-medium">
                  FAICO
                </span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.href}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-primary-foreground/80 hover:text-white transition-colors hover:translate-x-1 transform duration-200 block"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start">
                    <div className="w-1.5 h-1.5 bg-white/60 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-primary-foreground/80 text-sm">{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Information</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="text-white/60 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-primary-foreground/60">Call Us</p>
                    <a href="tel:+919876543210" className="text-white hover:text-primary-glow transition-colors">
                      +91 98765 43210
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="text-white/60 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-primary-foreground/60">Email</p>
                    <a href="mailto:anuragk132@gmail.com" className="text-white hover:text-primary-glow transition-colors break-all">
                      anuragk132@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="text-white/60 mt-1 flex-shrink-0" size={18} />
                  <div>
                    <p className="text-sm text-primary-foreground/60">Location</p>
                    <p className="text-white text-sm">
                      ASG Eye Hospital<br />
                      Varanasi, UP, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold mb-2">Ready to Improve Your Vision?</h4>
              <p className="text-primary-foreground/80">Schedule your consultation today</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.querySelector('#appointment');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-glow hover:text-white transition-all duration-300 flex items-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Appointment</span>
              </button>
              
              <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-primary transition-all duration-300 flex items-center space-x-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80 text-sm">
                © {currentYear} Dr. Anurag Kumar Kashyap. All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-primary-foreground/60 text-sm">Follow us:</span>
              <a 
                href="https://linkedin.com/in/anurag-kashyap-89171013b" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Linkedin size={16} />
              </a>
              <a 
                href="mailto:anuragk132@gmail.com"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Mail size={16} />
              </a>
              <a 
                href="tel:+919876543210"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Phone size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Love Message */}
        <div className="border-t border-white/20 py-4">
          <div className="text-center">
            <p className="text-primary-foreground/60 text-sm flex items-center justify-center space-x-2">
              <span>Made with</span>
              <Heart className="text-red-400" size={16} fill="currentColor" />
              <span>by</span>
              <a 
                href="https://www.linkedin.com/in/abhay-singh-b825a1221/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-glow hover:text-white transition-colors font-medium"
              >
                Abhay
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;