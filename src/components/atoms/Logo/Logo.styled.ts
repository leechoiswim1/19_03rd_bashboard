import styled from 'styled-components/macro';
import LogoProps from './Logo.type';

export const Wrapper = styled.section<LogoProps>`
  width: 153px;
  color: ${props => (props.path === 'sidebar' ? '#2196F3' : 'white')};
  display: flex;
  align-items: center;
`;
export const Strong = styled.span<LogoProps>`
  font-weight: 900;
  font-size: ${props => (props.path === 'sidebar' ? '24px' : '20px')};
  line-height: 20px;
`;
export const Text = styled.span<LogoProps>`
  font-size: ${props => (props.path === 'sidebar' ? '18px' : '16px')};
  line-height: 20px;
  margin-left: 5px;
  @media (max-width: 480px) {
    display: ${props => props.path === 'sidebar' && 'none'};
  }
`;
