import React from 'react';
import { Activity, Bone, Brain, Baby, Dumbbell, Stethoscope } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Activity className="h-8 w-8" />,
      title: "Sports Physiotherapy",
      description: "Specialized treatment for sports injuries and performance enhancement for athletes of all levels.",
      features: ["Injury prevention", "Performance optimization", "Return to sport protocols", "Biomechanical analysis"]
    },
    {
      icon: <Bone className="h-8 w-8" />,
      title: "Orthopedic Rehabilitation",
      description: "Comprehensive treatment for musculoskeletal conditions and post-surgical recovery.",
      features: ["Post-surgical rehab", "Joint mobilization", "Fracture rehabilitation", "Arthritis management"]
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "Neurological Rehabilitation",
      description: "Specialized care for patients with neurological conditions and brain injuries.",
      features: ["Stroke rehabilitation", "Parkinson's treatment", "Balance training", "Cognitive rehabilitation"]
    },
    {
      icon: <Baby className="h-8 w-8" />,
      title: "Pediatric Physiotherapy",
      description: "Expert care for infants, children, and adolescents with developmental concerns.",
      features: ["Developmental delays", "Cerebral palsy", "Torticollis", "Gait training"]
    },
    {
      icon: <Dumbbell className="h-8 w-8" />,
      title: "Strength & Conditioning",
      description: "Personalized exercise programs to improve strength, flexibility, and overall fitness.",
      features: ["Functional training", "Core strengthening", "Flexibility programs", "Injury prevention"]
    },
    {
      icon: <Stethoscope className="h-8 w-8" />,
      title: "Manual Therapy",
      description: "Hands-on treatment techniques to improve mobility and reduce pain.",
      features: ["Joint mobilization", "Soft tissue massage", "Trigger point therapy", "Myofascial release"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive physiotherapy services tailored to meet your specific needs and help you achieve optimal recovery.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform">
                <div className="text-teal-600 dark:text-teal-400">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Recovery Journey?</h3>
            <p className="text-lg mb-6 opacity-90">
              Our experienced team is here to help you achieve your health and wellness goals.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('appointment');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;