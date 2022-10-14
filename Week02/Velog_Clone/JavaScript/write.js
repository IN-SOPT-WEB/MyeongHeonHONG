const $$ = (selector) => document.querySelectorAll(selector);
const $ = (selector) => document.querySelector(selector);

const body = $('body');
const tagSection = $('.tag-content');
let tagWordArray = [];
const inputEnter = $('#tag-input');
inputEnter.addEventListener('keydown', ({ key, isComposing }) => {
    //한글이 눌리면 이벤트가 두번발생되는 이슈를 해결하는 코드.
    //참고 : https://velog.io/@yhe228/keyup-keydown%EC%97%90%EC%84%9C-key-Enter-%EC%82%AC%EC%9A%A9%ED%95%98%EB%A9%B4-%EC%9D%B4%EB%B2%A4%ED%8A%B8%EA%B0%80-%EB%91%90%EB%B2%88-%EB%B0%9C%EC%83%9D%ED%95%98%EB%8A%94-%EC%9D%B4%EC%8A%88
    if (isComposing) return;
    if (key !== 'Enter') return;
    addNode();
});

function addNode(e) {
    const tagNode = document.createElement('button');
    let tagInput = $('#tag-input');

    if (tagInput.value === '') {
        alert('써라..');
    } else {
        if (!isDuplication(tagInput.value)) {
            //존재하지 않는 태그라면 node를 추가
            tagNode.classList.add('tag-item');
            tagNode.setAttribute('tpye', 'button');
            tagNode.innerText = tagInput.value;

            tagNode.addEventListener('click', () => {
                //태그클릭시 노드가 삭제되고 배열안에 값도 삭제되는 함수실행.
                tagNode.remove();
                removeArray(tagNode.innerText);
            });
            //배열에 태그값 추가.
            addArray(tagInput.value);

            //태그섹션에 노드추가.
            tagSection.appendChild(tagNode);
            tagInput.value = '';
        } else {
            //중복된 태그시 알림
            alert('이미 존재하는 태그입니다!');
        }
    }
}

//중복된 태그가 있는지 검사하는 함수
const isDuplication = (word) => {
    return tagWordArray.includes(word);
};
//배열에 태그값 추가.
const addArray = (word) => tagWordArray.push(word);
//배열에 태그값 삭제.
const removeArray = (word) => {
    tagWordArray = tagWordArray.filter(function (item) {
        return item !== word;
    });
};
