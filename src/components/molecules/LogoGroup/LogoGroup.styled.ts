import styled from 'styled-components/macro';
import { ReactComponent as Hambuger } from 'assets/images/hamburger.svg';
import LogoGroupProps from './LogoGroup.type';

export const Wrapper = styled.div`
  display: flex;
`;

export const HamburgerWrap = styled.button`
  background: none;
  border: none;
  padding: 0px;
  cursor: pointer;
  display: block;
  margin: auto 19px auto 0px;
  ${props => props.theme.breakpoints.laptop} {
    display: none;
  }
`;

export const HambugerBtn = styled(Hambuger)<LogoGroupProps>`
  display: block;
`;
