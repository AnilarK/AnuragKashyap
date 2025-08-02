import React from 'react';
import { Eye, Zap, Shield, Activity, Layers, Search } from 'lucide-react';

const SpecializationsSection = () => {
  const specializations = [
    {
      icon: Eye,
      title: "Phacorefractive Surgery",
      description: "Advanced cataract surgery with premium IOL implantation for optimal visual outcomes and reduced dependency on glasses.",
      features: ["Premium IOLs", "Microincision Techniques", "Astigmatism Correction"]
    },
    {
      icon: Layers,
      title: "Premium Intraocular Lenses",
      description: "Expertise in multifocal, toric, and extended depth of focus IOLs for personalized vision correction.",
      features: ["Multifocal IOLs", "Toric IOLs", "EDOF Lenses"]
    },
    {
      icon: Shield,
      title: "Glaucoma & Oculoplasty",
      description: "Comprehensive management of glaucoma and aesthetic/reconstructive procedures around the eyes.",
      features: ["Pressure Management", "Surgical Intervention", "Cosmetic Procedures"]
    },
    {
      icon: Activity,
      title: "Medical Retina",
      description: "Treatment of retinal diseases including diabetic retinopathy, age-related macular degeneration, and vascular disorders.",
      features: ["Anti-VEGF Injections", "Diabetic Care", "Macular Treatments"]
    },
    {
      icon: Zap,
      title: "Anterior Segment Reconstruction",
      description: "Complex surgical procedures for anterior segment trauma, congenital anomalies, and complications.",
      features: ["Trauma Surgery", "Congenital Repairs", "Complication Management"]
    },
    {
      icon: Search,
      title: "Comprehensive Eye Exams",
      description: "Thorough evaluation and diagnosis of various eye conditions with state-of-the-art diagnostic equipment.",
      features: ["Digital Imaging", "OCT Scans", "Visual Field Testing"]
    }
  ];

  return (
    <section id="specializations" className="section-padding scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Areas of Specialization
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive eye care services utilizing the latest technology and 
            surgical techniques for optimal patient outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <div 
              key={index} 
              className="card-professional group hover:border-primary/20 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-4">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-glow rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <spec.icon className="text-white" size={28} />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {spec.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {spec.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 fade-in-up">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Need Expert Eye Care?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your vision needs and explore 
              the best treatment options available.
            </p>
            <button className="btn-primary">
              Schedule Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializationsSection;