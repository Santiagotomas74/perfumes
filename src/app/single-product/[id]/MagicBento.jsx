'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './MagicBento.css';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const DEFAULT_GLOW_COLOR = '132, 0, 255';

const SingleMagicCard = ({
  product,
  color = '#060010',
  glowColor = DEFAULT_GLOW_COLOR,
  enableTilt = true,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
    
      if (enableTilt) {
        const rotateX = ((y - centerY) / centerY) * -10;
        const rotateY = ((x - centerX) / centerX) * 10;

        gsap.to(element, {
          rotateX,
          rotateY,
          duration: 0.1,
          ease: 'power2.out',
          transformPerspective: 1000,
        });
      }

      if (enableMagnetism) {
        const magnetX = (x - centerX) * 0.05;
        const magnetY = (y - centerY) * 0.05;
        gsap.to(element, {
          x: magnetX,
          y: magnetY,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleMouseLeave = () => {
      if (enableTilt) {
        gsap.to(element, {
          rotateX: 0,
          rotateY: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
      if (enableMagnetism) {
        gsap.to(element, {
          x: 0,
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const handleClick = (e) => {
      if (!clickEffect) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const maxDistance = Math.max(
        Math.hypot(x, y),
        Math.hypot(x - rect.width, y),
        Math.hypot(x, y - rect.height),
        Math.hypot(x - rect.width, y - rect.height)
      );

      const ripple = document.createElement('div');
      ripple.style.cssText = `
        position: absolute;
        width: ${maxDistance * 2}px;
        height: ${maxDistance * 2}px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(${glowColor}, 0.4) 0%, rgba(${glowColor}, 0.2) 30%, transparent 70%);
        left: ${x - maxDistance}px;
        top: ${y - maxDistance}px;
        pointer-events: none;
        z-index: 1000;
      `;

      element.appendChild(ripple);

      gsap.fromTo(
        ripple,
        { scale: 0, opacity: 1 },
        {
          scale: 1,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out',
          onComplete: () => ripple.remove(),
        }
      );
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    element.addEventListener('click', handleClick);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      element.removeEventListener('click', handleClick);
    };
  }, [enableTilt, enableMagnetism, clickEffect, glowColor]);
   const whatsappLink = "https://wa.me/541123089572";
  return (
    <div
      ref={cardRef}
      className="card card--border-glow"
      style={{
        backgroundColor: color,
        '--glow-color': glowColor,
        position: 'relative',
        overflow: 'hidden',
        padding: '2rem',
        
      }}
    >
      {/* Efecto partículas con pseudo-elemento */}
      <div className="particle-bg"></div>

      {/* Contenido del producto */}
      <div className="relative z-10 h-full flex flex-col justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">{product.title}</h1>
          <p className="text-lg text-gray-300 mt-2">{product.brand}</p>
          <p className="mt-4 text-gray-400 leading-relaxed">{product.description}</p>

          <div className="mt-6">
            <span className="text-2xl font-semibold text-green-400">
              ${product.price}
            </span>
          </div>

          {/* Notas olfativas */}
          <div className="mt-4">
            <h2 className="text-xl font-semibold text-gray-200">Notas principales</h2>
            <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
              {product.nota1 && <li>{product.nota1}</li>}
              {product.nota2 && <li>{product.nota2}</li>}
              {product.nota3 && <li>{product.nota3}</li>}
            </ul>
          </div>
        </div>

        {/* Botón de WhatsApp */}
          <a 
            href={whatsappLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 bg-green-500 text-white px-6 py-3 rounded-2xl shadow-md hover:bg-green-600 transition flex items-center justify-center gap-2"
          >
            <WhatsAppIcon/>
            <span>Contáctanos por WhatsApp</span>
          </a>
      </div>
    </div>
  );
};

export default SingleMagicCard;
