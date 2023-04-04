import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "./../../constants/constants";

const Projects = () => (
  <Section padding id="projects">
    <SectionDivider />
    <br />
    <SectionTitle> Projects </SectionTitle>{" "}
    <GridContainer>
      {projects.map(({ image, title, id, description, tags, source, visit }) => {
        return <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag, i) => {
                return <Tag key={i}>{tag}</Tag>
              })}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={visit}>Code</ExternalLinks>
            <ExternalLinks href={source}>Source</ExternalLinks>
          </UtilityList>
        </BlogCard>
      })}{" "}
    </GridContainer>{" "}
  </Section>
);

export default Projects;
