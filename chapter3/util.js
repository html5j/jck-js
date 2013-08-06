var urare = './img/y03.JPG';
var srare = './img/y04.JPG';
var rare = './img/y02.JPG';
var normal = './img/y01.JPG';

var urare_name = '[UR] ウルトラレア';
var srare_name = '[SR] スーパーレア';
var rare_name = '[R] レア';
var normal_name = '[N] ノーマル';

function gacha(){
    result = random(10);
    
    if( result === 10 ){
        show(urare,urare_name);
    }else if( result >= 8 ){
        show(srare,srare_name);
    }else if( result >= 5 ){
        show(rare,rare_name);
    }else{
        show(normal,normal_name);
    }
}

var OUTPUT_ELEMENT_ID = 'result';
var CARD_NAME_ELEMENT_ID = 'card-title';

function show(img_path,card_name){
    var output = $(OUTPUT_ELEMENT_ID);
    var name = $(CARD_NAME_ELEMENT_ID);
    var card = document.createElement('img');
    var outer = document.createElement('div');
        card.src = img_path;
        card.addEventListener('load',function(){
            name.innerText = card_name;
            output.style['background-image'] = 'url('+img_path+')';
            var wrap = $('wrapper');
            var back = $('backface');
            var fore = $('foreface');
            back.style.display = 'block';
            fore.style.display = 'none';
            
            wrap.className = 'anime-cardout wrapper';
            wrap.style.display = 'block';
            wrap.addEventListener('webkitAnimationEnd',function(){
                wrap.removeEventListener('webkitAnimationEnd', arguments.callee);
                
                wrap.className = 'wrapper anime-flip1';
                wrap.addEventListener('webkitAnimationEnd',function(){
                    wrap.removeEventListener('webkitAnimationEnd', arguments.callee);
                    
                    back.style.display = 'none';
                    
                    wrap.className = 'wrapper anime-flip2';
                    fore.style.display = 'block';
                    wrap.addEventListener('webkitAnimationEnd',function(){
                        wrap.removeEventListener('webkitAnimationEnd', arguments.callee);
                        wrap.className = 'wrapper';
                        wrap.removeEventListener('webkitAnimationEnd', arguments.callee);
                    });
                });
               
            });
        });
    
}

function random(num){
    return Math.floor( Math.random() * num + 1);
}
function $(id){
    return document.getElementById(id);
}