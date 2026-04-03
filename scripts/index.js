// 1. 글쓰기 폼 초기 숨기기
// 2. + 버튼 클릭 시 글쓰기 폼 보이기

const writeForm = document.querySelector('#write_form');
const addBtn = document.querySelector('#write_fab');
const writeWrap = document.querySelector('#write_wrap');

// const errorMsg = document.querySelector('#write_wrap .error')
console.log(writeForm, addBtn, writeWrap)

writeForm.style.display = 'none'; // 1번

// errorMsg.style.display = 'none'
addBtn.addEventListener('click',function(e){ // 2번
    e.preventDefault();
    writeForm.style.display = 'block';
});

// 글쓰기 폼에 엔터키 클릭 시
// 폼에 할 일이 없다면 '입력하세요' 경고 출력
// 폼에 할 일이 있다면 글쓰기폼 닫히고 기존 할일 목록에 목록추가하기
const writeContents = document.querySelector('#write_contents')
const confirmBtn = document.querySelector('#confirm_btn')

console.log(writeContents, confirmBtn)

confirmBtn.addEventListener('click',function(){
    if(writeContents.value == ''){
        //HTML 에 p태그가 준비된 경우
        //errorP.style.color = '#f00';
        //errorp.textContent = '할일을 입력하세요'
        //HTML 파일에 태그가 없이 JS에서 태그를 객체로 생성한 방법
        const p = document.createElement('p');
        p.innerHTML = '내용을 입력하세요'
        writeWrap.appendChild(p);
        p.style.color = '#f00'
    }
    //할 일을 적은 상태일경우
    if(writeContents.value != ''){ // textarea의 값이 빈 값이 아닌 경우 참
        const allCon = document.querySelector('#all_con');//ol 선택(자식요소삽입위해)
        const li = document.createElement('li');//생성위치(클릭이벤트 안)
        const dateA = document.createElement('a');//클릭할 때마다 생성
        const a = document.createElement('a');//클릭할 때마다 생성
        
        dateA.classList.add('date');//기존 css의 디자인 통일을 위해서 같은 이름 등록
        li.classList.add('contents4');//기존 클래스 일치해서 디자인 적용목적
        li.classList.add('contents');//기존 클래스 일치해서 디자인 적용목적

        dateA.textContent = '04.03';//오늘 날짜 대입
        dateA.href = '#';//a태그 생성시 속성 없이 기본생성<a>, href속성 추가대입
        a.innerHTML = writeContents.value;//cteate으로 생성한게 아닌 기존 태그값을 대입

        li.appendChild(dateA);//li부모 안 마지막자식 위치에 날짜A 삽입(먼저 시작하는 순서)
        li.appendChild(a);//날짜 다음 순서로 삽입하는 create객체 삽입
        allCon.appendChild(li);//allCon > li > dateA + a
        writeForm.style.display = 'none';//등록한 후 글쓰기 팝업창 숨김
        console.log(allCon);
    }
}) 