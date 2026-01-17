import React from "react";
import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    category,
    price,
    discountPrice,
    rating,
    stock,
    image,
    shortDescription,
    brand,
  } = product;

  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition p-4 flex flex-col">
      
      {/* Product Image */}
      <div className="relative w-full h-48">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 flex-1">
        <p className="text-xs text-gray-500">{category}</p>
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {name}
        </h2>

        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {shortDescription}
        </p>

        {/* Price */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg font-bold text-orange-600">
            ${discountPrice}
          </span>
          <span className="text-sm line-through text-gray-400">
            ${price}
          </span>
        </div>

        {/* Rating & Stock */}
        <div className="mt-2 flex justify-between text-sm text-gray-500">
          <span>⭐ {rating}</span>
          <span>{stock > 0 ? "In Stock" : "Out of Stock"}</span>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-4 flex gap-2">
        <button className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-md text-sm font-medium transition">
          Add to Cart
        </button>

        <Link
          href={`/products/${id}`}
          className="flex-1 border border-orange-500 text-orange-500 hover:bg-orange-50 py-2 rounded-md text-sm font-medium text-center transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
