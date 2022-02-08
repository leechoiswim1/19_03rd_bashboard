import styled from 'styled-components/macro';
import SidebarProps from './Sidebar.type';

export const Overlay = styled.div<SidebarProps>`
  display: ${props => (props.openSideMenu ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  background-color: rgba(0, 0, 0, 0.2);
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Wrapper = styled.div<SidebarProps>`
  width: 280px;
  height: 100%;
  position: absolute;
  background: white;
  top: 0;
  left: 0;
  visibility: ${props => (props.openSideMenu ? 'visible' : 'hidden')};
  transform: ${props => (props.openSideMenu ? 'translateX(0px)' : 'translateX(-100%)')};
  transition: transform 0.5s ease-in-out;
  @media (min-width: 769px) {
    display: none;
  }
`;

export const Header = styled.div`
  height: 44px;
  border-bottom: 2px solid #e5e5e5;
  box-sizing: border-box;
  padding: 16px 20px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding: 36px 32px;
`;
