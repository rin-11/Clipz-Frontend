import React from 'react'
import './TrendsDisplay.css'

import { Trends } from '../../seedData/trendsData'

const TrendsDisplay = () => {
  return (
    <div className="Trends">
      <h3>Trending</h3>
      {Trends.map((trend)=>{
          return(
            <div className="trend">
              <span>#{trend.name}</span>
            </div>
                )
      })}
    </div>
  )
}

export default TrendsDisplay