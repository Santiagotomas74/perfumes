"use client";
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@emotion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(40px); }
  to { opacity: 1; transform: translateY(0); }
`;

const banners = [
  {
    id: 1,
    title: "Perfumes para Hombres",
    subtitle: "Fuerza, elegancia y distinción en cada fragancia.",
    img: "/banner/mens2.jpg",
    filter: "hombre",
  },
  {
    id: 2,
    title: "Perfumes para Mujeres",
    subtitle: "Seduce con aromas intensos y cautivadores.",
    img: "/banner/women.jpg",
    filter: "mujer",
  },
  {
    id: 3,
    title: "Perfumes Unisex",
    subtitle: "Fragancias únicas que trascienden géneros.",
    img: "/banner/unisex.webp",
    filter: "unisex",
  },
];

export default function PerfumeBanners() {
    const router = useRouter();

  const handleClick = (filter) => {
    // Redirige a /productos y pasa filtro como query param
    router.push(`/productos?filter=${filter}`);
  };

  return (
    <Grid 
      container 
 
      sx={{ 
  
        py: 6, 
       mt:-12,
        
        width: "100%",
        mx: "auto",      // Centra el grid
      }}
    >
      {banners.map((banner) => (
        <Grid 
          item 
          xs={12} 
          key={banner.id}
          onClick={() => handleClick(banner.filter)}
          sx={{
            position: "relative", // Importante para posicionar el overlay
            borderRadius: 4,
            overflow: "hidden",
            boxShadow: 6,
            transition: "transform 0.4s ease",
            "&:hover": { transform: "scale(1.03)" },
          }}
        >
          {/* La imagen que ocupa todo el contenedor */}
         <Box
  component="img"
  
  src={banner.img}
  alt={banner.title}
  
/>



          {/* Overlay de texto superpuesto */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background: "rgba(0, 0, 0, 0.45)",
              color: "#FFD700",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              px: 3,
              opacity: 1,
              animation: `${fadeInUp} 1s ease`,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                textTransform: "uppercase",
                letterSpacing: 1,
              }}
            >
              {banner.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ mt: 2, fontSize: "1.2rem", fontStyle: "italic" }}
            >
              {banner.subtitle}
            </Typography>
          </Box>
        </Grid>
      ))}
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Grid>
  );
}
