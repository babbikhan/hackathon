// components/Header.tsx
import { useState } from 'react';
import styles from '../styles/header.module.css'; // Import the CSS module

const Header = () => {
  const [cartItems, setCartItems] = useState(2); // Sample cart items count

  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        {/* Left Section: Logo and Offer */}
        <div className={styles.logoSection}>
          <img src="/logo.png" alt="Logo" className={styles.logo} />
          <span className={styles.title}>Comforty</span>
        </div>
        <div className={styles.offer}>Free Shipping On All Orders Over $50</div>

        {/* Right Section: Cart */}
        <div className={styles.cartSection}>
          <div className={styles.language}>English</div>
          <div className={styles.faqs}>Faqs</div>
          <div className={styles.needHelp}>Need Help</div>
          <div className={styles.cartContainer}>
            <button className={styles.cartButton}>
              Cart
            </button>
            {cartItems > 0 && (
              <span className={styles.cartBadge}>
                {cartItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
