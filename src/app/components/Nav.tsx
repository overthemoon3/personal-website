"use client";
// .ts is for typescript
// but because it's a react project, we're
// gonna say .tsx. 

// functional component: 
import React from 'react';
import { FaHome, FaLinkedin, FaGithub, FaUser } from 'react-icons/fa';
import styles from './Nav.module.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Nav: React.FC = () => {

    const pathname = usePathname();

    return(
        <nav className={styles.nav}>
        { /* Add icons! */}
        <Link href="/" className={`${styles.icon} ${pathname === '/' ? styles.active : ''}`}>
                <FaHome />
        </Link>
        {/*<Link href="/about" className={`${styles.icon} ${pathname === '/about' ? styles.active : ''}`}>
                <FaUser />  About Me Icon 
            </Link> */}
        <Link href="https://www.linkedin.com/in/sakshi-konnur752/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
                <FaLinkedin />
        </Link>
            { /*<a href="/about" className={styles.icon}>About</a> */}
        <Link href="https://github.com/overthemoon3" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <FaGithub />
        </Link>
        </nav>
    );
};

export default Nav;
