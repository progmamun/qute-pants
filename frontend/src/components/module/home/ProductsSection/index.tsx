import { Product } from "@/types";
import { ProductCard } from "../../../ui/core/ProductCard";

export const ProductsSection: React.FC = () => {
  const products: Product[] = [
    {
      id: 1,
      title: "Classic Comfort Pants",
      description:
        "Premium cotton blend for all-day comfort. Perfect for casual and semi-formal occasions.",
      sizes: ["Small", "Medium", "Large", "XL"],
      image: "",
      gradient: "bg-gradient-to-br from-blue-400 to-blue-600",
    },
    {
      id: 2,
      title: "Elegant Formal Pants",
      description:
        "Sophisticated design meets exceptional comfort. Ideal for business and special events.",
      sizes: ["Small", "Medium", "Large", "XL"],
      image: "",
      gradient: "bg-gradient-to-br from-gray-400 to-blue-500",
    },
    {
      id: 3,
      title: "Sport Active Pants",
      description:
        "Breathable fabric with stretch technology. Designed for active lifestyles and workouts.",
      sizes: ["Small", "Medium", "Large", "XL"],
      image: "",
      gradient: "bg-gradient-to-br from-blue-500 to-gray-500",
    },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-semibold text-center mb-12 text-gray-900">
          Our Products
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
