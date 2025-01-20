import React from "react";
import styled from "styled-components";
import Text from "../../component/atom/Text";
import UndderDot from "../../component/atom/UndderDot";
import Image from "../../assets/Image";

export default function Profile() {
  return (
    <>
      <ProfileSection>
        <ImageWrap>
          <Image />
        </ImageWrap>
        <ContentSection>
          <Name>
            <Text size="4xl" bold={true} margin={"5px"}>
              구장우
            </Text>
            <UndderDot />
          </Name>
          <Text size="3.5xl" margin="15px" bold={true}>
            (jayden)
          </Text>
          <Text size="3xl" margin="45px" bold={true}>
            Frontend Developer
          </Text>
          <Text size="2xl" bold={true} isTitle={true} margin={"20px"}>
            Mail
          </Text>
          <Text size="xl" margin="30px" bold={true}>
            1997wkddn@gmail.com
          </Text>
          <Text size="2xl" bold={true} isTitle={true} margin={"20px"}>
            Phone
          </Text>
          <Text size="xl" bold={true}>
            010-4139-3486
          </Text>
        </ContentSection>
      </ProfileSection>
    </>
  );
}

const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 0 0 0;
`;
const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 0 20px;
`;

const Name = styled.div`
  display: flex;
  gap: 4px;
  align-items: flex-end;
`;

const ImageWrap = styled.div`
  background-color: #acacac;
  width: 310px;
  justify-content: center;
  height: 310px;
  border-radius: 50%;
  display: flex;
  overflow: hidden;
  margin-bottom: 40px;
`;
