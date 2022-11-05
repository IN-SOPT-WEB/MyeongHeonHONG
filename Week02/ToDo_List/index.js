const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const btn_group = $$('.btn-group button');

const left_section = $('#left-section');
const right_section = $('#right-section');

const todayList = $('#left-section ul');
const tomorrowList = $('#right-section ul');

const todayInput = $('#left-section .add input');
const tomorrowInput = $('#right-section .add input');

const deleteIcons = $$('main section li');

//할 일 추가 함수.
function addList(time) {
    const li = document.createElement('li');
    li.addEventListener('click', () => {
        li.remove();
    });

    if (time === 'today') {
        li.innerText = todayInput.value;
        todayList.appendChild(li);
    } else {
        li.innerText = tomorrowInput.value;
        tomorrowList.appendChild(li);
    }
}

//속성별로 다른 함수를 추가하는 함수.
function buttonByAttribute(element) {
    switch (element.innerHTML) {
        case '오늘만 보기':
            return oneSideView('today');
            break;
        case '내일만 보기':
            return oneSideView('tomorrow');
            break;
        case '함께 보기':
            return bothSideView();
    }
}

//한쪽만 보이게 하는 함수
function oneSideView(attr) {
    if (attr === 'today') {
        right_section.className = 'hidden';
        left_section.className = '';
    } else {
        right_section.className = '';
        left_section.className = 'hidden';
    }
}

//양쪽이 보이게하는 함수.
function bothSideView() {
    left_section.className = '';
    right_section.className = '';
}

//forEach를 이용한 이벤트 할당.
btn_group.forEach((btn) => {
    btn.addEventListener('click', () => {
        buttonByAttribute(btn);
    });
});

deleteIcons.forEach((icon) => {
    icon.addEventListener('click', () => {
        icon.remove();
    });
});
