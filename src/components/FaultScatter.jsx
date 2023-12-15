import React, { useEffect, useState } from 'react'
import { Scatter } from '@ant-design/charts';
import fault from '../data/faultBearing';

const FaultScatter = ({ type }) => {

    const [data, setData] = useState([]);
    useEffect(() => {
      setData(fault);
    }, []);
    

    const config = {
        appendPadding: 2,
        data,
        xField: 'time',
        yField: 'value',
        shape: 'circle',
        // colorField: 'Genre',
        size: 1,
        pointStyle: {
            fill: 'rgba(75,192,192,1)',
            r: 1,
            stroke: 'rgba(75,192,192,1)',
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
                    stroke: '#bbb',
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

export default FaultScatter;