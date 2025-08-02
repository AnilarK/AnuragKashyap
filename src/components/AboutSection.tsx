import React from 'react';
import { Award, GraduationCap, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Award,
      title: "Gold Medal",
      description: "MS Ophthalmology - RIO BHU",
      year: "2022"
    },
    {
      icon: GraduationCap,
      title: "FAICO (Phaco)",
      description: "AIOS 2024",
      year: "2024"
    },
    {
      icon: Heart,
      title: "Fellowship",
      description: "Sankara Eye Foundation",
      year: "2022-2024"
    }
  ];

  return (
    <section id="about" className="section-padding gradient-section scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            About Dr. Anurag Kashyap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate ophthalmologist dedicated to advancing eye care through 
            innovation, expertise, and compassionate patient treatment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 fade-in-up">
            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-foreground">
                Professional Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Dr. Anurag Kashyap is a distinguished Consultant Ophthalmic Surgeon 
                with a remarkable academic and professional background. Having earned his 
                MS in Ophthalmology with a Gold Medal from the prestigious RIO BHU, he has 
                consistently demonstrated excellence in both clinical practice and surgical expertise.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                His fellowship at Sankara Eye Foundation has equipped him with advanced 
                skills in complex surgical procedures, while his recent FAICO (Phaco) 
                recognition in 2024 highlights his expertise in modern cataract surgery techniques.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-playfair font-semibold text-foreground">
                Philosophy of Care
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                "I believe in providing personalized, compassionate care to every patient. 
                My approach combines cutting-edge medical technology with a deep understanding 
                of each patient's unique needs, ensuring the best possible outcomes for their vision and quality of life."
              </p>
            </div>

            <div className="flex items-center space-x-4 pt-4">
              <Target className="text-primary" size={24} />
              <span className="text-foreground font-medium">
                Committed to excellence in patient care and surgical precision
              </span>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="space-y-6 fade-in">
            <h3 className="text-2xl font-playfair font-semibold text-foreground text-center lg:text-left">
              Key Achievements
            </h3>
            <div className="grid gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="card-professional">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <achievement.icon className="text-primary" size={24} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-foreground">{achievement.title}</h4>
                        <span className="text-sm text-primary font-medium">{achievement.year}</span>
                      </div>
                      <p className="text-muted-foreground">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;