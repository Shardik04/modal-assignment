import styled, { keyframes } from 'styled-components';

const AnimateTop = keyframes`
  from {top:-300px; opacity:0}
  to {top:0; opacity:1}
`;

export const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: all 0.3s ease-in-out;
  overflow: auto;
  pointer-events: ${(props) => (props.isOpen ? 'visible' : 'none')};
  padding-top: 100px;
  z-index: 100;
`;

export const ModalContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: #fff;
  transition: all 0.3s ease-in-out;
  max-width: 90vw;
  max-height: 90vh;
  margin: 10px;
  position: relative;
  animation: ${AnimateTop} 0.4s;
  margin: 0 auto;
`;
