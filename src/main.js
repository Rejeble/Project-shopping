// 글로번 변수 jsonArray
let listJsonArray = new Array();

// 랜덤 번호
function random(max) { // return number : number
    let number = Math.floor(Math.random() * max);
    return number;
}

// 랜덤 아이템 이미지 및 아이템 설명
function randomItemCreate() { // return item_info : arr[img_scr, item_info]
    const imgnumber = random(9);
    const textnumber = random(4);
    let img;
    let text;
    switch (imgnumber) {
        case 0:
            img = 'blue_t.png';
            break;
        case 1:
            img = 'blue_p.png';
            break;
        case 2:
            img = 'blue_s.png';
            break;
        case 3:
            img = 'pink_t.png';
            break;
        case 4:
            img = 'pink_p.png';
            break;
        case 5:
            img = 'pink_s.png';
            break;
        case 6:
            img = 'yellow_t.png';
            break;
        case 7:
            img = 'yellow_p.png';
            break;
        case 8:
            img = 'yellow_s.png';
            break;
        default:
            break;
    }
    console.log();
    if (imgnumber == 2 || imgnumber == 5 || imgnumber == 8) {
        switch (textnumber) {
            case 0:
            case 2:
                text = 'female, large size';
                break;
            case 1:
            case 3:
                text = 'female, small size';
                break;
            default:
        }
    } else {
        switch (textnumber) {
            case 0:
                text = 'man, large size';
                break;
            case 1:
                text = 'man, small size';
                break;
            case 2:
                text = 'female, small size';
                break;
            case 3:
                text = 'female, small size';
                break;
        }
    }

    let result = [img, text];
    return result;
}

//아이템을 img 태그에 넣기
function imgTagCreate(imgText) { // return img_tag : html Tag
    // img tag 생성
    let tag = document.createElement('img')

    // img tag에 class 생성
    tag.setAttribute("src", "img/" + imgText);
    tag.className = "Thumbnail";
    tag.className += " item__Thumbnail";
    
    return tag;
}

//아이뎀을 span태그에 넣기
function spanTagCreate(spanText) { // return span_tag : html Tag
    // span tag 생성
    let tag = document.createElement('span');

    // span tag에 class 속성 추가
    tag.className = "Thumbnail";
    tag.className += " item__info";

    // span tag에 text 추가
    tag.textContent = spanText;
    return tag;
}

// li 태그를 만들고 내부에 img, span 태그 추가
function liTagCreate(itemImg,itemInfo,toggle) { // return liTag : html Tag

    //img tag 생성
    let img = imgTagCreate(itemImg);

    // span tag 생성
    let span = spanTagCreate(itemInfo);

    // li tag 생성
    let liTag = document.createElement('li');

    // 옷 색 blue, pink, yellow
    let apparelColor = itemImg.split('_');
    
    //옷 종류 t, s, p
    let typeOfApparel = apparelColor[1].substr(0, 1);

    // class 속성 추가
    liTag.setAttribute('class', 'item');
    liTag.className += " " + apparelColor[0];
    liTag.className += " " + typeOfApparel;

    // list json에 apparelColor, typeOfApparel, item_info 추가  class 결과 log 출력
    if(toggle == true){
        jsonArrayInput(apparelColor[0], typeOfApparel, itemInfo);
    }
    liTag.appendChild(img);
    liTag.appendChild(span);

    return liTag;
}

function jsonArrayInput(apparelColor, typeOfApparel, imgInfo) {
    let listJson = new Object();
    listJson.liColor = apparelColor;
    listJson.liType = typeOfApparel;
    listJson.spanText = imgInfo;

    listJson = JSON.stringify(listJson);

    listJsonArray.push(JSON.parse(listJson));
    console.log('-----------main list Json Array------------');
    console.log(listJsonArray);
}

// ul 태그에 삽입
function insertUlTag(toggle) {
    // ul 태그
    let ulTag = document.getElementById('items');

    // 이미지 및 아이템 설명 랜덤 설정
    let imgInfo = randomItemCreate();
    
    // li 태그 생성 및 내부 정보 입력
    let liTag = liTagCreate(imgInfo[0],imgInfo[1],toggle);

    // ul 태그에 삽입
    ulTag.appendChild(liTag);

}

window.onload = function () {

    for (let i = 0; i < 15; i++) 
        insertUlTag(true);
}