// window.onload = function() {
//
//     var arr = [1,2,3,4,5,6,7,8,9];
//
//
//     var item = document.querySelectorAll('.sg-squer');
//
//     for (var i=0; i < item.length; i++) {
//
//         addValue();
//     }
// };
//
// function addValue() {
//     var cans = document.querySelectorAll('.sg-squer .sg-item');
//
//     for (var i=0; i < cans.length; i++) {
//         cans[i].textContent = i;
//     }
// }

// $(document).ready(function() {
//     var squer = $('.sg-squer');
//
//     squer.each(function() {
//         var item = $(this).find('.sg-item');
//
//         var arr = [1,2,3,4,5,6,7,8,9];
//
//         var newArr = arr.sort(function() {
//             return .5 - Math.random();
//         });
//
//         for (var i=0; i <= item.length; i++) {
//             item.eq(i).html(newArr[i]);
//         }
//     });
//
// });


// $(document).ready(function() {
//     ssd();
//
//     function ssd() {
//         var squer = $('.sg-squer');
//
//         var arr = [1,2,3,4,5,6,7,8,9];
//         var row1 = [];
//         var row2 = [];
//         var row3 = [];
//
//         for (var i=0; i <= squer.length; i++) {
//
//             if(i==0) {
//                 var item = $(this).find('.sg-item');
//
//                 var newArr = arr.sort(function() {
//                     return .5 - Math.random();
//                 });
//
//                 for (var i=0; i <= item.length; i++) {
//                     if(i<3) {
//                         row1.push(newArr[i]);
//                     }
//                     else if(i >2 && i<6) {
//                         row2.push(newArr[i]);
//                     }
//                     else if(i >5 && i<9) {
//                         row3.push(newArr[i]);
//                     }
//                     item.eq(i).html(newArr[i]);
//                 }
//             }
//             console.log(row1);
//             console.log(row2);
//             console.log(row3);
//         }
//     }
//
// });

$(document).ready(function () {

    select();
});

    function select() {
        // var row = [];
        // var count = 10;
        //
        // function getRandomArbitary(min, max) {
        //     return Math.random() * (max - min) + min;
        // }
        //
        // function searchRandom(){
        //     var rdm = Math.floor(getRandomArbitary(1, 20));
        //
        //     for(var i=0; i < row.length; i++){
        //         if(rdm == row[i]) {
        //             setTimeout(function() {
        //                 searchRandom();
        //             }, 1);
        //         }
        //     }
        //     row.push(rdm);
        // }
        //
        // for(var i=0; i < count; i++){
        //     searchRandom();
        //     console.log(row);
        // }



        var row0 = [];
        var row1 = [];
        var row2 = [];
        var row3 = [];
        var row4 = [];
        var row5 = [];
        var row6 = [];
        var row7 = [];
        var row8 = [];
        var col0 = [];
        var col1 = [];
        var col2 = [];
        var col3 = [];
        var col4 = [];
        var col5 = [];
        var col6 = [];
        var col7 = [];
        var col8 = [];
        var count = 9;

        function getRandomArbitary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function searchRandom(arr, a, i) {
            var rdm = Math.floor(getRandomArbitary(0, arr.length));

            var simple = arr[rdm];

            a.push(simple);

            arr.splice(rdm, 1);

            if (i == 0){
                col0.push(simple);
            }
            else if (i == 1){
                col1.push(simple);
            }
            else if (i == 2){
                col2.push(simple);
            }
            else if (i == 3){
                col3.push(simple);
            }
            else if (i == 4){
                col4.push(simple);
            }
            else if (i == 5){
                col5.push(simple);
            }
            else if (i == 6){
                col6.push(simple);
            }
            else if (i == 7){
                col7.push(simple);
            }
            else if (i == 8){
                col8.push(simple);
            }
        }

        function rows(a) {
            var arr = [1,2,3,4,5,6,7,8,9];

            for (var i = 0; i < count; i++) {
                searchRandom(arr, a, i);
            }
        }

        rows(row0);
        rows(row1);
        rows(row2);
        rows(row3);
        rows(row4);
        rows(row5);
        rows(row6);
        rows(row7);
        rows(row8);






        console.log('новый массив ' + row0);
        console.log('новый массив ' + row1);
        console.log('новый массив ' + row2);
        console.log('новый массив ' + row3);
        console.log('новый массив ' + row4);
        console.log('новый массив ' + row5);
        console.log('новый массив ' + row6);
        console.log('новый массив ' + row7);
        console.log('новый массив ' + row8);
        console.log('новый col0 ' + col0);
        console.log('новый col1 ' + col1);
        console.log('новый col2 ' + col2);
        console.log('новый col3 ' + col3);
        console.log('новый col4 ' + col4);
        console.log('новый col5 ' + col5);
        console.log('новый col6 ' + col6);
        console.log('новый col7 ' + col7);
        console.log('новый col8 ' + col8);

    }

// function count() {
//
//     var arr=[1,2,3,4,5,6,7,8,9];
//     var row1 =[];
//
//     function getRandomArbitary(min, max) {
//         return Math.random() * (max - min) + min;
//     }
//
//     // var rndm = Math.floor(getRandomArbitary(1,9));
//
//     function block1() {
//         var newArr = arr.sort(function() {
//             return .5 - Math.random();
//         });
//
//         for (var i=0; i <= 3; i++) {
//             if(i<3) {
//                 row1.push(newArr[i]);
//             }
//         }
//     }
//     block1();
//
//     function rndm(a, b) {
//         var rdm = Math.floor(getRandomArbitary(1,9));
//
//         if(a == rdm) {
//             rndm(a);
//         }
//         else {
//             console.log(b);
//             // b.push(rdm);
//         }
//     }
//
//     function block2() {
//
//         for (var i=0; i < row1.length; i++) {
//             rndm(row1[i], row1);
//         }
//     }
//     block2();
//     console.log(row1);
// }


// .sg-squer
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-squer
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-squer
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item
//     .sg-item