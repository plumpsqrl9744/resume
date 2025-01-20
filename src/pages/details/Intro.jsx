import React from "react";
import styled from "styled-components";
import TitleWithText from "../../component/molecules/TitleWithText";
import Title from "../../component/atom/Title";
import Text from "../../component/atom/Text";

export default function Intro() {
  return (
    <IntroSection>
      <LinkedSection>
        <div>
          <TitleWithText
            title="Blog"
            content="https://velog.io/@plumpsqrl9744/posts"
            href="https://velog.io/@plumpsqrl9744/posts"
          />
        </div>
        <div>
          <TitleWithText
            title="Github"
            content="https://github.com/plumpsqrl9744"
            href="https://github.com/plumpsqrl9744"
          />
        </div>
      </LinkedSection>
      <div>
        <Title margin="25px">Introduce</Title>
        <Text size="xl" margin={"15px"}>
          협력과 성장을 지향하는 개발자
        </Text>
        <ul>
          <li>
            <Text size="lg">
              처음 접한 PHP, Laravel, jQuery 환경에서 어려움을 극복하기 위해
              <strong>동료들과 퇴근 후 스터디를 주도</strong>하여, 약 한 달 만에{" "}
              <strong>
                실제 서비스 개발에 착수할 수 있도록 팀의 역량을 함께 향상
              </strong>
              시켰습니다.
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"25px"}>
              서비스 개발 과정에서 부족한 JavaScript 역량을 보완하기 위해{" "}
              <strong>외부 스터디를 주최</strong>했습니다. 이를 통해 동료들과
              함께 학습하며 실력을 쌓았고,{" "}
              <strong>성장의 기회를 스스로 만들어갔습니다.</strong>
            </Text>
          </li>
        </ul>
        <Text size="xl" margin={"15px"}>
          목표 지향적인 개발자
        </Text>
        <ul>
          <li>
            <Text size="lg" margin={"25px"}>
              <strong>주 평균 80시간 이상 개발</strong>하며,{" "}
              <strong>기간이 정해져 있는 국가 지원 프로젝트</strong>에서 목표
              달성을 위해{" "}
              <strong>
                책임감을 가지고 꾸준히 주어진 문제를 해결하는 개발자
              </strong>
              입니다. <strong>목표를 향한 집념과 책임감</strong>으로 어려운 상황
              속에서도 문제를 해결하며 프로젝트를 완수해왔습니다.
            </Text>
          </li>
        </ul>
        <Text size="xl" margin={"15px"}>
          효율적 개발 환경을 지향하는 개발자
        </Text>
        <ul>
          <li>
            <Text size="lg">
              <strong>GitHub Issue을 적극 활용해</strong> 작업 내역을 기록하고,
              팀원 간의 협업을 효율적이고 체계적으로 관리했습니다.
            </Text>
          </li>
          <li>
            <Text size="lg">
              <strong>ESLint, Prettier, husky를 적용해</strong> Git과 코드
              컨벤션을 설정하여
              <strong>일관된 코드 스타일과 코드 품질을 유지</strong>했습니다.
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"50px"}>
              GitHub Action을 활용하여 푸시 이벤트 발생 시 Telegram 알림을 통해
              작업 내역을 실시간으로 확인할 수 있는 환경을 구축했습니다.
            </Text>
          </li>
        </ul>
      </div>
    </IntroSection>
  );
}

const IntroSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;

  li {
    margin-bottom: 10px;
    line-height: 30px;
  }
`;

const LinkedSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
