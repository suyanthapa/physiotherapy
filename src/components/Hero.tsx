import React from 'react';
import { ArrowRight, Play, Award, Users, Calendar } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToAppointment = () => {
    const element = document.getElementById('appointment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Narayni
              <span className="text-teal-600 dark:text-teal-400"> Physiotherapy</span>
              <br />
              Clinic
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Restore your mobility and live pain-free with our comprehensive physiotherapy treatments. 
              Our experienced team uses the latest techniques to help you recover faster and stronger.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button
                onClick={scrollToAppointment}
                className="bg-teal-600 dark:bg-teal-500 text-white px-8 py-3 rounded-lg hover:bg-teal-700 dark:hover:bg-teal-600 transition-colors flex items-center justify-center group"
              >
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 px-8 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition-colors flex items-center justify-center">
                <Play className="mr-2 h-5 w-5" />
                Watch Video
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-teal-100 dark:bg-teal-900/30 p-3 rounded-lg w-fit mx-auto mb-2">
                  <Award className="h-6 w-6 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg w-fit mx-auto mb-2">
                  <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">2000+</div>
                <div className="text-gray-600 dark:text-gray-400">Happy Patients</div>
              </div>
              <div className="text-center">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg w-fit mx-auto mb-2">
                  <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Success Rate</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
        <div className="bg-teal-600 dark:bg-teal-500 rounded-2xl p-4 sm:p-6 transform rotate-3 inline-block">
  <img
    src="/images/clinic.jpg"
    alt="Physiotherapist working with patient"
    className="w-full h-[28rem] sm:h-[32rem] object-cover rounded-lg transform -rotate-3 scale-105"
  />
</div>

            <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-full">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">Available Now</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Book your appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;