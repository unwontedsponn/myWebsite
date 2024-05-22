import React, { createContext, useContext, useState } from 'react';

const SectionActiveContext = createContext();

export const useSectionActive = () => useContext(SectionActiveContext);

export const SectionActiveProvider = ({ children }) => {
    const [activeSection, setActiveSection] = useState('');

    return (
        <SectionActiveContext.Provider value={{ activeSection, setActiveSection }}>
            {children}
        </SectionActiveContext.Provider>
    );
};
