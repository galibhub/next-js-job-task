import React from 'react';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="max-w-4xl mx-auto px-6 text-center text-white">
        <h2 className="text-4xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="mt-4 text-lg text-white/90">
          Get the latest updates on new products and upcoming sales
        </p>
        <form className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-6 py-3 rounded-lg text-gray-800 w-full sm:w-96 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-lg hover:bg-yellow-300 transition"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-sm text-white/70">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;