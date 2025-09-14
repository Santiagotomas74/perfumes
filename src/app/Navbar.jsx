"use client";
import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Iconos hamburguesa
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logo}>
          Perfumes Árabes
        </Link>

        {/* Botón hamburguesa solo visible en mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Links de navegación */}
        <ul
          className={`${styles.navLinks} ${menuOpen ? styles.showMenu : ""}`}
        >
          <li>
            <Link href="/" className={styles.navLink} onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="/productos"
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
