import styled, { css } from 'styled-components/macro';
import { ReactComponent as Office } from 'assets/images/office.svg';
import HeadBtnProps from './HeadBtn.type';

export const Wrapper = styled.section<HeadBtnProps>`
  height: 20px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: ${props => props.path === 'sidebar' && '24px'};
`;
export const Text = styled.span<HeadBtnProps>`
  ${props =>
    props.path === 'sidebar'
      ? css`
          font-size: 13px;
          color: black;
        `
      : css`
          font-size: 14px;
          color: white;
        `};
`;

export const OfficeIcon = styled(Office)`
  fill: ${props => (props.path === 'sidebar' ? 'black' : 'white')};
  margin-right: 8px;
`;
