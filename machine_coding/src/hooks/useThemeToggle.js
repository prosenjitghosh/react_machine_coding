import { useEffect, useState } from "react"

const themeType = {
    dark : "dark",
    light : "light"
}

export const useThemeToggle  = (defaultTheme = themeType.light) =>{
    const [theme, setTheme] = useState(defaultTheme);

    useEffect(()=>{
        const storedTheme = localStorage.getItem('theme');
        if(storedTheme && Object.values(themeType).includes(storedTheme)){
            setTheme(storedTheme);
        }
    },[])

    const setToggleTheme = (type) =>{
        if(Object.values(themeType).includes(type)){
            localStorage.setItem('theme', type);
            setTheme(type)
        }
    }

    return {theme, setToggleTheme};
}