import React from 'react';
import styles from './TabsContent.module.css';
import Projects from '../projects/Projects';
// import Accolades from './Accolades';
// import WorkInProgress from './WorkInProgress';

type TabsContentProps = {
  activeTab: string;
};

const TabsContent: React.FC<TabsContentProps> = ({ activeTab }) => {
  return (
    <div className={styles.content}>
      {activeTab === 'projects' && <Projects />}
      {/* {activeTab === 'accolades' && <Accolades />}
      {activeTab === 'work-in-progress' && <WorkInProgress />} */}
    </div>
  );
};

export default TabsContent;