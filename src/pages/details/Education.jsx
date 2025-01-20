import React from "react";
import Text from "../../component/atom/Text";
import styled from "styled-components";

export default function Education() {
  return (
    <EducationSection>
      <Text size="2xl" margin={""} bold={true}>
        Wanted Frontend Pre-Onboarding (2023)
      </Text>
      <ul>
        <li>
          <Text size="lg" margin={"15px"}>
            ESLint, Prettier, husky을 적용한 소규모 프로젝트 경험
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"15px"} bold={true}>
            CI/CD, React Hook, Redux, TDD, 실행 컨텍스트와 클로저를 학습 및 경험
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            동료 학습을 통해 더 나은 코드, 프로그래밍적 사고에 대해 동료와 함께
            공유하고 학습하는 방식을 경험
          </Text>
        </li>
      </ul>
      <Text size="2xl" margin={""} bold={true}>
        이노베이션 캠프 in 서울 (항해99) 수료 (2023)
      </Text>
      <ul>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>99일간 주 100시간 개발</strong>, 3번의 Backend 개발자와
            팀프로젝트 협업
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>
              Backend, Designer와의 협업을 통해 기획, 디자인, 배포
            </strong>
            까지 프로젝트 전 과정을 주도적으로 완료,{" "}
            <strong>유저 피드백을 반영하여 개선 경험</strong>
          </Text>
        </li>
      </ul>
    </EducationSection>
  );
}

const EducationSection = styled.div`
  display: flex;
  flex-direction: column;
`;
