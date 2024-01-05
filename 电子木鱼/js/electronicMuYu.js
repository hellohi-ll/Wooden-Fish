let box, text;
let count = 0;

let isAutoPlaying = false;
let intervalID;

document.querySelector('.auto-play').addEventListener('click', () => autoPlay());

document.getElementById('button').addEventListener('click', () => beingClicked());

function beingClicked() {
    let audio = document.getElementById('MuYu');
    audio.volume = document.getElementById('volume').value/100;
    audio.currentTime = 0;

    audio.play();

    count ++;
    document.getElementById('count').textContent = count;

    placeTextRandomly();
}

function placeTextRandomly() {
    box = document.querySelector('#box');  
    text = document.createElement('text'); 

    preinput = document.querySelector('#input-text')
    input = preinput.value;
    input = input !== '' ? input : "功德+1";
    
    if (input === '2002022720050308') {
        let hiddenText = ['LLT ♥ GYM', '我们要永远在一起', '这是我们的第一个project', '你会看到它嘛', '今天过得开心嘛', '可惜我不在你旁边', '喜欢你', '真的好喜欢', '要开心哦', '想你了']
        
        input = hiddenText[Math.floor(Math.random() * (hiddenText.length + 1))];
    }
    
    text.textContent = input;
    
    text.className = "text"
    box.appendChild(text);

    let len = calculateLen(text);

    var leftPercentage = 100 * (box.offsetWidth - len)/(box.offsetWidth * 2)
    text.style.left = leftPercentage + '%';

    setTimeout(removeText,1000);
}

function removeText(){
    if(box.children != null){
        box.removeChild(box.children[0]);
    }
}

function calculateLen(input){
    var len = input.offsetWidth;

    console.log(len);
    
    return len;
}

function autoPlay() {
    const buttonElement = document.querySelector('.auto-play');

    if (!isAutoPlaying) {
        intervalID = setInterval(() => beingClicked(), 1000); 
        isAutoPlaying = true;

        buttonElement.classList.add('is-auto-playing');
        buttonElement.innerHTML = '暂停播放';
    } else {
        clearInterval(intervalID);
        isAutoPlaying = false;

        buttonElement.classList.remove('is-auto-playing');
        buttonElement.innerHTML = '自动播放';
    }
} 
