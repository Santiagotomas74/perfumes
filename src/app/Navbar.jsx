import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo o nombre de la tienda */}
        <Link href="/" className={styles.logo}>
          Perfumes Árabes
        </Link>

        {/* Links de navegación */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/productos" className={styles.navLink}>
              Productos
            </Link>
          </li>
          
          <li>
            <Link href="/contacto" className={styles.navLink}>
              Contacto
            </Link>
          </li>
        </ul>

        
      </div>
    </nav>
  );
};

export default Navbar;
/*
<li>
            <Link href="/nosotros" className={styles.navLink}>
              Nosotros
            </Link>
          </li>

        <div className={styles.cartIcon}>
          
          🛒
        </div>
*/