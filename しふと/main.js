'use strict'

const table1 = document.getElementById('table1');

const cellWidth = 100;

const workMembers = [];
workMembers.push('浜田','松本','方正','田中','遠藤');

const ADOM = formDateData(getDatesOfMonth());
const setOfCellsForMath = [];  //計算用の二次配列



// generateXY(workMembers,ADOM);

// function generateXY(membersArray,datesArray){
//   for(let y = 0; y < datesArray.length; y++){
    
//     setOfCellsForMath[y] = [];

//     for(let x = 0; x < membersArray.length; x++){
//       const cellForMath = { num : 0,};
//       setOfCellsForMath[y][x] = cellForMath;

//     }
//   }
// }

function mainSystem(array){
  
  const weekdaysCount = 3;
  const weekendCount = 4;

  for(let y = 0; y < array.length; y++){
    for(let x =0; x < array[y].length; x++){
      

    }
  }



prepareCols(workMembers.length,workMembers)
prepareRows(ADOM.length,ADOM);


function getDatesOfMonth(){
  const date = new Date();   //今（今月の時間）

  date.setMonth(date.getMonth() + 1);   //翌月を求める。

  date.setDate(0);  //0を引数に指定すると前月の最終日が求まる ＝ 今月の日付の数であり、今月の最終日である

  console.log(date.getDate());  //これで今月の日付の数となる。

  return date;
}

function formDateData(dateClassObj){
  
  const lastDate = dateClassObj.getDate();
  const allDatesOfMonth = [];

  for(let i = lastDate; i > 0; i--){
    const element = dateClassObj.setDate(i);
    const eachDate = new Date(element);
    allDatesOfMonth.unshift(eachDate);   //日付を全て格納できるようになりました！やったー！
    console.log(allDatesOfMonth);

  }

  return allDatesOfMonth;
}

//かつ、土日は青赤でラインに印を入れます

function prepareRows(Leng,DateArray){
  //格納した日付分rowを用意しなければいけない
  const dayOfWeek =['(日)','(月)','(火)','(水)','(木)','(金)','(土)'];

  for(let i = 0; i < Leng; i++){
    
    const row = document.createElement('tr');
    document.getElementById('tbody').appendChild(row);
    
    const cell = row.insertCell(-1);
    
    const month = DateArray[i].getMonth() + 1;
    const date = DateArray[i].getDate();
    const day = dayOfWeek[DateArray[i].getDay()];

    highlightDays(DateArray[i],row);

    cell.textContent = month + '月' + date + '日' + day;
  }
}



function prepareCols(Leng,nameArray){ //メンバ分の列と見出しを確保
  for(let i = 0; i < Leng; i++){
    const col = document.createElement('col');
    col.setAttribute('width',cellWidth);
    col.setAttribute('span','3');
    document.getElementById('members').appendChild(col);  //行をメンバ分追加
    
    const th = document.createElement('th');
    th.textContent =  nameArray[i];
    document.getElementById('thead').firstElementChild.appendChild(th);  //行見出しを追加
  }
  console.log(document.getElementById('thead'));
}



function highlightDays(dateObj,tr){
  if(dateObj.getDay() === 0){
    tr.style.backgroundColor = '#ffc0cb';
  }else if(dateObj.getDay() === 6){
    tr.style.backgroundColor = '#afeeee';
  }
}
