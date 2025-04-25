import React from "react";
import styled from "styled-components";
import TitleWithText from "../../component/molecules/TitleWithText";
import Title from "../../component/atom/Title";
import Text from "../../component/atom/Text";

export default function Intro() {
  return (
    <IntroSection>
      <div>
        <Title margin="25px">Introduce</Title>
        <Text size="xl" margin={"15px"}>
          ⚡ AI 도구를 전략적으로 활용하는 문제 해결형 개발자
        </Text>

        <Text size="lg">
          빠르게 변화하는 시장 흐름에 민감하게 반응하며,{" "}
          <strong>최신 기술을 빠르게 습득하고 실무에 적용</strong>합니다.
          반복적이고 구조화된 작업은 AI 툴과 외부 API로 자동화해 효율을
          극대화하고, 복잡한 로직이나{" "}
          <strong>
            성능 병목 등 AI가 해결할 수 없는 문제는 직접 분석해 해결
          </strong>
          합니다. 자동화와 엔지니어링 사이의 균형을 통해,{" "}
          <strong>단순 구현을 넘어 구조적 문제를 해결하는 개발자</strong>
          입니다.
          <br></br>
          <br></br>이전 직장에서{" "}
          <strong>
            MCP와 웹 크롤링 기술을 결합하여 최신 기술 정보를 실시간으로 받아오는
            시스템을 구축
          </strong>
          했습니다. MCP는 웹 크롤링의 효율성을 높이는 역할을 하였고, 이를 통해
          Cursor 검색에서 제공되는 예전 데이터를 대체하고, 더 정확하고 관련성
          높은 정보를 제공하도록 개선했습니다. 이로 인해 업무 효율성과 속도가
          크게 향상되었으며, 팀원들의 업무 능률을 높이는 데 중요한 기여를
          했습니다.
        </Text>
        <br></br>
        <br></br>
        <Text size="xl" margin={"15px"}>
          🧠 문제 해결에 집중하는 소프트웨어 엔지니어
        </Text>
        <Text size="lg" margin={"25px"}>
          단순히 코드를 작성하는 개발자가 아닌, 문제를 분석하고 최적의 해결책을
          구현하는 소프트웨어 엔지니어입니다.{" "}
          <strong>
            UI 구조나 렌더링 문제, 성능 이슈 등 복잡한 문제를 분석하고 직접 해결
          </strong>
          하는 데 집중합니다. 동시에,{" "}
          <strong>
            사내 리소스(인력, 시간, 기술력)를 기반으로 가장 적합한 해결 방안을
            모색
          </strong>
          하고 이를 적용하여 기술적 해결뿐만 아니라 효율적인 리소스 관리에도
          능숙합니다.{" "}
          <strong>
            기술적인 접근뿐만 아니라, 유연하게 변화하는 상황에 적응하고 문제를
            해결하는 능력을 갖춘 개발자
          </strong>
          로서, 팀과 조직의 목표 달성에 기여합니다.
        </Text>
      </div>
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
