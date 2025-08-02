import React from 'react';
import { Phone, Mail, MapPin, Linkedin, Clock, Globe } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="section-padding gradient-section scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Contact Dr. Anurag Kumar Kashyap
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to take the next step in your eye care journey? 
            Get in touch for consultations, appointments, or any questions.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Cards */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div className="card-professional group hover:border-primary/20 fade-in">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Phone className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Call Us</h3>
                  <p className="text-muted-foreground mb-4">
                    For immediate assistance and emergency consultations
                  </p>
                  <a 
                    href="tel:+919876543210" 
                    className="text-primary hover:text-primary-glow font-semibold text-lg transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="card-professional group hover:border-accent/20 fade-in">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Mail className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Send detailed queries and medical reports
                  </p>
                  <a 
                    href="mailto:anuragk132@gmail.com" 
                    className="text-accent hover:text-accent/80 font-semibold transition-colors break-all"
                  >
                    anuragk132@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="card-professional group hover:border-orange-500/20 fade-in">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Visit Us</h3>
                  <p className="text-muted-foreground mb-4">
                    Comprehensive eye care at our modern facility
                  </p>
                  <div className="text-foreground font-medium">
                    <p>ASG Eye Hospital</p>
                    <p className="text-sm text-muted-foreground">Varanasi, Uttar Pradesh</p>
                    <p className="text-sm text-muted-foreground">India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="card-professional group hover:border-blue-500/20 fade-in">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Linkedin className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Connect</h3>
                  <p className="text-muted-foreground mb-4">
                    Professional network and updates
                  </p>
                  <a 
                    href="https://linkedin.com/in/anurag-kashyap-89171013b" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Practice Information */}
          <div className="space-y-6 fade-in-up">
            {/* Office Hours */}
            <div className="card-professional">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
                <Clock className="mr-3 text-primary" size={24} />
                Office Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="card-professional bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
              <h3 className="text-xl font-semibold text-red-800 mb-4">
                Emergency Contact
              </h3>
              <p className="text-red-700 mb-4">
                For urgent eye care needs outside office hours:
              </p>
              <a 
                href="tel:+919876543210" 
                className="inline-flex items-center space-x-2 text-red-600 hover:text-red-700 font-semibold"
              >
                <Phone size={20} />
                <span>+91 98765 43210</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <button className="w-full btn-primary">
                Book Consultation
              </button>
              <button className="w-full btn-secondary">
                Download CV
              </button>
              <a 
                href="https://wa.me/919876543210" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-medium transition-colors flex items-center justify-center space-x-2"
              >
                <Globe size={20} />
                <span>WhatsApp Chat</span>
              </a>
            </div>
          </div>
        </div>

        {/* Map Section (Placeholder) */}
        <div className="mt-16 fade-in-up">
          <div className="bg-muted rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Find Our Location
            </h3>
            <p className="text-muted-foreground mb-6">
              Conveniently located in Varanasi for easy access to quality eye care services.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg p-12 border-2 border-dashed border-primary/20">
              <MapPin className="mx-auto text-primary mb-4" size={48} />
              <p className="text-lg font-medium text-foreground mb-2">
                Interactive Map Coming Soon
              </p>
              <p className="text-muted-foreground">
                ASG Eye Hospital, Varanasi, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;