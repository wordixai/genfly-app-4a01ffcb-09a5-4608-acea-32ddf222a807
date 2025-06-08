import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProductCard from './ProductCard';

interface ProductSectionProps {
  title: string;
  products: Array<{
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    currentPrice: number;
    weeklyPayment: number;
    link: string;
  }>;
}

const ProductSection = ({ title, products }: ProductSectionProps) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-ma-secondary mb-4">{title}</h2>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-4">
            {products.map((product) => (
              <div key={product.id} className="flex-shrink-0 w-64">
                <ProductCard product={product} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-5 h-5 text-ma-secondary" />
          </button>
          <button className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-white shadow-lg p-2 rounded-full hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-5 h-5 text-ma-secondary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;