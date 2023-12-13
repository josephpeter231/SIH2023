import { LineChart } from '@mui/x-charts';
import React from 'react';
import {time} from '../data/timeData';
import {goodBearing} from '../data/goodBearingData';

const LineCharts = () => {
    const xData = time;
    const yData = goodBearing;
    return (
        <div style={{ marginTop : '50px' }}>
            <LineChart
                width={350}
                height={300}
                series={[
                    { data: xData, label: 'Time' },
                    { data: yData, label: 'Good Bearing' },
                ]}
                xAxis={[{ scaleType: 'point', data: xData }]}
            />
        </div>
    )
}

export default LineCharts;