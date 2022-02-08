import React, { ReactElement } from 'react';
import * as S from './ToggleBtn.styled';
import ToggleBtnProps from './ToggleBtn.type';

const ToggleBtn = ({ setToggled, clicked }: ToggleBtnProps): ReactElement => {
  const handleCilck = () => {
    setToggled(!clicked);
  };
  return (
    <S.Wrapper onClick={handleCilck}>
      <S.ToggleBar click={clicked} />
      <S.ToggleCircle click={clicked} />
    </S.Wrapper>
  );
};

export default ToggleBtn;
