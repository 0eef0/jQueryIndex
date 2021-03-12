var title = 'We are West-MEC Coding!';

function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        $("#"+destination).html(message.substring(0,i));
        i++;
        if (i > message.length){
            clearInterval(interval);
        }
    }, speed);
}

printLetterByLetter('title', title, 100);

setInterval(insertionPoint(), 1000);
function insertionPoint(){
    $('#insertion').fadeIn(500);
    $('#insertion').fadeOut(500);
}