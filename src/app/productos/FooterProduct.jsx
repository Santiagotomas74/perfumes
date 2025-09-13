import React from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaLaptopCode } from "react-icons/fa";

const Footer = () => {
  const whatsappLink = "https://wa.me/541126042925";
  const whatsappLink2 = "https://wa.me/541123089572";
  return (
    <>
      <footer
        className="text-white py-12 px-4 sm:px-6 md:px-24"
    
      >
        <div className="border-t border-gray-700 mb-8"></div>

        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-12 pb-12">
          {/* Marca */}
          <div className="flex flex-col items-start md:col-span-1">
            <div className="text-3xl font-bold text-white tracking-wide">
              Perfumes Elegantes
            </div>
            <p className="mt-4 text-sm max-w-xs leading-relaxed">
              Descubre la esencia de la elegancia. Ofrecemos una colección de perfumes de alta calidad para cada ocasión.
            </p>
          </div>

          {/* Enlaces */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Explorar</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-white transition duration-200">Inicio</a></li>
              <li><a href="/productos" className="hover:text-white transition duration-200">Productos</a></li>
              <li><a href="#contacto" className="hover:text-white transition duration-200">Contacto</a></li>
            </ul>
          </div>

          {/* Desarrollador */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white  mb-4">Desarrollado por</h3>
            <p className="font-bold text-base text-white mb-4">Santiago Taher</p>
             <div className="flex space-x-5 text-2xl">
                          {/* Portafolio */}
                          <a
                            href="https://portafolio-santiago-taher.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition duration-200"
                          >
                            <FaLaptopCode />
                          </a>
                          {/* LinkedIn */}
                          <a
                            href="https://www.linkedin.com/in/santiago-taher-239008317"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition duration-200"
                          >
                            <FaLinkedin />
                          </a>
                          {/* Correo */}
                          <a
                            href="mailto:santiago_lucas1@hotmail.com"
                            className="hover:text-white transition duration-200"
                          >
                            <FaEnvelope />
                          </a>
                          {/* WhatsApp */}
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition duration-200"
                          >
                            <FaWhatsapp />
                          </a>
                        </div>
          </div>

          {/* Redes sociales (si querés mantenerlas) */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
           <div className="flex space-x-5 text-2xl">
                         <a
                           href={whatsappLink2}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="hover:text-white transition duration-200"
                         >
                           <FaWhatsapp />
                         </a>
                         {/* Ejemplo: podrías poner Instagram / Facebook / X */}
                       </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mb-8"></div>

        <div className="mt-8 text-center text-sm">
          © {new Date().getFullYear()} Perfumes Elegantes. Todos los derechos reservados.
        </div>
      </footer>
    </>
  );
};

export default Footer;
