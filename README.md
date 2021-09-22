## branch

1. react-hooks-ibsheet  => ibsheet를 올린 뒤, react-hooks를 사용하여 데이터로드.
2. react-starter => react study

## React-Apple study

1. `npx create-react-app blog` 마법의 명령어 (react개발에 필요한 모든 파일 설치.)
2. `App.js`에서 시작하시면 됩니다. 메인 페이지
3. `npm start` || `yarn start`
4. `App.js => index.html` 파일에 박아넣고 있고, 그 행위는 `index.js`에서 하고 있습니다.
5. `src`: 소스 코드 보관실, `public`: static 파일 보관, `package.json`: 내가 설치한 라이브러리를 모아놓은 목록

### Redux

1. 상태관리 라이브러리 입니다.
2. 쓰는 이유: props 문법 귀찮을 때 사용, state 변경 상태 관리할 때 사용합니다.
3. 컴포넌트에서 선언한 문법을 다른 내부 컴포넌트에서 사용할라면 props로 전송하여 사용해야 합니다. 예를 들어 컴포넌트가 100개 있다고 하면, 일일히 props를 전송해줘야합니다.. 오우쉣... 그 때 Redux를 사용합니다.