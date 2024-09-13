import React from 'react';
import styles from './TabsContent.module.css';

const Projects: React.FC = () => {
  return (
    <>
        <section className={styles.section}>
            <div className={styles.content_left}>
                <img src="/website_pic1.jpg" alt="Portfolio Website" className={styles.projectImage} />
            </div>
            <div className={styles.content_right}>
                <h2 className={styles.h2}>Portfolio Website</h2>
                <div className={styles.container}>
                    <h3 className={styles.normal}>Summer 2024</h3>
                    <h4 className={styles.normal}>&#123;Figma, Next.js, TypeScript, tailwind CSS&#125;</h4> {/* curly brace codes lol */}
                </div> 
                <p>
                    I made this website as a way of showing off my progress as a creator and student, as well as learn the basics of using next.js and the react library. This website is still a work in progress, stay tuned to see things like 3D sprites and tabs with more details! 
                </p>
            </div>
        </section>


        <section className={styles.section}>
            <div className={styles.content_left}>
                <img src="/dolph.jpg" alt="Sluggers - UCSC E-Marketplace Website" className={styles.projectImage} />
            </div>

            <div className={styles.content_right}>     
                <h2 className={styles.h2}>IRC inspired Chatroom - CLI application</h2>
                <div className={styles.container}>
                    <h3 className={styles.normal}>Summer 2024</h3>
                    <h4 className={styles.normal}>&#123;Python, socket programming&#125;</h4>
                </div> 
                <p>
                Started as a way for me to talk to friends through the CLI. 
Taught me the importance of documentation 
Currently only works on my local machine, next goal is to sync it up to an IP as a server!
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/overthemoon3/chatroom" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        GitHub Repo
                    </a>
                </div>
            </div>
        </section>



        <section className={styles.section}>
            <div className={styles.content_left}>
                <img src="/project_sluggers1.jpg" alt="Sluggers - UCSC E-Marketplace Website" className={styles.projectImage} />
            </div>

            <div className={styles.content_right}>
                <div className={styles.titleContainer}>
                    <img src="/projects_sluggers_icon1.png" alt="Sluggers Logo" className={styles.projectLogo} />
                    <h2 className={styles.h2}>Sluggers - UCSC E-Marketplace Website</h2>
                </div>
                <div className={styles.container}>
                    <h3 className={styles.winner}>Cruzhacks2023 Sustainability Award Winner</h3>
                    <h4 className={styles.normal}>&#123;HTML, CSS, JS, Google Firebase&#125;</h4>
                </div> 
                <p>
                Our goal was to make an online platform that facilitated the exchange of goods with minimal transportation and inventory costs while also promoting the entrepreneurial and artistic culture of Santa Cruz. We aimed to reduce the issue of significant waste caused by the ongoing need for furniture, etc. by providing a space where students can easily exchange their necessities. I worked on the back-end and set up authentication with Google Firebase. I also helped plan our presentation. We showcased this project at the 2023 New Tech conference hosted by Santa Cruz Works Continuously working on a project for 48 hours straight and was definitely mentally taxing, but incredibly rewarding.
                </p>
                <div className={styles.links}>
                    <a href="https://devpost.com/software/sluggers" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Devpost Entry
                    </a>
                    <a href="https://docs.google.com/presentation/d/1j3OUhKuk_rvLd9-FUXAvPgCpbvqPIfNcrcGkPpsESDU/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Presentation
                    </a>
                    <a href="https://github.com/sophiiehan/UCSC-auction-website" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        GitHub Repo
                    </a>
                </div>
            </div>
        </section>


    


    

    </>
  );
};

export default Projects;