'use strict'


window.onload = function() {

    let btns = document.getElementsByClassName('rc-start-btn');
    let gameStatus;

    for (let btn of btns ) {

        btn.onclick = function () {
            if(!gameStatus) {
                startTime();
                showColorPanel();
                gameStatus = true;
                this.classList.add('rc-start-btn--disabled')
            }

        };
    }
    lists(10);
    showBlockColors();

};

function startTime() {
    let sec = 9;

    let timeSecs = document.getElementsByClassName( 'time-sec' );
    let timerId = setInterval(function() {
        for (let btn of timeSecs ) {
            btn.textContent = sec;
        }
        sec--;
        if (sec < 0 ) {
            clearInterval(timerId);
            for (let btn of timeSecs ) {
                btn.textContent = 'Select your colors..';
            }
        }
    }, 1000);
}

function showColorPanel() {
    let question = document.getElementsByClassName('rc-row__question');

    for (let panel of question) {
        panel.classList.add('rc-row__question--active');
        setTimeout(function() {
            panel.classList.remove('rc-row__question--active');
        }, 10000);
    }

}

function lists(a) {
    let times = a;
    let arr = [];

    for (let i=1; i <= times; i++) {
        arr.push(i);
    }
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    arr.sort(compareRandom);
    let elem = document.querySelectorAll(".rc-row__question .rc-color");

    for (let i=0; i <elem.length; i++ ) {
        let mad = 'rc-color-' + arr[i];
        elem[i].classList.add(mad);
        elem[i].setAttribute('value', arr[i]);
    }
}



function showBlockColors() {
    let emptyArr = document.getElementsByClassName( 'rc-empty' );
    let emptyBlock = document.createElement('div');

    emptyBlock.classList.add('select-colors');

    for (let i=1; i <= 10; i++) {
        let emptyItem = document.createElement('div');
        let emptyColor = 'rc-color-' + i;
        emptyItem.classList.add('rc-color');
        emptyItem.classList.add(emptyColor);
        emptyItem.setAttribute('data-value', i);
        emptyBlock.appendChild(emptyItem);
    }

    for (let empty of emptyArr ) {

        empty.onclick = function () {
            empty.appendChild(emptyBlock);
            selectColor()
        };
    }
}

function selectColor() {

    let elem = document.querySelectorAll(".rc-empty .rc-color");


    for (let empty of elem ) {
        empty.onclick = function () {
            this.dataset.value;
        };
    }
}
