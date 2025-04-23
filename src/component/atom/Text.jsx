import React from "react";
import styled from "styled-components";

const fontSizes = {
  sm: "12px",
  md: "16px",
  lg: "20px",
  xl: "24px",
  "2xl": "26px",
  "3xl": "32px",
  "3.5xl": "50px",
  "4xl": "70px",
  huge: "90px",
};

export default function Text({
  children,
  bold = false,
  size = "md",
  margin,
  isTitle = false,
  href,
  dangerouslySetInnerHTML,
}) {
  if (dangerouslySetInnerHTML) {
    return (
      <StyledText
        as={href ? "a" : "div"}
        href={href}
        bold={bold}
        size={size}
        margin={margin}
        isTitle={isTitle}
        target="_blank"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
    );
  }

  return (
    <StyledText
      as={href ? "a" : "div"}
      href={href}
      bold={bold}
      size={size}
      margin={margin}
      isTitle={isTitle}
      target="_blank"
    >
      {children}
    </StyledText>
  );
}

const StyledText = styled.span`
  font-size: ${({ size }) => fontSizes[size] || fontSizes.md};
  color: ${({ isTitle }) =>
    isTitle ? "var(--primary-color)" : "var(--font-color-white)"};
  font-weight: ${({ bold }) => (bold ? 600 : 300)};
  margin-bottom: ${({ margin }) => (margin ? margin : 0)};
  transition: color 0.2s ease;
  line-height: 1.6;

  ${({ size }) =>
    (size === "3xl" || size === "2xl") &&
    `
  `}

  &:hover {
    color: ${({ href, isTitle }) =>
      isTitle
        ? "var(--primary-color)"
        : href
        ? "var(--font-hover-color)"
        : "var(--font-color-white)"};
  }
`;
