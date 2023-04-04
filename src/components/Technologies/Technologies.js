import React from "react";
import { DiFirebase, DiReact, DiZend } from "react-icons/di";
import { FaNode } from "react-icons/fa"
import { MdStorage } from "react-icons/md"
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <br />
    <SectionTitle> Technology </SectionTitle>
    <SectionText>
      Worked with a lot of  different types of Technologies in projects.
      From Front-End to Back-End
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="5rem" />
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>Experience with <br />
            React.js, Next.js, Vue.js Gatsby.js</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FaNode size="5rem" />
        <ListContainer> <ListTitle>Back-End </ListTitle>
          <ListParagraph>Experience with <br />
            Node, MongoDB, Firebase</ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <MdStorage size="5rem" />
        <ListContainer> <ListTitle>Deployment</ListTitle>
          <ListParagraph>Experience with <br />
            Heroku, Netlify, Godaddy</ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
