import React from "react";
import styled from "styled-components";
import Text from "../../component/atom/Text";

export default function Project() {
  return (
    <ProjectSection>
      <Text
        size="3xl"
        bold={true}
        href="https://www.lookattheweather.store/"
        margin={"20px"}
      >
        Look at the Weather <i class="bi bi-link-45deg "></i>
      </Text>
      <Text size="lg" margin={"10px"}>
        * 사용자의 실시간 위치 기반 날씨 정보를 바탕으로 최적화된 착장을
        추천하는 서비스
      </Text>
      <Text size="lg" margin={"50px"}>
        * 초기 버전에서 실제 유저 피드백을 반영하여 UI/UX 개선 및 성능 최적화
        진행
      </Text>
      <ul>
        <Text size="2xl" bold={true} margin={"30px"}>
          Contributions
        </Text>
        <Text size="xl" margin={"20px"}>
          • 차세대 이미지 형식(WebP) 적용을 통한 이미지 최적화
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>최대 5.4MB 크기</strong>의 기존 이미지를 포함해{" "}
            <strong>평균 1.2MB 사이즈</strong>의 이미지를{" "}
            <strong>WebP 형식으로 최적화</strong>하여,{" "}
            <strong>평균 103KB로 이미지 크기를 축소</strong>
            이로인해 <strong>최대 98.1%</strong>의 이미지 최적화를 달성
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            <strong>WebP 형식의 지원 여부를 체크하여 지원하지 않는</strong>{" "}
            브라우저에서는{" "}
            <strong>JPG, PNG 형식의 이미지를 자동으로 렌더링</strong>하도록 분기
            처리
          </Text>
        </li>

        <Text size="xl" margin={"20px"}>
          • React Query를 통한 무한 스크롤 성능 최적화
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>useInfiniteQuery 훅을 활용</strong>하여{" "}
            <strong>무한 스크롤의 성능을 최적화,</strong> 수많은 데이터가 쌓일
            때 <strong>DOM 축적으로 인한성능 저하를 방지</strong>
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            컴포넌트화하여{" "}
            <strong>재렌더링 최소화 및 효율적인 데이터 로딩을 구현,</strong>{" "}
            성능을 고려한 최적화된 무한 스크롤 환경 제공
          </Text>
        </li>

        <Text size="xl" margin={"20px"}>
          • Secure Cookie 기반 로그인 정보 처리 및 Reissue 구현
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            보안 강화를 위해 로그인 정보를{" "}
            <strong>브라우저의 secure cookie에 저장</strong>하여,{" "}
            <strong>XSS 공격과 같은 보안 취약점으로부터 보호</strong>
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            access token의 만료 시 refresh token을 활용하여 reissue 기능을
            구현하여 세션 유지를 효율적으로 처리
          </Text>
        </li>
        <Text size="xl" margin={"20px"}>
          • 폰트 최적화 및 성능 개선
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            기존 TTF 폰트의 크기 문제를 해결하기 위해,{" "}
            <strong>리소스 크기가 작은 WOFF 형식으로 폰트를 최적화를</strong>
            진행, 브라우저 지원 여부에 따라 WOFF 및 WOFF2 형식을 우선적으로
            로드되도록 코드 수정
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            폰트 <strong>파일 크기를 13.5MB → 1.3KB로 축소,</strong>{" "}
            <strong>99.998% 성능 개선,</strong> 이로인해 페이지 로딩 속도가 크게
            향상되어 <strong>Lighthouse score 30점 상승</strong>
          </Text>
        </li>
        <Text size="xl" margin={"20px"}>
          • 프리로더 이미지 컴포넌트로 UX 개선
        </Text>
        <li>
          <Text size="lg" margin={"40px"}>
            이미지를 <strong>브라우저에 미리 저장</strong>하여 렌더링 시 캐시된
            이미지를 빠르게 표시하고, 이를 컴포넌트화하여 재사용성을 높임. 로딩
            속도와 깜빡임을 최소화하고 <strong>사용자 경험(UX)</strong>을 향상.
          </Text>
        </li>

        <Text size="2xl" bold={true} margin={"30px"}>
          Stack
        </Text>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Languages:</strong> JavaScript (React / TypeScript)
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Libraries:</strong> React Query, Zustand, Tailwind Css
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"150px"}>
            <strong>Collaboration:</strong> Notion, Figma
          </Text>
        </li>
      </ul>
      <Text
        size="3xl"
        bold={true}
        href="https://aston-martin-registration-s2pl.vercel.app/"
        margin={"20px"}
      >
        Aston Martin Registration<i class="bi bi-link-45deg"></i>
      </Text>
      <Text size="lg" margin={"50px"}>
        * Aston Martin 차량 소유주 대상 설문조사 및 등록 플랫폼
      </Text>
      <ul>
        <Text size="2xl" bold={true} margin={"30px"}>
          Contributions
        </Text>
        <Text size="xl" margin={"20px"}>
          • Google Spreadsheet 연동을 통한 데이터 자동화
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>Google Sheets API</strong>를 활용하여 설문조사 제출 시{" "}
            <strong>데이터가 자동으로 스프레드시트에 기록</strong>되도록 구현
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            데이터 수집 및 관리 프로세스를 자동화하여{" "}
            <strong>업무 효율성을 향상</strong>및 인적 오류 가능성을 제거
          </Text>
        </li>

        <Text size="xl" margin={"20px"}>
          • 반응형 설문조사 폼 UI/UX 디자인 및 개발
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            <strong>Figma를 활용한 전체 페이지 디자인</strong>을 직접 진행하고,{" "}
            <strong>모바일 환경을 고려한 반응형 레이아웃</strong> 구현
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            사용자 편의성을 고려한 <strong>단계별 설문 구조</strong>와{" "}
            <strong>직관적인 인터페이스</strong>를 설계하여 응답률 향상에 기여
          </Text>
        </li>

        <Text size="2xl" bold={true} margin={"30px"}>
          Stack
        </Text>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Frontend:</strong> Next.js, TypeScript, TailwindCSS
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Libraries:</strong> React Hook Form
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>API Integration:</strong> Google Sheets API
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"150px"}>
            <strong>Collaboration:</strong> Figma
          </Text>
        </li>
      </ul>
      <Text size="3xl" bold={true} margin={"20px"}>
        Frigo
      </Text>
      <Text size="lg" margin={"50px"}>
        * 냉장고 속 재료를 활용해 맞춤형 레시피를 추천하고 재고 관리를 돕는
        서비스
      </Text>
      <ul>
        <Text size="2xl" bold={true} margin={"30px"}>
          Contributions
        </Text>
        <Text size="xl" margin={"20px"}>
          • 검색 시 Debounce 방식을 적용해 검색 API 호출 최적화
        </Text>
        <li>
          <Text size="lg" margin={"40px"}>
            Debounce 방식을 적용해 키워드 검색마다 호출되던 API를{" "}
            <strong>
              초당 0.5회로 제한 API 호출을 최적화 (이벤트당 1회 → 초당 0.5회)
            </strong>
          </Text>
        </li>
        <Text size="xl" margin={"20px"}>
          • Atomic Design Pattern을 일부 적용하여 컴포넌트의 재사용성 향상
        </Text>
        <li>
          <Text size="lg" margin={"15px"}>
            Atomic Design Pattern의{" "}
            <strong>
              Atoms, Molecules, Organisms 단계를 적용하여 UI 구성 요소를
              체계적으로 설계
            </strong>
          </Text>
        </li>
        <li>
          <Text size="lg" margin={"40px"}>
            프로젝트의 요구사항에 맞춰 핵심 구조만 채택하여 유연하게 적용.
          </Text>
        </li>
        <Text size="xl" margin={"20px"}>
          • 소셜로그인(카카오, 구글) 구현
        </Text>
        <li>
          <Text size="lg" margin={"40px"}>
            OAuth2.0 인증/인가를 활용하여 카카오 및 구글 소셜로그인을 구현하고,
            간편한 회원가입 및 로그인을 통해 사용자 접근성을 개선
          </Text>
        </li>
        <Text size="xl" margin={"20px"}>
          • RESTful API를 설계 및 연동, 클라이언트 백엔드 간 데이터 통신을 구현
        </Text>
        <li>
          <Text size="lg" margin={"50px"}>
            RESTful 원칙을 준수하여 URL, 메서드(GET, POST, PUT, DELETE 등) 및
            응답 형식(JSON) 설계 및 적용
          </Text>
        </li>

        <Text size="2xl" bold={true} margin={"30px"}>
          Stack
        </Text>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Languages:</strong> JavaScript (React)
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"20px"}>
            <strong>Libraries:</strong> Redux, Redux-thunk, Styled-components
          </Text>
        </li>
        <li>
          <Text size="xl" margin={"40px"}>
            <strong>Collaboration:</strong> Notion, Slack, Figma
          </Text>
        </li>
      </ul>
    </ProjectSection>
  );
}

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;

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
    line-height: 30px;
  }
  li::before {
    content: "-"; /* '-' 기호 추가 */
    position: absolute; /* 텍스트 앞 고정 */
    left: 0; /* 왼쪽 정렬 */
    color: var(--font-color-white); /* 기호 색상 설정 */
  }
`;
