import React from "react";
import Wave from "react-wavify"; // Asegúrate de tener 'react-wavify' instalado (npm install react-wavify)
import Footer from "./Footer"


const WaveEffect = () => {
  return (
    <>
     <img 
            src="/banner/8.png" 
            alt="Ejemplo de imagen de ancho completo" 
            className="w-full h-auto object-cover mb:20"
        />
    
    <div style={{ position: "relative", height: "450px", width: "100%", marginTop: "-90px" }}>
      
      
     
     
       
      {/* Ola de Fondo (más oscura, más lenta, más baja) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 1}}>
        <Wave
          fill="#e3be5d" // Color más oscuro para la ola de atrás
          paused={false}
          options={{
            height: 20,    // Altura base de la ola
            amplitude: 25, // Amplitud del movimiento
           
            points: 4      // Menos puntos para una ola más suave
          }}
          style={{ width: "100%", height: "100%" }} // Asegura que la ola ocupe el 100% de su contenedor div
        />
      </div>

 

      {/* Ola de Primer Plano (más clara, más rápida, más alta y con más detalle) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 3 }}>
        <Wave
          fill="#f2dc7d" // Color más claro y vibrante para la ola frontal
          paused={false}


          
          options={{
            height: 30,    // Altura base de la ola más alta
            amplitude: 35, // Mayor amplitud de movimiento
         
            points: 6      // Más puntos para una ola con más detalle
          }}
          style={{ width: "100%", height: "100%" }} // Asegura que la ola ocupe el 100% de su contenedor div
        />
        
      </div>

      {/* Footer encima de las olas */}
        <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", zIndex: 5 }}>
          <Footer />
        </div>

    </div>
    </>
  );
};

export default WaveEffect;
