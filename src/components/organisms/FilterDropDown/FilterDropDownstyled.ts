import styled from 'styled-components/macro';
import FilterDropProps from './FilterDropDown.type';

export const DropDown = styled.ul`
  padding: 17px 12px;
  width: 130px;
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 4px;
  display: none;
  position: absolute;
  background: ${props => props.theme.color.white};
  z-index: 1;
  top: 36px;
`;
export const DropDownWrap = styled.div`
  position: relative;
  background: white;
  display: inline-block;
  box-sizing: content-box;
  padding-bottom: 10px;
  height: 32px;
  &:hover ${DropDown} {
    display: block;
  }
`;

export const Button = styled.button<Pick<FilterDropProps, 'category'>>`
  width: ${props => (props.category === '가공방식' ? '98px' : '76px')};
  background: none;
  height: 32px;
  display: flex;
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: 4px;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
    border: 1px solid ${props => props.theme.color.primaryBlue};
  }
  span {
    font-size: ${props => props.theme.fontSize.xs};
    margin-right: 12px;
  }
`;
