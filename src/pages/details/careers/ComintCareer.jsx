import React from "react";
import CareerItem from "./CareerItem";

export const ComintCareer = () => {
  const config = {
    company: "Comint.co",
    position: "Frontend Developer",
    period: "2022.07 ~ 2023.02 / 2023.05 ~ 2023.07 (9 months)",
    projects: [
      {
        title: "MatchWHALE",
        subtitle: "(Service / RMS / CMS)",
        projectLink: "https://www.matchwhale.com/",
        description: [
          {
            title: "MatchWHALE Service",
            contentSize: "lg",
          },
          {
            content:
              "* 국내 도서를 4개 번역 언어하고, AI 기반 분석 데이터를 제공 하는 독서 플랫폼",
            contentSize: "lg",
            margin: "20px",
          },
          {
            title: "RMS (Rights Management System)",
            contentSize: "lg",
          },
          {
            content:
              "* 국내 전자도서와 오디오북 해외 유통 및 저작권 라이센싱을 담당하는 글로벌 플랫폼",
            contentSize: "lg",
            margin: "70px",
          },
        ],
        achievements: [
          {
            title: "Class 상속을 통해 컴포넌트들을 공통으로 정의 및 적용",
            items: [
              {
                content:
                  "<strong>Class 기반 Prototype 확장을 활용</strong>하여 Utils.js 파일의 <strong>최상위 클래스를 기반으로 상속을 통해 하위 클래스를 개발</strong>함으로써 <strong>코드 재사용성을 극대화</strong>",
                margin: "10px",
              },
              {
                content:
                  "반복되는 코드 블록을 제거, 개발 생산성 향상, <strong>코드 재사용성 85.71% 상승</strong>",
                margin: "20px",
              },
              {
                content:
                  "생성한 함수를 정리해 지속적이고 <strong>체계적인 유지보수</strong>를 통해 코드 최적화 달성",
                margin: "40px",
              },
            ],
          },
          {
            title: "• MatchWhale 다국어 번역 기능 개발",
            items: [
              {
                content:
                  "백엔드 API에서 수신한 번역 데이터를 <strong>HTML의 data-value 속성에 동적으로 적용</strong>하여 <strong>다국어 지원 웹 애플리케이션의 번역 시스템</strong>을 구현",
                margin: "40px",
              },
            ],
          },
          {
            title: "• MatchWhale 서비스 초기 개발",
            items: [
              {
                content:
                  "메인, 로그인, 회원가입, 도서 상세, 뉴스, 공지, 문의 기능을 <strong>처음부터 끝까지 설계하고 구현</strong>",
                margin: "20px",
              },
              {
                content:
                  "서비스의 <strong>초기 단계부터 최종 실행까지 전담</strong>하며, <strong>사용자 경험을 최적화하기 위해</strong> 회원가입 흐름, 기능 설계 등을 <strong>전략적으로 기획</strong>",
                margin: "40px",
              },
              {
                content:
                  "<strong>MatchWhale 서비스의 전체 디자인 구현</strong>",
                margin: "40px",
              },
            ],
          },
          {
            title: "• GitHub Action과 Telegram 연동 자동화 시스템 구축",
            items: [
              {
                content:
                  "GitHub Action의 푸시 이벤트를 트리거로 설정해 Telegram으로 실시간 알림을 전송, <strong>코드 변경사항 및 작업 히스토리를 즉시 확인</strong>할 수 있는 효율적인 개발 환경을 구축",
                margin: "20px",
              },
              {
                content:
                  "개발 팀의 실시간 협업을 향상시키고, 코드 푸시 및 업데이트 알림을 통해 <strong>CI/CD 워크플로우의 가시성을 개선</strong>",
                margin: "70px",
              },
            ],
          },
        ],
        stacks: [
          {
            category: "Languages",
            items: "PHP (Laravel), JavaScript",
          },
          {
            category: "Libraries",
            items: "jQuery, Bootstrap",
          },
          {
            category: "Versioning",
            items: "GitHub Actions",
          },
          {
            category: "Collaboration",
            items: "Notion, Figma, Slack",
          },
        ],
      },
    ],
  };

  return <CareerItem {...config} />;
};
