import { ChevronRight } from 'lucide-react';

const ServiceGrid = () => {
  const services = [
    {
      id: 1,
      name: "Abre tu Credito",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/ABRE_TU_CR_DITO_4.jpg",
      link: "https://abretucredito.mueblesamerica.mx/registro/registro.php?utm_source=website&u=1"
    },
    {
      id: 2,
      name: "Pago en Linea",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/PAGO_EN_L_NEA_4.jpg",
      link: "/payments/login"
    },
    {
      id: 3,
      name: "Cuponera del Ahorro",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/CUPONERA_DEL_AHORRO_4.jpg",
      link: "/modulo-promociones"
    },
    {
      id: 4,
      name: "OUTLET",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/PROMOS_DESTACADAS_4.jpg",
      link: "/outlet-ma.html"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {services.map((service) => (
            <div key={service.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-ma-secondary group-hover:text-ma-primary transition-colors">
                      {service.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-ma-secondary group-hover:text-ma-primary transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;