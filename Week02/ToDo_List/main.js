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

if (todayInput.value === '') {
    console.log('empty');
} else {
    console.log('fill');
}

//할 일 추가 함수.
function addList(time) {
    const li = document.createElement('li');
    const textNode = document.createTextNode(todayInput.value);
    li.appendChild(textNode);
    li.addEventListener('click', () => {
        li.remove();
    });

    if (time === 'today') {
        todayList.appendChild(li);
    } else {
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

//반복문을 통해 navigation button에 이벤트 할당.
for (let i = 0; i < btn_group.length; i++) {
    btn_group[i].addEventListener('click', () => {
        buttonByAttribute(btn_group[i]);
    });
}

//반복문을 통해 delete아이콘에 이벤트 할당.
for (let i = 0; i < deleteIcons.length; i++) {
    deleteIcons[i].addEventListener('click', () => {
        deleteIcons[i].remove();
    });
}
