// // // window.onload = function() {
// // //
// // //     var arr = [1,2,3,4,5,6,7,8,9];
// // //
// // //
// // //     var item = document.querySelectorAll('.sg-squer');
// // //
// // //     for (var i=0; i < item.length; i++) {
// // //
// // //         addValue();
// // //     }
// // // };
// // //
// // // function addValue() {
// // //     var cans = document.querySelectorAll('.sg-squer .sg-item');
// // //
// // //     for (var i=0; i < cans.length; i++) {
// // //         cans[i].textContent = i;
// // //     }
// // // }
// //
// // // $(document).ready(function() {
// // //     var squer = $('.sg-squer');
// // //
// // //     squer.each(function() {
// // //         var item = $(this).find('.sg-item');
// // //
// // //         var arr = [1,2,3,4,5,6,7,8,9];
// // //
// // //         var newArr = arr.sort(function() {
// // //             return .5 - Math.random();
// // //         });
// // //
// // //         for (var i=0; i <= item.length; i++) {
// // //             item.eq(i).html(newArr[i]);
// // //         }
// // //     });
// // //
// // // });
// //
// //
// // // $(document).ready(function() {
// // //     ssd();
// // //
// // //     function ssd() {
// // //         var squer = $('.sg-squer');
// // //
// // //         var arr = [1,2,3,4,5,6,7,8,9];
// // //         var row1 = [];
// // //         var row2 = [];
// // //         var row3 = [];
// // //
// // //         for (var i=0; i <= squer.length; i++) {
// // //
// // //             if(i==0) {
// // //                 var item = $(this).find('.sg-item');
// // //
// // //                 var newArr = arr.sort(function() {
// // //                     return .5 - Math.random();
// // //                 });
// // //
// // //                 for (var i=0; i <= item.length; i++) {
// // //                     if(i<3) {
// // //                         row1.push(newArr[i]);
// // //                     }
// // //                     else if(i >2 && i<6) {
// // //                         row2.push(newArr[i]);
// // //                     }
// // //                     else if(i >5 && i<9) {
// // //                         row3.push(newArr[i]);
// // //                     }
// // //                     item.eq(i).html(newArr[i]);
// // //                 }
// // //             }
// // //             console.log(row1);
// // //             console.log(row2);
// // //             console.log(row3);
// // //         }
// // //     }
// // //
// // // });
// //
// // $(document).ready(function () {
// //
// //     select();
// // });
// //
// //     function select() {
// //         // var row = [];
// //         // var count = 10;
// //         //
// //         // function getRandomArbitary(min, max) {
// //         //     return Math.random() * (max - min) + min;
// //         // }
// //         //
// //         // function searchRandom(){
// //         //     var rdm = Math.floor(getRandomArbitary(1, 20));
// //         //
// //         //     for(var i=0; i < row.length; i++){
// //         //         if(rdm == row[i]) {
// //         //             setTimeout(function() {
// //         //                 searchRandom();
// //         //             }, 1);
// //         //         }
// //         //     }
// //         //     row.push(rdm);
// //         // }
// //         //
// //         // for(var i=0; i < count; i++){
// //         //     searchRandom();
// //         //     console.log(row);
// //         // }
// //
// //
// //
// //         var row0 = [];
// //         var row1 = [];
// //         var row2 = [];
// //         var row3 = [];
// //         var row4 = [];
// //         var row5 = [];
// //         var row6 = [];
// //         var row7 = [];
// //         var row8 = [];
// //         var col0 = [];
// //         var col1 = [];
// //         var col2 = [];
// //         var col3 = [];
// //         var col4 = [];
// //         var col5 = [];
// //         var col6 = [];
// //         var col7 = [];
// //         var col8 = [];
// //         var count = 9;
// //
// //         function getRandomArbitary(min, max) {
// //             return Math.random() * (max - min) + min;
// //         }
// //
// //         function searchRandom(arr, a, i) {
// //             var rdm = Math.floor(getRandomArbitary(0, arr.length));
// //
// //             var simple = arr[rdm];
// //
// //             a.push(simple);
// //
// //             arr.splice(rdm, 1);
// //
// //             if (i == 0){
// //                 col0.push(simple);
// //             }
// //             else if (i == 1){
// //                 col1.push(simple);
// //             }
// //             else if (i == 2){
// //                 col2.push(simple);
// //             }
// //             else if (i == 3){
// //                 col3.push(simple);
// //             }
// //             else if (i == 4){
// //                 col4.push(simple);
// //             }
// //             else if (i == 5){
// //                 col5.push(simple);
// //             }
// //             else if (i == 6){
// //                 col6.push(simple);
// //             }
// //             else if (i == 7){
// //                 col7.push(simple);
// //             }
// //             else if (i == 8){
// //                 col8.push(simple);
// //             }
// //         }
// //
// //         function rows(a) {
// //             var arr = [1,2,3,4,5,6,7,8,9];
// //
// //             for (var i = 0; i < count; i++) {
// //                 searchRandom(arr, a, i);
// //             }
// //         }
// //
// //         rows(row0);
// //         rows(row1);
// //         rows(row2);
// //         rows(row3);
// //         rows(row4);
// //         rows(row5);
// //         rows(row6);
// //         rows(row7);
// //         rows(row8);
// //
// //
// //
// //
// //
// //
// //         console.log('новый массив ' + row0);
// //         console.log('новый массив ' + row1);
// //         console.log('новый массив ' + row2);
// //         console.log('новый массив ' + row3);
// //         console.log('новый массив ' + row4);
// //         console.log('новый массив ' + row5);
// //         console.log('новый массив ' + row6);
// //         console.log('новый массив ' + row7);
// //         console.log('новый массив ' + row8);
// //         console.log('новый col0 ' + col0);
// //         console.log('новый col1 ' + col1);
// //         console.log('новый col2 ' + col2);
// //         console.log('новый col3 ' + col3);
// //         console.log('новый col4 ' + col4);
// //         console.log('новый col5 ' + col5);
// //         console.log('новый col6 ' + col6);
// //         console.log('новый col7 ' + col7);
// //         console.log('новый col8 ' + col8);
// //
// //     }
// //
// // // function count() {
// // //
// // //     var arr=[1,2,3,4,5,6,7,8,9];
// // //     var row1 =[];
// // //
// // //     function getRandomArbitary(min, max) {
// // //         return Math.random() * (max - min) + min;
// // //     }
// // //
// // //     // var rndm = Math.floor(getRandomArbitary(1,9));
// // //
// // //     function block1() {
// // //         var newArr = arr.sort(function() {
// // //             return .5 - Math.random();
// // //         });
// // //
// // //         for (var i=0; i <= 3; i++) {
// // //             if(i<3) {
// // //                 row1.push(newArr[i]);
// // //             }
// // //         }
// // //     }
// // //     block1();
// // //
// // //     function rndm(a, b) {
// // //         var rdm = Math.floor(getRandomArbitary(1,9));
// // //
// // //         if(a == rdm) {
// // //             rndm(a);
// // //         }
// // //         else {
// // //             console.log(b);
// // //             // b.push(rdm);
// // //         }
// // //     }
// // //
// // //     function block2() {
// // //
// // //         for (var i=0; i < row1.length; i++) {
// // //             rndm(row1[i], row1);
// // //         }
// // //     }
// // //     block2();
// // //     console.log(row1);
// // // }
// //
// //
// // // .sg-squer
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-squer
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-squer
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
// // //     .sg-item
//
// $(document).ready(function(){
//    var arr = [1,2,3,4,5,6,7,8,9];
//    var arr2 = [1,2,3,4,5,6,7,8,9];
//    var arr3 = [1,2,3,4,5,6,7,8,9];
//    var arr4 = [1,2,3,4,5,6,7,8,9];
//    var arr5 = [1,2,3,4,5,6,7,8,9];
//    var arr6 = [1,2,3,4,5,6,7,8,9];
//    var arr7 = [1,2,3,4,5,6,7,8,9];
//    var arr8 = [1,2,3,4,5,6,7,8,9];
//    var arr9 = [1,2,3,4,5,6,7,8,9];
//
//     function getRandomArbitary(min, max) {
//         return Math.random() * (max - min) + min;
//     }
//
//     // var first = Math.floor(getRandomArbitary(1, 9));
//     //
//     // var firstIndex = arr.indexOf(first);
//     //
//     // arr.splice(firstIndex, 1);
//
//     var row_1 = [];
//
//     for(var i=0; i < 9; i++){
//         var rmd = Math.floor(getRandomArbitary(0, arr.length));
//
//         row_1.push(arr[rmd]);
//         arr.splice(rmd, 1);
//     }
//
//     var row_2 = [];
//     var row_3 = [];
//     var row_4 = [];
//     var row_5 = [];
//     var row_6 = [];
//     var row_7 = [];
//     var row_8 = [];
//     var row_9 = [];
//
//     function rowPoint(row, point, array) {
//         var firstRow = row_1[point];
//         var index = array.indexOf(firstRow);
//         if(index !==-1){
//             array.splice(index, 1);
//             var rmd = Math.floor(getRandomArbitary(0, array.length));
//             row.push(array[rmd]);
//             array.splice(rmd, 1);
//             array.push(firstRow);
//         }
//         else {
//             var rmd1 = Math.floor(getRandomArbitary(0, array.length));
//             row.push(array[rmd1]);
//             array.splice(rmd1, 1);
//         }
//     }
//     function rowPoint2(row, point, array) {
//         var firstRow = row_1[point];
//         var firstRow2 = row_2[point];
//         var index = array.indexOf(firstRow);
//         var index2 = array.indexOf(firstRow2);
//         if(index !==-1 || index2 !==-1){
//             array.splice(index, 1);
//             var rmd = Math.floor(getRandomArbitary(0, array.length));
//             row.push(array[rmd]);
//             array.splice(rmd, 1);
//             array.push(firstRow);
//         }
//         else {
//             var rmd1 = Math.floor(getRandomArbitary(0, array.length));
//             row.push(array[rmd1]);
//             array.splice(rmd1, 1);
//         }
//     }
//
//
//     for(var i=0; i<9; i++){
//         rowPoint(row_2, i, arr2);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint2(row_3, i, arr3);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint3(row_4, i, arr4);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint4(row_5, i, arr5);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint5(row_6, i, arr6);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint6(row_7, i, arr7);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint7(row_8, i, arr8);
//     }
//     for(var i=0; i<9; i++){
//         rowPoint8(row_9, i, arr9);
//     }
//     console.log('rowA ' + row_1);
//     console.log('rowB ' + row_2);
//     console.log('rowB ' + row_3);
//     console.log('rowB ' + row_4);
//     console.log('rowB ' + row_5);
//     console.log('rowB ' + row_6);
//     console.log('rowB ' + row_7);
//     console.log('rowB ' + row_8);
//     console.log('rowB ' + row_9);
//
// });


$(document).ready(function(){
    var arr = [1,2,3,4,5,6,7,8,9];
    var arr2 = [1,2,3,4,5,6,7,8,9];
    var arr3 = [1,2,3,4,5,6,7,8,9];

    function getRandomArbitary(min, max) {
        return Math.random() * (max - min) + min;
    }

    var row_1 = [];
    var row_3 = [];

    for(var i=0; i < 9; i++){
        var rmd = Math.floor(getRandomArbitary(0, arr.length));

        row_1.push(arr[rmd]);
        arr.splice(rmd, 1);
    }

    var row_2 = [];


    function rowPoint(point, array, row_2) {

        console.log('row-array   ' + row_1);
        console.log('arr2   ' + arr2);
        // console.log('row_1.length ' + row_1.length);

        for(var j=point; j <row_1.length; j+=10) {
            console.log('j ' + j);
            var points = point;
            console.log('points  ' + points);

            var firstRow = row_1[points];
            console.log('row_1   ' + firstRow);
            var index = array.indexOf(firstRow);
            console.log('array.indexOf   ' + index);

            if(index !==-1){
                array.splice(index, 1);
                console.log('array после удаления ' + array)
                var rmd = Math.floor(getRandomArbitary(0, array.length));
                row_1.push(array[rmd]);
                row_2.push(array[rmd]);
                array.splice(rmd, 1);
                array.push(firstRow);
            }
            else {
                var rmd1 = Math.floor(getRandomArbitary(0, array.length));
                row_1.push(array[rmd1]);
                row_2.push(array[rmd1]);
                array.splice(rmd1, 1);
            }
        }

    }



    for(var i=0; i<9; i++){
        console.log('i передали ' + i);
        rowPoint(i, arr2, row_2);
    }
    for(var i=0; i<9; i++){
        console.log('i передали ' + i);
        rowPoint(i, arr3, row_3);
    }

    console.log('rowA ' + row_1);
    console.log('rowB ' + row_2);
    console.log('rowB ' + row_3);

});