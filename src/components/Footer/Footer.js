import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { SiFiverr } from "react-icons/si"
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call </LinkTitle>{" "}
          <LinkItem href="tel:+923368933075">+923368933075</LinkItem>
        </LinkColumn>{" "}
        <LinkColumn>
          <LinkTitle>Email </LinkTitle>{" "}
          <LinkItem href="mailto:amranidileep44@gmail.com">amranidileep44@gmail.com</LinkItem>
        </LinkColumn>{" "}

      </LinkList>{" "}
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>On time everytime.</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://github.com/DileepAmrani'>
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://www.linkedin.com/in/amranidileep'>
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://fiverr.com/dileep44'>
            <SiFiverr size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
