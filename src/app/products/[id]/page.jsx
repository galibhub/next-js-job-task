import { getSingleProduct } from "@/actions/server/product";
import CartButton from "@/component/buttons/CartButton";

import Image from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

/* ---------- SEO Metadata ---------- */
export async function generateMetadata({ params }) {
  const { id } = await params; 
  const product = await getSingleProduct(id);

  return {
    title: product.name,
    description: product.shortDescription,

    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [
        {
          url: product.image,
          width: 1200,
          height: 630,
          alt: product.name,
        },
      ],
    },
  };
}

/* ---------- Page ---------- */
const ProductDetails = async ({ params }) => {
  const { id } = await params;  // Added await
  const product = await getSingleProduct(id);

  const {
    name,
    image,
    price,
    discountPrice,
    rating,
    stock,
    description,
    category,
    brand,
  } = product;

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10">
      
      {/* Image */}
      <div className="rounded-xl overflow-hidden border">
        <Image
          src={image}
          alt={name}
          width={600}
          height={420}
          className="w-full h-[420px] object-cover"
          priority
        />
      </div>

      {/* Info */}
      <div>
        <p className="text-sm text-gray-500 mb-1">{category}</p>
        <h1 className="text-3xl font-bold mb-2">{name}</h1>
        <p className="text-sm text-gray-600 mb-4">
          Brand: <span className="font-medium">{brand}</span>
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <FaStar
                key={i}
                className={i < Math.round(rating) ? "" : "opacity-30"}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600">
            {rating} • {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-2xl font-bold text-orange-600">
            ${discountPrice}
          </span>
          <span className="line-through text-gray-400 ml-3">
            ${price}
          </span>
        </div>

      
        <CartButton product={product} />
      </div>

      {/* Description */}
      <div className="col-span-full mt-10">
        <h2 className="text-xl font-semibold mb-3">Product Description</h2>
        <p className="text-gray-700 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;