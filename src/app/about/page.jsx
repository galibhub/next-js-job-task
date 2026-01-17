import React from "react";
import { FaShippingFast, FaHeadset, FaShieldAlt, FaTags } from "react-icons/fa";

export const metadata = {
  title: "About Us - RenykMart",
  description: "Learn more about RenykMart - your trusted online shopping destination.",
};

const AboutPage = () => {
  const features = [
    {
      icon: <FaShippingFast className="text-3xl text-orange-500" />,
      title: "Fast Delivery",
      description: "We deliver your products quickly and safely to your doorstep.",
    },
    {
      icon: <FaHeadset className="text-3xl text-orange-500" />,
      title: "24/7 Support",
      description: "Our customer support team is always ready to help you.",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-orange-500" />,
      title: "Secure Payment",
      description: "Your payments are protected with industry-standard encryption.",
    },
    {
      icon: <FaTags className="text-3xl text-orange-500" />,
      title: "Best Prices",
      description: "We offer competitive prices and amazing deals every day.",
    },
  ];

  return (
    <div className="py-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About <span className="text-orange-500">RenykMart</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Your one-stop destination for quality products at unbeatable prices. 
          We're committed to making your shopping experience seamless and enjoyable.
        </p>
      </section>

      {/* Our Story */}
      <section className="bg-gray-50 rounded-xl p-8 md:p-12 mb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              RenykMart was founded with a simple mission: to provide customers with 
              high-quality products at affordable prices, all from the comfort of their homes.
            </p>
            <p className="text-gray-600 mb-4">
              What started as a small online store has grown into a trusted marketplace 
              serving thousands of happy customers. We carefully curate our product selection 
              to ensure you get only the best.
            </p>
            <p className="text-gray-600">
              Our team is passionate about delivering exceptional customer service and 
              creating a shopping experience that keeps you coming back.
            </p>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop"
              alt="Our Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Why Choose Us?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition text-center"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-10 mb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold">10K+</p>
            <p className="text-white/80">Happy Customers</p>
          </div>
          <div>
            <p className="text-4xl font-bold">500+</p>
            <p className="text-white/80">Products</p>
          </div>
          <div>
            <p className="text-4xl font-bold">50+</p>
            <p className="text-white/80">Categories</p>
          </div>
          <div>
            <p className="text-4xl font-bold">24/7</p>
            <p className="text-white/80">Support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Ready to Start Shopping?
        </h2>
        <p className="text-gray-600 mb-6">
          Explore our wide range of products and find exactly what you need.
        </p>
        <a
          href="/products"
          className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition"
        >
          Browse Products
        </a>
      </section>
    </div>
  );
};

export default AboutPage;