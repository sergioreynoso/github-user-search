import React, { ReactNode } from "react";
import styled from "styled-components";
import { ROUND_CORNERS, ANIMATION_TIME } from "../../utils/constants";

type CardProps = {
  className?: string;
  children: ReactNode;
};

export default function Card({ className, children }: CardProps) {
  return <Wrapper className={className}>{children}</Wrapper>;
}

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: var(--clr-card-bg);
  border-radius: ${ROUND_CORNERS.large};
  box-shadow: var(--clr-card-shadow);
  transition: background-color ${ANIMATION_TIME.med} ease-in-out;
`;
