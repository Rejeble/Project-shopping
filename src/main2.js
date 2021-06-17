// json 파일로 부터 데이터를 받아온다
function loadItems() {
    return fetch('../data/data.json') // fetch는 json 파일을 불러올때 편하다
        .then(result => result.json())
        .then(json => json.items)
        .catch(error => console.log(error));
}

// item들을 html에 동적으로 할당하는 함수
function displayItems(items) {
    const ulTag = document.getElementById('items');
    let html = items
        .map(item => createHTMLString(item))
        .join('');
    ulTag.innerHTML = html;
}

// 인자를 HTML 문자로 변형? 해주는 함수
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.imgsrc}" alt="" class="Thumbnail item__Thumbnail">
        <span class="Thumbnail item__info">${item.gender}, ${item.size} size</span>
    </li>
    `
}

// 버튼 이벤트 함수
function onButtonEvent(event, items) {
    const data = event.target.dataset;   // 클릭한 버튼의 데이터 받아오기
    const key = data.key;                // 클릭한 버튼의 key data 
    const value = data.value;            // 클릭한 버튼의 value data

    // 버튼이 없는 영역 클릭시 return
    if (key == null || value == null) {
        return;
    }

    // 버튼 클릭시 html class 업데이트
    update(items,key,value);

}

// item에 class를 추가해서 display 속성 사용
function update(items, key, value) {
    const litag = document.getElementsByClassName('item');
    let length = 0;
    items.forEach(item => {
        if (item[key] === value) {    // json의 type과 html data-value의 값을 비교
            litag[length]
                .classList
                .remove('listhidden');
        } else {
            litag[length]
                .classList
                .add('listhidden');
        }
        length++;
    });
}

function homeReset(){
    const litag = document.getElementsByClassName('item');
    for(let i=0;i<litag.length;i++){
        litag[i].classList.remove('listhidden');
    }
}

// EventListener
function setEventListeners(items) {
    const logo = document.querySelector('.Logo');
    const btns = document.querySelector('.menu'); // .menu 영역을 클릭 범위로 할당, 리스너를 여러개 생성하지 않음
    logo.addEventListener('click', () => homeReset());
    btns.addEventListener('click', event => onButtonEvent(event, items));
}


loadItems()
    .then((items) => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);
