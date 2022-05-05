import React from "react";
import styled from "styled-components";
import {
  BREAK_POINTS as bp,
  ANIMATION_TIME as at,
  COLORS as cl,
  ROUND_CORNERS as rc,
  FONT_SIZES as fs,
} from "../../constants";

export default function Stats({
  publicRepos,
  followers,
  following,
}: {
  publicRepos: number;
  followers: number;
  following: number;
}) {
  return (
    <StatsWrapper>
      <Table>
        <TableRow>
          <TableHeader>Repos</TableHeader>
          <TableHeader>Followers</TableHeader>
          <TableHeader>Following</TableHeader>
        </TableRow>
        <TableRow>
          <TableCell>{publicRepos}</TableCell>
          <TableCell>{followers}</TableCell>
          <TableCell>{following}</TableCell>
        </TableRow>
      </Table>
    </StatsWrapper>
  );
}

export const StatsWrapper = styled.div`
  background-color: var(--clr-bg);
  border-radius: ${rc.rc050};
  padding: 15px 15px;
  @media (min-width: ${bp.desktop}) {
    padding: 15px 32px;
  }
`;

const Table = styled.table`
  width: 100%;
  text-align: left;
`;

const TableHeader = styled.th`
  font-size: ${fs.fs040};
  font-weight: 400;
  @media (min-width: ${bp.desktop}) {
    font-size: ${fs.fs050};
  }
`;

const TableRow = styled.tr`
  display: grid;
  justify-items: center;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  @media (min-width: ${bp.desktop}) {
    justify-items: initial;
    gap: 0;
  }
`;

const TableCell = styled.td`
  font-size: ${fs.fs200};
  font-weight: 700;
  padding-block-start: 4px;

  @media (min-width: ${bp.desktop}) {
    font-size: ${fs.fs300};
  }
`;
