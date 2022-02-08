import styled from 'styled-components/macro';

export const Background = styled.div`
  position: fixed;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1000;
`;
export const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
  width: 280px;
  height: 100%;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
`;

export const Header = styled.div`
  height: 50px;
  border-bottom: 2px solid #e5e5e5;
  box-sizing: border-box;
  padding: 16px 20px;
`;
export const Text = styled.span`
  color: #2196f3;
  font-weight: 900;
`;
