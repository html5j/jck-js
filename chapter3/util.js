var box = ['./img/y01.JPG','./img/y02.JPG','./img/y03.JPG','./img/y04.JPG','./img/y05.JPG','./img/y06.JPG'];

var card1 = './img/y01.JPG';
var card2 = './img/y02.JPG';
var card3 = './img/y03.JPG';
var card2 = './img/y04.JPG';
var card2 = './img/y05.JPG';
var card2 = './img/y06.JPG';

//rondom();show();
// result = random(1,10);
// if(result === n )



function lot(){
    var rand = random(box.length);
    var result = $('result');
    var past = $('past');
    var div = document.createElement('span');
    var img = document.createElement('img');
    img.src = box[rand];
    div.appendChild(img);
    result.innerHTML= div.innerHTML;
    var cn = past.childNodes.length;
    console.log(cn);
    var fchild = past.firstChild;
    if(cn >= 4){
        past.removeChild(past.lastChild);
    }
    past.insertBefore(div,fchild);
}

function random(num){
    return Math.floor( Math.random() * num + 1);
}
function $(id){
    return document.getElementById(id);
}