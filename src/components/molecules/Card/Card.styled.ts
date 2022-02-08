import styled from 'styled-components/macro';

export const CardWrapper = styled.div`
  width: 100%;
  padding: 24px 16px;
  border: 1px solid ${({ theme }) => theme.color.borderGray};
  transition: all ease 0.1s;
  &:hover {
    outline: 2px solid ${({ theme }) => theme.color.primaryBlue};
  }
  border-radius: 4px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 344px;
  } ;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 4px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.strong};
  line-height: ${({ theme }) => theme.lineHeight.m};
`;

export const Client = styled.h4`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.semiStrong};
  line-height: ${({ theme }) => theme.lineHeight.s};
`;

export const Due = styled.div`
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${({ theme }) => theme.lineHeight.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  margin-bottom: 16px;
  color: ${({ theme }) => theme.color.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${({ theme }) => theme.lineHeight.s};
  flex-wrap: wrap;
  margin-bottom: 8px;
`;

export const ContentTitle = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  width: 70px;
  margin-right: 32px;
  // flex: 1.2 1;
`;

export const Contents = styled.div`
  color: ${({ theme }) => theme.color.black};
  font-weight: ${({ theme }) => theme.fontWeight.strong};
  font-weight: 700;
  // flex: 3 1;
`;

export const ButtonWrapper = styled.div`
  margin-top: 38px;
`;
