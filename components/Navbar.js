'use client';
import { useState } from 'react'; 
import Link from 'next/link'; 
import styles from './Navbar.module.css'; 

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => { 
        setIsOpen(!isOpen);
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>HaptiX Lab</div>
            <div className={styles.hamburger} onClick={toggleMenu}>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
                <div className={styles.bar}></div>
            </div>
            <ul className={`${styles.navLinks} ${isOpen ? styles.showMenu : ''}`}>
                <li>
                <Link className={styles.navItem} href="/"onClick={toggleMenu}>Home</Link>
                </li>
                <li>
                <Link href="/about" className={styles.navItem} onClick={toggleMenu}>About</Link>
                </li>
                <li>
                <Link href="/contact" className={styles.navItem} onClick={toggleMenu}>Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;