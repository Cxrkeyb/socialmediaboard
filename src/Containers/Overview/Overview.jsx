import React from 'react'
import Detail from '../../Components/Detail/Detail'
import { useTheme } from '../../context/ThemeProvider'
import './Overview.css'

export default function Overview() {
  const {theme} = useTheme();
  return (
    <div className='Overview'>
        <span className='OverviewTitle' style={{color: theme.textColor}}>Overview - Today</span>
        <div className='OverviewContainer'>
            <Detail title="Page Views" platform='Facebook' today='4' quantity="87"/>
            <Detail title="Likes" platform='Facebook' today='-1' quantity="52"/>
            <Detail title="Likes" platform='Instagram' today='56' quantity="5462"/>
            <Detail title="Profile Views" platform='Instagram' today='2000' quantity="52000"/>
            <Detail title="Retweets Views" platform='Twitter' today='10' quantity="117"/>
            <Detail title="Likes" platform='Twitter' today='100' quantity="507"/>
            <Detail title="Likes" platform='Youtube' today='-20' quantity="107"/>
            <Detail title="Total Views" platform='Youtube' today='-20' quantity="1407"/>
        </div>
    </div>
  )
}
