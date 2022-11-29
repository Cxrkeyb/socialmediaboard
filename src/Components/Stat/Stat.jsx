import React, { useState } from 'react'
import youtube from '../../challenge/images/icon-youtube.svg'
import facebook from '../../challenge/images/icon-facebook.svg'
import twitter from '../../challenge/images/icon-twitter.svg'
import instagram from '../../challenge/images/icon-instagram.svg'
import up from '../../challenge/images/icon-up.svg'
import down from '../../challenge/images/icon-down.svg'
import './Stat.css'
import { useTheme } from '../../context/ThemeProvider'

export default function Stat({usuario, followers, today, platform}) {
    let icon, colors, textcolor, thousand;
    const {theme} = useTheme();
    let backgroundTheme = theme.secondaryBackgroundColor;
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };
    if(isHover){
        if(theme.textColor === 'hsl(0, 0%, 100%)'){
            backgroundTheme = "rgb(67, 73, 100)"
        }else{
            backgroundTheme = "rgb(190, 193, 210)"
        }
    }
    switch(platform){
        case "Youtube":
            icon = youtube;
            colors = {
                backgroundColor: backgroundTheme,
                borderTopWidth: "0.5vh",
                borderTopStyle: "solid",
                borderColor: 'hsl(348, 97%, 39%)',
            };
            break;
        case "Instagram":
            icon = instagram;
            colors = {
                backgroundColor: backgroundTheme,
                borderTopWidth: "0.5vh",
                borderTopStyle: "solid",
                borderImage: 'linear-gradient(to right, #fdc468 0%,  #df4996 100%)',
                borderImageSlice: "1"
            };
            break;
        case "Twitter":
            icon = twitter;
            colors = {
                backgroundColor: backgroundTheme,
                borderTopWidth: "0.5vh",
                borderTopStyle: "solid",
                borderColor: 'hsl(208, 92%, 53%)',
            };
            break;
        default:
            icon = facebook;
            colors = {
                backgroundColor: backgroundTheme,
                borderTopWidth: "0.5vh",
                borderTopStyle: "solid",
                borderColor: 'hsl(208, 92%, 53%)',
            };
            break;
    }
    if(today >= 0){
        textcolor = {color: "hsl(163, 72%, 41%)"};
    }else{
        textcolor = {color: "hsl(356, 69%, 56%)"};
    }
    if(followers > 9999){
        followers = followers/1000;
        thousand = true;
    }
  return (
    <div style={colors} className='StatContainer' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='UserContainer'>
            <img src={icon} alt="icon"/>
            <span className='StatUser' style={{color: theme.socialMediaColor}}>@{usuario}</span>
        </div>
        <div className='StatFollower'>
            <span className='followersTitle' style={{color: theme.textColor}}>{thousand ? followers + "k" : followers}</span>
            <span className='followersText' style={{color: theme.socialMediaColor}}>{platform === "Youtube" ? "SUBSCRIBERS" : "FOLLOWERS"}</span>
        </div>
        <div className='StatToday'>
            {today >= 0 ? <img src={up} alt="losing img" />: <img src={down} alt="winning img"/>}
            <span className='dataPercent' style={textcolor}>{today >= 0 ? today : today*-1} Today</span>
        </div>
    </div>
  )
}