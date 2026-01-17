import React from 'react';
import Link from 'next/link';

const Deals = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">Hot Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Deal Card 1 */}
          <div className="relative bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl overflow-hidden p-8 text-white">
            <div className="relative z-10">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                50% OFF
              </span>
              <h3 className="mt-4 text-3xl font-bold">Summer Collection</h3>
              <p className="mt-2 text-white/80">Get the best deals on summer essentials</p>
              <Link
                href="/products"
                className="inline-block mt-6 bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Shop Now
              </Link>
            </div>
          </div>

          {/* Deal Card 2 */}
          <div className="relative bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl overflow-hidden p-8 text-white">
            <div className="relative z-10">
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold">
                Limited Time
              </span>
              <h3 className="mt-4 text-3xl font-bold">Electronics Sale</h3>
              <p className="mt-2 text-white/80">Up to 40% off on gadgets & accessories</p>
              <Link
                href="/products"
                className="inline-block mt-6 bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
              >
                Explore Deals
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;