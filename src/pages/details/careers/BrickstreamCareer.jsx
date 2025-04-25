import React from "react";
import CareerItem from "./CareerItem";

export const BrickstreamCareer = () => {
  const config = {
    company: "Brickstream",
    position: "Frontend Developer",
    period: "2025.02 ~ 2024.05 (3 months)",
    projects: [
      {
        title: "MBX NFT",
        subtitle: "(Netmarble NFT Marketplace)",
        projectLink: "https://nft.marblex.io/",
        description: [
          {
            content: "* 넷마블 게임 콘텐츠 NFT 마켓플레이스 개발",
            contentSize: "xl",
            margin: "70px",
          },
        ],
        achievements: [
          {
            title: "NFT 마켓플레이스 유지보수 및 기능 개선",
            items: [
              {
                content:
                  "기획 및 디자인 문서 기반의 <strong>기존 기능 유지보수</strong> 및 디자인 문서 기준으로 UI 요소 정비 및 스타일 정합성 확보",
                margin: "20px",
              },
              {
                content:
                  "1차, 2차, 3차 QA 검수에 따라 발견된 이슈 해결 및 <strong>UI/UX 품질 개선 작업 수행</strong>",
                margin: "50px",
              },
            ],
          },
        ],
        stacks: [
          {
            category: "Frontend",
            items: "Next.js, TypeScript, Zustand",
          },
          {
            category: "Tools",
            items: "Figma, Notion",
          },
        ],
      },
      {
        title: "Storynation",
        subtitle: "(AI Character Chat Platform)",
        projectLink: "https://www.storynation.co.kr/",
        description: [
          {
            content: "* AI 기반 캐릭터 채팅 플랫폼",
            contentSize: "lg",
            margin: "70px",
          },
        ],
        achievements: [
          {
            title: "AI 기반 개발 자동화 시스템 구축",
            items: [
              {
                content:
                  "페이지 전체 <strong>UI/UX 디자인 및 프론트엔드 개발</strong>",
                margin: "10px",
              },
              {
                content:
                  "<strong>Figma API</strong>와 <strong>AI Cursor</strong> 연동을 통해 Figma에서 생성한 와이어프레임을 트리 구조 데이터 및 이미지로 자동 변환하여 마크업 속도 대폭 향상",
                margin: "20px",
              },
              {
                content:
                  "기존 프로젝트 문제점을 분석 후, 팀과 협력하여 <strong>최적화된 폴더 구조</strong> 설계 및 적용, 코드 관리의 효율성 및 유지보수성 향상",
                margin: "40px",
              },
            ],
          },
        ],
        stacks: [
          {
            category: "Frontend",
            items: "Next.js, TypeScript, TailwindCSS",
          },
          {
            category: "State Management",
            items: "React Query, Zustand",
          },
          {
            category: "API Integration",
            items: "Figma API",
          },
        ],
      },
      {
        title: "Plastic Hero Bridge",
        projectLink: "https://bridge.plasticherocoin.com/",
        description: [
          {
            content: "* 플라스틱 재활용 관련 암호화폐 스왑 플랫폼",
            contentSize: "lg",
            margin: "70px",
          },
        ],
        achievements: [
          {
            title: "Web3 기반 프론트엔드 개발",
            items: [
              {
                content:
                  "페이지 전체 <strong>디자인 및 프론트엔드 개발</strong>",
                margin: "10px",
              },
              {
                content:
                  "<strong>MetaMask SDK</strong> 연동 및 반응형 작업 구현",
                margin: "70px",
              },
            ],
          },
        ],
        stacks: [
          {
            category: "Frontend",
            items: "Next.js, TypeScript, TailwindCSS, Web3.js",
          },
          {
            category: "Styling",
            items: "TailwindCSS",
          },
        ],
      },
      {
        title: "브릭스트림 메인 웹",
        subtitle: "(Corporate Website)",
        description: [
          {
            content:
              "* 블록체인 및 Web3 기술을 기반으로 하는 회사의 소개와 비전을 제공하는 반응형 웹사이트",
            contentSize: "lg",
            margin: "70px",
          },
        ],
        achievements: [
          {
            title: "웹사이트 전체 개발 및 메일 발송 프로세스 효율화",
            items: [
              {
                content:
                  "블록체인 및 Web3 회사 컨셉에 맞춰 전체 페이지의 <strong>디자인 및 기획</strong>을 진행하고, <strong>반응형 웹사이트 개발</strong>",
                margin: "10px",
              },
              {
                content:
                  "<strong>Google Mail API</strong>를 활용한 메일 발송 프로세스 효율화",
                margin: "20px",
              },
              {
                content:
                  "개인 노션 페이지를 활용한 체계적인 기획 문서화 및 프로젝트 관리",
                margin: "40px",
              },
            ],
          },
        ],
        stacks: [
          {
            category: "Frontend",
            items: "Next.js, TypeScript, TailwindCSS",
          },
          {
            category: "API Integration",
            items: "Google Mail API",
          },
          {
            category: "Tools",
            items: "Notion, Figma",
          },
        ],
      },
    ],
  };

  return <CareerItem {...config} />;
};
