import React from 'react';
import { Award, GraduationCap, Medal, FileText, Trophy, Star } from 'lucide-react';
import awardsImage from '@/assets/awards.jpg';

const CertificatesSection = () => {
  const certificates = [
    {
      icon: Medal,
      title: "Gold Medal - MS Ophthalmology",
      institution: "Regional Institute of Ophthalmology, BHU",
      year: "2022",
      description: "Awarded for outstanding academic performance and clinical excellence during postgraduate studies.",
      type: "Academic Excellence"
    },
    {
      icon: Trophy,
      title: "FAICO (Phaco) Certification",
      institution: "All India Ophthalmological Society (AIOS)",
      year: "2024",
      description: "Fellowship recognition for advanced phacoemulsification surgery skills and expertise.",
      type: "Professional Certification"
    },
    {
      icon: GraduationCap,
      title: "Fellowship in Ophthalmology",
      institution: "Sankara Eye Foundation",
      year: "2022-2024",
      description: "Comprehensive fellowship training in advanced ophthalmic procedures and research methodologies.",
      type: "Fellowship"
    },
    {
      icon: FileText,
      title: "MS Ophthalmology",
      institution: "Institute of Medical Sciences, BHU",
      year: "2022",
      description: "Master of Surgery degree in Ophthalmology with specialization in anterior segment surgery.",
      type: "Degree"
    },
    {
      icon: Award,
      title: "Best Resident Award",
      institution: "RIO BHU",
      year: "2021",
      description: "Recognition for exceptional performance during residency training program.",
      type: "Recognition"
    },
    {
      icon: Star,
      title: "Research Excellence",
      institution: "Multiple Publications",
      year: "2020-2024",
      description: "Published research contributions in peer-reviewed ophthalmology journals.",
      type: "Research"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Academic Excellence': return 'bg-yellow-500 text-white';
      case 'Professional Certification': return 'bg-primary text-primary-foreground';
      case 'Fellowship': return 'bg-accent text-accent-foreground';
      case 'Degree': return 'bg-secondary text-secondary-foreground';
      case 'Recognition': return 'bg-orange-500 text-white';
      case 'Research': return 'bg-purple-500 text-white';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="certificates" className="section-padding gradient-section scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Certificates & Awards
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition of academic excellence, professional achievements, and 
            commitment to advancing ophthalmic care through continuous learning.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Awards Image */}
          <div className="fade-in">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-medium)]">
              <img 
                src={awardsImage} 
                alt="Medical Certificates and Awards" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="font-semibold text-foreground mb-2">Excellence in Ophthalmology</h3>
                  <p className="text-sm text-muted-foreground">
                    Continuous recognition for outstanding contributions to eye care and medical education.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Key Achievements Summary */}
          <div className="space-y-6 fade-in-up">
            <h3 className="text-2xl font-playfair font-semibold text-foreground">
              Academic & Professional Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">2022</div>
                <div className="text-sm text-muted-foreground">Gold Medal Year</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">2024</div>
                <div className="text-sm text-muted-foreground">FAICO Achievement</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">2+</div>
                <div className="text-sm text-muted-foreground">Years Fellowship</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-2xl font-bold text-primary mb-1">5+</div>
                <div className="text-sm text-muted-foreground">Major Awards</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="card-professional group hover:border-primary/20 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <cert.icon className="text-primary" size={24} />
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(cert.type)}`}>
                    {cert.type}
                  </span>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-sm text-primary font-medium">
                    {cert.institution}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {cert.year}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Trust in Proven Excellence
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our commitment to continuous learning and professional development 
              ensures you receive the highest standard of eye care.
            </p>
            <button className="btn-primary">
              View Full Credentials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;