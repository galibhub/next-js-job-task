import React from 'react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Verified Buyer',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
    review: 'Amazing quality products and super fast delivery! Will definitely shop again.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Verified Buyer',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
    review: 'Great customer service and the prices are unbeatable. Highly recommended!',
    rating: 5,
  },
  {
    name: 'Emily Davis',
    role: 'Verified Buyer',
    image: 'https://randomuser.me/api/portraits/women/3.jpg',
    review: 'Love the variety of products. Found everything I needed in one place.',
    rating: 4,
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <div className="mt-4 flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400">⭐</span>
                ))}
              </div>
              <p className="mt-3 text-gray-600">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;