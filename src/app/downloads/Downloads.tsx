"use client";
import React from 'react';
import styles from './Downloads.module.css';
import { FiDownload } from "react-icons/fi";

const Downloads: React.FC = () => {
    return (
        <section className={styles.downloads}>
            <a href="/resume0.pdf" download className={styles.link}>
                Resume <FiDownload className={styles.icon}/> 
            </a>
            { /*<a href="/transcript.pdf" download className={styles.link}>Transcript</a> */}
        </section>
    );
};

export default Downloads;