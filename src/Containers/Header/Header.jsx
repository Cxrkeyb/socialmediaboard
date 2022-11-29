import React from 'react'
import "./Header.css"
import { useTheme } from '../../context/ThemeProvider'
export default function Header({followers}) {
  const {theme, toggleTheme} = useTheme();
  return (
    <div className='HeaderContainer'>
          <div className='headerContent'>
            <span className='headerTitle' style={{color: theme.textColor}}>Social Media Dashboard</span>
            <span className='headerFollowers' style={{color: theme.socialMediaColor }}>Total Followers: {followers}</span>
          </div>
          <div>
            <span className='headerMode' style={{color: theme.socialMediaColor}}>
              Dark Mode 
              <div onClick={toggleTheme} className='darkModeContainer' style={{justifyContent: theme.slider}}>
                <div className='circleDarkMode' style={{background: theme.background}}/>
              </div>
            </span>
          </div>
    </div>
  )
}
 