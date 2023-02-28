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
        Welcome to <br /> my personal portfolio
      </SectionTitle>
      <SectionText>
        The purpose of this Javascript mastery is to help aspiring and
        established developers to take their development skills to the next
        level and build awesome apps.
      </SectionText>
      <Button onClick={() => (window.location = "https://www.google.com/")}>
        Learn more
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
