"use client";
import React, { createContext, useState, useContext } from "react";
import type { SectionName } from "@/lib/types";



type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName,
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number,
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;

}

export const ActiveSectionContext = createContext<ActiveSectionContextType | null >(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to temporarily disable the observer when user clicks in the nav, otherwise the background stops at each section on the way to the clicked section

  return (
    <ActiveSectionContext.Provider value={{ 
      activeSection, 
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick 
    }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext(){
  const context = useContext(ActiveSectionContext);

  if (context === null || context === undefined){
    throw new Error('useActiveSectionContext must be used within an ActiveSectionContextProvider');
  }

  return context;
}