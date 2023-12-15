import { Scatter } from '@ant-design/plots';
import React, { useEffect, useState } from 'react';
import dataList from '../data/goodBearing'; 
import _ from 'lodash'

const GoodScatter = ({ type }) => {

  // console.log(type)

  const [data, setData] = useState([]);
  const [good, setGood] =  useState([]);
  useEffect(() => {
    setData(dataList);
  }, []);
  

  const config = {
    appendPadding: 10,
    data,
    xField: 'time',
    yField: 'value',
    shape: 'circle',
    // colorField: 'Genre',
    size: 1,
    pointStyle: {
      fill: '#4cceac',
      r: 1,
      stroke: '#4cceac',
    },
    yAxis: {
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
    xAxis: {
      min: 0,
      grid: {
        line: {
          style: {
            stroke: '#eee',
          },
        },
      },
      nice: true,
      line: {
        style: {
          stroke: '#aaa',
        },
      },
    },
  };

  return (
    <div>
      <Scatter style={{ height: '500px', width: '900px' }} {...config} />
    </div>
  )
}

export default GoodScatter;