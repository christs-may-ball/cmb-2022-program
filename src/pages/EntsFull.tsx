import React from "react"

import styled from "@emotion/styled"
import { Box } from "@mui/material"

import { program } from "../assets/data"
import { solidStone, textBackground } from "../assets/img"
import { Text } from "../components"

const max = 9;
const [cellHeight, cellWidth] = [55, 110];
const entsFull = program.entsFull;
const locations = entsFull.map(({ location }) => location);

const Cell = styled(Box)(({ theme }) => ({
  width: cellWidth,
  height: cellHeight,
  boxSizing: "border-box"
}));

const EntsFull = () => (
  <Box
    flex={1}
    minHeight={0}
    width="100%"
    sx={{
      backgroundImage: `url(${textBackground})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center"
    }}
  >
    <Box
      py={4}
      px={{
        xs: 2,
        sm: 4
      }}
      width="100%"
      height="100%"
      boxSizing="border-box"
      display="flex"
      justifyContent="start"
      alignItems="center"
    >
      <Box display="flex" flexDirection="column">
        <Cell pr={1} />
        {locations.map((loc, i) => (
          <Cell
            pr={1}
            key={i}
            display="flex"
            alignItems="center"
            borderRight={1}
            borderColor="tertiary.main"
          >
            <Text>{loc}</Text>
          </Cell>
        ))}
        <Cell pr={1} />
      </Box>
      <Box flex={1} sx={{ overflowX: "scroll", overflowY: "hidden" }}>
        <Box display="flex">
          {[...Array(max)].map((x, i) => {
            const start = new Date("2022-06-21T20:30:00");
            start.setHours(start.getHours() + i);
            const time = start.toLocaleString("en-GB", {
              hour: "numeric",
              minute: "numeric",
              hour12: true
            });
            return (
              <Box flexBasis="content" key={i}>
                <Cell display="flex" alignItems="center">
                  <Text>{time}</Text>
                </Cell>
              </Box>
            );
          })}
        </Box>
        {entsFull.map(({ location, ents, ents2 }, i) => (
          <Box
            position="relative"
            display="flex"
            width={max * cellWidth}
            key={i}
          >
            {[...Array(max)].map((x, j) => (
              <Box key={j}>
                <Cell
                  borderTop={1}
                  borderLeft={j === 0 ? 0 : 1}
                  borderRight={j === max - 1 ? 1 : 0}
                  borderBottom={i === 10 ? 1 : 0}
                  borderColor="tertiary.main"
                />
              </Box>
            ))}
            <Box position="absolute" height="100%">
              {ents.map(({ name, from, to, fontSize }, j) => (
                <Box
                  key={j}
                  position="absolute"
                  left={from * cellWidth}
                  width={(to - from) * cellWidth}
                  height={cellHeight}
                  boxSizing="border-box"
                  px={1}
                  py={0.5}
                >
                  <Box
                    width="100%"
                    height="100%"
                    sx={{
                      backgroundImage: `url(${solidStone})`,
                      backgroundSize: "100% 100%",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center"
                    }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    textAlign="center"
                    boxSizing="border-box"
                    p={1}
                  >
                    <Text
                      color="primary.dark"
                      fontSize={fontSize}
                      lineHeight={"normal"}
                    >
                      {name}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        ))}
        <Box display="flex">
          {[...Array(max)].map((x, i) => (
            <Box flexBasis="content" key={i}>
              <Cell />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);
export default EntsFull;
