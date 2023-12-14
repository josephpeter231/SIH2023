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
import { time } from '../../data/timeData';

const Dashboard = () => {

  const config = {
    labels: time.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: time.map((data) => data.goodBearing),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "white",
        borderWidth: 2,      
        pointStyle: 'circle',
        pointRadius: 0, 
      },
    ],
    options : {
      scales: {
        y: {
          min:-0.4,
          max:0.4,
          ticks: {
            stepSize: 0.08,
          },
        },
      },
    }
  };

  const configPie = {
    labels: time.map((data) => data.time),
    datasets: [
      {
        label: "Hertz",
        data: time.map((data) => data.goodBearing),
        backgroundColor: [
          "rgba(75,192,192,1)",
        ],
        borderColor: "white",
        borderWidth: 2,      
        pointStyle: 'circle',
        pointRadius: 0, 
      },
    ],
    options : {
      scales: {
        y: {
          min:-0.4,
          max:0.4,
          ticks: {
            stepSize: 0.08,
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
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          {/* <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box> */}
          <div style={{ width: 300}}>
            <LineChart chartData={config} style={{ width: 500 ,height:800}} />
          </div>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Sales Quantity
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          padding="30px"
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ marginBottom: "15px" }}
          >
            Geography Based
          </Typography>
          <Box height="200px">
            <GeographyChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
