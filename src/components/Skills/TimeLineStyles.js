import styled from "styled-components";

export const SkillsContainer = styled.div`
  padding: 0rem;
  display: flex;
  justify-content: space-between;
  overflow-x: scroll;
  &:first-of-type {
    margin-left: 0px;
  }
  margin-bottom: 80px;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  -webkit-overflow-scrolling: touch;
  scroll-snap-type: x mandatory;
  touch-action: pan-x;
  @media ${(props) => props.theme.breakpoints.sm} {
    justify-content: initial;
  }
`;

export const SkillBox = styled.div`
  padding: 20px 40px;
  backgroundcolor: #000;
`;
