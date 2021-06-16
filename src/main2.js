// json 파일로 부터 데이터를 받아온다
function loadItems() {
    return fetch('../data/data.json') // fetch는 json 파일을 불러올때 편하다
        .then(result => result.json())
        .then(json => json.items)
        .catch(error => console.log(error));
}

function displayItems(items) {
    const ulTag = document.getElementById('items');
    let html = items
        .map(item => createHTMLString(item))
        .join('');
    ulTag.innerHTML = html;
}

function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.imgsrc}" alt="" class="Thumbnail item__Thumbnail">
        <span class="Thumbnail item__info">${item.gender}, ${item.size} size</span>
    </li>
    `
}

function onButtonEvent(event, items) {
    const data = event.target.dataset;
    const key = data.key;
    const value = data.value;
    if (key == null || value == null) {
        return;
    }

    update(items,key,value);

}

function update(items, key, value) {
    const litag = document.getElementsByClassName('item');
    let length = 0;
    items.forEach(item => {
        if (item[key] === value) {
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

function setEventListeners(items) {
    const logo = document.querySelector('.Logo');
    const btns = document.querySelector('.menu');
    logo.addEventListener('click', () => homeReset());
    btns.addEventListener('click', event => onButtonEvent(event, items));
}

loadItems()
    .then((items) => {
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);
