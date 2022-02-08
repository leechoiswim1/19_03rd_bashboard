import styled from 'styled-components/macro';

export const ResetWrapper = styled.div`
  margin: auto 16px;
  display: flex;
  cursor: pointer;
`;

export const ResetTitle = styled.div`
  margin: 1px 12px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.primaryBlue};
`;
