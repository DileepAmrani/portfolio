import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";

const data = [
  { number: '100+', text: "Projects Completed" },
  { number: '30+', text: "Students" },
  { number: '40+', text: "Clients" },
  { number: "Fiverr", text: "Level Two" },
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br />
    <SectionTitle> Personal Achievements </SectionTitle>{" "}
    <Boxes>
      {data.map((card, index) => {
        return <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      })}
    </Boxes>
  </Section>
);

export default Acomplishments;
