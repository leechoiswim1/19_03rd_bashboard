import styled from 'styled-components/macro';

export const TitleHeader = styled.header`
  color: ${props => props.theme.color.black};
  > h2 {
    font-weight: 900;
    font-size: 20px;
    line-height: 32px;
  }
  > span {
    font-size: 16px;
    line-height: 24px;
  }
`;
