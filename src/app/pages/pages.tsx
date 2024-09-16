"use client";
import React from 'react';
import Tabs from '../components/Tabs';
import Header from '../components/Header';
import Downloads from '../downloads/Downloads';


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Downloads />
      <Tabs />
    </div>
  );
};

export default HomePage;