import React from 'react'
import { Scatter } from 'react-chartjs-2'

const ScatterCHart = ({chartData}) => {
  return (
    <Scatter data={chartData.data} options={chartData.options} style={{width:"100%",height:"100%"}}/>
  )
}

export default ScatterCHart