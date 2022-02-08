import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import SampleProps from './Sample.type';
import * as S from './Sample.styled';

const Sample = ({
  className,
  children,
  sampleId,
  title,
  primary,
}: SCProps<SampleProps>): ReactElement => (
  <S.Sample className={className} primary={primary}>
    <span>{sampleId}</span>
    <span>{title}</span>
    {children}
  </S.Sample>
);

Sample.defaultProps = {
  title: 'title',
  primary: false,
};

export default Sample;
