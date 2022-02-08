import styled from 'styled-components/macro';
import LogoProps from './Logo.type';

export const Wrapper = styled.section<LogoProps>`
  width: ${props => (props.path === 'sidebar' ? 'auto' : '153px')};
  color: ${props => (props.path === 'sidebar' ? '#2196F3' : 'white')};
  display: flex;
  align-items: center;
`;
export const Strong = styled.span<LogoProps>`
  font-weight: 900;
  font-size: ${props => (props.path === 'sidebar' ? '16px' : '24px')};
  line-height: 20px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const Text = styled.span<LogoProps>`
  line-height: 20px;
  margin-left: 5px;
  font-size: ${props => (props.path === 'sidebar' ? '14px' : '18px')};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
