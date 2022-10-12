const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const todayView = $(".today");
const tomorrowView = $(".tomorrow");
const bothView = $(".both");

const btn_group = $$(".btn-group button");

console.log(btn_group[1]);

function buttonByAttribute() {
  //속성별로 다른 함수를 추가하는 함수.
}

function oneSideView(section) {
  //한쪽만 보이게 하는 함수
}

function removeSideView(section) {
  //한쪽이 보일 때 반대편 섹션은 사라지게하는 함수.
}

function bothSideView(section) {
  //양쪽이 보이게하는 함수.
}
