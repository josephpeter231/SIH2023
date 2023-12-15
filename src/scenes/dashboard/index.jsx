import React from "react";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockTransactions } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import engine from '../../images/engine1.png';
import wheel from '../../images/wheel.png';
import brake from '../../images/brake.png';
import clutch from '../../images/clutch and transmission.png'
import './Dashboard.css';
import Car from "../../components/Car";
import ProgressBar1 from "../bar/Progressbar1";
import ProgressBar2 from "../bar/Progressbar2";
import ProgressBar3 from "../bar/Progressbar3";
import ProgressBar4 from "../bar/Progressbar4";
import { useEffect, useState } from "react";
import LineCharts from "../../components/LineChart";
import LineChart from "../../components/LineChart";
import dataList from '../../data/goodBearing';
import fault from "../../data/faultBearing";
import rubbing from "../../data/rubbing";
import fftGoodBearing from "../../data/fftGoodBearing";
import fftFaultBearing from "../../data/fftFaultBearing";
import fftRubbing from "../../data/fftRubbing";
import LiveTimeSeriesChart from '../../components/TimeSeries';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import _ from 'lodash';
import GoodScatter from "../../components/ScatterPlot";
import FaultScatter from "../../components/FaultScatter";
import RubbingScatter from "../../components/RubbingScatter";

const Dashboard = React.memo(() => {

  const [timeSeries, setTimeSeries] = useState("Good Bearing");
  const [scatterPlot, setscatterPlot] = useState("Good Bearing");

  const handleChange = (event) => {
    setTimeSeries(event.target.value);
  };

  const handleScatter = (event) => {
    setscatterPlot(event.target.value);
  };

  const [fft, setFft] = useState("Good Bearing");

  const handleFFT = (event) => {
    setFft(event.target.value);
  };

  const [goodBearingData, setGoodData] = useState([]);
  const [faultBearingData, setFaultData] = useState([]);
  const [rubbingData, setRubbingData] = useState([]);
  const [fftGoodBearingData, setfftGoodBearingData] = useState([]);
  const [fftFaultBearingData, setfftFaultBearingData] = useState([]);
  const [fftRrubbingData, setfftRubbingData] = useState([]);

  useEffect(() => {
    const downsampled = _.chunk(dataList, Math.ceil(dataList.length / 10000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setGoodData(downsampled);
  }, []);

  useEffect(() => {
    const downsampled = _.chunk(fault, Math.ceil(fault.length / 10000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setFaultData(downsampled);
  }, []);

  useEffect(() => {
    const downsampled = _.chunk(rubbing, Math.ceil(rubbing.length / 10000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setRubbingData(downsampled);
  }, []);

  useEffect(() => {
    const downsampled = _.chunk(fftGoodBearing, Math.ceil(fftGoodBearing.length / 40000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setfftGoodBearingData(downsampled);
  }, []);
  useEffect(() => {
    const downsampled = _.chunk(fftFaultBearing, Math.ceil(fftFaultBearing.length / 40000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setfftFaultBearingData(downsampled);
  }, []);
  useEffect(() => {
    const downsampled = _.chunk(fftRubbing, Math.ceil(fftRubbing.length / 40000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setfftRubbingData(downsampled);
  }, []);
  const config = {
    labels: timeSeries === 'Good Bearing'? goodBearingData.map((data) => data.time) : timeSeries==="Fault Bearing" ? faultBearingData.map((data) => data.time) : rubbingData.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: timeSeries === 'Good Bearing'? goodBearingData.map((data) => data.value) : timeSeries==="Fault Bearing" ? faultBearingData.map((data) => data.value) : rubbingData.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 0,
      },
    ],
    options: {
      scales: {
        y: {
          min: -0.4,
          max: 0.4,
          ticks: {
            stepSize: 0.05,
          },
        },
      },
    }
  };

  
  const configFft = {
    labels: fft === 'Good Bearing'? fftGoodBearingData.map((data) => data.time) : fft === "Fault Bearing" ? fftFaultBearingData.map((data) => data.time) : fftRrubbingData.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: fft === 'Good Bearing'? fftGoodBearingData.map((data) => data.value) : fft === "Fault Bearing" ? fftFaultBearingData.map((data) => data.value) : fftRrubbingData.map((data) => data.value),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 0,
      },
    ],
    options: {
      scales: {
        y: {
          min: -0.4,
          max: 0.4,
          ticks: {
            stepSize: 0.05,
          },
        },
      },
    }
  };





  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const colorsArray = ["#FF0000", "#CCCC00", "#008000", "#0000FF", "#000435", "#000435"];

  const AnimatedNumber = ({ value }) => {
    const [animatedValue, setAnimatedValue] = useState(0);

    useEffect(() => {
      const step = (value - animatedValue) / 20; // Adjust the step for smoother animation

      const interval = setInterval(() => {
        if (Math.abs(animatedValue - value) > Math.abs(step)) {
          setAnimatedValue((prev) => prev + step);
        } else {
          setAnimatedValue(value);
          clearInterval(interval);
        }
      }, 30); // Adjust the interval for the animation speed

      return () => clearInterval(interval);
    }, [animatedValue, value]);

    return <span>{animatedValue.toFixed(2)}</span>; // Adjust the number of decimal places
  };

  return (
    <Box m="20px" marginTop={0} className="home">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Predictive Maintenance Analysis" subtitle="Know your vehicle health" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box>
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="220px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="hover-container"
        >
          <div className="hover-container images-div">
            <img
              src={engine}
              alt="Your Alt Text"
              className="hover-image"
            />

            <div className="progress text-center"><ProgressBar1 /></div>
            <div className="text-center image-text">Engine</div>
          </div>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="hover-container"
        >
          <div className="hover-container images-div">
            <img
              src={wheel}
              alt="Your Alt Text"
              className="hover-image"
            />
            <div className="progress text-center"><ProgressBar2 /></div>
            <div className="text-center image-text">Wheel Assembly</div>
          </div>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="hover-container"
        >
          <div className="hover-container images-div">
            <img
              src={clutch}
              alt="Your Alt Text"
              className="hover-image"
            />
            <div className="progress text-center"><ProgressBar4 /></div>
            <div className="text-center image-text">Transmission</div>
          </div>
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="hover-container"
        >
          <div className="hover-container images-div">
            <img
              src={brake}
              alt="Your Alt Text"
              className="hover-image"
            />
            <div className="progress text-center"><ProgressBar3 /></div>
            <div className="text-center image-text">Break</div>
          </div>
        </Box>
        {/* <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          className="hover-container"
        >
          <div className="hover-container images-div">
            <img
              src={clutch}
              alt="Your Alt Text"
              className="hover-image"
            />
            <div className="progress text-center"><ProgressBar4 /></div>
            <div className="text-center image-text">Transmission</div>
          </div>
        </Box> */}
        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          className="center"
        >
          <Car />
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          {mockTransactions.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box
                backgroundColor={colorsArray[i % colorsArray.length]}
                p="5px 10px"
                borderRadius="4px"
              >
                {transaction.field}
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  <AnimatedNumber value={transaction.hz} />
                </Typography>
                <Typography color={colors.grey[100]}>
                  Hz
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  <AnimatedNumber value={transaction.sensed_hz} />
                </Typography>
                <Typography color={colors.grey[100]}>
                  Sensed Hz
                </Typography>
              </Box>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant="h5"
                  fontWeight="600"
                >
                  <AnimatedNumber value={transaction.amplitude} />
                </Typography>
                <Typography color={colors.grey[100]}>
                  Amplitude
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              Time Series Analysis
            </Typography>
            <Select
              value={timeSeries}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ marginTop: '1rem' }}
            >
              <MenuItem value="Good Bearing">
                Good Bearing
              </MenuItem>
              <MenuItem value="Fault Bearing">Fault Bearing</MenuItem>
              <MenuItem value="Rubbing">Rubbing</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginTop: '20px' }}>
            <LineChart chartData={config} style={{ width: 300, height: 500 }} />
          </div>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              FFT Analysis
            </Typography>
            <Select
              value={fft}
              onChange={handleFFT}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ marginTop: '1rem' }}
            >
              <MenuItem value="Good Bearing">
                Good Bearing
              </MenuItem>
              <MenuItem value="Fault Bearing">Fault Bearing</MenuItem>
              <MenuItem value="Rubbing">Rubbing</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginTop: '20px' }}>
            <LineChart chartData={configFft} style={{ width: 300, height: 500 }} />
          </div>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              Scatter Plot
            </Typography>
            <Select
              value={scatterPlot}
              onChange={handleScatter}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ marginTop: '1rem' }}
            >
              <MenuItem value="Good Bearing">
                Good Bearing
              </MenuItem>
              <MenuItem value="Fault Bearing">Fault Bearing</MenuItem>
              <MenuItem value="Rubbing">Rubbing</MenuItem>
            </Select>
          </FormControl>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop: '20px' }}>
            {
              scatterPlot==="Good Bearing" ? <GoodScatter/> : scatterPlot === "Fault Bearing" ? <FaultScatter/> : <RubbingScatter/>
            }
          </div>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              Recurrence
            </Typography>
            <Select
              value={timeSeries}
              onChange={handleChange}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              sx={{ marginTop: '1rem' }}
            >
              <MenuItem value="Good Bearing">
                Good Bearing
              </MenuItem>
              <MenuItem value="Fault Bearing">Fault Bearing</MenuItem>
              <MenuItem value="Rubbing">Rubbing</MenuItem>
            </Select>
          </FormControl>
          <div style={{ marginTop: '20px' }}>
            <LineChart chartData={config} style={{ width: 300, height: 500 }} />
          </div>
        </Box>
      </Box>
    </Box>
  );
});

export default Dashboard;
