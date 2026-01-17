"use server";

import products from "@/data/product.json";

export const getProducts = async () => {
  return products;
};

export const getSingleProduct = async (id) => {
  if (!id) return {};
  
  const product = products.find((p) => p.id === id);
  
  return product || {};
};