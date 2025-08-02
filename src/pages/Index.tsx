import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpecializationsSection from '@/components/SpecializationsSection';
import ExperienceSection from '@/components/ExperienceSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CertificatesSection from '@/components/CertificatesSection';
import AppointmentSection from '@/components/AppointmentSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecializationsSection />
        <ExperienceSection />
        <TestimonialsSection />
        <CertificatesSection />
        <AppointmentSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
