import React, { useState } from 'react'
import up from '../../challenge/images/icon-up.svg'
import down from '../../challenge/images/icon-down.svg'
import youtube from '../../challenge/images/icon-youtube.svg'
import facebook from '../../challenge/images/icon-facebook.svg'
import twitter from '../../challenge/images/icon-twitter.svg'
import instagram from '../../challenge/images/icon-instagram.svg'
import './Detail.css'
import { useTheme } from '../../context/ThemeProvider'


export default function Detail({title, platform, today, quantity}) {
    let icon, percent = (today/quantity) *100, textcolor, thousand;
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
    if(percent < 0){
        percent = percent * -1;
    }
    switch(platform){
        case "Youtube":
            icon = youtube
            break;
        case "Instagram":
            icon = instagram
            break;
        case "Twitter":
            icon = twitter   
            break;
        default:
            icon = facebook
            break;
    }
    if(today >= 0){
        textcolor = {color: "hsl(163, 72%, 41%)"};
    }else{
        textcolor = {color: "hsl(356, 69%, 56%)"};
    }
    if(quantity > 9999){
        quantity = quantity/1000;
        thousand = true;
    }
  return (
    <div className='DetailContainer' style={{backgroundColor: backgroundTheme}} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className='InfoContainer'>
            <span className='InfoTitle' style={{color: theme.socialMediaColor}}>
                {title}
            </span>
            <img src={icon} alt=""/>
        </div>
        <div className='DataContainer'>
            <span className='dataText' style={{color: theme.textColor}}>{thousand ? quantity + "k" : quantity}</span>
            <div className='dataPercent' style={textcolor}>
                {percent.toFixed(0)}%
                {today >= 0 ? <img src={up} alt="losing img" />: <img src={down} alt="winning img"/>}
            </div>
        </div>
    </div>
  )
}
