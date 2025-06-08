import { Heart, Truck, CreditCard } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    originalPrice: number;
    currentPrice: number;
    weeklyPayment: number;
    link: string;
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  const formatPrice = (price: number) => 
    new Intl.NumberFormat('es-MX', { 
      style: 'currency', 
      currency: 'MXN' 
    }).format(price);

  const discount = Math.round(((product.originalPrice - product.currentPrice) / product.originalPrice) * 100);

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow group relative">
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full transition-all">
        <Heart className="w-4 h-4 text-gray-600 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-ma-secondary mb-3 line-clamp-2 min-h-[40px]">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="mb-3">
          <p className="text-sm text-gray-600 mb-1">Precio de contado</p>
          <div className="space-y-1">
            <p className="text-sm">
              De: <span className="text-ma-primary line-through">{formatPrice(product.originalPrice)}</span>
            </p>
            <p className="text-sm">
              A: <span className="text-lg font-bold text-ma-secondary">{formatPrice(product.currentPrice)}</span>
            </p>
          </div>
        </div>

        {/* Weekly Payment */}
        <div className="flex items-center justify-between mb-4">
          <div className="text-sm">
            Desde <span className="font-medium text-ma-primary">{formatPrice(product.weeklyPayment)}</span>
            <span className="text-xs text-gray-600"> semanales</span>
            <div className="text-xs text-gray-500 mt-1">
              <img src="/api/placeholder/93/17" alt="Muebles América" className="inline h-4" />
            </div>
          </div>
          <div className="flex space-x-2">
            <div className="flex items-center">
              <Truck className="w-4 h-4 text-ma-primary" />
            </div>
            <div className="flex items-center">
              <CreditCard className="w-4 h-4 text-ma-primary" />
            </div>
          </div>
        </div>

        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            -{discount}%
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;