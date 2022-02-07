import React, { ReactElement } from 'react';
import { SCProps } from 'types/props';
import SampleProps from './Sample.type';
import * as S from './Sample.styled';

const Sample = ({ className, children, sampleId, title }: SCProps<SampleProps>): ReactElement => (
  <S.Sample className={className}>
    <span>{sampleId}</span>
    <span>{title}</span>
    {children}
  </S.Sample>
);

Sample.defaultProps = {
  title: 'title',
};

export default Sample;
