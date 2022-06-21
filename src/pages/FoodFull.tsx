import React from "react"

import { Box } from "@mui/material"

import { program } from "../assets/data"
import { solidStone, textBackground } from "../assets/img"
import { Text } from "../components"

const foodFull = program.foodFull;

const FoodFull = () => (
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
      height="100%"
      p={3}
      overflow="scroll"
      textAlign="center"
      boxSizing="border-box"
    >
      {foodFull.map(({ title, headings, body }, i) => (
        <Box key={i} mb={7}>
          <Text variant="h3" mb={2}>
            {title}
          </Text>
          <Box
            height="100%"
            width="100%"
            maxWidth={500}
            mx="auto"
            py={5}
            px={{
              xs: 2,
              sm: 8
            }}
            boxSizing="border-box"
            sx={{
              backgroundImage: `url(${solidStone})`,
              backgroundSize: "100% 100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center"
            }}
          >
            {headings && (
              <Box mb={2}>
                {headings.map((text, j) => (
                  <Text variant="h6" mb={1} key={j} color="teriary.contrast">
                    {text}
                  </Text>
                ))}
              </Box>
            )}
            {body.map(({ title, items }, j) => (
              <Box mb={2}>
                {title && (
                  <Text
                    variant="h6"
                    key={j}
                    color="teriary.contrast"
                    sx={{ textDecoration: "underline" }}
                    mb={0.5}
                  >
                    {title}
                  </Text>
                )}
                {items.map((text, k) => (
                  <Text
                    variant="h6"
                    key={k}
                    color="teriary.contrast"
                    whiteSpace="pre-wrap"
                    fontSize={18}
                    mb={2}
                    lineHeight={1.2}
                  >
                    {text}
                  </Text>
                ))}
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);
export default FoodFull;
