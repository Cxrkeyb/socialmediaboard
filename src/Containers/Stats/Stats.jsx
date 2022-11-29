import React from 'react'
import Stat from '../../Components/Stat/Stat'
import './Stats.css'

export default function Stats() {
  return (
    <div className='StatsContainer'>
        <Stat usuario="Corkeyb" platform="Facebook" followers="1987" today="-12" />
        <Stat usuario="Corkeyb" platform="Twitter" followers="1044" today="99" />
        <Stat usuario="Corkeyb" platform="Instagram" followers="11000" today="1099" />
        <Stat usuario="Corkeyb" platform="Youtube" followers="8239" today="-144" />
    </div>
  )
}
