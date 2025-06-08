import { ChevronRight } from 'lucide-react';

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: "Motos",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/MOTOS_6.jpg",
      link: "/category/motos"
    },
    {
      id: 2,
      name: "Celulares",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/CELULARES_4.jpg",
      link: "/category/celulares"
    },
    {
      id: 3,
      name: "Electrodomésticos",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/ELECTRODOM_STICO.jpg",
      link: "/category/electrodomesticos"
    },
    {
      id: 4,
      name: "Muebles",
      image: "https://checkout.mueblesamerica.mx/media/wysiwyg/MUEBLES.jpg",
      link: "/category/muebles"
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-gray-800">
          ¡Lo mejor para tu hogar!
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                    <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-blue-600 transition-colors" />
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

export default CategoryGrid;