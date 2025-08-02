import React, { useState } from 'react';
import { Calendar, Clock, Phone, MessageCircle, MapPin, Mail, Send } from 'lucide-react';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    concern: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Appointment request:', formData);
    // You can integrate with a backend service or email service here
  };

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'
  ];

  const concerns = [
    'General Eye Checkup',
    'Cataract Surgery Consultation',
    'Glaucoma Treatment',
    'Diabetic Retinopathy',
    'Refractive Surgery',
    'Emergency Eye Care',
    'Other'
  ];

  return (
    <section id="appointment" className="section-padding scroll-offset">
      <div className="container-custom">
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Book Your Appointment
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Schedule a consultation with Dr. Anurag Kumar Kashyap for 
            comprehensive eye care and personalized treatment plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 fade-in">
            <div>
              <h3 className="text-2xl font-playfair font-semibold text-foreground mb-6">
                Get in Touch
              </h3>
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Call Us</h4>
                    <p className="text-muted-foreground mb-2">For immediate assistance</p>
                    <a href="tel:+919876543210" className="text-primary hover:text-primary-glow font-medium">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-green-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">WhatsApp</h4>
                    <p className="text-muted-foreground mb-2">Quick consultation</p>
                    <a href="https://wa.me/919876543210" className="text-green-500 hover:text-green-600 font-medium">
                      Message on WhatsApp
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-accent" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Email</h4>
                    <p className="text-muted-foreground mb-2">Send your queries</p>
                    <a href="mailto:anuragk132@gmail.com" className="text-accent hover:text-accent/80 font-medium">
                      anuragk132@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-orange-500" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground mb-2">Visit our clinic</p>
                    <p className="text-foreground font-medium">
                      ASG Eye Hospital<br />
                      Varanasi, Uttar Pradesh, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="card-professional">
              <h4 className="font-semibold text-foreground mb-4 flex items-center">
                <Clock className="mr-2 text-primary" size={20} />
                Office Hours
              </h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">9:00 AM - 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-red-500 font-medium">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Appointment Form */}
          <div className="fade-in-up">
            <div className="card-professional">
              <h3 className="text-xl font-semibold text-foreground mb-6">
                Schedule Appointment
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Date *
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Preferred Time *
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    >
                      <option value="">Select time</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Concern */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Type of Consultation *
                  </label>
                  <select
                    name="concern"
                    value={formData.concern}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  >
                    <option value="">Select consultation type</option>
                    {concerns.map((concern) => (
                      <option key={concern} value={concern}>{concern}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none"
                    placeholder="Please describe your symptoms or any specific concerns..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Book Appointment</span>
                </button>

                <p className="text-sm text-muted-foreground text-center">
                  * We'll contact you within 24 hours to confirm your appointment
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;