'use strict'


window.onload = function() {

    let btns = document.getElementsByClassName( 'start-btn' );

    for (let btn of btns ) {

        btn.onclick = function () {
            startTime();
        };
    }
    lists(10);

};

function startTime() {
    let sec = 60;

    let timeSecs = document.getElementsByClassName( 'time-sec' );
    let timerId = setInterval(function() {
        sec--;
        for (let btn of timeSecs ) {

            btn.textContent = sec;
        }

        if (sec < 0 ) {
            clearInterval(timerId);
        }

    }, 1000);
}

function lists(a) {
    let times = a;

    let arr = [];

    for (let i=0; i <a; i++) {
        arr.push(i);
    }
    console.log(arr);
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }

    arr.sort(compareRandom);
    console.log(arr);


    let elem = document.querySelectorAll(".rc-row__question .rc-color");


    for (let i=0; i <elem.length; i++ ) {

        let mad = 'rc-color-' + arr[i];
        elem[i].classList.add(mad);
    }
}
