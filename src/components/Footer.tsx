import { Facebook, Twitter, Instagram, Mail, MapPin, Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      {/* Blue banner section */}
      <div className="bg-blue-500 py-8">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-2 text-white">Envío Gratis</h3>
          <p className="text-xl text-white">en compras mayores a $699</p>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-slate-700 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h4 className="text-xl font-bold mb-4">
              Entérate de todo lo que tenemos para ti.
            </h4>
            <div className="flex flex-col md:flex-row items-center justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Correo Electrónico"
                className="w-full md:flex-1 px-4 py-3 rounded-l-lg md:rounded-r-none rounded-r-lg border-none focus:outline-none text-black"
              />
              <button className="w-full md:w-auto px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-r-lg md:rounded-l-none rounded-l-lg transition-colors font-semibold mt-2 md:mt-0">
                Enviar
              </button>
            </div>
            <p className="text-sm text-gray-300 mt-4">
              He leído y acepto los
              <a href="#" className="text-blue-400 hover:underline ml-1">Términos y condiciones</a>
            </p>
          </div>
          
          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <div className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <Facebook className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-blue-400 hover:bg-blue-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="w-10 h-10 bg-pink-600 hover:bg-pink-700 rounded-full flex items-center justify-center cursor-pointer transition-colors">
              <Instagram className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Conocenos */}
          <div>
            <h5 className="font-bold mb-4 text-white">Conocenos</h5>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Tiendas y horarios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">¿Quiénes somos?</a></li>
              <li><a href="#" className="hover:text-white transition-colors">La empresa</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política empresarial</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Términos</a></li>
            </ul>
          </div>

          {/* Ayuda */}
          <div>
            <h5 className="font-bold mb-4 text-white">Ayuda</h5>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Cómo comprar</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Credilana</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Garantías y devoluciones</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
            </ul>
          </div>

          {/* Más */}
          <div>
            <h5 className="font-bold mb-4 text-white">Más</h5>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Facturación electrónica</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Estado de cuenta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Compradores responsables</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Promociones vigentes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Contactanos */}
          <div>
            <h5 className="font-bold mb-4 text-white">Contactanos</h5>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-semibold text-white mb-2">Credilana sin costo</p>
                <p className="text-2xl font-bold text-white mb-1">800 849 8499</p>
                <p className="text-sm">Línea gratuita en México, U.S.</p>
              </div>
              
              <div>
                <p className="font-semibold text-white mb-2">Tienda en línea</p>
                <p className="text-lg font-bold text-white mb-1">33 2688 6170 Opción 1, 2</p>
                <div className="flex items-center text-sm mb-1">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Lunes a Domingo</span>
                </div>
                <p className="text-sm">8:00 am - 9:00 pm</p>
              </div>

              <div>
                <p className="text-sm mb-2">Para reportar alguna incidencia en tu factura</p>
                <p className="font-bold text-white">facturacion@mueblesamerica.mx</p>
              </div>

              <div>
                <p className="text-sm mb-2">Atención a clientes</p>
                <p className="text-lg font-bold text-white">33 2688 6170 Opción 4, 7, 8</p>
                <p className="text-sm">8:00 am - 9:00 pm</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-600 pt-8 mt-12 text-center">
          <p className="text-gray-400 mb-4">
            Todos nuestros trámites son fáciles y sencillos, además son completamente gratuitos.
          </p>
          <div className="flex justify-center items-center space-x-4 mb-4">
            <span className="text-gray-400">¿Cómo podemos ayudarte?</span>
          </div>
          <p className="text-gray-400 text-sm">
            © 2025 Muebles América. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;