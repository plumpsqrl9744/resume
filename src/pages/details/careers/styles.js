import styled from "styled-components";

export const CompanyWithPosition = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 30px;
`;

export const CompanyIntro = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

export const CareerSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 80px;
`;

export const IntroProject = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;

  > a,
  > div:first-child {
    margin-bottom: 40px;
  }

  .project-description {
    margin-bottom: 50px;

    .description-title {
      margin-bottom: 15px;
    }

    .description-content {
      margin-bottom: 20px;
    }
  }

  .achievements-section {
    margin-bottom: 50px;

    .section-title {
      margin-bottom: 30px;
    }

    .achievement-item {
      margin-bottom: 30px;

      .achievement-title {
        margin-bottom: 20px;
      }
    }

    ul {
      padding-left: 20px;
    }

    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 25px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .stack-section {
    .section-title {
      margin-bottom: 30px;
    }

    ul {
      padding-left: 20px;
    }

    li {
      position: relative;
      padding-left: 25px;
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
