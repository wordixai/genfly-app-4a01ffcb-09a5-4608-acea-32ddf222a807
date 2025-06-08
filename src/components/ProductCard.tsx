import { Heart, Truck, Home } from 'lucide-react';

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

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow group relative border border-gray-100">
      {/* Wishlist Button */}
      <button className="absolute top-3 right-3 z-10 p-2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full shadow-sm transition-all">
        <Heart className="w-4 h-4 text-gray-500 hover:text-red-500" />
      </button>

      {/* Product Image */}
      <div className="aspect-square overflow-hidden rounded-t-lg bg-gray-50 p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-semibold text-sm text-gray-800 mb-3 line-clamp-2 min-h-[40px] leading-tight">
          {product.name}
        </h3>

        {/* Pricing */}
        <div className="mb-3">
          <p className="text-sm text-gray-600 mb-1">Precio de contado</p>
          <div className="space-y-1">
            <p className="text-sm text-gray-600">
              De: <span className="text-blue-600 line-through">{formatPrice(product.originalPrice)}</span>
            </p>
            <p className="text-sm">
              A: <span className="text-xl font-bold text-gray-900">{formatPrice(product.currentPrice)}</span>
            </p>
          </div>
        </div>

        {/* Weekly Payment */}
        <div className="flex items-end justify-between mb-4">
          <div className="text-sm">
            <div className="mb-1">
              Desde <span className="font-medium text-blue-600">{formatPrice(product.weeklyPayment)}</span>
            </div>
            <span className="text-xs text-gray-600">semanales</span>
            <div className="mt-2">
              <img 
                src="https://www.mueblesamerica.mx/assets/muebles-america-logo-xs.png" 
                alt="Muebles América" 
                className="h-4"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
          </div>
          <div className="flex space-x-2 text-gray-600">
            <Truck className="w-4 h-4" />
            <Home className="w-4 h-4" />
          </div>
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductCard;