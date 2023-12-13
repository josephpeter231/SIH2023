import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import user from '../../images/user.png';
import { DownOutlined } from "@ant-design/icons";
import { Tree } from "antd";
import './sidebar.css';
import { DescriptionOutlined } from "@mui/icons-material";

const engineData = [
  {
    title: "Engine",
    key: "0-0",
    children: [
      {
        title: "Crankshaft",
        key: "0-0-0",
        children: [
          {
            title: "Bearing-1",
            key: "0-0-0-0",
          },
          {
            title: "Bearing-2",
            key: "0-0-0-1",
          },
        ],
      },
      {
        title: "Camshaft",
        key: "0-0-1",
        children: [
          {
            title: "Bearing-1",
            key: "0-0-1-0",
          },
          {
            title: "Bearing-2",
            key: "0-0-1-0",
          },
        ],
      },
    ],
  },
];


const wheelData = [
  {
    title: "Transmission",
    key: "0-0",
    children: [
      {
        title: "Clutch",
        key: "0-0-0",
      },
      {
        title: "Gear Box",
        key: "0-0-1",
      },
      {
        title: "Propeller Shaft",
        key: "0-0-2",
      },
      {
        title: "Differential Gears",
        key: "0-0-3",
      },
    ],
  },
];
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};



const Sidebar = () => {
  // TREE STRUCTURE
  const onSelect = (selectedKeys, info) => {
    console.log("selected", selectedKeys, info);
  };


  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar
        collapsed={isCollapsed}>
        <Menu iconShape="square"
        >
          {/* LOGO AND MENU ICON */}
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMIN
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          <Box
            className={!isCollapsed ? "" : "hidden"}
            mb="25px">
            <Box display="flex" justifyContent="center" alignItems="center">
              <img
                alt="profile-user"
                width="100px"
                height="100px"
                src={user}
                style={{ cursor: "pointer", borderRadius: "50%" }}
              />
            </Box>
            <Box textAlign="center">
              <Typography
                variant="h2"
                color={colors.grey[100]}
                fontWeight="bold"
                sx={{ m: "10px 0 0 0" }}
              >
                User
              </Typography>
              <Typography variant="h5" color={colors.greenAccent[500]}>
                Owner of car
              </Typography>
            </Box>
          </Box>
          <div style={{ display: 'flex', margin : '20px', marginTop : '50px', flexDirection: 'column', backgroundColor : '#141b2d', borderRadius : 20 }}>
            <Box className="tree-container" style={{ margin: 0, padding: 0 }}>
              <Tree
                className={!isCollapsed ? 'tree' : 'tree hidden'}
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={engineData}
                style={{ margin: 0, padding: 0 }}
              />
            </Box>
            <Box className="tree-container" style={{ margin: 0, padding: 0 }}>
              <Tree
                className={!isCollapsed ? 'tree' : 'tree hidden'}
                showLine
                switcherIcon={<DownOutlined />}
                defaultExpandedKeys={['0-0-0']}
                onSelect={onSelect}
                treeData={wheelData}
                style={{ margin: 0, padding: 0 }}
              />
            </Box>
          </div>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
