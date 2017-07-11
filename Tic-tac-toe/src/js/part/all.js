$(document).ready(function(){
var row0 = [];
var row1 = [];
var row2 = [];
var col0 = [];
var col1 = [];
var col2 = [];
var dia0 = [];
var dia1 = [];
click(row0, row1, row2, col0, col1, col2, dia0, dia1);

});

// var arr = [0,0,0]
//           [0,0,0]
//           [0,0,0]

function click(row0, row1, row2, col0, col1, col2, dia0, dia1) {
    $('.tic-item').click(function(){
        var val = $(this).data( "value" );
        if(val == 0) {
            row0.push('1');
            col0.push('1');
            dia0.push('1');
            win(row0);
            win(col0);
            win(dia0);

        }
        else if(val == 1) {
            row0.push('1');
            col1.push('1');
            win(row0);
            win(col1);
        }
        else if(val == 2) {
            row0.push('1');
            col2.push('1');
            dia1.push('1');
            win(row0);
            win(col2);
            win(dia1);
        }
        else if(val == 3) {
            row1.push('1');
            col0.push('1');
            win(row1);
            win(col0);
        }
        else if(val == 4) {
            row1.push('1');
            col1.push('1');
            dia0.push('1');
            dia1.push('1');
            win(row1);
            win(col1);
            win(dia0);
            win(dia1);
        }
        else if(val == 5) {
            row1.push('1');
            col2.push('1');
            win(row1);
            win(col2);
        }
        else if(val == 6) {
            row2.push('1');
            col0.push('1');
            dia1.push('1');
            win(row2);
            win(col0);
            win(dia1);
        }
        else if(val == 7) {
            row2.push('1');
            col1.push('1');
            win(row2);
            win(col1);
        }
        else if(val == 8) {
            row2.push('1');
            col2.push('1');
            dia0.push('1');
            win(row2);
            win(col2);
            win(dia0);
        }
    });
}

function win(a) {
    if(a.length == 3) {
        console.log('win');
    }
}