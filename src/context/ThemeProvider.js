import React from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react'

const themeStyles = {
    dark: {textColor: "hsl(0, 0%, 100%)", socialMediaColor: "hsl(228, 34%, 66%)", background: "linear-gradient(hsl(232, 19%, 15%) 27%, hsl(230, 17%, 14%) 27%)", secondaryBackgroundColor: "hsl(228, 28%, 20%)", slider: "flex-start"},
    light: {textColor: "hsl(230, 17%, 14%)", socialMediaColor: "hsl(228, 12%, 44%)", background: "linear-gradient(hsl(225, 100%, 98%) 27%, hsl(0, 0%, 100%) 27%)", secondaryBackgroundColor: "hsl(227, 47%, 96%)", slider: "flex-end"}
}

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => theme === "dark" ? setTheme("light") : setTheme("dark");
    const value = {theme: themeStyles[theme], toggleTheme}
    return <ThemeContext.Provider  value={value} {...props}/>;
}

const useTheme = () =>useContext(ThemeContext);


export {ThemeProvider as default, useTheme};