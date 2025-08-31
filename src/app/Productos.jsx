"use client";
import { useState } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { keyframes } from "@emotion/react";
import Wavify from "./Wavify";

// Animación de entrada lateral
const fadeInLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px)
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export default function PerfumesElegant() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showContent, setShowContent] = useState(null);

  const perfumes = [
    {
      id: 1,
      title: "Al Haramain Das Ziel Schwarz",
      description: "Extrait de parfum | 100 ml",
      brand: "Al Haramain",
      price: 149703,
      img: "/perfumes/12.png",
      imgHover: "/perfumes/8.jpg",
    },
    {
      id: 2,
      title: "French Avenue",
      description: "EDP | 100 ml",
      brand: "Venus De Milo",
      price: 75.000,
      img: "https://nrperfumesarabes.com/cdn/shop/files/B06E341A-F558-4574-A46A-AA5F9415D449.png?v=1746474874",
      imgHover: "https://http2.mlstatic.com/D_NQ_NP_847626-MLA89161293347_082025-O.webp"
    },
    {
      id: 3,
      title: "Red Tobacco Vainilla",
      description: "EDP | 100 ml",
      brand: "Emper Perfumes",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/Fotos-pagina.pptx-19.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/tobacco-4.jpg"
    },
   
    {
      id: 4,
      title: "Cocktail Intense",
      description: "EDP | 100 ml",
      brand: "Fragance World",
      price: 105271,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/Fotos-pagina.pptx-5.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/coctail-6.jpg"
    },
    {
      id: 5,
      title: "Stallion 53 ",
      description: "EDP | 100 ml",
      brand: "Emper Perfumes",
      price: 90.568,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/02/Fotos-pagina.pptx-39.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/02/stallion-53-1.jpg"
    },
      {
      id: 6,
      title: "Petra  ",
      description: "EDP | 100 ml",
      brand: " Lattafa",
      price: 115.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2025/07/Perfumes-Decants-69.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2025/07/petra-2.jpg"
    },
    {
      id: 7,
      title: "Bade’e Al Oud Honor & Glory",
      description: "EDP | 100 ml",
      brand: " Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/12/Perfumes-Decants-31.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/12/honor-1.jpg"
    },
    {
      id: 8,
      title: "Haya",
      description: "EDP | 100 ml",
      brand: " Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/Patitas-Suaves-1-x-1-2.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/hata-2.jpg"
    },
    {
      id: 9,
      title: "Leen",
      description: "EDP | 100 ml",
      brand: " Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/Fotos-pagina.pptx-14.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/leen-4.jpg"
    },
    {
      id: 10,
      title: "Eternal Oud",
      description: "EDP | 100 ml",
      brand: " Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/03/Fotos-pagina.pptx-44.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/03/eternal-oud-web-1.jpg"
    },
    {
      id: 11,
      title: "Meethaq Extrait De Rouge",
      description: "EDP | 100 ml",
      brand: "Ard Al Zaafaran",
      price: 75.000,
      img: "https://emiratesoud.co.uk/cdn/shop/files/Meethaq-Extrait-De-Rouge-Perfume-100ml-EDP-by-Ard-Al-Zaafaran-169958472.jpg?v=1750902893&width=600",
      imgHover: "https://www.intenseoud.com/cdn/shop/files/4_e299dbcc-2c82-46e9-9005-1dc72fde4171.jpg?v=1729633508"
    },
    {
      id: 12,
      title: "Shahama",
      description: "EDP | 100 ml",
      brand: "Matin & Martin",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/04/Perfumes-Decants-7.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/04/shahama-2.jpg"
    },
    {
      id: 13,
      title: "Amber Wave",
      description: "EDP | 100 ml",
      brand: "Matin & Martin",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/Perfumes-Decants-23.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/amber-wave-1.jpg"
    },
    {
      id: 14,
      title: "Al Qiam Gold",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/Fotos-pagina.pptx-9.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/01/qiam-gold-2.jpg"
    },
     {
      id: 15,
      title: "Musaman",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/Perfumes-Decants-8.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/musaman-2.jpg"
    },
    {
      id: 16,
      title: "Yara Candy",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/10/Perfumes-Decants-55.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/10/yara-candy-2.jpg"
    },
     {
      id: 17,
      title: "Yara Tous",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/11/Perfumes-Decants-25.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/11/yara-tous-4.jpg"
    },
     {
      id: 18,
      title: "Ramz Gold",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/Perfumes-Decants-56.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/05/ramz-gold-2.jpg"
    },
    {
      id: 19,
      title: "Nasheet",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/12/Perfumes-Decants-12.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/12/nasheet-4.jpg"
    },
     {
      id: 20,
      title: "Reyna",
      description: "EDP | 100 ml",
      brand: "Maison Alhambra",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2022/10/11-1.png",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/12/reyna-3.jpg"
    },
     {
      id: 21,
      title: "Kismet",
      description: "EDP | 100 ml",
      brand: "Maison Alhambra",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/02/Fotos-pagina.pptx-46.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/02/kismet-web-3.jpg"
    },
    {
      id: 22,
      title: "A La Rose",
      description: "EDP | 100 ml",
      brand: "Zimaya",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/08/Fotos-pagina.pptx-2.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/08/a-la-rose-3.jpg"
    },
     {
      id: 23,
      title: "Sakeena",
      description: "EDP | 100 ml",
      brand: "Lattafa",
      price: 75.000,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/Patitas-Suaves-1-x-1-3.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2023/10/sakeena-1.jpg"
    },
     {
      id: 24,
      title: "Bade al Oud Noble Blush",
      description: "EDP | 100 ml | Tester",
      brand: "Al Haramain",
      price: 126300,
      img: "https://www.hites.com/dw/image/v2/BDPN_PRD/on/demandware.static/-/Sites-mastercatalog_HITES/default/dwa0a76a29/images/original/pim/958609001/958609001_1.jpg?sw=1000&sh=1000",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/12/noble-blush-1.jpg",
    },
    {
      id: 25,
      title: "Masa",
      description: "EDP | 100 ml | Tester",
      brand: "Lattafa",
      price: 126300,
      img: "https://perfumescardales.com.ar/wp-content/uploads/2024/04/Perfumes-Decants-69.jpg",
      imgHover: "https://perfumescardales.com.ar/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-15-at-13.47.12-1.jpeg",
    },
    
    



  ];

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
    // Mostrar contenido después de 0.8s
    setTimeout(() => setShowContent(id), 800);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setShowContent(null);
  };

  return (
    <>
    <Box sx={{ 
  backgroundColor: "#d8b909ff",
   height: 400,
    position: "relative",
     "&::after": { content: '""',
      position: "absolute",
       bottom: 0,
        left: 0,
         width: "100%",
          height: 300,
           backgroundColor: "black",
            borderRadius: "50% 50% 0 0",
             transition: "height 0.3s ease",
              },
               "&:hover::after": { height: 200},
                }} ></Box>
    <Box sx={{ backgroundColor: "#000", minHeight: "600vh", px: 10, py: 16 }}>
      {/* Título */}
      <Box sx={{ display: "flex", alignItems: "center", mb: 6 }}>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "black", mx: 2 }} />
        <Typography
  variant="h4"
  sx={{
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#FFD700",
    fontFamily: 'var(--font-el-messiri)', // Usando la variable de El Messiri
    fontSize: '2.8rem', // Ajusta el tamaño según tu gusto
    
    // --- NUEVOS ESTILOS PARA EL SUBRAYADO ---
    textDecoration: 'underline', // Añade el subrayado
    textDecorationColor: '#FFD700', // Color dorado para el subrayado
    textUnderlineOffset: '4px', // Distancia del subrayado al texto (ajusta este valor)
    textDecorationThickness: '0.2px', // Grosor de la línea del subrayado (ajusta este valor)
  }}
>
  Fragancias Árabes
</Typography>
        <Box sx={{ flex: 1, height: "1px", backgroundColor: "black", mx: 2 }} />
      </Box>

      {/* Grid de perfumes */}
      <Grid container spacing={2}>
        {perfumes.map((perfume) => (
          <Grid item xs={12} sm={6} md={4} key={perfume.id}>
            <Card
              onMouseEnter={() => handleMouseEnter(perfume.id)}
              onMouseLeave={handleMouseLeave}
              sx={{
                height: 550,
                position: "relative",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: 4,
                backgroundColor: "black",
                
                animation: `${fadeInLeft} 0.8s ease`,
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  transform: "scale(1.03)",
                
                },
              }}
            >

              {/* Imagen */}
              <CardMedia
                component="img"
                image={
                  hoveredCard === perfume.id && perfume.imgHover
                    ? perfume.imgHover
                    : perfume.img
                }
                alt={perfume.title}
                sx={{
                  height: "100%",
                  width: "100%",
                  objectFit: "contain",
                  
                  filter: hoveredCard === perfume.id ? "brightness(1)" : "brightness(0.9)",
                  transform:
                    hoveredCard === perfume.id ? "scale(1.01) translateY(-5px)" : "none",
                  transition: "transform 1s ease, filter 1s ease, opacity 1s ease",
                  animation:
                    hoveredCard === perfume.id ? `${fadeInLeft} 0.8s ease` : "none",
                }}
              />

              {/* Contenido */}
               <CardContent
    sx={{
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.08)",
      color: "#FFD700",
      display: "flex",
      flexDirection: "column",
      p: 2,
    }}
  >
   
  </CardContent>
              {showContent === perfume.id && (
                <CardContent
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "rgba(0, 0, 0, 0.78)",
                    color: "#FFD700",
                    display: "flex",
                    flexDirection: "column",
                    p: 2,
                    animation: `${fadeInLeft} 0.5s ease`,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: "bold"}}>
                    {perfume.title}
                  </Typography>
                  <Typography variant="body2" > {perfume.brand }  | {perfume.description }  </Typography>
                 
                  <Typography variant="h6" sx={{ fontWeight: "bold", right: 20 , position: "absolute", bottom: 20 }}>
                    ${perfume.price.toLocaleString()}
                  </Typography>
                 
                </CardContent>
              )}
            </Card>
          </Grid>


              
        ))}
      </Grid>
    </Box>

    <Box
  sx={{
    backgroundColor: "#f8f8f8 ",
    height: 400,
    position: "relative",
    "&::after": {
      content: '""',
      position: "absolute",
      top: 0, // 👈 Ahora desde arriba
      left: 0,
      width: "100%",
      height: 300,
      backgroundColor: "black",
      borderRadius: "0 0 50% 50%", // 👈 invertimos el redondeado
      transition: "height 0.3s ease",
    },
    "&:hover::after": {
      height: 200,
    },
  }}
></Box>





<Wavify />


    
    </>
  );
}
