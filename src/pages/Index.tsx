import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import SecondaryBanner from '../components/SecondaryBanner';
import CategoryGrid from '../components/CategoryGrid';
import ProductSection from '../components/ProductSection';
import PromoBanner from '../components/PromoBanner';
import ServiceGrid from '../components/ServiceGrid';
import Footer from '../components/Footer';
import { useProducts } from '../hooks/useProducts';

const Index = () => {
  const { products, favorites, loading } = useProducts();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Carousel */}
      <HeroCarousel />

      {/* Secondary Promo Banner */}
      <SecondaryBanner />

      {/* Category Grid */}
      <CategoryGrid />

      {/* Products Section */}
      {products.length > 0 && (
        <ProductSection 
          title="Lo que estabas buscando"
          products={products}
        />
      )}

      {/* Credilana Banner */}
      <div className="container mx-auto px-4 py-8">
        <PromoBanner 
          image="https://checkout.mueblesamerica.mx/media/wysiwyg/cl_2024_banner_mobile_2160x359.jpg"
          alt="Credilana"
          link="/credilana"
        />
      </div>

      {/* Service Grid */}
      <ServiceGrid />

      {/* Favorites Section */}
      {favorites.length > 0 && (
        <ProductSection 
          title="Los favoritos del mes"
          products={favorites}
        />
      )}

      {/* Catalog Banner */}
      <div className="container mx-auto px-4 py-8">
        <PromoBanner 
          image="https://checkout.mueblesamerica.mx/media/wysiwyg/MA_2025_banner_p_gina_web.jpg"
          alt="Catálogo 2025"
          link="https://issuu.com/jl.velardebabun/docs/cat_logo_de_muebles_am_rica_02"
        />
      </div>

      {/* Free Shipping Banner */}
      <div className="container mx-auto px-4 py-8 mb-8">
        <PromoBanner 
          image="https://checkout.mueblesamerica.mx/media/wysiwyg/2160X359_DESKTOP_envio_1.jpg"
          alt="Envío gratis"
          link="/envio-gratis"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;