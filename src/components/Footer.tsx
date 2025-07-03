import React from 'react';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-teal-600 p-2 rounded-lg">
                <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-teal-600 font-bold text-sm">P</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Narayani Physio Therapy</h3>
                <p className="text-sm text-gray-400">Excellence in Care</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Leading physiotherapy clinic providing comprehensive rehabilitation services with state-of-the-art equipment and experienced professionals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-teal-400 transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-teal-400 transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#appointment" className="text-gray-400 hover:text-teal-400 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-400">Sports Physiotherapy</span></li>
              <li><span className="text-gray-400">Orthopedic Rehabilitation</span></li>
              <li><span className="text-gray-400">Manual Therapy</span></li>
              <li><span className="text-gray-400">Neurological Rehabilitation</span></li>
              <li><span className="text-gray-400">Pediatric Physiotherapy</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">123 Health Street</p>
                  <p className="text-gray-400">Medical District, City 12345</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-teal-400" />
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-teal-400" />
                <p className="text-gray-400">info@physioclinic.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">Mon - Fri: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-400">Sat: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 NarayaniPhysioTherapy. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;