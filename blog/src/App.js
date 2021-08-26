/* eslint-disable */
import React, { useState, useEffect } from 'react';
const App = () => {
  return (
    <div className="App">
      <input id="content" />
      <button onClick={ () => { reLoadData() } }>조회</button>
      <div className="list">
        <IBSheet8 id="sheet" el="sheetDiv" options={ options } />
      </div>
    </div>
  );
}

export default App;
