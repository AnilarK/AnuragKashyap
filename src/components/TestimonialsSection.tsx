import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Priya Sharma",
      age: 65,
      condition: "Cataract Surgery",
      rating: 5,
      text: "Dr. Kashyap performed my cataract surgery with such precision and care. The results exceeded my expectations, and I can see clearly without glasses now. His gentle approach and thorough explanations made the entire experience comfortable.",
      location: "Varanasi, UP"
    },
    {
      name: "Rajesh Kumar",
      age: 52,
      condition: "Glaucoma Treatment",
      rating: 5,
      text: "I was diagnosed with glaucoma and was worried about my vision. Dr. Kashyap's expert treatment and regular monitoring have successfully controlled my condition. His dedication to patient care is truly remarkable.",
      location: "Allahabad, UP"
    },
    {
      name: "Sunita Devi",
      age: 45,
      condition: "Diabetic Retinopathy",
      rating: 5,
      text: "As a diabetic patient, I was concerned about my eye health. Dr. Kashyap's comprehensive treatment approach and advanced techniques have preserved my vision. I'm grateful for his expertise and compassionate care.",
      location: "Varanasi, UP"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Patient Testimonials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Real experiences from patients who have received exceptional eye care 
            and life-changing treatments.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="relative fade-in">
            <div className="bg-gradient-to-br from-card to-secondary rounded-2xl p-8 md:p-12 shadow-[var(--shadow-medium)] border border-border/50">
              {/* Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <Quote className="text-primary" size={32} />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="text-center space-y-6">
                {/* Rating */}
                <div className="flex justify-center space-x-1">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg md:text-xl text-foreground leading-relaxed font-medium">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Patient Info */}
                <div className="space-y-2">
                  <div className="font-semibold text-foreground text-lg">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-muted-foreground">
                    Age {testimonials[currentTestimonial].age} • {testimonials[currentTestimonial].condition}
                  </div>
                  <div className="text-sm text-primary">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-6 md:-left-12">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft size={20} />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-6 md:-right-12">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-background border border-border rounded-full flex items-center justify-center shadow-md hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
              />
            ))}
          </div>

          {/* All Testimonials Grid (Desktop) */}
          <div className="hidden lg:grid lg:grid-cols-3 gap-6 mt-16">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className={`card-professional cursor-pointer transition-all duration-300 ${
                  index === currentTestimonial ? 'border-primary/50 bg-primary/5' : ''
                }`}
                onClick={() => setCurrentTestimonial(index)}
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-start">
                    <div className="flex space-x-1">
                      {renderStars(testimonial.rating)}
                    </div>
                    <Quote className="text-primary/30" size={20} />
                  </div>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="pt-2 border-t border-border">
                    <div className="font-medium text-foreground">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.condition}
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

export default TestimonialsSection;