$(document).ready(function(){

    var arr = [0,1,2,3,4,5,6,7,8];
    var arr2 = [0,1,2,3,4,5,6,7,8];
    var tex = '+';
    click(arr2, tex, arr);

});


function click(a, b, c) {

    $('.tic-item').click(function(){
        if (!$(this).hasClass('full')) {

            var val = $(this).data( "value" );
            console.log('нажали на ' + val);

            for (var i = 0; i < a.length; i++) {
                if(a[i] == val) {
                    console.log('удалили ' + a[i]);
                    a.splice(i, 1);
                    break;
                }
            }

            // var index = a.indexOf(val);
            //
            // if(index !==-1){
            //     a.splice(index,1);
            // }
            console.log('теперь массив ' + a);
        }

        $(this).addClass('full');
        $(this).text(b);
        another(a, c);
    });
}



function another(freeArray, bb) {
    var rdm = Math.floor(getRandomArbitary(0, freeArray.length));
    console.log(freeArray);
    // console.log(rdm);

    var ds = freeArray[rdm];
    console.log('ds ' + ds);

    var item = $('.tic-item');
    // console.log(item);

    item.each(function() {
        var val = $(this).data( "value" );
        if(val == ds) {
            $(this).text('0');
            console.log('val ' + val);
            var index = freeArray.indexOf(val);

            if(index !==-1){
                freeArray.splice(index,1);
            }
        }
    });

}


function getRandomArbitary(min, max) {
    return Math.random() * (max - min) + min;
}

// $(document).ready(function() {
//     $('.select').each(function() {
//         if ($(this).is(':checked')) {
//             console.log($(this).data('value'));
//             $(this).addClass('active');
//         }
//     })
//     $('.select').click(function() {
//         if (!$(this).hasClass('active')) {
//             console.log('Меняем ' + $(this).data('value'));
//             $('.select').removeClass('active');
//             $(this).addClass('active');
//         }
//     })
// });

$(document).ready(function() {
    // var canvas = document.createElement('canvas');
    //
    // canvas.id = "CursorLayer";
    // canvas.width = 500;
    // canvas.height = 600;
    // canvas.style.zIndex = 8;
    // canvas.style.position = "absolute";
    // canvas.style.border = "1px solid";
    // canvas.style.backgroundColor = "grey";
    //
    //
    // var body = document.getElementsByTagName("body")[0];
    // body.appendChild(canvas);
    //
    // cursorLayer = document.getElementById("CursorLayer");
    //
    // console.log(cursorLayer);

    var c_canvas = document.getElementById("canvas");

    var context = c_canvas.getContext("2d");

        c_canvas.width = 90;
        c_canvas.height = 90;

        for (var x = 0.5; x < 90; x += 30) {
            context.moveTo(x, 0);
            context.lineTo(x, 90);
        }

        for (var y = 0.5; y < 90; y += 30) {
            context.moveTo(0, y);
            context.lineTo(90, y);
        }

    context.strokeStyle = "#888";
    context.stroke();
});

var example = document.getElementById("example"),
    ctx     = example.getContext('2d');
example.width  = 640;
example.height = 480;
ctx.strokeRect(15, 15, 266, 266);
ctx.strokeRect(18, 18, 260, 260);
ctx.fillRect(20, 20, 256, 256);
for ( var i = 0; i < 8; i += 2) {
    for (var j = 0; j < 8; j += 2) {
        ctx.clearRect(20 + i * 32, 20 + j * 32, 32, 32);
        ctx.clearRect(20 + (i + 1) * 32, 20 + (j + 1) * 32, 32, 32);
    }
}



// function draw() {
//     var canvas = document.getElementById('canvas');
//     if (canvas.getContext) {
//         var ctx = canvas.getContext('2d');
//
//         ctx.fillRect(25,25,100,100);
//         ctx.clearRect(45,45,60,60);
//         ctx.strokeRect(50,50,50,50);
//     }
// }