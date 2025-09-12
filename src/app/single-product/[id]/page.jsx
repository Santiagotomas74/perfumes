'use client';

import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import Beams from './Beams';
import Dock from './Dock';
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';
import { useRouter } from 'next/navigation';
import MagicBento from "./MagicBento"


 
export default function SingleProductPage() {
  const searchParams = useSearchParams();
const router = useRouter();
// ✅ useEffect solo corre en cliente, evitando problemas en build
  useEffect(() => {
    if (!searchParams) return;

    const filter = searchParams.get("filter");
    if (filter) {
      const normalized =
        filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase();
      if (["Hombre", "Mujer", "Unisex"].includes(normalized)) {
        setSelectedGender(normalized);
      }
    }
  }, [searchParams]);
  const items = [
    { icon: <VscHome size={18} />, label: 'Inicio', onClick: () => router.push('/')  },
    { icon: <VscArchive size={18} />, label: 'Productos', onClick: () => router.push('/productos') },
    { icon: <VscAccount size={18} />, label: 'Contactanos', onClick: () => alert('Profile!') }
  ];
  const product = {
    id: searchParams.get('id'),
    title: searchParams.get('title'),
    brand: searchParams.get('brand'),
    description: searchParams.get('description'),
    img: searchParams.get('img'),
    imgHover: searchParams.get('imgHover'),
    img2: searchParams.get('img2'),
    img3: searchParams.get('img3'),
    img4: searchParams.get('img4'),
    price: searchParams.get('price'),
    nota1: searchParams.get('nota1'),
    nota2: searchParams.get('nota2'),
    nota3: searchParams.get('nota3'),
  };

  return (
    <>
   
 <div style={{ 
        width: '100%', 
        height: '100vh',
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
  <Beams
    beamWidth={2}
    beamHeight={25}
    beamNumber={12}
    lightColor="#ffffff"
    speed={2}
    noiseIntensity={0}
    scale={0.2}
    rotation={30}
  />
  </div>


   <div style={{
          position: 'relative',
          zIndex: 100  // ✅ Navbar siempre visible
        }}>


    <div className="max-w-6xl mx-auto px-6 py-10">
      {/* Contenedor principal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Imagen principal y galería */}
        <div className="flex flex-col space-y-4">
          <Image
            src={product.imgHover}
            alt={product.title}
            width={500}
            height={500}
            className="rounded-2xl shadow-md object-cover"
          />
          <div className="grid grid-cols-3 gap-3">
            {product.img && (
              <Image
                src={product.img}
                alt={`${product.title} img2`}
                width={150}
                height={150}
                className="rounded-xl shadow-sm object-cover"
              />
            )}
            {product.img2 && (
              <Image
                src={product.img2}
                alt={`${product.title} img3`}
                width={150}
                height={150}
                className="rounded-xl shadow-sm object-cover"
              />
            )}
            {product.img3 && (
              <Image
                src={product.img3}
                alt={`${product.title} img4`}
                width={150}
                height={150}
                className="rounded-xl shadow-sm object-cover"
              />
            )}
          </div>
        </div>
             {/* Card con info del producto */}
              <MagicBento product={product} />
      </div>
    </div>
    
    </div>
    
          
    </div>
     <Dock 
    items={items}
    panelHeight={68}
    baseItemSize={50}
    magnification={70}
  />
    
     </>
  );
}
