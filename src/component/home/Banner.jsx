import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Shop Smart, <br /> Live Better with{" "}
            <span className="text-yellow-300">RenykMart</span>
          </h1>

          <p className="mt-5 text-lg text-white/90">
            Discover amazing deals on electronics, fashion, home essentials,
            and more — all in one place.
          </p>

          <div className="mt-7 flex gap-4">
            <Link href={'/products'} className="bg-white text-orange-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100 transition">
              Shop Now
            </Link>

            <button className="border border-white px-6 py-3 rounded-md hover:bg-white hover:text-orange-600 transition">
              Explore Deals
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative w-full h-[300px] md:h-[380px]">
          <img
            src="https://images.unsplash.com/photo-1607082349566-187342175e2f?w=900&q=80&auto=format&fit=crop"
            alt="Ecommerce Banner"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
