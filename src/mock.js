// Mock data for Shane P McKenna's Portfolio - Zabeel Consulting

export const portfolioData = {
  hero: {
    name: "Shane P McKenna",
    title: "Managing Director, Zabeel Consulting",
    location: "Dubai, UAE",
    profileImage: "https://customer-assets.emergentagent.com/job_dev-portfolio-352/artifacts/r0dfroa1_SPMcK.jpg",
    tagline: "Empowering Leaders. Transforming Organizations. Releasing Human Potential.",
    description: "Trusted advisor to executives and managers, specializing in relationship understanding and transformative coaching that builds people and businesses from ideas to realization."
  },
  
  about: {
    philosophy: "Building people well is the foundation of strong, successful businesses.",
    mission: "Empowering individuals and organizations through transformative coaching, fostering well-being, and cultivating positive change.",
    experience: "15+ years",
    clientsServed: "500+",
    companiesTransformed: "120+"
  },

  services: [
    {
      id: 1,
      title: "Executive Leadership Coaching",
      description: "One-on-one coaching for C-suite executives and senior managers to enhance leadership capabilities and drive organizational success.",
      features: ["Strategic thinking development", "Decision-making frameworks", "Leadership presence", "Stakeholder management"]
    },
    {
      id: 2,
      title: "Organizational Transformation", 
      description: "Comprehensive consulting to guide companies through cultural change and business evolution.",
      features: ["Change management", "Culture development", "Process optimization", "Team alignment"]
    },
    {
      id: 3,
      title: "Business Development Coaching",
      description: "Supporting entrepreneurs and business leaders in transforming ideas into successful, sustainable enterprises.",
      features: ["Business strategy", "Market analysis", "Revenue growth", "Scaling operations"]
    },
    {
      id: 4,
      title: "Relationship Intelligence",
      description: "Developing stronger interpersonal and professional relationships through cognitive understanding and emotional intelligence.",
      features: ["Communication skills", "Conflict resolution", "Team dynamics", "Networking strategies"]
    }
  ],

  testimonials: [
    {
      id: 1,
      name: "Dr. Amira Hassan",
      position: "CEO, TechVentures MENA",
      company: "Dubai",
      text: "Shane's coaching transformed not just my leadership style, but our entire organizational culture. His approach to relationship understanding has been game-changing for our growth.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez", 
      position: "Managing Director",
      company: "Global Financial Services",
      text: "Working with Shane helped me navigate the most challenging period of our company's expansion. His insights into human potential unlocked capabilities I didn't know existed in my team.",
      rating: 5
    },
    {
      id: 3,
      name: "Sarah Al-Mahmoud",
      position: "Founder & COO",
      company: "Innovation Hub Dubai", 
      text: "Shane's philosophy that 'building people well builds successful businesses' isn't just theory—it's proven practice. Our revenue grew 300% after implementing his frameworks.",
      rating: 5
    }
  ],

  expertise: [
    "Executive Leadership Development",
    "Organizational Psychology",
    "Business Strategy & Growth", 
    "Change Management",
    "Emotional Intelligence",
    "Team Dynamics",
    "Relationship Systems",
    "Cultural Transformation",
    "Strategic Planning",
    "Performance Coaching"
  ],

  stats: [
    { label: "Years Experience", value: "15+" },
    { label: "Leaders Coached", value: "500+" },
    { label: "Companies Transformed", value: "120+" },
    { label: "Success Rate", value: "94%" }
  ],

  contact: {
    email: "shane@zabeelconsulting.com",
    phone: "+971 50 123 4567",
    location: "Dubai, United Arab Emirates",
    linkedin: "linkedin.com/in/shanemckenna",
    website: "zabeelconsulting.com"
  }
};

export const handleContactForm = (formData) => {
  console.log('Form submitted:', formData);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ success: true, message: 'Thank you for your message. Shane will be in touch within 24 hours.' });
    }, 1000);
  });
};
