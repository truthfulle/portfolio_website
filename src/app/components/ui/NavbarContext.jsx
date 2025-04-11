'use client';

import { createContext, useState, useContext } from 'react';

const NavbarContext = createContext();

export function NavbarProvider({ children }) {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isNavbarManuallyHidden, setIsNavbarManuallyHidden] = useState(false);

  return (
    <NavbarContext.Provider value={{
      isNavbarVisible,
      setIsNavbarVisible,
      isNavbarManuallyHidden,
      setIsNavbarManuallyHidden
    }}>
      {children}
    </NavbarContext.Provider>
  );
}

export function useNavbar() {
  return useContext(NavbarContext);
}