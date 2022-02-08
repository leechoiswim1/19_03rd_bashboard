import styled from 'styled-components/macro';
import { ToggleClick } from './ToggleBtn.type';

export const Wrapper = styled.button`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  position: absolute;
  top: -9999px;
  left: -9999px;
`;

export const ToggleBar = styled.div<ToggleClick>`
  ${props => (props.click ? 'right:0' : 'left:0')}
  position: relative;
  width: 34px;
  height: 14px;
  border-radius: 100px;
  background: #c2c2c2;
`;

export const ToggleCircle = styled.div<ToggleClick>`
  position: absolute;
  bottom: 0px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  background: #f5f5f5;
`;
