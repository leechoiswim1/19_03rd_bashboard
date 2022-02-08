import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  width: 100%;
`;
export const NavBar = styled.div`
  width: 100%;
  height: 70px;
  background: #1565c0;
  padding: 25px 40px;
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    height: 44px;
    padding: 10px 20px;
  }
`;
