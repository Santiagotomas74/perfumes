import React, { useState, useEffect, useRef } from 'react';

// Array de URLs de los logos. Reemplaza estas URLs con las de tus marcas.
const logos = [
  "https://lattafa.com/wp-content/uploads/2024/04/lattafa-logo-final-2.svg",
  "https://www.mixperfume.com.ar/cdn/shop/collections/AlHaramainlogooriental-bw.png?v=1732106850",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq8d2OilsSEp_5j9ZomtpL6Hn0UXYpWmLW2w&s",
  "https://www.shutterstock.com/image-vector/venus-milo-icon-silhouette-illustration-600nw-2196337245.jpg",
  "data:image/png;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6BrK_7T0mFYzFawVdJJ0y_Iz18jnhMDIhiw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH9LUVjWP6k2xEQAvRf9moJKlWyhyAp3ckow&s",
  "https://perfumesarabes-charmes.com/cdn/shop/collections/Diseno_sin_titulo_31.png?v=1724955015",
  "https://fimgs.net/mdimg/dizajneri/o.2917.jpg"
];

// Duplicamos los logos para el efecto de carrusel infinito
const duplicatedLogos = [...logos, ...logos];

const LogoSlider = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Definimos el intervalo para el desplazamiento automático
    const interval = setInterval(() => {
      // Evita transiciones si ya hay una en curso
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(prevIndex => prevIndex + 1);
    }, 3000); // Se mueve cada 3 segundos

    // Limpiamos el intervalo al desmontar el componente
    return () => clearInterval(interval);
  }, [isTransitioning]);

  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const logoItems = slider.children;
    if (logoItems.length === 0) return;

    // Calculamos el ancho de cada item con su gap
    const logoWidth = logoItems[0].offsetWidth;
    const gapWidth = 32; // Corresponde a '2rem' en el CSS
    const itemWidthWithGap = logoWidth + gapWidth;

    // Aplicamos la transformación para el movimiento
    slider.style.transform = `translateX(-${currentIndex * itemWidthWithGap}px)`;

    const handleTransitionEnd = () => {
      // Si llegamos al final de la lista original, reseteamos la posición
      if (currentIndex >= logos.length) {
        slider.style.transition = 'none'; // Desactiva la transición para el reseteo
        setCurrentIndex(0);
        setTimeout(() => {
          slider.style.transition = 'transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)'; // Reactiva la transición
          setIsTransitioning(false);
        }, 10); // Un pequeño retraso para asegurar el reseteo
      } else {
        setIsTransitioning(false);
      }
    };
    
    slider.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slider.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, [currentIndex]);

  return (
    <div className="logo-slider-container">
      <div id="slider" ref={sliderRef} className="slider">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo} alt={`Logo de la marca ${index + 1}`} />
          </div>
        ))}
      </div>
      {/* El CSS está inyectado directamente en el componente usando styled-jsx.
        Esto asegura que los estilos no interfieran con otros elementos y que el componente sea autónomo.
      */}
      <style jsx>{`
        .logo-slider-container {
          width: 100%;
          overflow: hidden;
          display: flex;
          justify-content: center;
          padding: 2rem 0;
          background-color: #000;
          margin-bottom: 5rem
          
        }

        .slider {
          display: flex;
          align-items: center;
          gap: 9rem;
          transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .logo-item {
          flex-shrink: 0;
          width: 150px;
          height: 150px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 8px;
          background-color: rgba(255, 255, 255, 0.03);
          padding: 1rem;
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.05);
        }
        
        .logo-item img {
          max-width: 100%;
          height: auto;
          filter: brightness(0.8) grayscale(100%);
          transition: filter 0.3s ease;
        }

        .logo-item img:hover {
          filter: brightness(1) grayscale(0%);
        }

        @media (max-width: 768px) {
          .slider {
            gap: 1rem;
          }
          .logo-item {
            width: 100px;
            height: 100px;
          }
        }
      `}</style>
    </div>
  );
};

export default LogoSlider;
