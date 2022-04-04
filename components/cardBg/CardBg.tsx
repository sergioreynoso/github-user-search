import React, { ReactNode } from "react";
import styled from "styled-components";
import {
  BREAK_POINTS as bp,
  ROUND_CORNERS as rc,
  ANIMATION_TIME as at,
} from "../../design-tokens";

const StyledCardBg = styled.section`
  padding: 1.5rem;

  background-color: var(--clr-card-bg);
  border-radius: ${rc.rc100};
  box-shadow: var(--clr-card-shadow);

  transition: background-color ${at.med} ease-in-out;
`;

export default function CardBg({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return <StyledCardBg className={className}>{children}</StyledCardBg>;
}
