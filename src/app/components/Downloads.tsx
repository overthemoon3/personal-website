import React from 'react';
import styles from './Downloads.module.css';

const Downloads: React.FC = () => {
    return (
        <section className={styles.downloads}>
            <a href="/resume.pdf" download className={styles.link}>Resume</a>
            { /*<a href="/transcript.pdf" download className={styles.link}>Transcript</a> */}
        </section>
    );
};

export default Downloads;