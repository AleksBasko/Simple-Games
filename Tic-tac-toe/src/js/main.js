
window.onload = function() {

    let arr = [0,1,2,3,4,5,6,7,8];
    let firstP = '<svg class="tac" viewBox="0 -10 128 128" width="55px" height="55px"><path d="M16,16L112,112"></path><path d="M112,16L16,112"></path></svg>';
    let secondP = '<svg class="tic"><circle r="21" cx="35" cy="35"></circle></svg>';
    let classFull = 'full';
    let itemClass = 'tic-item';
    let endClass = 'tt-end';
    let endActive = 'tt-end--active';
    let restartClass = 'tt-btn-restart';
    let checkFirstP = [[], [], [], [], [], [], [], []];
    let checkSecondP = [[], [], [], [], [], [], [], []];
    let checkPoint = false;

    stepFirst(arr, firstP);
    restart();

    function stepFirst(array) {
        if(array.length) {
            let ticItem = document.getElementsByClassName(itemClass);

            for (let i = 0; i < ticItem.length; i++) {
                ticItem[i].addEventListener('click', function () {
                    if (!this.classList.contains(classFull)) {
                        let data = this.dataset;
                        let val = data.value;

                        for (let j = 0; j < array.length; j++) {
                            if (array[j] == val) {
                                array.splice(j, 1);
                                break;
                            }
                        }

                        this.classList.add(classFull);
                        this.innerHTML = firstP;
                        checkLine(checkFirstP, val);
                        console.log(checkFirstP);

                        if (!checkPoint) {
                            setTimeout(function(){
                                stepSecond(array, ticItem);
                            }, 700);
                        }
                        else {
                            showEnd('<span>Win X</span>');
                        }
                    }
                })
            }
        }
    }

    function stepSecond(freeArray, item) {
        if(freeArray.length) {
            let rdm = Math.floor(getRandomArbitary(0, freeArray.length));
            let selectPoint = freeArray[rdm];
            let freeItem = item;

            for (let i=0; i < freeItem.length; i++) {
                let data = freeItem[i].dataset;
                let val = data.value;

                if(val == selectPoint) {
                    freeItem[i].classList.add(classFull);
                    freeItem[i].innerHTML = secondP;

                    freeArray.splice(rdm, 1);
                    checkLine(checkSecondP, val);
                    if(checkPoint) {
                        showEnd('<span>Win O</span>');
                    }
                }
            }
        }
    }

    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

    function checkLine(arrayCheck, val) {
        if(val == 0) {
            arrayCheck[0].push(val);
            arrayCheck[3].push(val);
            arrayCheck[6].push(val);
        }
        else if(val == 1){
            arrayCheck[0].push(val);
            arrayCheck[4].push(val);
        }
        else if(val == 2){
            arrayCheck[0].push(val);
            arrayCheck[5].push(val);
            arrayCheck[7].push(val);
        }
        else if(val == 3){
            arrayCheck[1].push(val);
            arrayCheck[3].push(val);
        }
        else if(val == 4){
            arrayCheck[1].push(val);
            arrayCheck[4].push(val);
            arrayCheck[6].push(val);
            arrayCheck[7].push(val);
        }
        else if(val == 5){
            arrayCheck[1].push(val);
            arrayCheck[5].push(val);
        }
        else if(val == 6){
            arrayCheck[2].push(val);
            arrayCheck[3].push(val);
            arrayCheck[7].push(val);
        }
        else if(val == 7){
            arrayCheck[2].push(val);
            arrayCheck[4].push(val);
        }
        else if(val == 8){
            arrayCheck[2].push(val);
            arrayCheck[5].push(val);
            arrayCheck[6].push(val);
        }

        for(let i=0; i<=7; i++) {
            if(arrayCheck[i].length == 3) {
                checkPoint = true;
            }
        }
    }
    function showEnd(text) {
        let itemsEnd = document.getElementsByClassName(endClass);
        for (let item of itemsEnd) {
            item.classList.add(endActive);
            item.innerHTML = text;
        }
    }
    function restart() {
        let restartBtn = document.getElementsByClassName(restartClass);
        for (let item of restartBtn) {
            item.addEventListener('click', function() {
                window.location.reload();
            });
        }
    }
};
