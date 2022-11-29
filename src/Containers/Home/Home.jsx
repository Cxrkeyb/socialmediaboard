import React from 'react'
import Overview from "../Overview/Overview"
import Header from "../Header/Header"
import Stats from "../Stats/Stats"
import { useTheme } from '../../context/ThemeProvider';
import '../../App.css';

export default function Home() {
  const {theme} = useTheme();
  return (
    <div className='Main' style={{background: theme.background}}>
        <Header followers="23004"/>
        <Stats />
        <Overview />
    </div>
  )
}
