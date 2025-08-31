import React from "react";
import Wave from "react-wavify"; // Asegúrate de tener 'react-wavify' instalado (npm install react-wavify)

const WaveEffect = () => {
  return (
    // Contenedor principal: debe ser relativo para que las olas se posicionen absolutamente dentro de él
    // Ajusta la altura del contenedor según tus necesidades.
    <div style={{ position: "relative", height: "300px", width: "100%", overflow: "hidden", backgroundColor: "black" }}>

      {/* Ola de Fondo (más oscura, más lenta, más baja) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 1 }}>
        <Wave
          fill="#ffd9002c" // Color más oscuro para la ola de atrás
          paused={true}
          options={{
            height: 10,    // Altura base de la ola
            amplitude: 20, // Amplitud del movimiento
           
            points: 4      // Menos puntos para una ola más suave
          }}
          style={{ width: "100%", height: "100%" }} // Asegura que la ola ocupe el 100% de su contenedor div
        />
      </div>

      {/* Ola del Medio (tono intermedio, velocidad media, un poco más alta) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 2 }}>
        <Wave
          fill="#ffd90071" // Tono intermedio de azul
          paused={false}
          options={{
            height: 20,    // Altura base de la ola un poco más alta
            amplitude: 35, // Amplitud del movimiento
          
            points: 6      // Más puntos para una ola un poco más definida
          }}
          style={{ width: "100%", height: "100%" }} // Asegura que la ola ocupe el 100% de su contenedor div
        />
      </div>

      {/* Ola de Primer Plano (más clara, más rápida, más alta y con más detalle) */}
      <div style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: "100%", zIndex: 3 }}>
        <Wave
          fill="#FFD700" // Color más claro y vibrante para la ola frontal
          paused={true}


          
          options={{
            height: 30,    // Altura base de la ola más alta
            amplitude: 35, // Mayor amplitud de movimiento
         
            points: 6      // Más puntos para una ola con más detalle
          }}
          style={{ width: "100%", height: "100%" }} // Asegura que la ola ocupe el 100% de su contenedor div
        />
      </div>

    </div>
  );
};

export default WaveEffect;
