/* eslint-disable */
import React, { useState, useEffect } from 'react';
import loader from '@ibsheet/loader'
import IBSheet8 from "./components/Create";

const App = () => {

  let [data, dataState] = useState([{"sName": "흑흑"}]);
  let [state, setState] = useState("noRender");

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
    ],
    Events: {
      onRenderFirstFinish: function (evt) {
        setState("Render");
        evt.sheet.loadSearchData(data);
      }
    }
  };

  useEffect(() => {
      loadSearchData();
  }, [data]);

  const loadSearchData = () => {
    // 시트객체가 만들어 졌으면 이벤트 매핑.
    // sheetEventMapping();
    if (state === "Render") {
      // 처음 조회시에는 안타도록.
      sheet.loadSearchData(data);
    }
  };

  const sheetEventMapping = () => {
    sheet.bind("onFocus", onFocus);
  }

  const onFocus = (evt) => {
    console.log("onFocus", evt);
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
