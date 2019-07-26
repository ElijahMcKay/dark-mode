import React, { useEffect } from "react"; 
import useLocalStorage from "./useLocalStorage"; 


export const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode')

    useEffect(() => {
        
        isDarkMode ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode'); 
        
        
    }, [isDarkMode])

    return [isDarkMode, setIsDarkMode]; 
}

export default useDarkMode; 