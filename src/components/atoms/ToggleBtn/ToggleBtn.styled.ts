import styled from 'styled-components/macro';
import { ToggleClick } from './ToggleBtn.type';

export const Wrapper = styled.button`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 50px;
  border: 0;
  background: none;
`;

export const ToggleBar = styled.div<ToggleClick>`
  position: relative;
  ${props => (props.click ? 'right: 0;' : 'left: 0;')}
  width: 34px;
  height: 14px;
  border-radius: 100px;
  background: ${props => (props.click ? '#bbdefb' : '#c2c2c2')};
`;

export const ToggleCircle = styled.div<ToggleClick>`
  position: absolute;
  left: ${props => (props.click ? '30px' : '0')};
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
  background: ${props => (props.click ? props.theme.color.primaryBlue : '#f5f5f5')};
  transition: all 0.3s ease-in-out;
`;
