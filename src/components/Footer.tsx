import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-ma-secondary text-white">
      {/* Newsletter Section */}
      <div className="ma-teal py-8 mb-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4 text-white">Envío Gratis</h3>
          <p className="text-lg text-white">en compras mayores a $699</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Muebles América</h4>
            <p className="text-gray-300 mb-4">
              La cadena de tiendas de muebles y electrodomésticos más grande de México.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Twitter className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
              <Instagram className="w-6 h-6 text-gray-300 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Conocenos */}
          <div>
            <h5 className="font-semibold mb-4">Conocenos</h5>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Tiendas y horarios</a></li>
              <li><a href="#" className="hover:text-white">¿Quiénes somos?</a></li>
              <li><a href="#" className="hover:text-white">Política empresarial</a></li>
              <li><a href="#" className="hover:text-white">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h5 className="font-semibold mb-4">Ayuda</h5>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-white">Cómo comprar</a></li>
              <li><a href="#" className="hover:text-white">Credilana</a></li>
              <li><a href="#" className="hover:text-white">Políticas</a></li>
              <li><a href="#" className="hover:text-white">Garantías y devoluciones</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h5 className="font-semibold mb-4">Contacto</h5>
            <ul className="space-y-2 text-gray-300">
              <li>Atención a clientes</li>
              <li className="font-bold text-white">33 3088 6170</li>
              <li>Lunes a Domingo</li>
              <li>8:00 am - 9:00 pm</li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                contacto@mueblesamerica.mx
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-600 pt-8 mt-8">
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">
              Entérate de todo lo que tenemos para ti.
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full md:flex-1 px-4 py-2 rounded-l-lg border-none focus:outline-none text-black"
              />
              <button className="w-full md:w-auto px-6 py-2 ma-teal text-white rounded-r-lg hover:bg-ma-primary transition-colors font-semibold">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-600 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© 2025 Muebles América. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;