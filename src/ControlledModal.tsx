import { ReactNode, useState } from "react";
import styled from "styled-components";

export interface ControlledModalProps {
  children: ReactNode;
  shouldShow: boolean;
  onClose: () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  margin: 10% auto;
  padding: 20px;
  width: 50%;
`;

export default function ControlledModal({
  children,
  shouldShow,
  onClose,
}: ControlledModalProps) {
  return (
    <>
      {shouldShow ? (
        <ModalBackground onClick={onClose}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={onClose}>Hide Modal</button>
            {children}
          </ModalBody>
        </ModalBackground>
      ) : null}
    </>
  );
}
