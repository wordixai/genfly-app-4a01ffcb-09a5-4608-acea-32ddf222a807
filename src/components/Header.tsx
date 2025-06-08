import { Search, ShoppingCart, User, Menu, MapPin, Phone, Mail } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Guadalajara
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              33 3307 6175
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <span>¿Cómo puedes ayudarte?</span>
            <span>Envío gratis en compras mayores a $699</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold text-ma-secondary">
                Muebles América
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ma-primary"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-ma-secondary hover:text-ma-primary">
                <User className="w-6 h-6" />
                <span className="hidden md:block">Inicia sesión</span>
              </button>
              <button className="flex items-center space-x-1 text-ma-secondary hover:text-ma-primary">
                <ShoppingCart className="w-6 h-6" />
                <span className="hidden md:block">Carrito</span>
                <span className="bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="ma-secondary text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-2">
                <Menu className="w-5 h-5" />
                <span>Departamentos</span>
              </button>
              <a href="#" className="hover:text-ma-teal">Promociones</a>
              <a href="#" className="hover:text-ma-teal">Credilana</a>
              <a href="#" className="hover:text-ma-teal">Cuponera del ahorro</a>
              <a href="#" className="hover:text-ma-teal">OUTLET</a>
            </div>
            <div className="flex items-center space-x-4">
              <span>Atención a clientes / Ventas al 8006</span>
              <span className="font-bold">33 3088 6170</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;