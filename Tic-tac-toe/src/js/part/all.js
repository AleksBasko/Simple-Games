
window.onload = function() {

    let arr = [0,1,2,3,4,5,6,7,8];
    let firstP = '<svg class="tac" viewBox="0 -10 128 128" width="55px" height="55px"><path d="M16,16L112,112"></path><path d="M112,16L16,112"></path></svg>';
    let secondP = '<svg class="tic"><circle r="21" cx="35" cy="35"></circle></svg>';


    click(arr, firstP, secondP);
    
};



function click(array, point1, point2) {
    if(array.length) {
        let ticItem = document.getElementsByClassName('tic-item');

        for (let i = 0; i < ticItem.length; i++) {
            ticItem[i].addEventListener('click', function () {
                if (!this.classList.contains('full')) {
                    let data = this.dataset;
                    let val = data.value;

                    for (let j = 0; j < array.length; j++) {
                        if (array[j] == val) {
                            array.splice(j, 1);
                            break;
                        }
                    }
                    console.log(array);

                    this.classList.add('full');
                    this.innerHTML = point1;
                    another(array, point2, ticItem);
                }
            })
        }
    }
}



function another(freeArray, point2, item) {
    if(freeArray.length) {
        let rdm = Math.floor(getRandomArbitary(0, freeArray.length));
        console.log(freeArray);
        console.log('rdm ' + rdm);

        let selectPoint = freeArray[rdm];
        console.log('ds ' + selectPoint);

        let freeItem = item;
        // console.log(item);

        for (let i=0; i < freeItem.length; i++) {
            let data = freeItem[i].dataset;

            let val = data.value;

            // console.log('selectPoint ' + selectPoint);
            if(val == selectPoint) {
                console.log('val ' + val);
                freeItem[i].classList.add('full');
                freeItem[i].innerHTML = point2;

                freeArray.splice(rdm,1);

                // console.log(freeArray);
            }
        }
    }

}


function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}