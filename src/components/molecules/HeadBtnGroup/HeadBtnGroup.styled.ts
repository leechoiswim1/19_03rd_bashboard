import styled from 'styled-components/macro';

export const Wrapper = styled.section`
  width: 210px;
  height: 20px;
  color: white;
  display: flex;
  justify-content: space-between;
  line-height: 20px;
  @media (max-width: 480px) {
    display: none;
  }
`;

export const Divider = styled.section`
  width: 2px;
  background: white;
  height: 16px;
  margin: auto;
`;
