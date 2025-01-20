import React from "react";
import Text from "../../component/atom/Text";
import styled from "styled-components";

export default function Career() {
  return (
    <CareerSection>
      <CompanyWithPosition>
        <Text size="3xl" bold={true}>
          Comint.co
        </Text>
        <Text size="3xl">/ Frontend Developer</Text>
      </CompanyWithPosition>
      <div>
        <Text size="xl" margin={"30px"}>
          2022.07 ~ 2023.02 / 2023.05 ~ 2023.07 (9 months)
        </Text>
      </div>
      <IntroProject>
        <Text
          size="3xl"
          bold={true}
          margin={"25px"}
          href="https://www.matchwhale.com/"
        >
          MatchWHALE (Service / RMS / CMS) <i class="bi bi-link-45deg "></i>
        </Text>

        <ul>
          <Text size="xl" bold={true} margin={"10px"}>
            MatchWHALE Service
          </Text>
          <Text size="lg" margin={"10px"}>
            * 국내 도서를 4개 번역 언어로 소개하는 서비스
          </Text>
          <Text size="lg" margin={"20px"}>
            * AI 기반 'BookDNA' 분석(감정, 난이도, 연령 데이터)을 제공 하는
            맞춤형 독서 플랫폼
          </Text>
          <Text size="xl" bold={true} margin={"10px"}>
            RMS (Rights Management System)
          </Text>
          <Text size="lg" margin={"20px"}>
            * 국내 전자도서와 오디오북 해외 유통 및 저작권 라이센싱을 담당하는
            글로벌 플랫폼
          </Text>
          <Text size="xl" bold={true} margin={"10px"}>
            CMS (Contents Management System, Admin)
          </Text>
          <Text size="lg" margin={"70px"}>
            * 국내 도서 서지 정보의 표준화를 위한 통일화 작업을 추진하는 데이터
            관리 및 유통 플랫폼
          </Text>
          <Text size="2xl" bold={true} margin={"30px"}>
            Achievements
          </Text>
          <Text size="xl" margin={"20px"}>
            • Class 상속을 통해 컴포넌트들을 공통으로 정의 및 적용
          </Text>
          <li>
            <Text size="lg" margin={"10px"}>
              <strong>Class 기반 Prototype 확장을 활용</strong>하여 Utils.js
              파일의{" "}
              <strong>
                최상위 클래스를 기반으로 상속을 통해 하위 클래스를 개발
              </strong>
              함으로써 <strong>코드 재사용성을 극대화</strong>
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"20px"}>
              반복되는 코드 블록을 제거, 개발 생산성 향상,{" "}
              <strong>코드 재사용성 85.71% 상승</strong>
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"40px"}>
              생성한 함수를 정리해 지속적이고 <strong>체계적인 유지보수</strong>
              를 통해 코드 최적화 달성
            </Text>
          </li>
          <Text size="xl" margin={"20px"}>
            • MatchWhale 다국어 번역 기능 개발
          </Text>
          <li>
            <Text size="lg" margin={"40px"}>
              백엔드 API에서 수신한 번역 데이터를{" "}
              <strong>HTML의 data-value 속성에 동적으로 적용</strong>하여{" "}
              <strong>다국어 지원 웹 애플리케이션의 번역 시스템</strong>을 구현
            </Text>
          </li>
          <Text size="xl" margin={"20px"}>
            • MatchWhale 서비스 초기 개발
          </Text>
          <li>
            <Text size="lg" margin={"20px"}>
              메인, 로그인, 회원가입, 도서 상세, 뉴스, 공지, 문의 기능을{" "}
              <strong>처음부터 끝까지 설계하고 구현</strong>
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"40px"}>
              서비스의 <strong>초기 단계부터 최종 실행까지 전담</strong>하며,{" "}
              <strong>사용자 경험을 최적화하기 위해</strong> 회원가입 흐름, 기능
              설계 등을 <strong>전략적으로 기획</strong>
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"40px"}>
              <strong>MatchWhale 서비스의 전체 디자인 구현</strong>
            </Text>
          </li>
          <Text size="xl" margin={"20px"}>
            • GitHub Action과 Telegram 연동 자동화 시스템 구축
          </Text>
          <li>
            <Text size="lg" margin={"20px"}>
              GitHub Action의 푸시 이벤트를 트리거로 설정해 Telegram으로 실시간
              알림을 전송,{" "}
              <strong>코드 변경사항 및 작업 히스토리를 즉시 확인</strong>할 수
              있는 효율적인 개발 환경을 구축
            </Text>
          </li>
          <li>
            <Text size="lg" margin={"70px"}>
              개발 팀의 실시간 협업을 향상시키고, 코드 푸시 및 업데이트 알림을
              통해 <strong>CI/CD 워크플로우의 가시성을 개선</strong>
            </Text>
          </li>

          <Text size="2xl" bold={true} margin={"30px"}>
            Stack
          </Text>
          <li>
            <Text size="xl" margin={"20px"}>
              <strong>Languages:</strong> PHP (Laravel), JavaScript
            </Text>
          </li>
          <li>
            <Text size="xl" margin={"20px"}>
              <strong>Libraries:</strong> jQuery, Bootstrap
            </Text>
          </li>
          <li>
            <Text size="xl" margin={"20px"}>
              <strong>Versioning:</strong> GitHub Actions
            </Text>
          </li>
          <li>
            <Text size="xl" margin={"40px"}>
              <strong>Collaboration:</strong> Notion, Figma, Slack
            </Text>
          </li>
        </ul>
      </IntroProject>
    </CareerSection>
  );
}

const CompanyWithPosition = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`;

const CareerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const IntroProject = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  ul,
  ol {
    padding-inline-start: 1.5em;
  }
  ul {
    list-style-type: none; /* 기본 점 제거 */
    padding-left: 10px; /* 왼쪽 여백 */
  }
  li {
    position: relative; /* 기호 위치를 위한 상대 위치 */
    padding-left: 25px; /* 텍스트와 기호 간 간격 */
    margin-left: 25px; /* 텍스트와 기호 간 간격 */
  }
  li::before {
    content: "-"; /* '-' 기호 추가 */
    position: absolute; /* 텍스트 앞 고정 */
    left: 0; /* 왼쪽 정렬 */
    color: var(--font-color-white); /* 기호 색상 설정 */
  }
`;
