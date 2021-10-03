/*
  Redux
  - 상태관리 라이브러리입니다.
  - props 를 깊은 depth 까지 전달하기 힘들거나, 전역 객체를 상태관리 해줄 때 용이하여 사용합니다.
  - Store 라는 공안에서 상태를 관리함.
  1. Action: 액션 객체
  2. Action Creator: 파라미터를 받아와 액션 객체 형태로 만들어주는 함수.
  3. Reducer: 이전 상태와 Action 을 받아. 새로운 state를 만드는 함수.
  4. dispatch: 액션을 발생 시켜 파라미터를 전달하여 새로운 상태를 만들어 줍니다.

  npm i redux
  npm i react-redux
*/

const CRATE_SAMPLE = 'CreateObj';

// init
const initState = {
  name: '',
  desc: ''
};

// action function
export const CreateSample = (name, desc) => {
  return {
    type: CRATE_SAMPLE,
    name,
    desc
  };
}

// Reducer
function rootReducer (state = initState, action) {
  switch (action.type) {
    case CRATE_SAMPLE:
      return {
        ...state,
        name: action.name,
        desc: action.desc
      };
    default:
      return state;
  }
}

export default rootReducer;