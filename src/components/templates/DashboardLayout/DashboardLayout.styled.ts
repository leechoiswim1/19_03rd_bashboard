import styled from 'styled-components/macro';

export const Layout = styled.div`
  margin: 24px 20px 20px;
  display: flex;
  flex-direction: column;
`;

export const DummyCard = styled.article`
  width: 100%;
  height: 344px;
  background-color: #444;
`;

export const RequestCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
