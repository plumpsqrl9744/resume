import React from "react";
import Text from "../../component/atom/Text";
import styled from "styled-components";

export default function Skills() {
  return (
    <SkillsSection>
      <div>
        <Text size="2xl" bold={true} margin={"15px"}>
          Frontend
        </Text>
        <ul>
          <Text size="lg">
            - Javascript(ES6), TypeScript, React, Next.js, jQuery
          </Text>
        </ul>
      </div>
      <div>
        <Text size="2xl" bold={true} margin={"15px"}>
          Libraries and Tools
        </Text>
        <ul>
          <Text size="lg">
            - React-Redux, Redux-Thunk, React Query, Zustand
          </Text>
        </ul>
        <ul>
          <Text size="lg">- Tailwind CSS, Styled Components, Sass</Text>
        </ul>
        <ul>
          <Text size="lg">- ESLint, Prettier, Husky</Text>
        </ul>
      </div>

      <div>
        <Text size="2xl" bold={true} margin={"15px"}>
          Deployment
        </Text>
        <ul>
          <Text size="lg">- AWS EC2, AWS S3, Vercel, Heroku</Text>
        </ul>
      </div>
      <div>
        <Text size="2xl" bold={true} margin={"15px"}>
          Collaboration
        </Text>
        <ul>
          <Text size="lg">- Figma, Slack, Notion</Text>
        </ul>
      </div>
    </SkillsSection>
  );
}

const SkillsSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
