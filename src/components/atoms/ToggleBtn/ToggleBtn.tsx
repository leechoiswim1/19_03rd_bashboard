import React, { ReactElement } from 'react';
import * as S from './ToggleBtn.styled';
import ToggleBtnProps from './ToggleBtn.type';

const ToggleBtn = ({ title, setToggled, clicked }: ToggleBtnProps): ReactElement => {
  const handleCilck = () => {
    // setToggled(!checked);
    console.log(!clicked);
  };
  return (
    <S.Wrapper onClick={handleCilck}>
      <S.ToggleBar click={clicked} />
      {/* <S.ToggleCircle /> */}
      {title}
    </S.Wrapper>
  );
};

export default ToggleBtn;
