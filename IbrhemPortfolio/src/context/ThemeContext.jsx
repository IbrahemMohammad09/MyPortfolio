import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [isDarkMode , toggleDarkMode] = useState(
        localStorage.getItem("theme") || "light"
    );

    return(
        <ThemeContext.Provider 
            value={{isDarkMode: isDarkMode === "dark", toggleDarkMode}}    
        >
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext)