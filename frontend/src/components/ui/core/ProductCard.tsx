"use client";

import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>("");

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 animate-fadeInUp">
      <div
        className={`h-64 ${product.gradient} flex items-center justify-center`}
      >
        <ShoppingCart className="w-16 h-16 text-white" />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-900">
          {product.title}
        </h3>
        <p className="text-gray-600 mb-4">{product.description}</p>

        <div className="mb-4">
          <p className="font-semibold mb-2 text-gray-900">Available Sizes:</p>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border-2 rounded-md transition-all ${
                  selectedSize === size
                    ? "bg-blue-500 text-white border-blue-500"
                    : "border-gray-300 hover:border-blue-500 hover:text-blue-500"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transform hover:scale-105 transition-all">
          Order Now
        </button>
      </div>
    </div>
  );
};
