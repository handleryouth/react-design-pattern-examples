import { ReactNode } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{
  weight: number;
}>`
  flex: ${(props) => props.weight};
`;

export interface SplitScreenProps {
  children: ReactNode[];
  leftWeight?: number;
  rightWeight?: number;
}

export default function SplitScreen({
  children,
  leftWeight = 1,
  rightWeight = 1,
}: SplitScreenProps) {
  const [left, right] = children;
  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>

      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
}
