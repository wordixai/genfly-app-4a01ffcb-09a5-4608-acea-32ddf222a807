import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  image: string;
  originalPrice: number;
  currentPrice: number;
  weeklyPayment: number;
  link: string;
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: "Aire Acondicionado Ventana Mirage MACC0511N 1/2 Tonelada 115 V Solo Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/I/MIRG00017_x1_1.jpg",
    originalPrice: 4699,
    currentPrice: 2999,
    weeklyPayment: 89,
    link: "/producto/1"
  },
  {
    id: 2,
    name: "Horno Microondas Mabe HMM09PJNX 0.9 Pies Negro",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/A/MABE00868_x1.jpg",
    originalPrice: 1777,
    currentPrice: 1399,
    weeklyPayment: 46,
    link: "/producto/2"
  },
  {
    id: 3,
    name: "Aire Acondicionado Midea MAS12C1AGS 1 Tonelada 110 V Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/I/MIDE00045_x1.jpg",
    originalPrice: 6499,
    currentPrice: 4199,
    weeklyPayment: 128,
    link: "/producto/3"
  },
  {
    id: 4,
    name: "Aire Acondicionado Portátil Midea MAP12C1PAP 1 Tonelada 110 V Solo Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/I/MIDE00047_x1.jpg",
    originalPrice: 7199,
    currentPrice: 4999,
    weeklyPayment: 166,
    link: "/producto/4"
  },
  {
    id: 5,
    name: "Pantalla Quaroni Q50N24 50'' LED",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/Q/U/QUAR00002_x1.jpg",
    originalPrice: 5499,
    currentPrice: 4899,
    weeklyPayment: 143,
    link: "/producto/5"
  }
];

const favoritesProducts: Product[] = [
  {
    id: 6,
    name: "Aire Acondicionado Mabe MMT12CABWCAM3 1 Tonelada 115 V Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/A/MABE00870_x1.jpg",
    originalPrice: 6499,
    currentPrice: 4399,
    weeklyPayment: 126,
    link: "/producto/6"
  },
  {
    id: 7,
    name: "Pantalla Quaroni Q32W24 32'' LED",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/q/u/quar00002_a.jpg",
    originalPrice: 2699,
    currentPrice: 2399,
    weeklyPayment: 63,
    link: "/producto/7"
  },
  {
    id: 8,
    name: "Aire Acondicionado Portátil Mabe PTM12CABWJM2 1 Tonelada 115 V Solo Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/A/MABE00839_x1_1.jpg",
    originalPrice: 7199,
    currentPrice: 5199,
    weeklyPayment: 152,
    link: "/producto/8"
  },
  {
    id: 9,
    name: "Aire Acondicionado Inverter Midea MAS12C1ECS 1 Tonelada 110 V Solo Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/I/MIDE00046_x1.jpg",
    originalPrice: 7499,
    currentPrice: 5199,
    weeklyPayment: 157,
    link: "/producto/9"
  },
  {
    id: 10,
    name: "Aire Acondicionado Mirage SETCBF120K 1 Tonelada 115 V Frio",
    image: "https://www.mueblesamerica.mx/img/200/200/resize/M/I/MIRG00021_x1.jpg",
    originalPrice: 6699,
    currentPrice: 4699,
    weeklyPayment: 130,
    link: "/producto/10"
  }
];

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [favorites, setFavorites] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate loading time
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(mockProducts);
      setFavorites(favoritesProducts);
      setLoading(false);
    };

    fetchProducts();
  }, []);

  return {
    products,
    favorites,
    loading
  };
};