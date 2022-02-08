import styled from 'styled-components/macro';
import { ReactComponent as Hambuger } from 'assets/images/hamburger.svg';

export const Wrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
  }
`;

export const HambugerBtn = styled(Hambuger)`
  display: none;
  @media (max-width: 768px) {
    display: block;
    margin: auto 19px auto 0px;
  }
`;
