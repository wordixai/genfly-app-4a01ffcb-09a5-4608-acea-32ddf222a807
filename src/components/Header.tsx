import { Search, ShoppingCart, User, Menu, MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="w-full">
      {/* Top Bar - Red/Orange */}
      <div className="bg-red-600 text-white text-sm py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              Guadalajara
            </span>
            <span>Envío gratis</span>
            <span>Contáctanos a nuestras líneas</span>
            <span>Envío a domicilio</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>¿Cómo podemos ayudarte?</span>
            <span className="flex items-center">
              <Mail className="w-4 h-4 mr-1" />
              Correo
            </span>
            <span className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              Llamar
            </span>
          </div>
        </div>
      </div>

      {/* Main Header - White */}
      <div className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center text-2xl font-bold">
                <div className="bg-blue-600 text-white px-3 py-2 rounded-l text-lg">
                  Muebles
                </div>
                <div className="bg-red-600 text-white px-3 py-2 rounded-r text-lg">
                  América
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="¿Qué estás buscando?"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <MapPin className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Tiendas</span>
              </div>
              
              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <Phone className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Contacto</span>
              </div>

              <div className="text-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <User className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Cuenta</span>
              </div>

              <div className="text-center relative">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                  <ShoppingCart className="w-5 h-5 text-blue-600" />
                </div>
                <span className="text-xs text-gray-600">Carrito</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation - Dark Blue */}
      <nav className="bg-slate-800 text-white py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <button className="flex items-center space-x-2 bg-red-600 px-4 py-2 rounded">
                <Menu className="w-4 h-4" />
                <span>Departamentos</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <a href="#" className="hover:text-blue-300 flex items-center space-x-1">
                <span>Promociones</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300 flex items-center space-x-1">
                <span>Credilana</span>
                <ChevronDown className="w-4 h-4" />
              </a>
              <a href="#" className="hover:text-blue-300">Cuponera del ahorro</a>
              <a href="#" className="hover:text-blue-300">OUTLET</a>
            </div>
            <div className="flex items-center space-x-4 text-sm">
              <span>Atención a clientes / Ventas al 8006</span>
              <span className="font-bold text-yellow-400">33 3088 6170</span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;