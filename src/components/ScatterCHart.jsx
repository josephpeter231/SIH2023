import React from 'react'
import { Scatter } from 'react-chartjs-2'
const ScatterChart = ({chartData}) => {
    console.log(chartData)
  return (
    <Scatter data={chartData}/>
  )
}

export default ScatterChart