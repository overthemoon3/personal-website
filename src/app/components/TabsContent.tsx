import React from 'react';
import styles from './TabsContent.module.css';

type TabsContentProps = {
  activeTab: string;
};

const TabsContent: React.FC<TabsContentProps> = ({ activeTab }) => {
  return (
    <div className={styles.content}>
      {activeTab === 'projects' && (
        <>
        <section className={styles.section}>
          <h2>Portfolio Website</h2>
          <p>
            Not to get too meta, but I made this website as a way to show everything that I’ve
            worked on. Next.js because I wanted something fresh and unfamiliar, it’s a popular
            framework in industry.
          </p>
        </section>
        <section className={styles.section}>
          <h2>IRC inspired Chatroom - CLI application</h2>
          <p>
            Started as a way for me to talk to friends through the CLI. Taught me the importance of
            documentation.
          </p>
        </section>
        <section className={styles.section}>
          <h2>Multi-threaded HTTP server - CLI application</h2>
          <p>
            Developed a multi-threaded HTTP server to manage concurrency and improve throughput
            using thread-safe queues and reader-writer locks. The project required careful design
            and implementation.
          </p>
        </section>
        </>
      )}
      {/* {activeTab === 'accolades' && (
        <section>
            Accolades content
        </section> 
      )} */}
      {/* {activeTab === 'work-in-progress' && (
        <section>
            Work In Progress content
        </section>
      )} */}
    </div>
  );
};


export default TabsContent;