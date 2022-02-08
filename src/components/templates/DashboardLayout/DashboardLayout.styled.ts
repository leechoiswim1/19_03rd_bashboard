import styled from 'styled-components/macro';

export const Layout = styled.div`
  display: flex;
  max-width: 1130px;
  flex-direction: column;
  margin: 24px 20px 20px;

  ${props => props.theme.breakpoints.tablet} {
    margin: 40px 75px 60px;
  }

  ${props => props.theme.breakpoints.desktop} {
    margin: 40px auto 60px;
    padding: 0 75px;
  }
`;

export const DummyCard = styled.article`
  width: 100%;
  height: 344px;
  background-color: #444;
`;

export const HiddenDummyCard = styled(DummyCard)`
  opacity: 0;
  visibility: hidden;
`;

export const RequestCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${props => props.theme.breakpoints.tablet} {
    flex-direction: row;
    flex-wrap: wrap;
    > * {
      flex-basis: 366px;
      flex-grow: 1;
    }
  }
`;
