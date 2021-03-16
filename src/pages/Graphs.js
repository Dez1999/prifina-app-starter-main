import React, { useState, useEffect } from "react";

import { Text, Flex } from "@blend-ui/core";
import Box from "@blend-ui/core/dist/esm/Box";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

import { extendTheme, ThemeProvider } from "@chakra-ui/react";
import Select from "react-select";

// -----------------------FUNCTIONS----------------------

import { Device } from "../data/dataFunctions";
import { borderWidth } from "styled-system";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

function customTheme(theme) {
  return {
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#5F6AC4",
      primary: "#5F6AC4",
      borderColor: "white",
    },
  };
}

// -------------DATA----------------

const styles = {
  boxShadow: " 0px 5px 20px #F0F4F8",
}; 
//#303031  #F0F4F8

const deviceOptions = [
  { label: "Fitbit", value: "fitbit" },
  { label: "Oura", value: "oura" },
];

const timeOptions = [
  { label: "This Week", value: "thisWeek" },
  { label: "Last Week", value: "lastWeek" },
  { label: "This Month", value: "thisMonth" },
];

const dataOptions = [
  { label: "Total Calories", value: "Calories" },
  { label: "Total Steps", value: "totalSteps" },
  { label: "Total Distance", value: "totalDistance" },
  { label: "Inactive Minutes", value: "inactiveMinutes" },
  { label: "Low Active", value: "lowActiveMinutes" },
  { label: "Medium Active", value: "mediumActiveMinutes" },
  { label: "High Active", value: "highActiveMinutes" },
  { label: "Light Sleep", value: "lightSleepTime" },
  { label: "Deep Sleep", value: "deepSleepTime" },
  { label: "Time in Bed", value: "timeSpentInBed" },
  { label: "Total Sleep", value: "totalSleepTime" },
];

function getDeviceData(device) {
  return Device(device);
}

function getDeviceDataTwo(deviceTwo) {
  return Device(deviceTwo);
}

const defaultDevice = deviceOptions[0];

const defaultData = {};

// --------------------------APP FUNCTION--------------------------------

function Graphs() {
  const [device, setDevice] = useState(defaultDevice.value);
  const [deviceTwo, setDeviceTwo] = useState(defaultDevice.value);

  const [graphDataOne, setGraphDataOne] = useState(defaultData);
  const [graphDataTwo, setGraphDataTwo] = useState(defaultData);

  const [dataType, updateDataType] = useState([
    "Calories",
    "totalSteps",
    "totalDistance",
    "inactiveMinutes",
    "lowActiveMinutes",
    "mediumActiveMinutes",
    "highActiveMinutes",
    "lightSleepTime",
    "deepSleepTime",
    "timeSpentInBed",
    "totalSleepTime",
  ]);

  const [time, updateTime] = useState(["thisWeek", "lastWeek", "thisMonth"]);
  const [timeTwo, updateTimeTwo] = useState([
    "thisWeek",
    "lastWeek",
    "thisMonth",
  ]);

  const [sum, setSum] = useState("");

  const [dataTypeTwo, updateDataTypeTwo] = useState([
    "Calories",
    "totalSteps",
    "totalDistance",
    "inactiveMinutes",
    "lowActiveMinutes",
    "mediumActiveMinutes",
    "highActiveMinutes",
    "lightSleepTime",
    "deepSleepTime",
    "timeSpentInBed",
    "totalSleepTime",
  ]);

  const handleDeviceChange = (value) => {
    const device = value.value;
    setDevice(device);
  };
  const handleDeviceChangeTwo = (value) => {
    const deviceTwo = value.value;
    setDeviceTwo(deviceTwo);
  };

  const handleDataChange = (value) => {
    const dataType = value.value;
    updateDataType(dataType);
    console.log(dataType);
    console.log(graphDataOne);
  };

  const handleDataChangeTwo = (value) => {
    const dataTypeTwo = value.value;
    updateDataTypeTwo(dataTypeTwo);
  };

  const handleTimeChange = (value) => {
    const time = value.value;
    const timeArray = graphDataOne;
    if (time === "thisWeek") {
      const newTimeArray = timeArray.slice(21, 28);
      setGraphDataOne(newTimeArray);
    } else if (time === "lastWeek") {
      const newTimeArray = timeArray.slice(14, 21);
      setGraphDataOne(newTimeArray);
    } else {
      setGraphDataOne(graphDataOne);
    }
  };

  const handleTimeChangeTwo = (value) => {
    const timeTwo = value.value;
    const timeArray = graphDataTwo;
    if (timeTwo === "thisWeek") {
      const newTimeArray = timeArray.slice(21, 28);
      setGraphDataTwo(newTimeArray);
    } else if (time === "lastWeek") {
      const newTimeArray = timeArray.slice(14, 21);
      setGraphDataTwo(newTimeArray);
    } else {
      setGraphDataTwo(graphDataTwo);
    }
  };

  const handleGraphColor = (value) => {
    const device = value.value;

    if (device === "fitbit") return "#FFD46A";
    else if (device === "oura") return "#5F6AC4";
  };

  useEffect(() => {
    getDeviceData(device).then((graphDataOne) => {
      setGraphDataOne(graphDataOne);
    });
  }, [device]);

  useEffect(() => {
    getDeviceDataTwo(deviceTwo).then((graphDataTwo) => {
      setGraphDataTwo(graphDataTwo);
    });
  }, [deviceTwo]);

  return (
    <ThemeProvider theme={theme}>
      <Flex
        marginLeft={251}
        justifyContent={"space-between"}
        flexDirection={"column"}
      >
        <Flex paddingTop={55} paddingLeft={70}>
          <Text fontSize={34} color="#5F6AC4">
            Graphs
          </Text>
        </Flex>
        <Flex
          paddingLeft={70}
          paddingRight={140}
          justifyContent={"space-between"}
        >
          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={30}
                >
                  <Flex>
                    <div style={{ minWidth: 180 }}>
                      <Select
                        styles={customTheme}
                        options={dataOptions}
                        defaultValue="Data"
                        placeholder="Data"
                        // onChange={handleDeviceChange}
                        onChange={handleDataChange}
                        width="100px"
                      />
                    </div>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      {/* 25354 calories */}
                      {/* {graphDataOne.reduce(reducer)} */}
                      {sum}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Flex>
                      <div style={{ minWidth: 150 }}>
                        <Select
                          options={timeOptions}
                          defaultValue="Time"
                          placeholder="Time"
                          onChange={handleTimeChange}
                          width="100px"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        defaultValue="Device"
                        placeholder="Device"
                        onChange={handleDeviceChange}
                        width="100px"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={graphDataOne}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <defs>
                      <linearGradient
                        id="colorUv2"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                        spreadMethod="reflect"
                      >
                        <stop offset="0" stopColor="#5F6AC4" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      // dataKey="Calories"
                      dataKey={dataType}
                      stroke="blue"
                      // fill="#5F6AC4"
                      fill="url(#colorUv2)"
                      // fill={handleGraphColor}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>


          <Box>
            <Flex marginTop={40}>
              <Box style={styles} width={431} height={535} borderRadius={10}>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                  paddingTop={30}
                >
                  <Flex>
                    <div style={{ minWidth: 180 }}>
                      <Select
                        options={dataOptions}
                        defaultValue="Data"
                        // onChange={handleDeviceChange}
                        onChange={handleDataChangeTwo}
                        width="100px"
                        placeholder="Data"
                      />
                    </div>
                  </Flex>
                  <Flex>
                    <Text
                      color={"#5F6AC4"}
                      fontSize={28}
                      fontFamily="Circular Std"
                      fontWeight={900}
                      fontStyle="normal"
                    >
                      {/* 25354 calories */}
                    </Text>
                  </Flex>
                </Flex>
                <Flex
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  paddingLeft={30}
                  paddingRight={30}
                >
                  <Flex>
                    <Flex>
                      <div style={{ minWidth: 150 }}>
                        <Select
                          options={timeOptions}
                          defaultValue="Time"
                          onChange={handleTimeChangeTwo}
                          width="100px"
                          placeholder="Time"
                        />
                      </div>
                    </Flex>
                  </Flex>
                  <Flex>
                    <div style={{ minWidth: 100 }}>
                      <Select
                        options={deviceOptions}
                        defaultValue="Device"
                        onChange={handleDeviceChangeTwo}
                        width="100px"
                        placeholder="Device"
                      />
                    </div>
                  </Flex>
                </Flex>
                <ResponsiveContainer>
                  <AreaChart
                    data={graphDataTwo}
                    syncId="anyId"
                    margin={{
                      top: 0,
                      right: 0,
                      left: -60,
                      bottom: 75,
                    }}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      horizontal={false}
                      vertical={false}
                    />
                    <XAxis dataKey="name" tick={false} axisLine={false} />
                    <YAxis tick={false} axisLine={false} />
                    <Tooltip />
                    <defs>
                      <linearGradient
                        id="colorUv"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="100%"
                        spreadMethod="reflect"
                      >
                        <stop offset="0" stopColor="#FFD46A" />
                        <stop offset="1" stopColor="white" />
                      </linearGradient>
                    </defs>
                    <Area
                      type="monotone"
                      // dataKey="Calories"
                      dataKey={dataTypeTwo}
                      // dataKey={getName}
                      stroke="orange"
                      fill="url(#colorUv)"
                      // fill="#FFD46A"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </Flex>
          </Box>

          
        </Flex>
      </Flex>
    </ThemeProvider>
  );
}

export default Graphs;
