$(document).ready(function() {

    arr = [
        [[1, 2, 3],[ 4, 5, 6],[7, 8, 9]],
        [[4, 5, 6],[ 7, 8, 9],[1, 2, 3]],
        [[7, 8, 9],[ 1, 2, 3],[4, 5, 6]],
        [[2, 3, 4],[ 5, 6, 7],[8, 9, 1]],
        [[5, 6, 7],[ 8, 9, 1],[2, 3, 4]],
        [[8, 9, 1],[ 2, 3, 4],[5, 6, 7]],
        [[3, 4, 5],[ 6, 7, 8],[9, 1, 2]],
        [[6, 7, 8],[ 9, 1, 2],[3, 4, 5]],
        [[9, 1, 2],[ 3, 4, 5],[6, 7, 8]]
    ];

    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

    var sort = 7;
    function sortPoint(x) {
        var sortCount = Math.floor(getRandomArbitary(1, sort));

        for(var i=0; i<sortCount; i++) {

            for(var k=0;k<9;k++){
                var change = arr[k][x][0];
                arr[k][x].splice(0,1);
                arr[k][x].push(change);
            }
        }
    }
    function sortColSplice(x) {
        var sortCount = Math.floor(getRandomArbitary(1, sort));

        for(var i=0; i<sortCount; i++) {

            for(var k=0;k<9;k++){
                var change = arr[k][x][0];
                arr[k][x].splice(0,1);
                arr[k][x].splice(1,0,change);
            }
        }
    }
    function sortBlockCol(){
        var sortCount = Math.floor(getRandomArbitary(1, sort));

        for(var i=0; i<sortCount; i++) {

            for(var k=0;k<9;k++){
                var change = arr[k][0];
                arr[k].splice(0,1);
                arr[k].push(change);
            }
        }
    }
    function sortBlockRow() {
        var sortCount = Math.floor(getRandomArbitary(1, sort));

        for(var i=0; i<sortCount; i++) {

            for(var k=0;k<3;k++){
                var change = arr[0];
                arr.splice(0,1);
                arr.push(change);
            }
        }
    }
    function sortBlockRowSp() {
        var sortCount = Math.floor(getRandomArbitary(1, sort));

        for(var i=0; i<sortCount; i++) {

            var row_1 = arr[0];
            var row_2 = arr[1];
            var row_3 = arr[2];

            arr.splice(0,3);
            arr.splice(3,0,row_1,row_2,row_3);
        }
    }
    function sortCol(){
        for(var i=0; i<3; i++) {
            sortPoint(i);
        }
    }
    function sortColSp(){
        for(var i=0; i<3; i++) {
            sortColSplice(i);
        }
    }

    sortBlockRowSp();
    sortColSp();
    sortCol();
    sortBlockCol();
    sortBlockRow();

    var mainARR = [];

    for (var t=0;t<arr.length;t++){

        for(var j=0;j<arr[t].length;j++){

            for(var k=0;k<arr[t][j].length;k++){
                mainARR.push(arr[t][j][k]);
            }
        }
    }
    mainARR.reverse();

    var hideArr = [];

    function hideArrFull(){
        var sortCount = Math.floor(getRandomArbitary(0, 81));

        var index = hideArr.indexOf(sortCount);

        if(index == -1) {
            hideArr.push(sortCount);
        }
    }
    var level = 65;

    function hideBlock() {
        var sortCount = Math.floor(getRandomArbitary(level-7, level));

        while (hideArr.length < sortCount) {
            hideArrFull();
        }
    }
    hideBlock();


    function maxArr( array ){
        return Math.max.apply( Math, array );
    }


    function addItem() {

        for (var i=0; i<mainARR.length; i++) {

            var index = hideArr.indexOf(i);

            if(index == -1) {
                $(".sd-block").append("<div class='sd-item'>" + mainARR[i] + "</div>");
            }
            else {
                $(".sd-block").append("<div class='sd-item is-empty'></div>");
            }
        }
    }
    function showGame() {
        $('.sd-block').removeClass('sd-hidden');
    }
    function showPicker() {
        $('.sd-item').click(function() {
            $(this).addClass('sd-item--active');
            $(this).append('<div class="sd-picker"><div class="sd-picker-item" data-value="1">1</div><div class="sd-picker-item" data-value="2">2</div><div class="sd-picker-item" data-value="3">3</div><div class="sd-picker-item" data-value="4">4</div><div class="sd-picker-item" data-value="5">5</div><div class="sd-picker-item" data-value="6">6</div><div class="sd-picker-item" data-value="7">7</div><div class="sd-picker-item" data-value="8">8</div><div class="sd-picker-item" data-value="9">9</div></div>');
            clickPicker();
        });
    }
    function clickPicker() {
        $('.sd-picker-item').click(function(e) {
            e.preventDefault();
            var val = $(this).data('value');
            var parn = $(this).parents('.sd-item');

            parn.text(val);
            parn.removeClass('is-empty sd-item--active');
            parn.remove('.sd-picker');


        });
    }
    addItem();
    showGame();
    showPicker();



    // var col_1=0;
    // var col_2=0;
    // var col_3=0;
    // var col_4=0;
    // var col_5=0;
    // var col_6=0;
    // var col_7=0;
    // var col_8=0;
    // var col_9=0;
    //
    // for (var i=0;i<arr.length;i++){
    //     col_1 += arr[i][0][0];
    //     col_2 += arr[i][0][1];
    //     col_3 += arr[i][0][2];
    //     col_4 += arr[i][1][0];
    //     col_5 += arr[i][1][1];
    //     col_6 += arr[i][1][2];
    //     col_7 += arr[i][2][0];
    //     col_8 += arr[i][2][1];
    //     col_9 += arr[i][2][2];
    // }
    // console.log('col_1 ' + col_1);
    // console.log('col_2 ' + col_2);
    // console.log('col_3 ' + col_3);
    // console.log('col_4 ' + col_4);
    // console.log('col_5 ' + col_5);
    // console.log('col_6 ' + col_6);
    // console.log('col_7 ' + col_7);
    // console.log('col_8 ' + col_8);
    // console.log('col_9 ' + col_9);
});