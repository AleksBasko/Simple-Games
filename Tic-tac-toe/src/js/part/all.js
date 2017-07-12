// $(document).ready(function(){
//     var arr = [0,1,2,3,4,5,6,7,8];
//     var arr2 = [0,1,2,3,4,5,6,7,8];
//     var row0 = [];
//     var row1 = [];
//     var row2 = [];
//     var col0 = [];
//     var col1 = [];
//     var col2 = [];
//     var dia0 = [];
//     var dia1 = [];
//     var sel = '0';
//     // select(sel);
//     click(row0, row1, row2, col0, col1, col2, dia0, dia1, arr, arr2);
//     // console.log(arr);
//     // console.log(arr.length);
//
// });
//
// // function select(a) {
// //     $('.select').click(function() {
// //
// //         a = $(this).data('value');
// //         console.log(a);
// //
// //
// //         click(row0, row1, row2, col0, col1, col2, dia0, dia1, sel);
// //
// //     });
// //
// // }
//
// function click(row0, row1, row2, col0, col1, col2, dia0, dia1, arr, arr2) {
//
//     $('.tic-item').click(function(){
//         if (!$(this).hasClass('full')) {
//             var sel = '+';
//             $(this).addClass('full');
//             var val = $(this).data( "value" );
//             console.log('нажали на ' + val);
//             // debugger;
//             console.log('был массив ' + arr2.length);
//             for (var i = 0; i < arr2.length; i++) {
//                 if(arr2[i] == val) {
//                     console.log('удалили ' + arr2[i]);
//                     arr2.splice(arr2[i], 1);
//                     break;
//                 }
//             }
//             console.log('теперь массив ' + arr2.length);
//
//             // console.log('arr2 ' + arr2);
//             // console.log('arr2-length ' + arr2.length);
//
//             if(val == 0) {
//                 $(this).text(sel);
//                 row0.push('1');
//                 col0.push('1');
//                 dia0.push('1');
//                 win(row0);
//                 win(col0);
//                 win(dia0);
//
//             }
//             else if(val == 1) {
//                 $(this).text(sel);
//                 row0.push('1');
//                 col1.push('1');
//                 win(row0);
//                 win(col1);
//             }
//             else if(val == 2) {
//                 $(this).text(sel);
//                 row0.push('1');
//                 col2.push('1');
//                 dia1.push('1');
//                 win(row0);
//                 win(col2);
//                 win(dia1);
//             }
//             else if(val == 3) {
//                 $(this).text(sel);
//                 row1.push('1');
//                 col0.push('1');
//                 win(row1);
//                 win(col0);
//             }
//             else if(val == 4) {
//                 $(this).text(sel);
//                 row1.push('1');
//                 col1.push('1');
//                 dia0.push('1');
//                 dia1.push('1');
//                 win(row1);
//                 win(col1);
//                 win(dia0);
//                 win(dia1);
//             }
//             else if(val == 5) {
//                 $(this).text(sel);
//                 row1.push('1');
//                 col2.push('1');
//                 win(row1);
//                 win(col2);
//             }
//             else if(val == 6) {
//                 $(this).text(sel);
//                 row2.push('1');
//                 col0.push('1');
//                 dia1.push('1');
//                 win(row2);
//                 win(col0);
//                 win(dia1);
//             }
//             else if(val == 7) {
//                 $(this).text(sel);
//                 row2.push('1');
//                 col1.push('1');
//                 win(row2);
//                 win(col1);
//             }
//             else if(val == 8) {
//                 $(this).text(sel);
//                 row2.push('1');
//                 col2.push('1');
//                 dia0.push('1');
//                 win(row2);
//                 win(col2);
//                 win(dia0);
//             }
//         }
//         another(arr2, arr);
//         function another(a, b) {
//             var rdm = Math.floor(getRandomArbitary(0, a.length));
//             var ds = a[rdm];
//             // console.log('random ' + rdm);
//             // console.log('arr2 leng ' + a.length);
//             // console.log( 'число из rr2 ' + a[rdm]);
//             // console.log(b[ds]);
//         }
//     });
// }
//
// function getRandomArbitary(min, max) {
//     return Math.random() * (max - min) + min;
// }
//
// function win(a) {
//     if(a.length == 3) {
//         // console.log('win');
//     }
// }

// $(document).ready(function(){
//
//     var arr2 = ['0','1','2','3','4','5','6','7','8'];
//     click(arr2);
// });
//
//
// function click(arr2) {
//
//     $('.tic-item').click(function(){
//         // debugger;
//         if (!$(this).hasClass('full')) {
//             var val = $(this).data( "value" );
//             console.log('нажали на ' + val);
//             console.log('был массив ' + arr2.length);
//             for (var i = 0; i < arr2.length; i++) {
//                 var set = arr2[i];
//                 if(set == val) {
//                     console.log('удалили ' + arr2[i]);
//                     arr2.splice(arr2[i], 1);
//                     $(this).text('+');
//                     break;
//                 }
//             }
//             console.log('массив ' + arr2);
//
//         }
//
//     });
// }


// var index = arr.indexOf(val); if(index !==-1){ arr.splice(index,1);}
    $(document).ready(function(){
        var arr = ['0','1','2','3','4','5','6','7'];
        click(arr);
    });


    function click(arr) {
        $('.tic-item').click(function(){
            if (!$(this).hasClass('clicked')) {
                var val = $(this).data( "value" );
                console.log('нажали на ' + val);
                var art = arr.indexOf(val);

                arr.splice(arr[art], 1);
                console.log('массив ' + arr);
            }
        });
    }



// Your indexing using the data attribues is broken as soon as you remove an element from array
// Your indexing using the data attribues is broken as soon as you remove an element from array. Find the index in the array first
// Your indexing using the data attribues is broken as soon as you remove an element from array. Find the index in the array first. If you remove index 2 ... what was 3 becomes 2




    $(document).ready(function(){

        $('.select').each(function(){
            if($(this).is('checked')) {
                className = $(this).data('value');
            }
        });

        addBlock(className);
        select();
    });

    function select() {
        $('.select').click(function() {

            if(!$(this).prop('checked')) {

                className = $(this).data('value');
                addBlock(className);
                console.log('click');
            }
        });
    }

    function addBlock(a) {
        $('.block').html('<div class="' + a + '"></div>')
    }