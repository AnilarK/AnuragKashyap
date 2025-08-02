import React from 'react';
import { Calendar, Phone, Download, Award } from 'lucide-react';
import doctorProfile from '@/assets/doctor-profile.jpg';
import clinicHero from '@/assets/clinic-hero.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={clinicHero} 
          alt="Modern Medical Clinic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 fade-in-up">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-primary">
                <Award size={20} />
                <span className="text-sm font-medium">MS Gold Medalist | FIOL | FAICO</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                Dr. Anurag 
                <span className="text-primary block">Kashyap</span>
              </h1>
              
              <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                Consultant Ophthalmic Surgeon
              </h2>
              
              <p className="text-lg text-muted-foreground max-w-lg">
                Dedicated to providing exceptional eye care with cutting-edge technology and 
                compassionate treatment. Specializing in advanced surgical procedures and 
                comprehensive vision solutions.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const element = document.querySelector('#appointment');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="btn-primary flex items-center justify-center space-x-2"
              >
                <Calendar size={20} />
                <span>Book Consultation</span>
              </button>
              
              <button className="btn-secondary flex items-center justify-center space-x-2">
                <Phone size={20} />
                <span>Contact Now</span>
              </button>
              
              <button className="flex items-center justify-center space-x-2 text-primary hover:text-primary-glow transition-colors font-medium px-4 py-2">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1000+</div>
                <div className="text-sm text-muted-foreground">Surgeries</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2024</div>
                <div className="text-sm text-muted-foreground">FAICO Award</div>
              </div>
            </div>
          </div>

          {/* Doctor Image */}
          <div className="fade-in flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/10 rounded-full"></div>
              
              {/* Main image */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-[var(--shadow-strong)]">
                <img 
                  src={doctorProfile} 
                  alt="Dr. Anurag Kashyap" 
                  className="w-80 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;