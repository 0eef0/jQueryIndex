var title = 'We are West-MEC Coding!';
var stuff1 = 'This two-year interactive program prepares students for a career as a software developer. The program teaches students how to design and develop software, build apps for phones, tablets, websites, and write and test computer code.';
var stuff2 = 'Software developer, computer programmer, web developer, mobile application designer, product manager*, quality assurance engineer*, software development engineer* <br><br> <span style="font-size:1rem">Coding entry-level salary range: $27.86 – $47.00 per hour**</span> <br><br><span style="font-size:0.75rem">*with additional education in this pathway | **Bureau of Labor Statistics, Occupational Employment & Wages</span>';
var central = '<h2>Central Campus</h2><p>6997 N. Glen Harbor Boulevard</p><p>Glendale, AZ 85307</p>';
var northeast = '<h2>Northeast Campus</h2><p>1617 W. Williams Drive</p><p>Phoenix, AZ 85027</p>';

$('#controls').hide();
$('#videos').hide();
$('#location').hide();

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

printLetterByLetter('title', title, 2500/title.length);

function writeDesc(){
    $('#videos').hide(500);
    printLetterByLetter('stuff', stuff1 ,2500/stuff1.length);
    $('#location').hide(500);
}
function writePaths(){
    $('#videos').hide(500);
    printLetterByLetter('stuff', stuff2, 2500/stuff2.length);
    $('#location').hide(500);
}
function showVideo(){
    $('#stuff').html('');
    $('#videos').show(500);
    $('#location').hide(500);
}
function showLocation(){
    $('#stuff').html('');
    $('#videos').hide(500);
    $('#location').show(500);
    printLetterByLetter('centralDetail',central, 2500/central.length);
    printLetterByLetter('northeastDetail',northeast, 2500/northeast.length);
}