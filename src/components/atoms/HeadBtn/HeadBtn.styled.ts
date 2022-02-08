import styled from 'styled-components/macro';
import { ReactComponent as Office } from 'assets/images/office.svg';

export const Wrapper = styled.section`
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
export const Text = styled.span`
  font-size: 14px;
`;

export const OfficeIcon = styled(Office)`
  margin-right: 8px;
`;
