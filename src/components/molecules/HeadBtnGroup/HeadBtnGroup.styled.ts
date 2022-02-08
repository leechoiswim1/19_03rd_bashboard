import styled from 'styled-components/macro';
import HeadBtnProps from 'components/atoms/HeadBtn/HeadBtn.type';

export const Wrapper = styled.section<HeadBtnProps>`
  width: 210px;
  height: 20px;
  color: white;
  display: ${props => (props.path === 'sidebar' ? 'block' : 'flex')};
  justify-content: space-between;
  line-height: 20px;
  @media (max-width: 480px) {
    display: ${props => props.path === 'Nav' && 'none'};
  }
`;

export const Divider = styled.section`
  width: 2px;
  background: white;
  height: 16px;
  margin: auto;
`;
