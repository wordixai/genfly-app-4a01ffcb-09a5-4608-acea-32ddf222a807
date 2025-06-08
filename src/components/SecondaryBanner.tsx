const SecondaryBanner = () => {
  return (
    <div className="w-full my-8">
      <div className="container mx-auto px-4">
        <div className="relative w-full h-[120px] md:h-[180px] overflow-hidden rounded-lg">
          <img
            src="https://checkout.mueblesamerica.mx/media/wysiwyg/2160X359_DESKTOP_25MONEDERO_3.jpg"
            alt="Hasta 22% en monedero con tu tarjeta de Muebles América"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default SecondaryBanner;