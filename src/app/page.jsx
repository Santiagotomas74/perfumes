"use client";
import Navbar from "./Navbar";
import Productos from "./productos/Productos";
import Carrousel from "./Carrousel";
import LogoSlider from "./Pasarela"
import Wavify from "./Wavify";
import Banner from "./Banner"
import Footer from "./Footer"
import  WhatsApp  from "./WhatsappPedido";

import ScrollFloat from './ScrollFloat';

import CircularGallery from './CircularGallery'
import { Typography, Box } from "@mui/material";
import { motion } from "framer-motion";

export default function PerfumesElegant() {
   
   return (
    <>

    <Navbar/>
    <Carrousel/>
    <LogoSlider/>
     <div className="   mx-auto flex justify-center items-center">
    <div className="mt-4">
       <div className="block md:hidden">
       <Box
      sx={{
        textAlign: "center",
        mt: { xs: 4, sm: 6 },
        mb:5,
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "#FFD700",
            fontSize: { xs: "1.4rem", sm: "2rem", md: "2.5rem" }, // 🔑 adaptable a mobile
          }}
        >
          Explora Nuestras Fragancias Exclusivas!
        </Typography>
      </motion.div>
    </Box>
    </div>
 <div className="hidden md:block" >
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

 
</div>
</div>
   <img 
       src="/banner/6.png" 
       alt="Ejemplo de imagen de ancho completo" 
       className="w-full h-auto object-cover"
    />
        <Banner/>
    <div className="block md:hidden">
       <Box
      sx={{
        textAlign: "center",
        mt: { xs: 4, sm: 6 },
        px: 2,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 1,
            color: "#FFD700",
            fontSize: { xs: "1.4rem", sm: "2rem", md: "2.5rem" }, // 🔑 adaptable a mobile
          }}
        >
          Novedades que no quieres perderte!
        </Typography>
      </motion.div>
    </Box>
    </div>
   <div className="relative h-[400px] md:h-[600px] mb-30">
   <div className="   mx-auto flex justify-center items-center">
    <div className="mt-4 hidden md:block">
    <ScrollFloat
     
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.01}
    >
    Novedades que no quieres perderte!
    </ScrollFloat>
    </div>
   </div>

   <CircularGallery bend={3} textColor="#ffffff" borderRadius={0.05} scrollEase={0.15} />
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
   
    <WhatsApp/>
    </>
   );
}
