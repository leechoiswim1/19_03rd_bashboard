import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
`;
export const NavBar = styled.div`
  width: 100%;
  height: 44px;
  padding: 10px 20px;
  background: ${props => props.theme.color.navblue};
  display: flex;
  justify-content: space-between;
  ${props => props.theme.breakpoints.laptop} {
    height: 70px;
    padding: 25px 40px;
  }
`;
