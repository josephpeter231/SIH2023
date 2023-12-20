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
import 'jspdf-autotable';
import { jsPDF } from 'jspdf';

const Engine = React.memo(() => {

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

  const predictivePdf = () => {
    const pdfFilePath = process.env.PUBLIC_URL + '/Inner Race.pdf';

    // Create a download link
    const link = document.createElement('a');
    link.href = pdfFilePath;
    link.download = 'Analysis Report Crankshaft Bearing 2.pdf';

    // Append the link to the body
    document.body.appendChild(link);

    // Trigger a click on the link to start the download
    link.click();

    // Remove the link from the DOM
    document.body.removeChild(link);
  };

//   const prescriptivePdf = () => {
//     var doc = new jsPDF();
//     doc.text('Prescriptive Maintenance for Cramshaft Bearing - 1', 20, 20);
//     const data = [['Column 1', 'Column 2', 'Column 3'], [1, 2, 3], [4, 5, 6], [7, 8, 9]];
//     doc.autoTable({
//       head: [data[0]],
//       body: data.slice(1),
//     });
//     doc.save('generated.pdf');
//   };

  const [goodBearingData, setGoodData] = useState([]);
  const [faultBearingData, setFaultData] = useState([]);
  const [rubbingData, setRubbingData] = useState([]);
  const [fftGoodBearingData, setfftGoodBearingData] = useState([]);
  const [fftFaultBearingData, setfftFaultBearingData] = useState([]);
  const [fftRrubbingData, setfftRubbingData] = useState([]);

  useEffect(() => {
    const downsampled = _.chunk(fault, Math.ceil(fault.length / 10000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setFaultData(downsampled);
  }, []);

  useEffect(() => {
    const downsampled = _.chunk(fftFaultBearing, Math.ceil(fftFaultBearing.length / 40000))
      .map(chunk => ({
        time: _.meanBy(chunk, point => point.time),
        value: _.meanBy(chunk, point => point.value),
      }));

    setfftFaultBearingData(downsampled);
  }, []);
  const config = {
    labels: faultBearingData.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: faultBearingData.map((data) => data.value),
        backgroundColor: [
          "#4cceac",
        ],
        borderColor: "#4cceac",
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
    labels: fftFaultBearingData.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: fftFaultBearingData.map((data) => data.value),
        backgroundColor: [
          "#4cceac",
        ],
        borderColor: "#4cceac",
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
      const step = (value - animatedValue) / 20;

      const interval = setInterval(() => {
        if (Math.abs(animatedValue - value) > Math.abs(step)) {
          setAnimatedValue((prev) => prev + step);
        } else {
          setAnimatedValue(value);
          clearInterval(interval);
        }
      }, 30);

      return () => clearInterval(interval);
    }, [animatedValue, value]);

    return <span>{animatedValue.toFixed(2)}</span>;
  };

  return (
    <Box m="20px" marginTop={0} className="home">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Engine Crankshaft Bearing - 2" subtitle="Know your vehicle health" />

        <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onClick={predictivePdf}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Analysis Report
          </Button>
        </Box>

        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: '14px',
              fontWeight: 'bold',
              padding: '10px 20px',
            }}
            onClick={prescriptivePdf}
          >
            <DownloadOutlinedIcon sx={{ mr: '10px' }} />
            Prescriptive Maintenance
          </Button>
        </Box> */}

      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="220px"
        gap="20px"
      >
        {/* ROW 3 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              Time Series Analysis
            </Typography>
          </FormControl>
          <div style={{ marginTop: '10px' }}>
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
              Recurrence
            </Typography>
          </FormControl>
          <div style={{ marginTop: '20px' }}>
            <LineChart chartData={config} style={{ width: 300, height: 500 }} />
          </div>
        </Box>
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Typography variant="h5" fontWeight="600">
              Scatter Plot
            </Typography>
          </FormControl>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            {
              scatterPlot === "Good Bearing" ? <GoodScatter /> : scatterPlot === "Fault Bearing" ? <FaultScatter /> : <RubbingScatter />
            }
          </div>
        </Box>
      </Box>
    </Box>
  );
});

export default Engine;
