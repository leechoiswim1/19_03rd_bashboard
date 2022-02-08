import styled from 'styled-components/macro';
import LogoProps from './Logo.type';

export const Wrapper = styled.section<LogoProps>`
  width: ${props => (props.path === 'sidebar' ? 'auto' : '153px')};
  color: ${props =>
    props.path === 'sidebar' ? props.theme.color.primaryBlue : props.theme.color.white};
  display: flex;
  align-items: center;
  line-height: ${props => props.theme.lineHeight.m};
`;
export const Strong = styled.span<LogoProps>`
  font-weight: 900;
  font-size: ${props => props.theme.fontSize.m};
  ${props => props.theme.breakpoints.laptop} {
    font-size: ${props => props.theme.fontSize.xl};
  }
`;
export const Text = styled.span<LogoProps>`
  margin-left: 5px;
  font-size: ${props => props.theme.fontSize.s};
  ${props => props.theme.breakpoints.laptop} {
    font-size: ${props => props.theme.fontSize.l};
  }
`;
