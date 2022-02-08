import styled from 'styled-components/macro';

export const Layout = styled.div`
  display: flex;
  max-width: 460px;
  flex-direction: column;
  margin: 24px 20px 20px;
  box-sizing: content-box;

  ${props => props.theme.breakpoints.tablet} {
    margin: 40px auto 60px;
  }

  ${props => props.theme.breakpoints.laptop} {
    margin: 40px 90px 60px;
    max-width: 1130px;
  }

  ${props => props.theme.breakpoints.desktop} {
    margin: 40px auto 60px;
    padding: 0 75px;
  }
`;

export const DummyCard = styled.article`
  width: 100%;
  min-height: 344px;
  background-color: #444;
`;

export const RequestCardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  ${props => props.theme.breakpoints.laptop} {
    grid-template-columns: repeat(2, 1fr);
  }

  ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Box = styled.div`
  display: flex;
  align-items: center;
`;

export const Text = styled.span`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.black};
`;
