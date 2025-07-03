import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      condition: "Sports Injury Recovery",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "After my knee injury, I thought my running days were over. The team at PhysioClinic not only helped me recover but made me stronger than before. I'm now back to competitive running and couldn't be happier!",
      date: "2 months ago"
    },
    {
      name: "James Rodriguez",
      condition: "Back Pain Treatment",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "I suffered from chronic back pain for years. Dr. Johnson's personalized treatment plan and the manual therapy sessions have given me my life back. I can finally enjoy activities with my family again.",
      date: "1 month ago"
    },
    {
      name: "Maria Garcia",
      condition: "Post-Surgery Rehabilitation",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "The post-surgical rehabilitation program was exactly what I needed. The staff was incredibly supportive and professional. My recovery exceeded all expectations thanks to their expertise.",
      date: "3 weeks ago"
    },
    {
      name: "David Thompson",
      condition: "Stroke Recovery",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "After my stroke, I didn't know if I'd walk normally again. Dr. Rodriguez and the neurological rehabilitation team worked miracles. I've regained most of my mobility and independence.",
      date: "2 weeks ago"
    },
    {
      name: "Lisa Chen",
      condition: "Pediatric Development",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "My daughter's developmental delays were concerning, but the pediatric physiotherapy team made such a difference. She's now meeting all her milestones and is so much more confident.",
      date: "1 week ago"
    },
    {
      name: "Robert Wilson",
      condition: "Arthritis Management",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 5,
      text: "Living with arthritis was making everyday tasks difficult. The team created a perfect balance of treatment and exercise that has significantly reduced my pain and improved my quality of life.",
      date: "4 days ago"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Read what our patients have to say about their recovery journey and the care they received at our clinic.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow relative"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-6">
                <div className="bg-teal-600 dark:bg-teal-500 p-2 rounded-full">
                  <Quote className="h-4 w-4 text-white" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4 mt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 dark:text-gray-300 mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-teal-600 dark:text-teal-400">{testimonial.condition}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-16 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">2000+</div>
              <div className="text-sm opacity-90">Happy Patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="text-sm opacity-90">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">15+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.9/5</div>
              <div className="text-sm opacity-90">Patient Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;