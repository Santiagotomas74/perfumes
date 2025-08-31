// components/BannerCarousel.jsx
'use client'; // Esto indica que el componente se renderiza en el cliente para usar hooks como useState y useEffect.

import { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './BannerCarousel.module.css';

const banners = [
  {
    id: 1,
    image: '/perfumes/b2.webp', // Asegúrate de que estas imágenes existan en tu carpeta 'public'
    title: 'Colección Exclusiva de Oud',
    description: 'Descubre la esencia más pura y sofisticada de Medio Oriente.',
    link: '/productos/oud-collection',
  },
  {
    id: 2,
    image: '/perfumes/b3.webp',
    title: 'Nuevos Aromas Florales',
    description: 'Sumérgete en la delicadeza y el misterio de nuestras nuevas fragancias.',
    link: '/productos/floral-collection',
  },
  {
    id: 3,
    image: '/perfumes/b4.webp',
    title: 'Ofertas Especiales',
    description: 'Aprovecha descuentos únicos en tus perfumes árabes favoritos.',
    link: '/ofertas',
  },
];

const BannerCarousel = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // Función para avanzar al siguiente banner
  const nextBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === banners.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder al banner anterior
  const prevBanner = () => {
    setCurrentBannerIndex((prevIndex) =>
      prevIndex === 0 ? banners.length - 1 : prevIndex - 1
    );
  };

  // Efecto para el avance automático del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      nextBanner();
    }, 5000); // Cambia cada 5 segundos

    // Limpieza del intervalo cuando el componente se desmonta o el efecto se re-ejecuta
    return () => clearInterval(interval);
  }, [currentBannerIndex]); // Re-ejecutar el efecto si el índice cambia

  return (
    <div className={styles.carouselContainer}>
      {/* Botón para ir al banner anterior */}
      <button onClick={prevBanner} className={`${styles.navButton} ${styles.prev}`}>
        &#10094; {/* Flecha izquierda */}
      </button>

      {/* Botón para ir al siguiente banner */}
      <button onClick={nextBanner} className={`${styles.navButton} ${styles.next}`}>
        &#10095; {/* Flecha derecha */}
      </button>

      {/* Renderizado de cada banner */}
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`${styles.bannerItem} ${
            index === currentBannerIndex ? styles.active : ''
          }`}
        >
          <Image
            src={banner.image}
            alt={banner.title}
            fill // Ocupa todo el espacio de su contenedor padre con position relative
            priority={index === 0} // Carga prioritaria para el primer banner
            className={styles.bannerImage}
            sizes="(max-width: 768px) 100vw, 100vw" // Optimización para diferentes tamaños de pantalla
          />
          <div className={styles.bannerContent} >
            <h2 className={styles.bannerTitle}>{banner.title}</h2>
            <p className={styles.bannerDescription}>{banner.description}</p>
            
          </div>
        </div>
      ))}

      {/* Indicadores de navegación (puntos) */}
      <div className={styles.dotsContainer}>
        {banners.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${
              index === currentBannerIndex ? styles.activeDot : ''
            }`}
            onClick={() => setCurrentBannerIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BannerCarousel;