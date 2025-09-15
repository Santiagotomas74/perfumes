"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import perfumes from "./dataProduct";
import CurvedLoop from "./CurvedLoop";

import {
  FilterList as FilterListIcon,
  LocalOffer as LocalOfferIcon,
  Person as PersonIcon,
} from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";



// Animación
const fadeInLeft = keyframes`
  from { opacity: 0; transform: translateX(-30px) }
  to { opacity: 1; transform: translateX(0) }
`;

export default function PerfumesElegant() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Estados
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showContent, setShowContent] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState("Todos");
  const [selectedGender, setSelectedGender] = useState("Todos");

  // Marcas y géneros
  const brands = ["Todos", ...new Set(perfumes.map((p) => p.brand))];
  const genders = ["Todos", "Hombre", "Mujer", "Unisex"];
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

  // 🔑 Detectar filtro de la URL
  useEffect(() => {
    const filter = searchParams.get("filter"); // ej: "hombre"
    if (filter) {
      const normalized = filter.charAt(0).toUpperCase() + filter.slice(1).toLowerCase();
      if (genders.includes(normalized)) {
        setSelectedGender(normalized);
      }
    }
  }, [searchParams]);

  // Filtrado
  const filteredPerfumes = perfumes.filter((perfume) => {
    const brandMatch = selectedBrand === "Todos" || perfume.brand === selectedBrand;
    const genderMatch =
      selectedGender === "Todos" || perfume.gender === selectedGender;
    return brandMatch && genderMatch;
  });

  // Click en producto
  const handleCardClick = (perfume) => {
    router.push(
      `/single-product/${perfume.id}?title=${encodeURIComponent(
        perfume.title
      )}&brand=${encodeURIComponent(
        perfume.brand
      )}&description=${encodeURIComponent(
        perfume.description
      )}&img=${encodeURIComponent(perfume.img)}&price=${
        perfume.price
      }&img2=${encodeURIComponent(perfume.img2)}&img3=${encodeURIComponent(
        perfume.img3
      )}&img4=${encodeURIComponent(
        perfume.img4
      )}&nota1=${encodeURIComponent(
        perfume.nota1
      )}&nota2=${encodeURIComponent(
        perfume.nota2
      )}&nota3=${encodeURIComponent(
        perfume.nota3
      )}&imgHover=${encodeURIComponent(perfume.imgHover)}`
    );
  };

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
    setTimeout(() => setShowContent(id), 300);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
    setShowContent(null);
  };
  // dentro de tu componente:
const theme = useTheme();
const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <div style={{ marginTop: "-150px" }}>
        <CurvedLoop
          marqueeText="✦ NUESTROS ✦ PRODUCTOS"
          speed={1.5}
          curveAmount={200}
          interactive={false}
        />
      </div>

      <Box sx={{ px: 2, py: 16, mt: -20 }}>
        {/* Header del filtro */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            mb: 3,
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#FFD700",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <FilterListIcon />
            Filtros de Perfumes
          </Typography>

          <Button
            variant="text"
            size="small"
            onClick={() => {
              setSelectedBrand("Todos");
              setSelectedGender("Todos");
            }}
            sx={{
              color: "rgba(255, 215, 0, 0.7)",
              "&:hover": { color: "#FFD700" },
            }}
          >
            Limpiar Filtros
          </Button>
        </Box>

        {/* Filtro Marca */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFD700",
              mb: 2,
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <LocalOfferIcon fontSize="small" />
            Por Marca ({brands.length - 1} marcas)
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {brands.map((brand) => (
              <Button
                key={brand}
                variant={selectedBrand === brand ? "contained" : "outlined"}
                onClick={() => setSelectedBrand(brand)}
                sx={{
                  minWidth: 100,
                  height: 40,
                  borderRadius: 6,
                  textTransform: "none",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  ...(selectedBrand === brand
                    ? {
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        color: "#000",
                        border: "1px solid #FFD700",
                        boxShadow: "0 4px 20px rgba(255, 215, 0, 0.4)",
                      }
                    : {
                        color: "#FFD700",
                        background:
                          "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))",
                        border: "1px solid rgba(255, 215, 0, 0.3)",
                        backdropFilter: "blur(5px)",
                      }),
                }}
              >
                {brand}
              </Button>
            ))}
          </Stack>
        </Box>

        {/* Filtro Género */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h6"
            sx={{
              color: "#FFD700",
              mb: 2,
              fontWeight: "600",
              fontSize: "1.1rem",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <PersonIcon fontSize="small" />
            Por Género
          </Typography>
          <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
            {genders.map((gender) => (
              <Button
                key={gender}
                variant={selectedGender === gender ? "contained" : "outlined"}
                onClick={() => setSelectedGender(gender)}
                sx={{
                  minWidth: 100,
                  height: 40,
                  borderRadius: 6,
                  textTransform: "none",
                  fontWeight: "600",
                  fontSize: "0.85rem",
                  ...(selectedGender === gender
                    ? {
                        background: "linear-gradient(135deg, #FFD700, #FFA500)",
                        color: "#000",
                        border: "1px solid #FFD700",
                        boxShadow: "0 4px 20px rgba(255, 215, 0, 0.4)",
                      }
                    : {
                        color: "#FFD700",
                        background:
                          "linear-gradient(135deg, rgba(255, 215, 0, 0.1), rgba(255, 215, 0, 0.05))",
                        border: "1px solid rgba(255, 215, 0, 0.3)",
                        backdropFilter: "blur(5px)",
                      }),
                }}
              >
                {gender}
              </Button>
            ))}
          </Stack>
        </Box>

   <Grid 
  container 
  spacing={2} 
  sx={{ px: { xs: 0, sm: 5, md: 10 }, mx: "auto" }}
>
  {filteredPerfumes.map((perfume) => (
    <Grid item xs={12} sm={6} md={4} lg={3} key={perfume.id}>
      <Card
        onClick={() => handleCardClick(perfume)}
        onMouseEnter={() => handleMouseEnter(perfume.id)}
        onMouseLeave={handleMouseLeave}
        sx={{
          
          height: { xs: "auto", md: 420 }, // auto en mobile, fijo en desktop
          position: "relative",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 4,
          backgroundColor: "black",
          display: "flex",
          flexDirection: "column",
          animation: `${fadeInLeft} 0.8s ease`,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          cursor: "pointer",
          "&:hover": {
            transform: "scale(1.03)",
            boxShadow: 6,
          },
        }}
      >
        <CardMedia
          component="img"
          image={
            hoveredCard === perfume.id && perfume.imgHover
              ? perfume.imgHover
              : perfume.img
          }
          alt={perfume.title}
          sx={{
            height: { xs: "100%", sm: 200, md: 320 },
            width: { xs: "100%", md: 320 },
            objectFit: "cover",
            objectPosition: "center center",
            filter:
              hoveredCard === perfume.id
                ? "brightness(1)"
                : "brightness(0.9)",
            transform:
              hoveredCard === perfume.id ? "scale(1.05)" : "none",
            transition: "transform 0.4s ease, filter 0.4s ease",
          }}
        />
{(isMobile || showContent === perfume.id) && (
  <CardContent
    sx={(theme) => ({
      backgroundColor: "rgba(0, 0, 0, 0.78)",
      color: "#FFD700",
      display: "flex",
      flexDirection: "column",
      p: 2,
      animation: `${fadeInLeft} 0.5s ease`,
      [theme.breakpoints.up("md")]: {
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
      },
      [theme.breakpoints.down("sm")]: {
        position: "relative",
        width: "100%",
      },
    })}
  >
    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
      {perfume.title}
    </Typography>
    <Typography variant="body2">
      {perfume.brand} | {perfume.description}
    </Typography>

    <Typography
      variant="h6"
      sx={{
        fontWeight: "bold",
        mt: { xs: 1, md: 0 },
        right: { md: 20 },
        bottom: { md: 20 },
        position: { md: "absolute", xs: "relative" },
        textAlign: { xs: "right", md: "unset" },
      }}
    >
      ${perfume.price.toLocaleString()}
    </Typography>
  </CardContent>
)}

      </Card>
    </Grid>
  ))}
</Grid>


      </Box>
    </>
  );
}
