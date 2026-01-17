import React from 'react';
import Link from 'next/link';

const categories = [
  { name: 'Electronics', icon: '📱', color: 'bg-blue-100' },
  { name: 'Fashion', icon: '👕', color: 'bg-pink-100' },
  { name: 'Home & Living', icon: '🏠', color: 'bg-green-100' },
  { name: 'Beauty', icon: '💄', color: 'bg-purple-100' },
  { name: 'Sports', icon: '⚽', color: 'bg-orange-100' },
  { name: 'Books', icon: '📚', color: 'bg-yellow-100' },
];

const Categories = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-4xl font-bold mb-10">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category) => (
            <Link
              href="/products"
              key={category.name}
              className={`${category.color} p-6 rounded-xl text-center hover:shadow-lg transition-shadow cursor-pointer`}
            >
              <span className="text-4xl">{category.icon}</span>
              <h3 className="mt-3 font-semibold text-gray-800">{category.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;