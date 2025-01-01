import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '../../utils/animations';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "TalentMatchAI has revolutionized our hiring process. We've cut our screening time by 70% while finding better candidates.",
      author: "Sarah Chen",
      position: "HR Director, Tech Global",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "The AI matching accuracy is impressive. It helps us find candidates that perfectly align with our requirements.",
      author: "Michael Roberts",
      position: "Recruitment Manager, InnovateCorp",
      image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      quote: "As a foreign company hiring in new markets, TalentMatchAI has been invaluable in understanding candidate qualifications.",
      author: "Anna Schmidt",
      position: "CEO, EuroTech Solutions",
      image: "https://randomuser.me/api/portraits/women/2.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by companies worldwide</p>
        </div>

        <motion.div
          variants={staggerChildren}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-gray-50 rounded-lg p-8 shadow-lg"
            >
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.author}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};