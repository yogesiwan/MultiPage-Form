"use client";
import { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    userInfo: {
      name: '',
      email: '',
      phone: '',
    },
    plan: {
      planTitle: 'Arcade',
      paymentPlan: 'monthly',
      price: 9
    },
    addOns: []
  });
  const [progress, setProgress] = useState(0);

  return (
    <AppContext.Provider value={{ userData, setUserData, progress, setProgress}}>
      {children}
    </AppContext.Provider>
  );
};