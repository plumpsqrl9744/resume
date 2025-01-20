import React from "react";
import Title from "./atom/Title";
import styled from "styled-components";
import Profile from "../pages/details/Profile";

export default function Section({ children, title, isProfile = false }) {
  return (
    <SectionFlex>
      <TitleSection isProfile={isProfile}>
        {isProfile ? <Profile /> : <Title>{title}</Title>}
      </TitleSection>
      <Content>{children}</Content>
    </SectionFlex>
  );
}

const SectionFlex = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  @media (max-width: 768px) {
    flex-direction: column; // 모바일에서는 세로로 쌓이게 설정
  }
`;

const TitleSection = styled.div`
  padding: ${({ isProfile }) => (isProfile ? "0 0 50px 0" : "50px 0")};
  width: 400px;
  flex: 0 0 auto; // flex 속성으로 크기 고정
  @media (max-width: 768px) {
    width: 100%; // 모바일에서는 100% 차지
  }
`;

const Content = styled.div`
  color: var(--font-color-white);
  border-top: 1px solid var(--border-white);
  padding: 50px 0;
  flex: 9 1 0%; // Content가 9배 크기 (비율 3:1)
  @media (max-width: 768px) {
    flex: 1 1 100%; // 모바일에서는 Content가 100% 차지
  }
`;
