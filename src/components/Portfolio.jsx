import React, { useState } from 'react';
import { portfolioData } from '../mock';
import { 
  MapPin, 
  Users, 
  TrendingUp, 
  Award, 
  ArrowRight,
  Mail,
  Phone,
  Linkedin,
  Globe,
  Star,
  Heart,
  CheckCircle,
  Menu,
  X,
  Building2,
  Lightbulb,
  Brain,
  Send,
  Quote
} from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMobileMenuOpen(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! Shane will be in touch within 24 hours.');
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  const navigation = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="cursor-pointer" onClick={() => scrollToSection('home')}>
              <h1 className="text-2xl font-bold text-gray-900">Shane P McKenna</h1>
              <p className="text-sm text-gray-600">Zabeel Consulting</p>
            </div>

            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium transition-colors duration-200 hover:text-blue-600 text-gray-700"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-gray-100 py-4">
              <nav className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-base font-medium transition-colors duration-200 hover:text-blue-600 text-gray-700"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br">
        <div className="relative max-w-7xl mx-auto px-4 py-20">
          <div className="text-center">
            {portfolioData.hero.profileImage && (
              <div className="mb-8">
                <img 
                  src={portfolioData.hero.profileImage} 
                  alt={portfolioData.hero.name}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-2xl border-4 border-white"
                />
              </div>
            )}

            <div className="inline-flex items-center px-4 py-3 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-8">
              <MapPin className="w-4 h-4 mr-2" />
              {portfolioData.hero.location}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {portfolioData.hero.name}
            </h1>
            
            <h2 className="text-xl md:text-2xl font-semibold text-gray-700 mb-8">
              {portfolioData.hero.title}
            </h2>

            <p className="text-2xl md:text-3xl font-light text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              {portfolioData.hero.tagline}
            </p>

            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              {portfolioData.hero.description}
            </p>

            <div className="flex flex-col gap-4 justify-center mb-16">
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300"
              >
                Learn More About My Approach
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {portfolioData.stats.map((stat, index) => {
                const icons = [Users, TrendingUp, Award, CheckCircle];
                const IconComponent = icons[index % icons.length];
                
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
                      <IconComponent className="w-8 h-8 text-blue-600" />
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                    <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Shane
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              {portfolioData.hero.profileImage && (
                <div className="mb-12 text-center lg:text-left">
                  <img 
                    src={portfolioData.hero.profileImage} 
                    alt={portfolioData.hero.name}
                    className="w-64 h-64 rounded-2xl mx-auto object-cover shadow-xl border-4 border-gray-100"
                  />
                  <div className="mt-6">
                    <h3 className="text-xl font-bold text-gray-900">{portfolioData.hero.name}</h3>
                    <p className="text-gray-600 font-medium">{portfolioData.hero.title}</p>
                    <p className="text-sm text-gray-600 mt-1">Dubai, UAE</p>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Heart className="w-6 h-6 text-blue-600 mr-3" />
                  Core Philosophy
                </h3>
                <blockquote className="text-xl text-gray-700 italic border-l-4 border-blue-600 pl-6 mb-8">
                  "{portfolioData.about.philosophy}"
                </blockquote>
              </div>

              <div className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Brain className="w-6 h-6 text-blue-600 mr-3" />
                  Mission Statement
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {portfolioData.about.mission}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Areas of Expertise</h4>
                {portfolioData.expertise.slice(0, 6).map((skill, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300"
                  >
                    <CheckCircle className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Transformative Services
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive consulting and coaching solutions designed to unlock potential, 
              build stronger relationships, and drive sustainable business growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {portfolioData.services.map((service, index) => {
              const icons = [Users, Building2, Lightbulb, Brain];
              const IconComponent = icons[index % icons.length];
              
              return (
                <div 
                  key={service.id}
                  className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-7 h-7 text-blue-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                  >
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>

          <div className="text-center bg-white rounded-2xl p-12 shadow-lg">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Leadership?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Every great transformation begins with a conversation. Let's discuss how we can 
              unlock your organization's potential and build the foundation for lasting success.
            </p>
            <button 
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Client Success Stories
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover how leaders and organizations have transformed their potential 
              into measurable success through our collaborative partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolioData.testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="mb-6">
                  <Quote className="w-10 h-10 text-blue-600" />
                </div>

                <blockquote className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </blockquote>

                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <div className="border-gray-100 pt-6 border">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600">{testimonial.position}</p>
                      <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Start Your Transformation
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to unlock your leadership potential and transform your organization? 
              Let's begin the conversation that changes everything.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            <div className="bg-white rounded-xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Your company name"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                    placeholder="Tell me about your leadership challenges and transformation goals..."
                  />
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5" />
                </button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600">{portfolioData.contact.email}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <p className="text-gray-600">{portfolioData.contact.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-600">{portfolioData.contact.location}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Linkedin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">LinkedIn</p>
                      <p className="text-gray-600">{portfolioData.contact.linkedin}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Website</p>
                      <p className="text-gray-600">{portfolioData.contact.website}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Response Time
                </h4>
                <p className="text-gray-700 mb-4">
                  I typically respond to new inquiries within 24 hours during business days.
                </p>
                <div className="text-sm text-gray-600">
                  <p><strong>Dubai Time (GST):</strong></p>
                  <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                  <p>Weekend: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">Shane P McKenna</h3>
          <p className="text-gray-300 mb-6">
            Founder of Zabeel Consulting, empowering leaders and organizations through transformative coaching and relationship intelligence.
          </p>
          <p className="text-gray-400 italic mb-6">
            "Building people well is the foundation of strong, successful businesses."
          </p>
          <p className="text-gray-400 text-sm">
            © 2025 Shane P McKenna | Zabeel Consulting. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
