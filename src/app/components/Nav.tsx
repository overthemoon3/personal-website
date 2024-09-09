// .ts is for typescript
// but because it's a react project, we're
// gonna say .tsx. 

// functional component: 
import React from 'react';
import styles from './Nav.module.css';
//import './nav.css';



const Nav: React.FC = () => {
    return(
        <nav className={styles.nav}>
        { /* Add icons! */}
            <a href="/" className={styles.icon}>Home</a>
            { /*<a href="/about" className={styles.icon}>About</a> */}
            <a href="https://www.linkedin.com/in/sakshi-konnur752/" target="_blank" rel="noopener noreferrer" className={styles.icon}>LinedIn</a>
            <a href="https://github.com/overthemoon3" target="_blank" rel="noopener noreferrer" className={styles.icon}>GitHub</a>
        </nav>
    );
};

export default Nav;
