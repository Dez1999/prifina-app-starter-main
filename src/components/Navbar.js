import React from "react";
import { Link } from "react-router-dom";

import { Text, Avatar, Flex } from "@blend-ui/core";

import LogoIcon from "../assets/logo.svg";

const styles = {
  position: "sticky",
  top: 0,
};

function Navbar() {
  return (
    <Flex
      height="69px"
      width={"100%"}
      bg={"#F4F4F8"}
      paddingLeft={37}
      paddingTop={21}
      paddingRight={35}
      flexDirecton={"row"}
      justifyContent={"space-between"}
      style={styles}
    >
      <Flex
        width={200}
        alignItems={"center"}
        marginBottom={37}
        top={0}
        left={0}
        postion={"sticky"}
      >
        <img src={LogoIcon} alt="React Logo" />
        <Flex paddingLeft={20}>
          <Link to="/">
            <Text color={"#5F6AC4"} fontSize={18}>
              Health app
            </Text>
          </Link>
        </Flex>
      </Flex>
      <div>
        <Flex alignItems={"center"} marginTop={-13}>
          <Text color={"#5F6AC4"} fontSize={16}>
            Hello,{" "}
          </Text>
          <Flex paddingLeft={4}>
            <Text fontSize={16}> Jane Doe</Text>
          </Flex>
          <Flex paddingLeft={10} size={44}>
            <Avatar />
          </Flex>
        </Flex>
      </div>
    </Flex>
  );
}

export default Navbar;
