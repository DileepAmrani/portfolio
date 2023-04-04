import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br /> My Personal Portfolio
      </SectionTitle>
      <SectionText>
        Focused and quick learning web and mobile app development tools with
        more than 3 years of experience in programming and development for
        various projects and clients.
      </SectionText>
      <Button onClick={() => window.location = "http://google.com"}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;
