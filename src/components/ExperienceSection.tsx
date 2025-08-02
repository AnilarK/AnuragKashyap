import React from 'react';
import { MapPin, Calendar, Building, Award } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Consultant Ophthalmic Surgeon",
      organization: "ASG Eye Hospital",
      location: "Varanasi, UP",
      period: "2025 - Present",
      type: "Current Position",
      description: "Leading comprehensive eye care services with focus on advanced surgical procedures and patient-centered treatment.",
      highlights: [
        "Advanced cataract and refractive surgeries",
        "Glaucoma management and surgical interventions",
        "Patient education and preventive care programs"
      ]
    },
    {
      title: "Consultant Ophthalmologist",
      organization: "Sadguru Seva Sangh Trust",
      location: "Varanasi, UP",
      period: "2024 - 2025",
      type: "Previous Role",
      description: "Provided comprehensive eye care services to underserved communities with emphasis on quality treatment and accessibility.",
      highlights: [
        "Community outreach programs",
        "Charitable eye care services",
        "Surgical camps and vision screening"
      ]
    },
    {
      title: "Fellow in Ophthalmology",
      organization: "Sankara Eye Foundation",
      location: "Multiple Centers",
      period: "2022 - 2024",
      type: "Fellowship",
      description: "Intensive fellowship training in advanced ophthalmic procedures and research methodologies.",
      highlights: [
        "Advanced surgical training",
        "Research and clinical studies",
        "Exposure to complex cases"
      ]
    },
    {
      title: "MS Ophthalmology (Gold Medalist)",
      organization: "RIO BHU & IMS BHU",
      location: "Varanasi, UP",
      period: "2019 - 2022",
      type: "Education",
      description: "Comprehensive postgraduate training in ophthalmology with exceptional academic performance.",
      highlights: [
        "Gold Medal recipient",
        "Clinical excellence",
        "Research contributions"
      ]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Current Position': return 'bg-primary text-primary-foreground';
      case 'Previous Role': return 'bg-accent text-accent-foreground';
      case 'Fellowship': return 'bg-secondary text-secondary-foreground';
      case 'Education': return 'bg-muted text-muted-foreground';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="experience" className="section-padding gradient-section scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A progressive career path marked by continuous learning, clinical excellence, 
            and commitment to advancing ophthalmic care.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border transform md:-translate-x-0.5"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative fade-in ${index % 2 === 0 ? 'md:text-right' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full transform -translate-x-1.5 md:-translate-x-1.5 border-4 border-background"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:ml-auto md:pl-12'}`}>
                  <div className="card-professional">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="space-y-2">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(exp.type)}`}>
                            {exp.type}
                          </span>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar size={14} className="mr-1" />
                            {exp.period}
                          </div>
                        </div>
                        
                        <h3 className="text-xl font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        
                        <div className="flex items-center space-x-4 text-muted-foreground">
                          <div className="flex items-center">
                            <Building size={16} className="mr-2" />
                            <span className="font-medium">{exp.organization}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin size={16} className="mr-2" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2">
                        <h4 className="font-medium text-foreground flex items-center">
                          <Award size={16} className="mr-2 text-primary" />
                          Key Highlights
                        </h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, highlightIndex) => (
                            <li key={highlightIndex} className="flex items-start">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;