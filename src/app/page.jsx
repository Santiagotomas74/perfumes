"use client";
import Navbar from "./Navbar";
import Productos from "./productos/Productos";
import Carrousel from "./Carrousel";
import LogoSlider from "./Pasarela"
import Wavify from "./Wavify";
import Banner from "./Banner"
import Footer from "./Footer"

import ScrollFloat from './ScrollFloat';

import CircularGallery from './CircularGallery'

export default function PerfumesElegant() {
   
   return (
    <>

    <Navbar/>
    <Carrousel/>
    <LogoSlider/>
  
<div   style={{ marginLeft:"15%", marginTop:"5%", marginBottom: "50px"}}>
<ScrollFloat
   animationDuration={1}
   ease='back.inOut(2)'
   scrollStart='center bottom+=50%'
   scrollEnd='bottom bottom-=40%'
   stagger={0.01}
>
   Explora Nuestras Fragancias Exclusivas!
</ScrollFloat>
</div>

   <img 
       src="/banner/6.png" 
       alt="Ejemplo de imagen de ancho completo" 
       className="w-full h-auto object-cover"
    />
        <Banner/>
    
   <div className="relative h-[400px] md:h-[600px] mb-30">
   <div className="   mx-auto flex justify-center items-center">
    <div className="mt-4">
    <ScrollFloat
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.01}
    >
    Novedades que no querrás perderte!
    </ScrollFloat>
    </div>
   </div>

   <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.02} />
</div>

  
    <div className="hidden md:block">
    <Wavify/>
    </div>

    
     <div className="block md:hidden">
   <img 
            src="/banner/8.png" 
            alt="Ejemplo de imagen de ancho completo" 
            className="w-full h-auto object-cover mb:20"
        />
    </div>
    
    <Footer />
   
    
    </>
   );
}
