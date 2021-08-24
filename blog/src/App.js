/* eslint-disable */
import React, { useState, useEffect } from 'react';
import loader from '@ibsheet/loader'
import IBSheet8 from "./components/Create";

const App = () => {

  let [data, dataState] = useState([{"sName": "흑흑"}]);
  const options = {
    Cfg: {
      SearchMode: 0
    },
    Cols: [
      {
        Header: [
          '신청인',
          '신청인'
        ],
        Type: 'Text',
        Name: 'sName',
      },
      {
        Header: [
          '선택',
          '선택'
        ],
        Type: 'Bool',
        Name: 'check',
      },
      {
        Header: [
          '신청사유',
          '신청사유'
        ],
        Type: 'Enum',
        Name: 'Reason',
        ColMerge: 0,
        Enum: '|야근|주말특근|휴일특근',
        EnumKeys: '|01|02|03'
      },
      {
        Header: [
          '신청금액',
          '신청금액'
        ],
        Type: 'Int',
        Name: 'Qty',
      }
    ]
  };

  useEffect(() => {
    console.log("hi")
    // setTimeout(function () {
    // loadSearchData();
    // }, 1000)
  }, data);

  const loadSearchData = () => {
    sheetEventMapping();
    sheet.loadSearchData(data);
  };

  const sheetEventMapping = () => {
    sheet.bind("onRenderFirstFinish", onRenderFirstFinish);
  }

  const onRenderFirstFinish = (evt) => {
    console.log("onRenderFirstFinish");
    // evt.sheet.isFinished = true;
    // evt.sheet.loadSearchData(data);
  };

  // 대충 리로드...
  const reLoadData = () => {
    let array = sheet.getSaveJson(0);
    const obj = {
      sName: "test" + array.data.length
    };
    array.data.push(obj);
    dataState(array.data);
  }

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
