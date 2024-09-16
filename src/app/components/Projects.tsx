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
                <img src="/dolph.jpg" alt="IRC inspired Chatroom - CLI application" className={styles.projectImage} />
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
                <img src="/dolph.jpg" alt="Multi-threaded HTTP server - CLI application" className={styles.projectImage} />
            </div>

            <div className={styles.content_right}>     
                <h2 className={styles.h2}>Multi-threaded HTTP server - CLI application</h2>
                <div className={styles.container}>
                    <h3 className={styles.normal}>Spring 2024, CSE130: Principles of Computer Systems Design</h3>
                    <h4 className={styles.normal}>&#123;regex, C language&#125;</h4>
                </div> 
                <p>
                Developed a multi-threaded HTTP server to manage concurrency and improve 
                throughput using thread-safe queues and reader-writer locks. The project 
                required careful design and implementation to ensure that despite the use 
                of multiple threads, the server's behavior would appear as if it were 
                single-threaded, maintaining a coherent and atomic sequence of client 
                requests. I focused on robust design, synchronization, and modularity 
                to create a resilient server that runs indefinitely without crashing on 
                my local machine. This assignment taught me the importance of design, 
                modularity, and powerful abstractions, as well as skills in using regex 
                to parse strings.
                </p>
                <div className={styles.links}>
                    <a href="https://github.com/overthemoon3/chatroom" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Youtube Demo (cannot show code due to course policy)
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
                Our goal was to make an online platform that facilitated
                the exchange of goods with minimal transportation and
                inventory costs while also promoting the entrepreneurial
                and artistic culture of Santa Cruz. We aimed to reduce
                the issue of significant waste caused by the ongoing 
                need for furniture, etc. by providing a space where 
                students can easily exchange their necessities. 
                I worked on the back-end and set up authentication 
                with Google Firebase. I also helped plan our 
                presentation. We showcased this project at the 
                2023 New Tech conference hosted by Santa Cruz 
                Works Continuously working on a project for 48 
                hours straight and was definitely mentally 
                taxing, but incredibly rewarding.
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


        <section className={styles.section}>
            <div className={styles.content_left}>
                <img src="/project_odd.jpg" alt="Odd One Out - Game App" className={styles.projectImage} />
            </div>

            <div className={styles.content_right}>
                <div className={styles.titleContainer}>
                    <img src="/projects_odd_icon_1.png" alt="Odd One Out Logo" className={styles.projectLogo} />
                    <h2 className={styles.h2}>Odd One Out - Game App</h2>
                </div>
                <div className={styles.container}>
                    <h3 className={styles.winner}>ANova Hacks 2021 Best Connectivity & Social Networking Winner</h3>
                    <h4 className={styles.normal}>&#123;Thunkable, Google Firebase&#125;</h4>
                </div> 
                <p>
                For this project, I led a team to create a social interaction game based on 
                ‘Mafia’ using Thunkable, a no-code platform recommended by UC Berkeley’s ANova 
                Club. It was my first experience working in a group, and I focused on leveraging 
                each member’s strengths by assigning tasks suited to their skills. This experience 
                highlighted the importance of clear communication, conflict prevention, and
                maintaining focus on the end goal - even in a fast-paced hackathon environment. 
                It taught me that a solid understanding of underlying logic can compensate for a 
                lack of specific coding knowledge and reinforced the value of leadership and 
                effective group dynamics in product development. 
                </p>
                <div className={styles.links}>
                    <a href="https://youtu.be/PFG5hPuwv2g?si=RImGFPoBKULljNNx&t=710" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Demo
                    </a>
                    <a href="https://docs.google.com/presentation/d/1U2mEO7bovuETz4LxQglFIfmHKRJfnhqLxEHT82xA0cM/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        Presentation
                    </a>
                    <a href="https://x.thunkable.com/projects/6064c673d0d3ef0011798635/76d208a6-f04e-4cd6-a452-14c332ad72c8/blocks" target="_blank" rel="noopener noreferrer" className={styles.link}>
                    Thunkable project to view
                    </a>
                </div>
            </div>
        </section>



        <section className={styles.section}>
            <div className={styles.content_left}>
                <img src="/project_consumerism.jpg" alt="Consumerism - Social Advocacy Website" className={styles.projectImage} />
            </div>

            <div className={styles.content_right}>     
                <h2 className={styles.h2}>Consumerism - Social Advocacy Website</h2>
                <div className={styles.container}>
                    <h3 className={styles.normal}>Summer 2020</h3>
                    <h4 className={styles.normal}>&#123;HTML, CSS, JS&#125;</h4>
                </div> 
                <p>
                This Girls Who Code summer camp project was my first exposure to web 
                development and coding itself. Moody’s Analytics was the sponsor of 
                my particular cohort and the experts at Moody’s created a warm welcoming 
                environment that inspired us to strive to make websites about causes that 
                we were passionate about. I’m particularly proud of the checklist I 
                created under the ‘Take Action’ tab. When you check something off, the 
                action item actually gets bigger and underlined instead of ‘crossed off’. 
                I added this detail to signify that protecting the environment isn’t 
                something one can just cross off, but instead something to strive for daily.  
                </p>
                <div className={styles.links}>
                    <a href="https://overthemoon3.github.io/GWC-SIP-website/index.html" target="_blank" rel="noopener noreferrer" className={styles.link}>
                        View it here
                    </a>
                </div>
            </div>
        </section>


    


    

    </>
  );
};

export default Projects;