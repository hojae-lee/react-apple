import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { CreateSample } from '../reducer';
import Contents from './contents';

const Sample2 = () => {
  const dispatch = useDispatch();
  const name = 'Sample2';
  const desc = '두번째 샘플 페이지입니다.';

  useEffect(() => {
    dispatch(CreateSample(name, desc));
  }, []);

  return (
    <Contents />
  );
};

export default Sample2;