/* eslint-disable */
import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Memo from './UseMemo';
import UseCall from './UseCallback';

const RHooks = () => {
  const [value, setValue] = useState(0);
  const [name, setName] = useState('name');
  const mount = useRef(false);
  const inputElem = useRef();

  const OnDecrease = () => {
    setValue(value - 1);
  };

  const OnCustom = () => {
    setValue(value => {
      if (value === 10) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  useEffect(() => {
    console.log('mount!');

    console.log(name, 'update!');

    // tip: 처음 마운트 될 때 mount.current 가 false 이기 때문에 if문 안을 탄 뒤 else 에서 특정 값이 바뀔때만 타도록 원하는 코드를 실행 할 수 있음.
    if (!mount.current) {
      mount.current = true;
      console.log(mount);
    } else {
      // 원하는 로직.
      inputElem.current.focus();
    }

    return () => {
      console.log('unmount!');
    }
  }, [name]);

  return (
    <>
      <div style={ { textAlign:'center' } }>
        <h2>Hooks (useState, useEffect, useRef)</h2>
        <div>
          <p>{ value }</p>
          <button onClick={ () =>  setValue(value + 1)}>1씩 증가</button>
          <button onClick={ OnDecrease }>1씩 감소</button>
          <button onClick={ OnCustom }>커스텀</button>
        </div>
        <div>
          <p>{ name }</p>
          <button onClick={ () => setName('new Name')}>new Name</button>
        </div>
        <div>
          <input
            name="name"
            placeholder="이름"
            defaultValue={ name }
            ref={ inputElem }
          />
        </div>
        <hr/>
        <Memo />
        <hr/>
        <UseCall />
      </div>
    </>
  )
}

export default RHooks;