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


        var row = [];
        var count = 10;

        function getRandomArbitary(min, max) {
            return Math.random() * (max - min) + min;
        }

        function searchRandom() {
            var rdm = Math.floor(getRandomArbitary(1, 20));

            if (row.includes(rdm)) {
                searchRandom();
            } else {
                row.push(rdm);
            }
        }

        for (var i = 0; i < count; i++) {
            searchRandom();
        }

        console.log(row);

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