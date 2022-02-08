/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components/macro';

export const CounselingBtn = styled.button`
  font-size: ${({ theme }) => theme.fontSize.xs};
  color: ${({ theme }) => theme.color.orange};
  padding: 2px 8px;
  border: 1px solid ${({ theme }) => theme.color.orange};
  border-radius: 12px;
  background-color: ${({ theme }) => theme.color.white};
`;
