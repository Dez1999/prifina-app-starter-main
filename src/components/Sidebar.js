import React from "react";
import { Link } from "react-router-dom";

import { CircularProgress, CircularProgressLabel } from "@blend-ui/progress";
import { ThemeProvider, Text, Avatar, Box, Flex } from "@blend-ui/core";
import { BlendIcon } from "@blend-ui/icons";
import { flexDirection } from "styled-system";
import DashboardIcon from "../assets/dashboard.svg";
import GraphsIcon from "../assets/graphs.svg";

import { Colors } from "../styles/Colors";

function Sidebar() {
  return (
    <Flex
      height="100%"
      flexDirection={"column"}
      paddingLeft="37px"
      paddingTop={60}
      width={251}
      position={"fixed"}
      bg={"#F4F4F8"}
    >
      <Flex marginBottom={40} flexDirecton={"row"}>
        <Flex>
          <Flex marginRight={16}>
            <img src={DashboardIcon} alt="React Logo" />
          </Flex>
          <Link to="/">
            <Text color={"#5F6AC4"}>Dashboard</Text>
          </Link>
        </Flex>
      </Flex>
      <Flex>
        <Flex marginRight={16}>
          <img src={GraphsIcon} alt="React Logo" />
        </Flex>
        <Link to="/graphs">
          <Text color={"#5F6AC4"}>Graphs</Text>
        </Link>
      </Flex>
      <Flex>        {/*Added new Page for Widgets */}
        <Flex marginRight={16}>
          <img src={GraphsIcon} alt="React Logo" />
        </Flex>
        <Link to="/widgets">
          <Text color={"#5F6AC4"}>Widgets</Text>
        </Link>
      </Flex>
    </Flex>
  );
}

export default Sidebar;
// style={{
//   backgroundColor: "#F4F4F8",
//   width: 251,
//   paddingLeft: 37,
//   paddingTop: 57,
//   height: "100vh",
//   flexDirection: "row",
//   position: "fixed",
// }}
