import React, { useState, useRef, useEffect } from "react";
import Marquee from "react-fast-marquee";
import {
  SkillsContainer,
  SkillBox
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiFirebase } from "react-icons/di"
import { GrGatsbyjs } from "react-icons/gr"
import { MdOutlineCss } from "react-icons/md"
import { skills } from "./../../constants/constants";

// import { TbBrandNextjs, TbBrandVue } from "react-icons/tb"
const Timeline = () => {
  return (
    <Section id="about">
      <SectionDivider />
      <br />
      <br />
      <SectionTitle> Skills </SectionTitle>{" "}
      <SectionText>
        Here is my skills related to Web & App Development
      </SectionText>{" "}
      <SkillsContainer>
        <Marquee gradient={false}>
          {
            skills.map((skill, item) => {
              return <SkillBox>
                <img src={skill.image} alt="" width={80} />
              </SkillBox>
            })
          }
        </Marquee>
      </SkillsContainer>
    </Section>
  );
};

export default Timeline;
