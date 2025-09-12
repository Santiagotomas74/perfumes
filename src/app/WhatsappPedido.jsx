"use client"
import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const FloatingWhatsApp = () => {
  const [collapsed, setCollapsed] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setCollapsed(prev => !prev);
    }, 5000); // alterna cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  const whatsappLink = "https://wa.me/541123089572";

  return (
    <Box
      component="a"
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366',
        color: '#fff',
        borderRadius: '50px',
        padding: collapsed ? '12px' : '10px 20px',
        display: 'flex',
        alignItems: 'center',
        gap: collapsed ? 0 : 1,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
        transition: 'all 1s ease-in-out',
        zIndex: 9999,
        textDecoration: 'none',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        maxWidth: collapsed ? '52px' : '250px',
      }}
    >
      <WhatsAppIcon fontSize="medium" />
      {!collapsed && (
        <Typography sx={{ fontWeight: 'bold', ml: 1 }}>
          ¡Realizá tu pedido!
        </Typography>
      )}
    </Box>
  );
};

export default FloatingWhatsApp;
