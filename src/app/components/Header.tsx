// .ts is for typescript
// but because it's a react project, we're
// gonna say .tsx. 

// functional component: 
import React from 'react';
import styles from './Header.module.css';
import Nav from './Nav'

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <section className={styles.section}>
                    <p>I'm Sakshi, a third year Computer Science student at the University of California - Santa Cruz. I work great in teams and can be counted on to consistently deliver above and beyond.</p>
                </section>  
                <Nav />   
            </div>
                   
        </header> 
    );
};

export default Header; 

