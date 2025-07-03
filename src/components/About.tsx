import React, { useState } from 'react';
import { GraduationCap, Award, Heart, Users, ChevronLeft, ChevronRight } from 'lucide-react';

const About: React.FC = () => {
  const [currentDoctor, setCurrentDoctor] = useState(0);

  const doctors = [
    {
      name: "Dr. Nishan Rana",
      title: "DPT, SCS, CSCS",
      specialty: "Sports Physiotherapy",
      experience: "12 Years",
      image: "/images/nishan.jpg",
      description: "A dedicated physiotherapist committed to helping individuals restore, maintain, and improve their mobility, strength, and overall physical function.",
      qualifications: ["Doctor of Physical Therapy", "Sports Clinical Specialist", "Certified Strength & Conditioning Specialist"]
    },
    {
      name: "Dr. Michael Chen",
      title: "DPT, OCS, FAAOMPT",
      specialty: "Orthopedic Rehabilitation",
      experience: "15 Years",
      image: "https://images.pexels.com/photos/7659562/pexels-photo-7659562.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Specializing in orthopedic rehabilitation with extensive experience in post-surgical recovery and musculoskeletal disorders.",
      qualifications: ["Doctor of Physical Therapy", "Orthopedic Clinical Specialist", "Fellow of American Academy of Orthopedic Manual Physical Therapists"]
    },
    {
      name: "Dr. Emma Rodriguez",
      title: "DPT, NCS, CBIS",
      specialty: "Neurological Rehabilitation",
      experience: "10 Years",
      image: "https://images.pexels.com/photos/6749739/pexels-photo-6749739.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Expert in neurological rehabilitation helping patients recover from stroke, brain injuries, and other neurological conditions.",
      qualifications: ["Doctor of Physical Therapy", "Neurologic Clinical Specialist", "Certified Brain Injury Specialist"]
    }
  ];

  const nextDoctor = () => {
    setCurrentDoctor((prev) => (prev + 1) % doctors.length);
  };

  const prevDoctor = () => {
    setCurrentDoctor((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  const goToDoctor = (index: number) => {
    setCurrentDoctor(index);
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Our Clinic</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            With over 15 years of experience, we are dedicated to providing exceptional physiotherapy care 
            using evidence-based treatments and cutting-edge technology.
          </p>
        </div>

        {/* Clinic Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          <div className="text-center">
            <div className="bg-teal-100 dark:bg-teal-900/30 p-4 rounded-full w-fit mx-auto mb-4">
              <GraduationCap className="h-8 w-8 text-teal-600 dark:text-teal-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
            <p className="text-gray-600 dark:text-gray-400">Highly qualified physiotherapists with specialized training</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-4 rounded-full w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Award Winning</h3>
            <p className="text-gray-600 dark:text-gray-400">Recognized for excellence in patient care and treatment</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 dark:bg-green-900/30 p-4 rounded-full w-fit mx-auto mb-4">
              <Heart className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Compassionate Care</h3>
            <p className="text-gray-600 dark:text-gray-400">Personalized treatment plans focused on your recovery</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Team Approach</h3>
            <p className="text-gray-600 dark:text-gray-400">Collaborative care with your healthcare providers</p>
          </div>
        </div>

        {/* Meet Our Physiotherapists */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 lg:p-12">
            <h3 className="text-4xl font-bold text-blue-900 dark:text-blue-100 text-center mb-12">
              MEET OUR PHYSIOTHERAPISTS
            </h3>
            
            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Doctor Image */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-600 dark:to-gray-500 rounded-2xl p-8">
                    <img
                      src={doctors[currentDoctor].image}
                      alt={doctors[currentDoctor].name}
                      className="w-full h-96 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevDoctor}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </button>
                  <button
                    onClick={nextDoctor}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-300" />
                  </button>
                </div>

                {/* Doctor Information */}
                <div className="space-y-6">
                  <div>
                    <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {doctors[currentDoctor].name}
                    </h4>
                    <p className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-1">
                      {doctors[currentDoctor].title}
                    </p>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                      {doctors[currentDoctor].specialty} • {doctors[currentDoctor].experience} Experience
                    </p>
                  </div>

                  <div className="h-1 w-16 bg-blue-600 dark:bg-blue-400 rounded"></div>

                  <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                    {doctors[currentDoctor].description}
                  </p>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Qualifications:</h5>
                    <ul className="space-y-2">
                      {doctors[currentDoctor].qualifications.map((qual, index) => (
                        <li key={index} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                          <span className="text-gray-700 dark:text-gray-300">{qual}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Navigation Dots */}
              <div className="flex justify-center space-x-3 mt-8">
                {doctors.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToDoctor(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentDoctor
                        ? 'bg-blue-600 dark:bg-blue-400'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                To provide exceptional physiotherapy care that empowers our patients to achieve their optimal level of function 
                and return to the activities they love. We believe in treating the whole person, not just the condition.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Evidence-based treatment approaches</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Personalized care plans</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-teal-600 dark:bg-teal-400 rounded-full"></div>
                  <span className="text-gray-700 dark:text-gray-300">Continuous education and improvement</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/7659564/pexels-photo-7659564.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Our clinic team"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;