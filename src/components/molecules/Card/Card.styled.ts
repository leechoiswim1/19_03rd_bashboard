import styled from 'styled-components/macro';

export const Card = styled.div`
    width: 100%;
  padding: 24px 16px;
  margin: 0 8px;
  border-radius: 4px;
  border: 1px solid
    &:hover{
        border: 2px solid ${({ theme }) => theme.color.primaryBlue}
    }
`;
