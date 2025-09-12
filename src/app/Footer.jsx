import React from 'react';

const Footer = () => {
  return (
    <>
  
    <footer className=" text-gray-300 py-12 px-6 sm:px-12 md:px-24">
         <div className='border-t border-gray-700 mb-8'> </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-12  pb-12">
        {/* Sección de la marca */}
        <div className="flex flex-col items-start md:col-span-1">
          <div className="text-3xl font-bold text-white tracking-wide">
            Perfumes Elegantes
          </div>
          <p className="mt-4 text-sm max-w-xs leading-relaxed">
            Descubre la esencia de la elegancia. Ofrecemos una colección de perfumes de alta calidad para cada ocasión.
          </p>
        </div>

        {/* Sección de enlaces de navegación */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Explorar</h3>
          <ul className="space-y-3">
            <li><a href="/" className="hover:text-white transition duration-200">Inicio</a></li>
            <li><a href="/productos" className="hover:text-white transition duration-200">Productos</a></li>
            <li><a href="#" className="hover:text-white transition duration-200">Contacto</a></li>
          </ul>
        </div>

        {/* Sección del desarrollador */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Desarrollado por</h3>
          <div className="space-y-3">
            <p className="font-bold text-base text-white">Santiago Taher</p>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://ejemplo-portafolio.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                  Portafolio
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/nombre-del-desarrollador" target="_blank" rel="noopener noreferrer" className="hover:text-white transition duration-200">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="mailto:desarrollador@ejemplo.com" className="hover:text-white transition duration-200">
                  Correo Electrónico
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sección de contacto y redes sociales */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
          <div className="flex space-x-4">
            {/* Ícono de Facebook */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.015 4.85.071 1.17.067 1.629.249 2.025.467.4.218.673.504.978.808.304.305.586.588.807.979.219.392.4.851.467 2.025.056 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.067 1.17-.249 1.629-.467 2.025-.218.4-.504.673-.808.978-.305.304-.586.588-.979.807-.392.219-.851.4-2.025.467-1.266.056-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.067-1.629-.249-2.025-.467-.4-.218-.673-.504-.978-.808-.304-.305-.586-.588-.807-.979-.219-.392-.4-.851-.467-2.025-.056-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.067-1.17.249-1.629.467-2.025.218-.4.504-.673.808-.978.305-.304.588-.586.979-.807.392.219.851.4 2.025.467 1.266-.056 1.646-.07 4.85-.07zm0-2.163c-3.797 0-4.285.013-5.772.076-1.485.07-2.42.311-3.177.677-.75.368-1.348.868-1.928 1.448s-1.08.118-1.448 1.928c-.366.757-.607 1.693-.677 3.177-.063 1.486-.076 1.974-.076 5.772s.013 4.285.076 5.772c.07 1.485.311 2.42.677 3.177.368.75.868 1.348 1.448 1.928s1.178.578 1.928 1.448c.757.366 1.693.607 3.177.677 1.486.063 1.974.076 5.772.076s4.285-.013 5.772-.076c1.485-.07 2.42-.311 3.177-.677.368-.75.868-1.348 1.448-1.928s.578-1.178 1.928-1.448c.366-.757.607-1.693.677-3.177.063-1.486.076-1.974.076-5.772s-.013-4.285-.076-5.772c-.07-1.485-.311-2.42-.677-3.177-.368-.75-.868-1.348-1.448-1.928s-1.178-.578-1.928-1.448c-.757-.366-1.693-.607-3.177-.677-1.486-.063-1.974-.076-5.772-.076z" />
              </svg>
            </a>
            {/* Ícono de Instagram */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.015 4.85.071 1.17.067 1.629.249 2.025.467.4.218.673.504.978.808.304.305.586.588.807.979.219.392.4.851.467 2.025.056 1.266.07 1.646.07 4.85s-.015 3.584-.071 4.85c-.067 1.17-.249 1.629-.467 2.025-.218.4-.504.673-.808.978-.305.304-.586.588-.979.807-.392.219-.851.4-2.025.467-1.266.056-1.646.07-4.85.07s-3.584-.015-4.85-.071c-1.17-.067-1.629-.249-2.025-.467-.4-.218-.673-.504-.978-.808-.304-.305-.586-.588-.807-.979-.219-.392-.4-.851-.467-2.025-.056-1.266-.07-1.646-.07-4.85s.015-3.584.071-4.85c.067-1.17.249-1.629.467-2.025.218-.4.504-.673.808-.978.305-.304.586-.588-.979.807-.392.219-.851.4 2.025.467 1.266-.056 1.646-.07 4.85-.07zm0-2.163c-3.797 0-4.285.013-5.772.076-1.485.07-2.42.311-3.177.677-.75.368-1.348.868-1.928 1.448s-1.08.118-1.448 1.928c-.366.757-.607 1.693-.677 3.177-.063 1.486-.076 1.974-.076 5.772s.013 4.285.076 5.772c.07 1.485.311 2.42.677 3.177.368.75.868 1.348 1.448 1.928s1.178.578 1.928 1.448c.757.366 1.693.607 3.177.677 1.486.063 1.974.076 5.772.076s4.285-.013 5.772-.076c1.485-.07 2.42-.311 3.177-.677.368-.75.868-1.348 1.448-1.928s.578-1.178 1.928-1.448c.366-.757.607-1.693.677-3.177.063-1.486.076-1.974.076-5.772s-.013-4.285-.076-5.772c-.07-1.485-.311-2.42-.677-3.177-.368-.75-.868-1.348-1.448-1.928s-1.178-.578-1.928-1.448c-.757-.366-1.693-.607-3.177-.677-1.486-.063-1.974-.076-5.772-.076z" />
              </svg>
            </a>
            {/* Ícono de Twitter */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.795-1.574 2.16-2.723-.951.564-2.005.974-3.127 1.195-.895-.959-2.173-1.559-3.591-1.559-2.717 0-4.921 2.204-4.921 4.921 0 .386.044.76.128 1.124-4.09-.205-7.72-2.165-10.156-5.127-.424.731-.667 1.58-.667 2.484 0 1.708.868 3.218 2.188 4.092-.806-.026-1.565-.247-2.228-.614v.061c0 2.385 1.69 4.376 3.931 4.829-.412.112-.843.172-1.29.172-.315 0-.62-.03-.918-.088.625 1.956 2.448 3.385 4.604 3.424-1.68 1.314-3.809 2.105-6.143 2.105-.4 0-.79-.023-1.17-.069 2.18 1.393 4.763 2.209 7.545 2.209 9.058 0 13.99-7.496 13.99-13.986 0-.212-.006-.425-.015-.636.961-.695 1.79-1.565 2.458-2.55z" />
              </svg>
            </a>
          </div>
        </div>
        
      </div>
        <div className='border-t border-gray-700 mb-8'> </div>
      {/* Sección de derechos de autor */}
      <div className="mt-8 text-center text-sm">
        © {new Date().getFullYear()} Perfumes Elegantes. Todos los derechos reservados.
      </div>
    </footer>
      </>
  );
};

export default Footer;
