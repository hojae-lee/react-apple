import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CreateSample } from '../reducer';
import Contents from './contents';

const Sample1 = () => {
  const dispatch = useDispatch();
  const name = 'Sample1';
  const desc = '첫번째 샘플 페이지입니다.';

  useEffect(() => {
    dispatch(CreateSample(name, desc));
  }, []);

  return (
    <Contents />
  );
};

export default Sample1;