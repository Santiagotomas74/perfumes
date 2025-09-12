import Products from "./Productos"
import Navbar from "../Navbar"
import Galaxy from './Galaxy';

export default function ProductsPage() {
  return (
    <>
      <div style={{ 
        width: '100%', 
        position: 'relative' 
      }}>
        
        {/* FONDO: Galaxy con z-index más bajo */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0  // ✅ Fondo en la capa más baja
        }}>
          <Galaxy
    particleColors={['#ffffff', '#ffffff']}
    particleCount={200}
    particleSpread={10}
    speed={0.1}
    particleBaseSize={100}
    moveParticlesOnHover={true}
    alphaParticles={false}
    disableRotation={false}
  />
        </div>
        
        {/* NAVEGACIÓN: Navbar con z-index alto */}
        <div style={{
          position: 'relative',
          zIndex: 100  // ✅ Navbar siempre visible
        }}>
          <Navbar/>
        </div>
        
        {/* CONTENIDO: Products con z-index medio */}
        <div style={{
          position: 'relative',
          zIndex: 10  // ✅ Contenido encima del fondo
        }}>
          <Products/>
        </div>

      </div> 
    </>
  )
}