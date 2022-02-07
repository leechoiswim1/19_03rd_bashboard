import React, { ReactElement } from 'react';
import * as S from './Sample.styled';
import SampleProps from './Sample.type';

const Sample: React.FC<SampleProps> = ({ sampleId, title }: SampleProps): ReactElement => (
  <S.Sample>
    <span>{sampleId}</span>
    <span>{title}</span>
  </S.Sample>
);

Sample.defaultProps = {
  title: 'title',
};

export default Sample;
