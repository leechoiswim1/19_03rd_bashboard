import styled from 'styled-components/macro';

export const CardWrapper = styled.div`
    width: 100%;
  padding: 24px 16px;
  margin: 0 8px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.color.borderGray}
    &:hover{
        border: 2px solid ${({ theme }) => theme.color.primaryBlue}
    }
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.color.black};
  font-size: ${({ theme }) => theme.fontSize.m};
  line-height: ${({ theme }) => theme.lineHeight.m};
`;

export const Client = styled.h4`
  margin-bottom: 24px;
  font-size: ${({ theme }) => theme.fontSize.s};
  line-height: ${({ theme }) => theme.lineHeight.s};
`;

export const Due = styled.div`
  color: ${({ theme }) => theme.color.gray};
`;

export const ContentWrapper = styled.div`
  display: flex;
`;

export const ContentTitle = styled.div`
  color: ${({ theme }) => theme.color.gray};
`;

export const Contents = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-weight: 700;
`;
