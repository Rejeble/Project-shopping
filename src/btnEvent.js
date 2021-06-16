// 옷 타입에 따른 검색
function typeSearch(type){  
    liDelete();
    console.log('------------typeSearch-----------');
    console.log(type);
    for (let i = 0; i<listJsonArray.length; i++) {
        console.log('------------type for-----------');
        console.log(listJsonArray[i].liType);
        if(listJsonArray[i].liType == type){
            console.log(listJsonArray.liType);
            insertUlTagt(listJsonArray[i],false);
        }
    }

}

function colorSearch(color){
    liDelete();
    console.log('------------colorSearch-----------');
    console.log(color);
    for (let i = 0; i<listJsonArray.length; i++) {
        console.log('------------color for-----------');
        console.log(listJsonArray[i].liColor);
        if(listJsonArray[i].liColor == color){
            console.log(listJsonArray.liColor);
            insertUlTagt(listJsonArray[i],false);
        }
    }
}

// 로고 크릭 이벤트, 리스트 새로 고침
function Home(){
    liDelete();
    for (let i = 0; i<listJsonArray.length; i++) {
        insertUlTagt(listJsonArray[i],false);
    }
    console.log('-----------Home btn  ------------');
    console.log(listJsonArray);

}

// ul 태그에 li 태그 삽입
function insertUlTagt(itemArray,toggle) {
    // ul 태그
    let ulTag = document.getElementById('items');

    // 검색 정보 초기화
    let itemImg = itemArray.liColor +"_"+itemArray.liType + ".png";
    let itemInfo = itemArray.spanText;
    console.log('-----------btn  ------------');
    console.log(itemImg,itemInfo);

    // li 태그 생성 및 내부 정보 입력
    let liTag = liTagCreate(itemImg,itemInfo,toggle);

    // ul 태그에 삽입
    ulTag.appendChild(liTag);

}

// li 요소 삭제
function liDelete(){
    console.clear();
    let ul = document.getElementById('items');
    while(ul.firstChild){
        ul.firstChild.remove();
    }
    console.log('------------li delete -------');
}

