/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState } from "react";

interface SidebarContextProps {
  isOpen: boolean;
  setOpen: (value: boolean) => void;
  setWidth: (value: number) => void;
  toggleOpen: () => void;
  width?: number
}

const SidebarContext = createContext<SidebarContextProps | undefined>(
  undefined
);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(true);
  const [width, setWidth] = useState(240)

  const setOpen = (val: boolean) => setIsOpen(val);
  const toggleOpen = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ isOpen, setOpen, toggleOpen, width, setWidth }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSidebar = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
};
