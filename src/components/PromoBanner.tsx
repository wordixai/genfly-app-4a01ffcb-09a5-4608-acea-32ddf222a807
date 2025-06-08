interface PromoBannerProps {
  image: string;
  alt: string;
  link?: string;
  className?: string;
}

const PromoBanner = ({ image, alt, link = "#", className = "" }: PromoBannerProps) => {
  const BannerContent = () => (
    <div className={`w-full overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <img
        src={image}
        alt={alt}
        className="w-full h-auto hover:scale-105 transition-transform duration-300"
        loading="lazy"
      />
    </div>
  );

  return link !== "#" ? (
    <a href={link} className="block">
      <BannerContent />
    </a>
  ) : (
    <BannerContent />
  );
};

export default PromoBanner;