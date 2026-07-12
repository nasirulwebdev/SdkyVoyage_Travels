import { createContext, useEffect, useMemo, useState } from "react";

import en from "../data/en";
import bn from "../data/bn";

export const LanguageContext = createContext(null);

const languages = {
    en,
    bn,
};

const LanguageProvider = ({ children }) => {

    const [language, setLanguage] = useState(() => {
        return localStorage.getItem("language") || "en";
    });

    useEffect(() => {
        localStorage.setItem("language", language);
    }, [language]);

    const value = useMemo(() => ({
        language,
        setLanguage,
        t: languages[language],
    }), [language]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export default LanguageProvider;