
import React, { createContext, useContext, useState, ReactNode } from "react";

// Define supported languages
export type Language = "english" | "hindi" | "tamil" | "bengali" | "marathi" | "punjabi";

// Language context type
type LanguageContextType = {
    language: Language;
    setLanguage: (language: Language) => void;
};

// Create context with default values
const LanguageContext = createContext<LanguageContextType>({
    language: "english",
    setLanguage: () => { },
});

// Custom hook to use language context
export const useLanguage = () => useContext(LanguageContext);

// Provider component
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>("english");

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
