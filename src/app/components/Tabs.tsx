"use client";
import React, { useState } from 'react';
import TabsContent from './TabsContent';
import styles from './Tabs.module.css';


const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState('projects');
  
    return (
      <div className={styles.tabs}>
        <nav className={styles.tabNav}>
          <button onClick={() => setActiveTab('projects')} className={`${styles.tabButton} ${activeTab === 'projects' ? styles.active : ''}`}>Projects</button>
          { /*<button onClick={() => setActiveTab('accolades')} className={`${styles.tabButton} ${activeTab === 'accolades' ? styles.active : ''}`}>Accolades</button> */}
          { /*<button onClick={() => setActiveTab('work-in-progress')} className={`${styles.tabButton} ${activeTab === 'work-in-progress' ? styles.active : ''}`}>Work In Progress</button>*/}
        </nav>
        <TabsContent activeTab={activeTab} />
      </div>
    );
  };
  
  export default Tabs;