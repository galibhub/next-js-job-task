import React from 'react';

const features = [
  {
    icon: '🚚',
    title: 'Free Shipping',
    description: 'Free shipping on orders over $50',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    description: '100% secure payment methods',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    description: '30-day return policy',
  },
  {
    icon: '🎧',
    title: '24/7 Support',
    description: 'Dedicated customer support',
  },
];

const Features = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-5xl">{feature.icon}</span>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;